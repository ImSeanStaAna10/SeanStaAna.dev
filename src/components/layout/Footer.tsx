import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-heading font-bold text-slate-900 dark:text-white text-lg">
            {profileData.name}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {profileData.title} • {profileData.tagline}
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
          <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${profileData.email}`} aria-label="Email" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

