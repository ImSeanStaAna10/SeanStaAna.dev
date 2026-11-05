import React, { useEffect, useState } from 'react';
import { Github, Star, GitFork, BookOpen, AlertCircle } from 'lucide-react';
import { profileData } from '../../data/profile';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
}

export const GithubDashboard: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const cached = sessionStorage.getItem('github_repos_cache');
        const cachedTime = sessionStorage.getItem('github_cache_time');
        const now = new Date().getTime();

        if (cached && cachedTime && now - Number(cachedTime) < 86400000) {
          setRepos(JSON.parse(cached));
          setLoading(false);
          return;
        }

        const res = await fetch('https://api.github.com/users/octocat/repos?per_page=4&sort=updated');
        if (!res.ok) throw new Error('Failed to fetch GitHub data');
        const data = await res.json();

        setRepos(data);
        sessionStorage.setItem('github_repos_cache', JSON.stringify(data));
        sessionStorage.setItem('github_cache_time', String(now));
      } catch (err) {
        setError(true);
        // Fallback mock repos if API rate limited or offline
        setRepos([
          { id: 1, name: "careervault-platform", description: "Resume and career application management platform built with React & Node.js.", html_url: "https://github.com", stargazers_count: 12, language: "TypeScript", forks_count: 3 },
          { id: 2, name: "issue-tracker-pro", description: "Agile bug tracker and sprint task board for engineering teams.", html_url: "https://github.com", stargazers_count: 8, language: "TypeScript", forks_count: 2 },
          { id: 3, name: "dev-pulse-analytics", description: "Developer activity dashboard integrating GitHub metrics and heatmaps.", html_url: "https://github.com", stargazers_count: 15, language: "JavaScript", forks_count: 4 },
          { id: 4, name: "portfolio-v2", description: "Modern responsive personal portfolio website with light and dark themes.", html_url: "https://github.com", stargazers_count: 25, language: "TypeScript", forks_count: 6 }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl my-12">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-white">
          GitHub Activity Dashboard
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Public repositories and development activity sourced from GitHub.
        </p>
      </div>

      {error && (
        <div className="max-w-2xl mx-auto mb-8 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>GitHub API rate limit reached or offline. Displaying curated featured repositories.</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  {repo.language || 'Code'}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {repo.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                {repo.description || 'No description provided.'}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-6 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/60 mt-4">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-500" />
                {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-4 h-4" />
                {repo.forks_count}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
