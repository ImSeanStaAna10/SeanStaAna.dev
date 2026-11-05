import React from 'react';
import { Code2, Target, Heart, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      title: "Technical Interests",
      description: "Full-stack web development, TypeScript architecture, and performant user interfaces.",
      icon: Code2
    },
    {
      title: "Career Goals",
      description: "To grow into an impactful software engineer building reliable and scalable applications.",
      icon: Target
    },
    {
      title: "Core Values",
      description: "Continuous learning, clean code practices, accessibility, and user-centric problem solving.",
      icon: Heart
    },
    {
      title: "Personal Motto",
      description: "Learning, building, and continuously improving every single day.",
      icon: Compass
    }
  ];

  const milestones = [
    { title: "Academic Foundation", date: "2023", description: "Started B.S. in Computer Science focusing on software fundamentals." },
    { title: "Programming Journey", date: "2023", description: "Wrote first lines of code and built foundational programming logic." },
    { title: "First Full-Stack App", date: "2024", description: "Designed and deployed complete React and Node.js applications." },
    { title: "Internship Experience", date: "2025", description: "Contributed to professional software engineering workflows and agile teams." },
    { title: "Continuous Growth", date: "Present", description: "Building advanced portfolio projects and expanding cloud & DevOps skills." }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-white">
          About Me
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          My background, motivations, and journey in software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-2xl font-heading font-semibold text-slate-900 dark:text-white">
            Driven by curiosity and a passion for building great software.
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            I am an aspiring software engineer dedicated to crafting clean, efficient, and accessible web applications. My journey began with a deep curiosity about how software shapes our daily lives, which evolved into rigorous academic study and hands-on project development.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether collaborating on team projects or architecting personal applications, I prioritize maintainable code, robust testing, and exceptional user experiences.
          </p>
        </div>

        {/* 2x2 Highlights Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-semibold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Personal Journey Timeline */}
      <div className="space-y-8">
        <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white text-center">
          My Personal Journey
        </h3>
        <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-32 space-y-8 py-4">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-950"></span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {m.date}
                </span>
                <h4 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
                  {m.title}
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
