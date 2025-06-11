import React from 'react';
import Layout from '@theme/Layout';

export default function BaltimoreTable() {
  return (
    <Layout>
      <div style={{ 
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: '#2b3137',
          marginBottom: '1.5rem'
        }}>Baltimore - Tarzan Boy</h1>
        
        <img 
          src="https://i.discogs.com/P_x39cO0VkUEXZAjNjAR52md1Pi6OmyVMoP9TN61nhE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NTc4/My0xMjc3MDI2MTQw/LmpwZWc.jpeg"
          alt="Baltimore - Tarzan Boy Album Cover"
          style={{ 
            width: '300px', 
            height: '300px',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            marginBottom: '2rem'
          }}
        />

        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginBottom: '2rem',
          maxWidth: '600px'
        }}>
          <h2 style={{ color: '#2b3137', marginBottom: '1rem' }}>Análisis de BPM</h2>
          <p style={{ lineHeight: '1.6' }}>
            Este álbum muestra una progresión interesante en términos de BPM, comenzando con 114 BPM en "Tarzan Boy" 
            y aumentando gradualmente hasta alcanzar 128 BPM en "The Wild Boys". Esta progresión de tempo 
            es característica del Italo Disco, donde los BPM más altos (125-128) eran ideales para las pistas de baile.
          </p>
        </div>

        <table style={{ 
          width: '100%', 
          maxWidth: '600px',
          borderCollapse: 'collapse',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#2b3137', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'center' }}>Lado</th>
              <th style={{ padding: '15px', textAlign: 'center' }}>Canción</th>
              <th style={{ padding: '15px', textAlign: 'center' }}>BPM</th>
            </tr>
          </thead>
          <tbody>
            {[
              { lado: 'A1', cancion: 'Tarzan Boy', bpm: 114 },
              { lado: 'A2', cancion: 'Fire', bpm: 120 },
              { lado: 'A3', cancion: 'Shake It Up', bpm: 122 },
              { lado: 'B1', cancion: 'Jungle Life GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG', bpm: 125 },
              { lado: 'B2', cancion: 'The Wild Boys', bpm: 128 }
            ].map((track, index) => (
              <tr key={track.lado} style={{ 
                backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                transition: 'background-color 0.3s'
              }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>{track.lado}</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>{track.cancion}</td>
                <td style={{ 
                  padding: '12px', 
                  textAlign: 'center',
                  color: track.bpm >= 125 ? '#2ecc71' : '#3498db',
                  fontWeight: 'bold'
                }}>{track.bpm}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ 
          marginTop: '1.5rem', 
          display: 'flex', 
          gap: '1rem',
          justifyContent: 'center'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem'
          }}>
            <span style={{ 
              width: '12px', 
              height: '12px', 
              backgroundColor: '#3498db', 
              borderRadius: '50%' 
            }}></span>
            <span>BPM Medio (114-124)</span>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem'
          }}>
            <span style={{ 
              width: '12px', 
              height: '12px', 
              backgroundColor: '#2ecc71', 
              borderRadius: '50%' 
            }}></span>
            <span>BPM Alto (125+)</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
