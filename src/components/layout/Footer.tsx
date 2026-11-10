import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => (
  <footer className="site-footer"><div className="site-container footer-inner"><a href="/" className="brand">seansaints.dev<span className="brand-dot"></span></a><p>Built with curiosity. Always a work in progress.</p><div><span>&copy; {new Date().getFullYear()} Sean Sta Ana</span><a href="#main-content" aria-label="Back to top" onClick={event => { event.preventDefault(); const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }); document.getElementById('main-content')?.focus({ preventScroll: true }); }} className="icon-button"><ArrowUp size={20} /></a></div></div><span className="sr-only">{profileData.title}</span></footer>
);