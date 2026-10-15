import { useEffect, useRef } from 'react';

interface DeferredBackgroundVideoProps {
  poster: string;
  webm: string;
  mp4: string;
  className: string;
}

/** Decorative media: keep the lazy poster behind the video until a frame plays. */
export default function DeferredBackgroundVideo({
  poster, webm, mp4, className,
}: DeferredBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let loaded = false;
    let disposed = false;
    let playPending = false;
    let playVersion = 0;

    const canPlay = () => !disposed && visible && !document.hidden && !motion.matches;

    const syncPlayback = () => {
      if (!canPlay()) {
        video.pause();
        playPending = false;
        playVersion += 1;
        if (motion.matches && loaded) {
          // Also cancel an in-flight download when the preference changes live.
          video.style.opacity = '0';
          video.querySelectorAll('source').forEach(source => source.removeAttribute('src'));
          loaded = false;
          video.load();
        }
        return;
      }

      if (!loaded) {
        video.querySelectorAll('source').forEach(source => {
          if (source.dataset.src) source.src = source.dataset.src;
        });
        loaded = true;
        video.load();
      }

      if (video.paused && !playPending) {
        playPending = true;
        const version = ++playVersion;
        void video.play().then(() => {
          // Visibility or motion preferences can change while play() is pending.
          if (!canPlay()) video.pause();
        }).catch(() => {
          // Autoplay may be blocked: the poster remains available underneath.
        }).finally(() => {
          if (version === playVersion) playPending = false;
        });
      }
    };

    const revealFrame = () => {
      if (canPlay()) video.style.opacity = '1';
      else video.pause();
    };

    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(entries => {
      const entry = entries[entries.length - 1];
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.15;
      syncPlayback();
    }, { threshold: [0, 0.15] });

    observer?.observe(video);
    video.addEventListener('playing', revealFrame);
    document.addEventListener('visibilitychange', syncPlayback);
    motion.addEventListener('change', syncPlayback);

    return () => {
      disposed = true;
      observer?.disconnect();
      video.removeEventListener('playing', revealFrame);
      document.removeEventListener('visibilitychange', syncPlayback);
      motion.removeEventListener('change', syncPlayback);
      video.pause();
      if (loaded) {
        video.querySelectorAll('source').forEach(source => source.removeAttribute('src'));
        video.load();
      }
    };
  }, [webm, mp4]);

  return (
    <>
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 ${className}`}
      />
      <video
        ref={videoRef}
        aria-hidden="true"
        className={`absolute inset-0 ${className}`}
        style={{ opacity: 0 }}
        muted
        loop
        playsInline
        preload="none"
      >
        <source data-src={webm} type="video/webm" />
        <source data-src={mp4} type="video/mp4" />
      </video>
    </>
  );
}
