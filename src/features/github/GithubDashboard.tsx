import { AlertCircle, BookOpen, GitFork, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { profileData } from "../../data/profile";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  forks_count: number;
}

const CACHE_DURATION = 24 * 60 * 60 * 1000;

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "Automated Attendance Management System",
    description:
      "Full-stack attendance management platform featuring optimized face recognition, face embeddings, liveness detection, and anti-spoofing validation.",
    html_url: "",
    stargazers_count: 0,
    language: "Java",
    forks_count: 0,
  },
  {
    id: 2,
    name: "IssueTracker",
    description:
      "An ASP.NET Core Web API project developed through project-based learning, focusing on backend development, Docker containerization, and CI/CD automation.",
    html_url: "",
    stargazers_count: 0,
    language: "C#",
    forks_count: 0,
  },
  {
    id: 3,
    name: "NegoCity",
    description:
      "A Business Marketing and Community Platform built as an ASP.NET Core project-based learning experience, exploring backend development and Clean Architecture.",
    html_url: "",
    stargazers_count: 0,
    language: "C#",
    forks_count: 0,
  },
  {
    id: 4,
    name: "Portfolio V1",
    description:
      "Personal developer portfolio built with React, TypeScript, and Tailwind CSS, using AI-assisted development tools such as Cline, OmniRoute, and Gemini models.",
    html_url: "",
    stargazers_count: 0,
    language: "TypeScript",
    forks_count: 0,
  },
];

export const GithubDashboard: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchGithubData = async () => {
      const cacheKey = `github_repos_${profileData.github}`;
      const cacheTimeKey = `${cacheKey}_time`;

      try {
        const cached = sessionStorage.getItem(cacheKey);
        const cachedTime = sessionStorage.getItem(cacheTimeKey);
        const now = Date.now();

        // Use cached repositories if still valid.
        if (cached && cachedTime) {
          const parsedCache: unknown = JSON.parse(cached);

          if (
            Array.isArray(parsedCache) &&
            now - Number(cachedTime) < CACHE_DURATION &&
            now >= Number(cachedTime)
          ) {
            setRepos(parsedCache as Repo[]);
            return;
          }
        }

        // Fetch the latest public repositories from GitHub.
        const res = await fetch(
          `https://api.github.com/users/${profileData.githubUsername}/repos?per_page=4&sort=updated`,
        );

        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }

        const data: Repo[] = await res.json();

        // Save fetched repositories.
        setRepos(data);
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
        sessionStorage.setItem(cacheTimeKey, String(now));
      } catch (err) {
        console.error("Failed to fetch GitHub repositories:", err);

        setError(true);
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section
      id="github"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl my-12"
    >
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
          <span>
            Unable to fetch GitHub repositories. Displaying fallback
            repositories instead.
          </span>
        </div>
      )}

      {loading ? (
        <p className="text-center text-slate-500 dark:text-slate-400">
          Loading GitHub repositories...
        </p>
      ) : repos.length === 0 ? (
        <p className="text-center text-slate-500 dark:text-slate-400">
          No public repositories found.
        </p>
      ) : (
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
                    {repo.language || "Code"}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors break-words">
                  {repo.name}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                  {repo.description || "No description provided."}
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
      )}
    </section>
  );
};
