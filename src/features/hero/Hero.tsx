import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { profileData } from '../../data/profile';
import { availabilityData } from '../../data/availability';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50/50 to-transparent dark:from-emerald-950/20 dark:to-transparent">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {availabilityData.status} — {availabilityData.message}
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              Hi, I'm <span className="text-emerald-600 dark:text-emerald-400">{profileData.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
              {profileData.title}
            </p>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
            {profileData.tagline} {profileData.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#cv"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              View CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-600/30 hover:border-emerald-600 text-emerald-700 dark:text-emerald-400 font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-600 dark:text-slate-400">
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${profileData.email}`} aria-label="Email Contact" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Photo Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
