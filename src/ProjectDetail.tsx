import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Github,
  LockKeyhole,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/navigation/Navbar";
import { projectsData } from "./data/projects";

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (value: string, field: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);

      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        <Navbar />

        <div className="text-center py-32 space-y-4 px-4">
          <h1 className="text-3xl font-bold">Project Not Found</h1>

          <p className="text-slate-600 dark:text-slate-400">
            The project you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="inline-block px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-medium"
          >
            Return Home
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  const demoUrl = project.liveDemo?.url ?? project.liveUrl;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-12">
        {/* Back Navigation */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              {project.category}
            </span>

            {project.projectStage && (
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold">
                {project.projectStage}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight mt-2">
            {project.title}
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mt-4">
            {project.shortDescription}
          </p>
        </div>

        {/* Project Preview */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl max-h-[500px]">
          <img
            src={project.previewImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-medium hover:bg-slate-700 dark:hover:bg-slate-700 transition-colors"
          >
            <Github className="w-5 h-5" />
            View Repository
          </a>

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>

        {/* Live Demo Credentials */}
        {project.liveDemo && project.liveDemo.accounts.length > 0 && (
          <section className="rounded-3xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <LockKeyhole className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />

                  <h2 className="text-2xl font-bold">Live Demo Access</h2>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use the following demo accounts to explore the system's
                  different roles and functionalities.
                </p>
              </div>

              <a
                href={project.liveDemo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors shrink-0"
              >
                Open Application
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.liveDemo.accounts.map((account) => {
                const emailField = `${account.role}-email`;
                const passwordField = `${account.role}-password`;

                return (
                  <div
                    key={account.role}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">{account.role}</h3>

                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                        Demo Account
                      </span>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Email Address
                      </label>

                      <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-2.5">
                        <span className="text-sm break-all">
                          {account.email}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleCopy(account.email, emailField)}
                          aria-label="Copy email address"
                          title="Copy email"
                          className="shrink-0 p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                          {copiedField === emailField ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-slate-500" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Password
                      </label>

                      <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-2.5">
                        <span className="text-sm break-all">
                          {account.password}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            handleCopy(account.password, passwordField)
                          }
                          aria-label="Copy password"
                          title="Copy password"
                          className="shrink-0 p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                          {copiedField === passwordField ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-slate-500" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              These credentials are provided for demonstration purposes only.
              Please use them to explore the application's available features.
            </p>
          </section>
        )}

        {/* Technologies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Technologies Used</h2>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Overview</h2>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.overview}
          </p>
        </section>

        {/* Problem */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Problem</h2>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.problem}
          </p>
        </section>

        {/* Goals */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Project Goals</h2>

          <ul className="space-y-3">
            {project.goals.map((goal) => (
              <li key={goal} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />

                <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {goal}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Key Features</h2>

          <ul className="space-y-3">
            {project.keyFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />

                <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Architecture */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Architecture</h2>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.architecture}
          </p>
        </section>

        {/* Challenges */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Challenges</h2>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.challenges}
          </p>
        </section>

        {/* Solutions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Solutions</h2>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.solutions}
          </p>
        </section>

        {/* Future Improvements */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Future Improvements</h2>

          <ul className="space-y-3">
            {project.futureImprovements.map((improvement) => (
              <li key={improvement} className="flex items-start gap-3">
                <ArrowLeft className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 rotate-180" />

                <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {improvement}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};
