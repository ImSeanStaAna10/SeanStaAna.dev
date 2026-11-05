import React from 'react';
import { skillsData } from '../../data/skills';
import { CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl my-12">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-white">
          Skills & Technologies
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Technologies and tools I leverage to build modern web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-emerald-500/50 transition-all"
          >
            <div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {category.description}
              </p>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      {skill.name}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-medium">
                      {skill.proficiency}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
