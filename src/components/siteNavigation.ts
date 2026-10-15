import type { MouseEvent } from 'react';

export function getSiteNavigation(pathname: string) {
  const webAEC = pathname === '/web-aec';
  return {
    links: [
      { key: 'home', href: '/#hero' },
      { key: 'services', href: webAEC ? '#servicios-web-aec' : '/#services' },
      { key: 'projects', href: webAEC ? '#ejemplos' : '/#projects' },
      { key: 'leanAi', href: '/#lean' },
      { key: 'contact', href: webAEC ? '#contacto-web-aec' : '/#contact' },
    ] as const,
    cta: webAEC ? '#contacto-web-aec' : 'https://calendly.com/benjamh2/new-meeting',
    externalCTA: !webAEC,
  };
}

export function respectReducedMotion(event: MouseEvent<HTMLAnchorElement>) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const url = new URL(event.currentTarget.href);
  if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const target = document.getElementById(url.hash.slice(1));
  if (!target) return;
  event.preventDefault();
  window.history.pushState(null, '', url.hash);
  target.scrollIntoView({ behavior: 'instant', block: 'start' });
}
