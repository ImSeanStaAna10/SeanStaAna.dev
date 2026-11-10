import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { MainPortfolio } from './MainPortfolio';
import { ProjectDetail } from './ProjectDetail';
import { ScrollExperience } from './components/layout/ScrollExperience';
import { projectsData } from './data/projects';

function RouteEffects() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const samePage = previousPath.current === pathname;
    previousPath.current = pathname;
    const project = projectsData.find(item => pathname === '/projects/' + item.slug);
    document.title = project ? project.title + ' | Sean Sta Ana' : 'Sean Sta Ana | Aspiring Software Engineer';
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        let id = hash.slice(1);
        try { id = decodeURIComponent(id); } catch { /* Leave malformed hash text inert. */ }
        const target = document.getElementById(id);
        if (target) {
          if (!target.hasAttribute('tabindex')) target.tabIndex = -1;
          const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          target.scrollIntoView({ behavior: samePage && !reduced ? 'smooth' : 'instant' as ScrollBehavior });
          target.focus({ preventScroll: true });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        document.getElementById('main-content')?.focus({ preventScroll: true });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RouteEffects />
        <ScrollExperience />
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<MainPortfolio />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;