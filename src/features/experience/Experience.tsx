import React from 'react';
import { experienceData } from '../../data/experience';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-white">
          Experience & Education
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          My professional background and academic credentials.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative border-l-2 border-emerald-500/30 ml-4 sm:ml-auto space-y-12 py-4">
        {experienceData.map((item) => {
          const isExp = item.type === 'Experience';
          const Icon = isExp ? Briefcase : GraduationCap;

          return (
            <div key={item.id} className="relative pl-8 sm:pl-10">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-950"></span>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium w-fit">
                    {item.startDate} — {item.ongoing ? 'Present' : item.endDate}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

                {item.responsibilities.length > 0 && (
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Key Responsibilities
                    </h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.achievements.length > 0 && (
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
