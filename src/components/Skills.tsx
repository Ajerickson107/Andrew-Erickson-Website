import React from 'react';
import { Cpu, Terminal, Layers, Database, ShieldCheck, Wrench, Code2, LineChart, Binary } from 'lucide-react';
import { skillCategories } from '../data/resumeData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('high-performance')) {
      return <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
    if (category.toLowerCase().includes('programming')) {
      return <Code2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
    }
    if (category.toLowerCase().includes('telemetry') || category.toLowerCase().includes('observability')) {
      return <LineChart className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
    }
    if (category.toLowerCase().includes('mathematics')) {
      return <Binary className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
    }
    return <Terminal className="w-4 h-4 text-slate-600 dark:text-slate-400" />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-[#0e131d] border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills & Infrastructure Matrix
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Core competencies across cluster administration, parallel algorithms, systems automation, and enterprise data modeling.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xs space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => {
                  const isAdv = skill.level === 'Advanced';
                  const isProf = skill.level === 'Proficient';
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
                      title={skill.description}
                    >
                      <span className="font-medium">{skill.name}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                          isAdv
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 font-semibold'
                            : isProf
                            ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800 font-medium'
                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
