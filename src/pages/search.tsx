import React from 'react';
import Layout from '@theme/Layout';
import SongSearch from '../components/SongSearch';
import styles from './search.module.css';

export default function SearchPage(): React.ReactElement {
  return (
    <Layout
      title="Búsqueda de Canciones"
      description="Busca canciones por BPM o por nombre"
    >
      <div className={styles.searchContainer}>
        <div className={styles.searchHeader}>
          <h1>Búsqueda de Canciones</h1>
          <p>Busca por nombre de canción o por BPM</p>
        </div>
        <div className={styles.searchWrapper}>
          <SongSearch />
        </div>
      </div>
    </Layout>
  );
}
