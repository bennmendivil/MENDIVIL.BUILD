import styles from './Logo.module.css';

const tagline = 'INGENIERÍA QUE CONSTRUYE EL FUTURO';

export default function Logo({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  return (
    <span className={`${styles.logo} ${size === 'lg' ? styles.large : ''}`} role="img" aria-label={`MENDIVIL.BUILD — ${tagline}`}>
      <span className={styles.wordmark} aria-hidden="true">
        <span>MENDIVIL</span><span className={styles.accent}>.BUILD</span>
      </span>
      <span className={styles.tagline} aria-hidden="true">
        {Array.from(tagline, (character, index) => <span key={index}>{character === ' ' ? '\u00a0' : character}</span>)}
      </span>
    </span>
  );
}
