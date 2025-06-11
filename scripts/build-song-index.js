/**
 * Script para generar un índice de búsqueda de canciones basado en los archivos markdown
 * Este script analiza todos los archivos .md en /docs para construir un índice de canciones
 * con su BPM y ruta, guardándolo en /static/song-index.json
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Ruta raíz del proyecto
const rootPath = path.join(__dirname, '..');
const docsPath = path.join(rootPath, 'docs');
const outputPath = path.join(rootPath, 'static', 'song-index.json');

// Asegura que existe el directorio static
if (!fs.existsSync(path.join(rootPath, 'static'))) {
  fs.mkdirSync(path.join(rootPath, 'static'));
}

// Función para extraer canciones de tablas en archivos markdown
function extractSongsFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extraer nombre del documento (para mostrar de dónde viene)
    const filePathParts = filePath.replace(docsPath, '').split(path.sep);
    const genre = filePathParts[1]; // La primera carpeta después de /docs
    
    // Obtener el título del documento
    const titleMatch = content.match(/# (.+?)(\n|$)/);
    const docTitle = titleMatch ? titleMatch[1].trim() : path.basename(filePath, '.md');
    
    // Construir la ruta relativa para los enlaces
    // Eliminamos .md y ajustamos para que sea relativo a /docs
    const relativePath = filePath
      .replace(docsPath, '/docs')
      .replace(/\.md$/, '');
    
    // Buscar tablas con formato | Columna1 | Título | BPM |
    const songs = [];
    
    // Dos patrones principales de tabla:
    // 1. Tablas con el título en la segunda columna y BPM en la tercera
    // 2. Tablas con el título en la primera columna y BPM en la segunda
    
    // Patrones para encontrar filas de tabla con BPM
    const tableRowPatterns = [
      // Patrón 1: | Algo | Título | BPM |
      /\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(?:\*\*)?(\d+)(?:\*\*)?\s*\|/g,
      // Patrón 2: | Título | BPM |
      /\|\s*(.+?)\s*\|\s*(?:\*\*)?(\d+)(?:\*\*)?\s*\|/g
    ];
    
    // Buscar el primer patrón (tres columnas)
    const tableMatches1 = [...content.matchAll(tableRowPatterns[0])];
    if (tableMatches1.length > 0) {
      tableMatches1.forEach(match => {
        // Si la primera columna es "Lado" o similar, es un encabezado
        if (!['lado', 'side', 'face'].includes(match[1].toLowerCase())) {
          songs.push({
            title: match[2].trim(),
            bpm: parseInt(match[3]),
            path: relativePath,
            source: `${genre} - ${docTitle}`
          });
        }
      });
    }
    
    // Si no encontramos nada con el primer patrón, probamos con el segundo (dos columnas)
    if (songs.length === 0) {
      const tableMatches2 = [...content.matchAll(tableRowPatterns[1])];
      tableMatches2.forEach(match => {
        // Ignorar encabezados de tabla
        if (!['título', 'title', 'canción', 'song'].includes(match[1].toLowerCase())) {
          songs.push({
            title: match[1].trim(),
            bpm: parseInt(match[2]),
            path: relativePath,
            source: `${genre} - ${docTitle}`
          });
        }
      });
    }
    
    return songs;
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
    return [];
  }
}

// Encontrar todos los archivos markdown en /docs
const markdownFiles = glob.sync('**/*.md', { cwd: docsPath })
  .map(file => path.join(docsPath, file))
  .filter(file => !file.includes('node_modules')); // Excluir node_modules si existieran

console.log(`Procesando ${markdownFiles.length} archivos markdown...`);

// Extraer todas las canciones de todos los archivos
const allSongs = [];
markdownFiles.forEach(file => {
  const songs = extractSongsFromFile(file);
  if (songs.length > 0) {
    console.log(`  Encontradas ${songs.length} canciones en ${path.relative(rootPath, file)}`);
    allSongs.push(...songs);
  }
});

// Ordenar por BPM (para facilitar búsquedas por BPM)
allSongs.sort((a, b) => a.bpm - b.bpm);

console.log(`Total: ${allSongs.length} canciones indexadas`);

// Guardar el índice en formato JSON
fs.writeFileSync(outputPath, JSON.stringify(allSongs, null, 2));
console.log(`Índice guardado en ${path.relative(rootPath, outputPath)}`);
