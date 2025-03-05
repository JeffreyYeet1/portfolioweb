'use client';

import { useRouter } from 'next/navigation';
import styles from '../styles/gallery.module.css';

export default function Gallery() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button 
        onClick={() => router.back()} 
        className={styles.backButton}
      >
        ← Back
      </button>
      <div className={styles.content}>
        <h1 className={styles.title}>Gallery & More</h1>
        <div className={styles.wipMessage}>
          <p>🚧 Work in Progress 🚧</p>
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
} 