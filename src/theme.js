// Star Wars per-page theme system following the movie/series chronology.
// The UI reflects each era through color + ambient particles — no place names shown.

export const THEMES = {
  greattree: {
    key: 'greattree',
    tagline: 'Serene and steady — welcome.',
    accent: '#f0c75e',      // gold
    accent2: '#fff3d6',     // soft white-gold
    glow: 'rgba(240, 199, 94, 0.5)',
    tint: 'rgba(240, 199, 94, 0.07)',
    particle: { type: 'leaves', color: '#f0c75e', color2: '#fff3d6', count: 320, speed: 0.5, size: 0.14 },
  },
  naboo: {
    key: 'naboo',
    tagline: 'A little about where I come from.',
    accent: '#6ee7a0',      // serene green
    accent2: '#bbf7d0',
    glow: 'rgba(110, 231, 160, 0.45)',
    tint: 'rgba(110, 231, 160, 0.05)',
    particle: { type: 'motes', color: '#6ee7a0', color2: '#d1fae5', count: 260, speed: 0.35, size: 0.1 },
  },
  kamino: {
    key: 'kamino',
    tagline: 'The currents I follow.',
    accent: '#7dd3fc',      // clean blue-white
    accent2: '#e0f2fe',
    glow: 'rgba(125, 211, 252, 0.45)',
    tint: 'rgba(125, 211, 252, 0.05)',
    particle: { type: 'rain', color: '#7dd3fc', color2: '#e0f2fe', count: 380, speed: 1.6, size: 0.08 },
  },
  geonosis: {
    key: 'geonosis',
    tagline: 'Forged through practice.',
    accent: '#fb923c',      // arena orange
    accent2: '#fdba74',
    glow: 'rgba(251, 146, 60, 0.5)',
    tint: 'rgba(251, 146, 60, 0.05)',
    particle: { type: 'dust', color: '#fb923c', color2: '#fdba74', count: 300, speed: 0.5, size: 0.1 },
  },
  clonewars: {
    key: 'clonewars',
    tagline: 'The campaigns so far.',
    accent: '#60a5fa',      // steel blue
    accent2: '#93c5fd',
    glow: 'rgba(96, 165, 250, 0.5)',
    tint: 'rgba(96, 165, 250, 0.05)',
    particle: { type: 'drift', color: '#60a5fa', color2: '#93c5fd', count: 300, speed: 0.6, size: 0.1 },
  },
  utapau: {
    key: 'utapau',
    tagline: 'Things you can actually use.',
    accent: '#d29a5b',      // bronze
    accent2: '#e8c48a',
    glow: 'rgba(210, 154, 91, 0.5)',
    tint: 'rgba(210, 154, 91, 0.05)',
    particle: { type: 'wind', color: '#d29a5b', color2: '#e8c48a', count: 300, speed: 0.8, size: 0.1 },
  },
  mustafar: {
    key: 'mustafar',
    tagline: 'Built for the fun of it.',
    accent: '#fb7185',      // lava rose
    accent2: '#fb923c',
    glow: 'rgba(251, 113, 133, 0.5)',
    tint: 'rgba(251, 113, 133, 0.06)',
    particle: { type: 'embers', color: '#fb7185', color2: '#fb923c', count: 340, speed: 0.9, size: 0.12 },
  },
  tatooine: {
    key: 'tatooine',
    tagline: "Let's build something.",
    accent: '#f5c15c',      // twin-sun amber
    accent2: '#ff8a4c',
    glow: 'rgba(245, 193, 92, 0.5)',
    tint: 'rgba(245, 193, 92, 0.06)',
    particle: { type: 'sand', color: '#f5c15c', color2: '#ff8a4c', count: 320, speed: 0.55, size: 0.1 },
  },
};

export const ROUTE_THEME = {
  '/': 'greattree',
  '/about': 'naboo',
  '/interests': 'kamino',
  '/skills': 'geonosis',
  '/experience': 'clonewars',
  '/products': 'utapau',
  '/projects': 'mustafar',
  '/contact': 'tatooine',
};

export const getTheme = (pathname) => THEMES[ROUTE_THEME[pathname]] || THEMES.greattree;

// Convert a hex accent to an rgba string at a given alpha.
export const withAlpha = (hex, alpha) => {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const applyTheme = (theme) => {
  const root = document.documentElement;
  root.style.setProperty('--accent-primary', theme.accent);
  root.style.setProperty('--accent-secondary', theme.accent2);
  root.style.setProperty('--accent-glow', theme.glow);
  root.style.setProperty('--page-tint', theme.tint);
  root.setAttribute('data-theme', theme.key);
};
