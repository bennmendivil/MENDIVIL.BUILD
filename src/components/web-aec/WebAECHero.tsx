import { Fragment, useEffect, useLayoutEffect, useRef } from 'react';
import type { CSSProperties, MouseEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './WebAECHero.module.css';

interface WebAECHeroProps {
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, id: string) => void;
}

function titleWords(text: string) {
  return text.split(' ').map((word, index) => (
    <Fragment key={`${index}-${word}`}>
      {index > 0 ? ' ' : null}
      <span className={styles.wordMask} data-title-word style={{ '--reveal-line': index } as CSSProperties}>
        <span className={styles.word}>{word}</span>
      </span>
    </Fragment>
  ));
}

export default function WebAECHero({ onNavigate }: WebAECHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    // Only timing changes: preserve natural wrapping and an always-visible base state.
    heroRef.current?.querySelectorAll<HTMLElement>('[data-title-group]').forEach((group) => {
      const words = [...group.querySelectorAll<HTMLElement>('[data-title-word]')];
      const tops = words.map((word) => word.offsetTop);
      const lines = [...new Set(tops)];
      words.forEach((word, index) => word.style.setProperty('--reveal-line', String(lines.indexOf(tops[index]))));
    });
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame: number | undefined;
    const properties = ['--photo-x', '--photo-y', '--photo-scale', '--title-x', '--title-y'];

    const reset = () => {
      if (frame !== undefined) cancelAnimationFrame(frame);
      frame = undefined;
      properties.forEach((property) => hero.style.removeProperty(property));
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
      const rect = hero.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
      const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
      if (frame !== undefined) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        hero.style.setProperty('--photo-x', `${(x * 3).toFixed(2)}px`);
        hero.style.setProperty('--photo-y', `${(y * 2).toFixed(2)}px`);
        hero.style.setProperty('--photo-scale', '1.02');
        hero.style.setProperty('--title-x', `${(-x).toFixed(2)}px`);
        hero.style.setProperty('--title-y', `${(-y * 0.75).toFixed(2)}px`);
        frame = undefined;
      });
    };
    const sync = () => {
      hero.removeEventListener('pointermove', move);
      reset();
      if (media.matches) hero.addEventListener('pointermove', move, { passive: true });
    };
    const hide = () => { if (document.hidden) reset(); };

    sync();
    media.addEventListener('change', sync);
    hero.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);
    document.addEventListener('visibilitychange', hide);
    return () => {
      reset();
      media.removeEventListener('change', sync);
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', reset);
      window.removeEventListener('blur', reset);
      document.removeEventListener('visibilitychange', hide);
    };
  }, []);

  const navigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const target = document.getElementById(id);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
      return;
    }
    onNavigate(event, id);
  };

  return (
    <section ref={heroRef} className={styles.hero} aria-labelledby="web-aec-hero-title">
      <div className={styles.photograph} aria-hidden="true">
        <picture>
          <source media="(max-width: 640px)" srcSet="/web-aec/hero/estructura-veracruz-mobile.webp" />
          <img
            src="/web-aec/hero/estructura-veracruz.webp"
            alt=""
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.light} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.frame} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.eyebrow}>WEB AEC — Tecnología digital para la construcción</div>
        <h1 id="web-aec-hero-title" className={styles.title}>
          <span className={styles.intro} data-title-group>{titleWords('TU EMPRESA CONSTRUYE')}</span>{' '}
          <span className={styles.headline} data-title-group>{titleWords('PROYECTOS IMPORTANTES.')}</span>{' '}
          <span className={styles.statement} data-title-group>{titleWords('TU SITIO WEB DEBERÍA DEMOSTRARLO.')}</span>
        </h1>
        <p className={styles.description}>
          Creamos sitios web para empresas AEC que necesitan convertir su experiencia, proyectos y capacidad técnica en una presencia digital que genere confianza y oportunidades.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#contacto-web-aec" onClick={(event) => navigate(event, 'contacto-web-aec')}>
            QUIERO MI SITIO WEB <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className={styles.secondary} href="#ejemplos" onClick={(event) => navigate(event, 'ejemplos')}>
            VER EJEMPLOS →
          </a>
        </div>
      </div>
    </section>
  );
}
