import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { MainPortfolio } from './MainPortfolio';
import { ProjectDetail } from './ProjectDetail';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
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
