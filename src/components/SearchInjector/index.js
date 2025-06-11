import React from 'react';
import ReactDOM from 'react-dom';
import SongSearch from '../SongSearch';

// Esta función se ejecuta cuando el componente se monta
function injectSearchComponent() {
  const container = document.getElementById('song-search-container');
  if (container) {
    ReactDOM.render(
      <SongSearch navbarItem={true} />,
      container
    );
  }
}

// Este componente no renderiza nada visible, solo ejecuta el código de inyección
export default function SearchInjector() {
  React.useEffect(() => {
    // Dar tiempo para que el DOM se cargue completamente
    const timer = setTimeout(() => {
      injectSearchComponent();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
