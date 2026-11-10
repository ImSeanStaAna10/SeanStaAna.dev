import React, { useEffect, useState } from 'react';
import { ArrowUpRight, FolderGit2, GitFork, Star } from 'lucide-react';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';

interface Repo { id: number; name: string; description: string | null; html_url: string; stargazers_count: number; language: string | null; forks_count: number; }
const CACHE_DURATION = 24 * 60 * 60 * 1000;
const fallbackRepos: Repo[] = [
  { id: 1, name: 'Automated Attendance Management System', description: 'Face recognition, liveness detection, and role-based attendance management.', html_url: projectsData[0].githubUrl, language: 'Java', stargazers_count: 0, forks_count: 0 },
  { id: 2, name: 'IssueTracker', description: 'An ASP.NET Core Web API learning project exploring Docker and CI/CD automation.', html_url: profileData.github + '?tab=repositories&q=IssueTracker', language: 'C#', stargazers_count: 0, forks_count: 0 },
  { id: 3, name: 'NegoCity', description: 'A business marketing and community platform exploring ASP.NET Core and Clean Architecture.', html_url: profileData.github + '?tab=repositories&q=NegoCity', language: 'C#', stargazers_count: 0, forks_count: 0 },
  { id: 4, name: 'Portfolio V1', description: 'This little corner of the internet, built with React, TypeScript, and Tailwind CSS.', html_url: 'https://github.com/ImSeanStaAna10/SeanStaAna.dev', language: 'TypeScript', stargazers_count: 0, forks_count: 0 },
];
const validRepos = (value: unknown): value is Repo[] => Array.isArray(value) && value.every(repo => repo && typeof repo.name === 'string' && typeof repo.html_url === 'string' && repo.html_url.startsWith('https://github.com/'));

export const GithubDashboard: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const fetchRepos = async () => {
      const key = 'github_repos_' + profileData.github;
      try {
        try {
          const cached = sessionStorage.getItem(key);
          const time = Number(sessionStorage.getItem(key + '_time'));
          if (cached && time && Date.now() >= time && Date.now() - time < CACHE_DURATION) {
            const data: unknown = JSON.parse(cached);
            if (validRepos(data)) { setRepos(data); return; }
          }
        } catch { /* Fetch normally when storage is unavailable. */ }
        timeout = setTimeout(() => controller.abort(), 10000);
        const response = await fetch('https://api.github.com/users/' + profileData.githubUsername + '/repos?per_page=4&sort=updated', { signal: controller.signal });
        if (!response.ok) throw new Error('GitHub unavailable');
        const data: unknown = await response.json();
        if (!validRepos(data)) throw new Error('Invalid repositories');
        if (!active) return;
        setRepos(data);
        try { sessionStorage.setItem(key, JSON.stringify(data)); sessionStorage.setItem(key + '_time', String(Date.now())); } catch { /* The fetched data remains available without a cache. */ }
      } catch {
        if (active) { setFallback(true); setRepos(fallbackRepos); }
      } finally { clearTimeout(timeout); if (active) setLoading(false); }
    };
    void fetchRepos();
    return () => { active = false; controller.abort(); clearTimeout(timeout); };
  }, []);

  return <section id="github" className="section site-container github-section" aria-labelledby="github-heading"><div className="section-heading compact-heading"><div><p className="eyebrow"><span>05</span> IN THE OPEN</p><h2 id="github-heading">Always building.<br /><span>Always iterating.</span></h2></div><a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-link">Visit my GitHub <ArrowUpRight size={20} /></a></div>{fallback && <p className="repo-feedback" role="status">GitHub is unavailable right now. Here are a few selected repositories to explore.</p>}{loading ? <div role="status" className="repo-loading"><span className="status-dot" />Fetching the latest from GitHub...</div> : repos.length === 0 ? <p className="muted">No public repositories yet. Visit my GitHub for updates.</p> : <div className="repo-grid">{repos.map(repo => <a key={repo.id} href={repo.html_url || profileData.github} target="_blank" rel="noopener noreferrer" className="repo-card"><div className="repo-top"><span className="repo-icon"><FolderGit2 size={24} aria-hidden="true" /></span><ArrowUpRight size={20} /></div><h3>{repo.name}</h3><p className="muted">{repo.description || 'Explore the source, implementation, and latest updates on GitHub.'}</p><div className="repo-bottom"><span><i aria-hidden="true" className={'language-dot language-' + (repo.language || 'code').toLowerCase().replace(/#/g, 'sharp')} />{repo.language || 'Code'}</span>{!fallback && <span className="repo-metrics"><span><Star size={18} />{repo.stargazers_count}</span><span><GitFork size={18} />{repo.forks_count}</span></span>}</div></a>)}</div>}</section>;
};