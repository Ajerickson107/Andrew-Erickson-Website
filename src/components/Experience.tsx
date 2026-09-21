import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experiences } from '../data/resumeData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#0b0f17] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Technical and analytical roles across high-performance computing systems, enterprise safeguards automation, and state data research.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-12">
          {experiences.map((exp) => {
            const isHpc = exp.role.includes('HPC') || exp.role.includes('R&D');
            const isSandia = exp.company.includes('Sandia');

            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                {/* Timeline node marker */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    isHpc
                      ? 'bg-emerald-500 border-white dark:border-[#0b0f17] ring-4 ring-emerald-500/20'
                      : isSandia
                      ? 'bg-sky-500 border-white dark:border-[#0b0f17] ring-4 ring-sky-500/20'
                      : 'bg-slate-400 dark:bg-slate-600 border-white dark:border-[#0b0f17]'
                  }`}
                />

                {/* Experience Card */}
                <div className="bg-slate-50/70 dark:bg-[#111726] border border-slate-200 dark:border-slate-800/80 rounded-xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs">
                  {/* Top Bar: Role, Company & Period */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {exp.company}
                        </span>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 self-start lg:self-center">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 space-y-2.5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies / Skills Tags */}
                  <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mr-2">
                      Tools & Frameworks:
                    </span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
