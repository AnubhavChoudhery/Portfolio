import React, { useMemo, useRef, useEffect } from 'react';

// Legendary per-page scenery: a cinematic image backdrop with mouse-driven
// parallax depth, a slow Ken Burns drift, a readability scrim, and a
// scene-matched particle overlay (leaves, embers, rain, sand...).

const SCENES = {
  greattree: { img: 'greattree', focal: '50% 42%', overlay: 'leaves' },
  naboo:     { img: 'naboo',     focal: '50% 50%', overlay: 'motes' },
  kamino:    { img: 'kamino',    focal: '50% 45%', overlay: 'rain' },
  geonosis:  { img: 'geonosis',  focal: '50% 55%', overlay: 'dust' },
  clonewars: { img: 'clonewars', focal: '50% 45%', overlay: 'sparks' },
  utapau:    { img: 'utapau',    focal: '50% 50%', overlay: 'wind' },
  mustafar:  { img: 'mustafar',  focal: '50% 55%', overlay: 'embers' },
  tatooine:  { img: 'tatooine',  focal: '50% 55%', overlay: 'sand' },
};

const COUNTS = { leaves: 26, motes: 24, rain: 70, dust: 24, sparks: 26, wind: 20, embers: 44, sand: 22 };

const rand = (a, b) => a + Math.random() * (b - a);

function ParticleOverlay({ type }) {
  const bits = useMemo(() => {
    const base = COUNTS[type] || 22;
    const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const n = mobile ? Math.ceil(base * 0.45) : base;
    return Array.from({ length: n }, () => ({
      l: rand(-5, 105),
      t: rand(-10, 100),
      s: rand(0.6, 1.6),
      delay: rand(-14, 0),
      dur: rand(6, 16),
      drift: rand(-40, 40),
      rot: rand(-180, 180),
    }));
  }, [type]);

  return (
    <div className={`scene-particles pt-${type}`} aria-hidden="true">
      {bits.map((b, i) => (
        <span
          key={i}
          className="pbit"
          style={{
            '--l': `${b.l}%`,
            '--t': `${b.t}%`,
            '--s': b.s,
            '--drift': `${b.drift}px`,
            '--rot': `${b.rot}deg`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

const ThemeScene = ({ themeKey }) => {
  const scene = SCENES[themeKey] || SCENES.greattree;
  const parallaxRef = useRef(null);
  const frame = useRef(0);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) return;

    const onMove = (e) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const px = (e.clientX / window.innerWidth - 0.5);
        const py = (e.clientY / window.innerHeight - 0.5);
        el.style.setProperty('--px', px.toFixed(3));
        el.style.setProperty('--py', py.toFixed(3));
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame.current);
    };
  }, [themeKey]);

  const url = `${process.env.PUBLIC_URL}/scenes/scene-${scene.img}.png`;

  return (
    <div className="theme-scene" data-scene={themeKey} aria-hidden="true">
      <div className="scene-parallax" ref={parallaxRef}>
        <div
          className="scene-img scene-kenburns"
          style={{ backgroundImage: `url("${url}")`, backgroundPosition: scene.focal }}
        />
      </div>
      <div className="scene-scrim" />
      <div className="scene-vignette" />
      <ParticleOverlay type={scene.overlay} />
    </div>
  );
};

export default ThemeScene;
