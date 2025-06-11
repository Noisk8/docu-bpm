/**
 * Componente personalizado para reemplazar el buscador de Docusaurus
 * con nuestro buscador de canciones
 */
import React from 'react';
import SongSearch from '@site/src/components/SongSearch';

export default function SearchBar() {
  return (
    <div className="navbar__search">
      <SongSearch navbarItem={true} />
    </div>
  );
}
