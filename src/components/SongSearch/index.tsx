import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

type SongItem = {
  title: string;
  bpm: number;
  path: string;
  source: string;
};

export default function SongSearch({ navbarItem = false }: {navbarItem?: boolean}): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState<SongItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<SongItem[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  
  // Load song index
  useEffect(() => {
    fetch('/song-index.json')
      .then(response => response.json())
      .then(data => {
        setSongs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading song index:', error);
        setLoading(false);
      });
  }, []);

  // Handle click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter songs based on query
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // Check if query is a number (BPM search)
    const numQuery = Number(query);
    let filteredResults: SongItem[];
    
    if (!isNaN(numQuery)) {
      // Search by BPM
      filteredResults = songs.filter(song => 
        song.bpm === numQuery || 
        song.bpm.toString().includes(query)
      );
    } else {
      // Search by song title
      const lowerQuery = query.toLowerCase();
      filteredResults = songs.filter(song => 
        song.title.toLowerCase().includes(lowerQuery)
      );
    }
    
    // Limit results to 20
    setResults(filteredResults.slice(0, 20));
  }, [query, songs]);

  function handleInputClick() {
    setIsOpen(true);
    inputRef.current?.focus();
  }

  function handleItemClick(path: string) {
    setIsOpen(false);
    setQuery('');
    history.push(path);
  }

  function toggleSearch() {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }

  return (
    <div className={`${styles.searchContainer} ${navbarItem ? styles.navItem : ''}`} ref={searchRef}>
      {navbarItem ? (
        <button 
          className={styles.searchButton}
          onClick={toggleSearch}
          aria-label="Buscar canciones"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            ></path>
          </svg>
        </button>
      ) : null}

      {(isOpen || !navbarItem) && (
        <div className={styles.searchWrapper}>
          <div className={styles.searchBox}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              ></path>
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nombre o BPM..."
              className={styles.searchInput}
              onClick={handleInputClick}
            />
            {query && (
              <button className={styles.clearButton} onClick={() => setQuery('')}>
                ×
              </button>
            )}
          </div>
          
          {isOpen || !navbarItem ? (
            <div className={styles.dropdownResults}>
              {loading ? (
                <div className={styles.message}>Cargando índice de canciones...</div>
              ) : query && results.length === 0 ? (
                <div className={styles.message}>No se encontraron canciones</div>
              ) : (
                <ul className={styles.resultsList}>
                  {results.map((song, i) => (
                    <li key={i} onClick={() => handleItemClick(song.path)}>
                      <div className={styles.songTitle}>{song.title}</div>
                      <div className={styles.songMeta}>
                        <span className={styles.bpm}>{song.bpm} BPM</span>
                        <span className={styles.source}>{song.source}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
