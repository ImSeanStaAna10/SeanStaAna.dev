import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './data/projects';
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/layout/Footer';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        <Navbar />
        <div className="text-center py-32 space-y-4">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400">The project you are looking for does not exist.</p>
          <Link to="/" className="inline-block px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-medium">
            Return Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-12">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight mt-2">{project.title}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mt-4">{project.shortDescription}</p>
        </div>
        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl max-h-[500px]">
          <img src={project.previewImage} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-medium">
            <Github className="w-5 h-5" /> View Repository
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium">
              <ExternalLink className="w-5 h-5" /> Live Demo
            </a>
          )}
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.overview}</p>
          <h2 className="text-2xl font-bold">Problem & Goals</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.problem}</p>
          <h2 className="text-2xl font-bold">Architecture</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.architecture}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

