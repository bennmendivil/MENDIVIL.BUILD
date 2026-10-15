import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './DemoCard.module.css';

export interface DemoCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
  href: string;
  cta: string;
  variant?: 'featured' | 'standard';
  external?: boolean;
  badge?: string;
  disclaimer?: string;
}

export default function DemoCard({ id, title, category, description, image, href, cta, variant = 'standard', external = false, badge, disclaimer }: DemoCardProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const featured = variant === 'featured';

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame: number | undefined;
    const reset = () => {
      if (frame !== undefined) cancelAnimationFrame(frame);
      frame = undefined;
      scene.style.removeProperty('--card-x');
      scene.style.removeProperty('--card-y');
      delete scene.dataset.pointerActive;
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      const rect = scene.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
      const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
      if (frame !== undefined) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        scene.style.setProperty('--card-x', `${(-y * 0.75).toFixed(2)}deg`);
        scene.style.setProperty('--card-y', `${(x * 0.85).toFixed(2)}deg`);
        scene.dataset.pointerActive = 'true';
        frame = undefined;
      });
    };
    const sync = () => {
      scene.removeEventListener('pointermove', move);
      reset();
      if (media.matches) scene.addEventListener('pointermove', move, { passive: true });
    };
    const hide = () => { if (document.hidden) reset(); };
    sync();
    media.addEventListener('change', sync);
    scene.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);
    document.addEventListener('visibilitychange', hide);
    return () => {
      reset();
      media.removeEventListener('change', sync);
      scene.removeEventListener('pointermove', move);
      scene.removeEventListener('pointerleave', reset);
      window.removeEventListener('blur', reset);
      document.removeEventListener('visibilitychange', hide);
    };
  }, []);

  return (
    <div ref={sceneRef} className={`${styles.scene} ${featured ? styles.featured : ''}`}>
      <article className={styles.card} aria-labelledby={`${id}-title`} data-demo-card={id}>
        <div className={styles.preview}>
          <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" className={styles.image} />
          <div className={styles.imageShade} aria-hidden="true" />
        </div>
        <div className={styles.content}>
          {badge && <span className={styles.badge}>{badge}</span>}
          {!featured && <p className={styles.category}>{category}</p>}
          <h3 id={`${id}-title`} className={styles.title}>{title}</h3>
          {featured && <p className={styles.category}>{category}</p>}
          <p className={styles.description}>{description}</p>
          {href ? (
            <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={styles.cta} aria-label={`${cta} — ${title}`}>
              <span>{cta}</span><ArrowRight size={17} aria-hidden="true" />
            </a>
          ) : (
            <button className={styles.cta} type="button" disabled>PRÓXIMAMENTE</button>
          )}
          {disclaimer && <p className={styles.disclaimer}>{disclaimer}</p>}
        </div>
      </article>
    </div>
  );
}
