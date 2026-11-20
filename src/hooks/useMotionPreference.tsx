import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface MotionContextValue {
  paused: boolean;
  reduced: boolean;
  toggleMotion: () => void;
}

const MotionContext = createContext<MotionContextValue>({ paused: false, reduced: false, toggleMotion: () => {} });

export function MotionProvider({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [manualPause, setManualPause] = useState(() => {
    try { return localStorage.getItem('portfolio_motion') === 'paused'; } catch { return false; }
  });
  const paused = reduced || manualPause;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('motion-paused', paused);
    window.dispatchEvent(new Event('portfolio-motion-change'));
    return () => document.documentElement.classList.remove('motion-paused');
  }, [paused]);

  const toggleMotion = () => {
    if (reduced) return;
    setManualPause(current => {
      const next = !current;
      try { localStorage.setItem('portfolio_motion', next ? 'paused' : 'playing'); } catch { /* Motion works without storage. */ }
      return next;
    });
  };

  return <MotionContext.Provider value={{ paused, reduced, toggleMotion }}>{children}</MotionContext.Provider>;
}

export const useMotionPreference = () => useContext(MotionContext);