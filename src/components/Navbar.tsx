import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';
import { getSiteNavigation, respectReducedMotion } from './siteNavigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const navigation = getSiteNavigation(window.location.pathname);
  const isEs = language === 'ES';
  const isHome = window.location.pathname === '/';

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame: number | undefined;
    const updateSurface = () => {
      frame = undefined;
      const scroll = Math.max(0, window.scrollY);
      setIsScrolled(scroll > 50);
      if (isHome) {
        const progress = reducedMotion.matches ? Number(scroll > 20) : Math.min(1, scroll / 100);
        navRef.current?.style.setProperty('--nav-surface', progress.toFixed(3));
      }
    };
    const onScroll = () => {
      if (frame === undefined) frame = requestAnimationFrame(updateSurface);
    };
    updateSurface();
    window.addEventListener('scroll', onScroll, { passive: true });
    reducedMotion.addEventListener('change', onScroll);
    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      reducedMotion.removeEventListener('change', onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setIsMobileMenuOpen(false);
      toggleRef.current?.focus();
    };
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) setIsMobileMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1200px)');
    const closeOnDesktop = () => {
      if (!desktop.matches) return;
      if (navRef.current?.contains(document.activeElement)) brandRef.current?.focus();
      setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [isMobileMenuOpen]);

  const navigate = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
    respectReducedMotion(event);
  };

  const languageButtons = () => (
    <div className={styles.languages} role="group" aria-label={isEs ? 'Idioma' : 'Language'}>
      {(['ES', 'EN'] as const).map((value) => (
        <button key={value} type="button" aria-label={value === 'ES' ? 'Español' : 'English'} aria-pressed={language === value}
          onClick={() => {
            setLanguage(value);
            if (isMobileMenuOpen) { setIsMobileMenuOpen(false); toggleRef.current?.focus(); }
          }}>{value}</button>
      ))}
    </div>
  );

  const cta = (mobile = false) => (
    <a href={navigation.cta} target={navigation.externalCTA ? '_blank' : undefined} rel={navigation.externalCTA ? 'noopener noreferrer' : undefined}
      onClick={navigate} className={`${styles.cta} ${mobile ? styles.menuCTA : styles.headerCTA}`}>{t.nav.cta}</a>
  );

  return (
    <nav ref={navRef} aria-label={isEs ? 'Navegación principal' : 'Main navigation'}
      className={`${styles.navbar} ${isScrolled || isMobileMenuOpen ? styles.solid : ''} ${isHome ? styles.home : ''} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsMobileMenuOpen(false);
      }}>
      <div className={styles.row}>
        <a ref={brandRef} href="/" className={styles.brand}><Logo /></a>
        <div className={styles.desktopLinks}>
          {navigation.links.map(({ key, href }) => <a key={key} href={href} onClick={navigate}>{t.nav[key]}</a>)}
        </div>
        <div className={styles.actions}>
          <div className={styles.desktopLanguages}>{languageButtons()}</div>
          {cta()}
          <button ref={toggleRef} type="button" className={styles.toggle} aria-controls="site-mobile-navigation"
            aria-expanded={isMobileMenuOpen} aria-label={isMobileMenuOpen ? (isEs ? 'Cerrar menú' : 'Close menu') : (isEs ? 'Abrir menú' : 'Open menu')}
            onClick={() => setIsMobileMenuOpen((open) => !open)}>
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div id="site-mobile-navigation" className={styles.mobileMenu} hidden={!isMobileMenuOpen}>
        {isMobileMenuOpen && (
          <div className={styles.menuInner}>
            {navigation.links.map(({ key, href }) => <a className={styles.menuLink} key={key} href={href} onClick={navigate}>{t.nav[key]}</a>)}
            <div className={styles.menuActions}>{languageButtons()}{cta(true)}</div>
          </div>
        )}
      </div>
    </nav>
  );
}
