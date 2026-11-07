import { Code2, Compass, Heart, Target } from "lucide-react";
import React from "react";

export const About: React.FC = () => {
  const highlights = [
    {
      title: "Technical Interests",
      description:
        "Full-stack web development, TypeScript architecture, and performant user interfaces.",
      icon: Code2,
    },
    {
      title: "Career Goals",
      description:
        "To grow into an impactful software engineer building reliable and scalable applications.",
      icon: Target,
    },
    {
      title: "Core Values",
      description:
        "Continuous learning, clean code practices, accessibility, and user-centric problem solving.",
      icon: Heart,
    },
    {
      title: "Personal Motto",
      description:
        "Learning, building, and continuously improving every single day.",
      icon: Compass,
    },
  ];

  const milestones = [
    {
      title: "The Beginning – College Journey",
      date: "2022",
      description:
        "Started my college journey at Taguig City University. Initially intended to pursue Computer Science or Information Systems, but due to limited available slots, I enrolled in Tourism instead, despite it not being my preferred field.",
    },
    {
      title: "Pursuing My Passion for Technology",
      date: "2023",
      description:
        "After my first year, I shifted to Computer Science to pursue my genuine passion and curiosity for technology. Believing that technology is shaping the future, I committed myself to learning software development and building a career in the field.",
    },
    {
      title: "Self-Learning & Backend Foundations",
      date: "2023",
      description:
        "Dedicated time to self-study beyond academic lessons to strengthen programming fundamentals and prepare for upcoming thesis development. Explored backend development, programming logic, and database concepts.",
    },
    {
      title: "Thesis Development – Backend Developer",
      date: "2024",
      description:
        "Focused on backend development and database management as part of the thesis team. Worked primarily with Node.js and Express.js, contributing to the application's server-side functionality.",
    },
    {
      title: "Software Engineering & Team Leadership",
      date: "2025",
      description:
        "Led a team in developing a client-based booking management solution for a small business as part of the Software Engineering subject. Gained experience translating client requirements into practical software solutions while navigating real-world development challenges.",
    },
    {
      title: "Freelancing & Continuous Growth",
      date: "2026",
      description:
        "Started taking freelance projects and commissioned software development work, gaining practical experience through smaller client projects. Continued expanding technical skills, exploring AI-assisted and agentic development, and preparing for internship opportunities.",
    },
    {
      title: "Internship Journey",
      date: "2026",
      description:
        "Actively pursuing internship opportunities to gain professional software development experience, collaborate with experienced developers, and apply academic and self-taught knowledge in real-world engineering environments.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
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
            I am an aspiring software engineer dedicated to crafting clean,
            efficient, and accessible web applications. My journey began with a
            deep curiosity about how software shapes our daily lives, which
            evolved into rigorous academic study and hands-on project
            development.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether collaborating on team projects or architecting personal
            applications, I prioritize maintainable code, robust testing, and
            exceptional user experiences.
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
