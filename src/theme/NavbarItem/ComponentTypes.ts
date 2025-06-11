/**
 * Componentes personalizados para la barra de navegación
 */
import React from 'react';
import type {ComponentType} from 'react';
import type {Props} from '@theme/NavbarItem';
import SongSearch from '@site/src/components/SongSearch';

// Componente para la barra de navegación
const BpmSearch: ComponentType<Props> = ({mobile}: {mobile?: boolean}) => {
  return React.createElement('div', { className: 'navbar__search' },
    React.createElement(SongSearch, { navbarItem: true })
  );
};

export default BpmSearch;
