import React from 'react';
import SongSearch from '@site/src/components/SongSearch';

export default function SearchNavbarItem(): React.ReactElement {
  return (
    <div className="navbar__item navbar__search">
      <SongSearch navbarItem={true} />
    </div>
  );
}
