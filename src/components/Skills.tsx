import React from 'react';
import { Cpu, Terminal, ShieldCheck, Code2, LineChart, Binary } from 'lucide-react';
import { skillCategories } from '../data/resumeData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('hpc') || category.toLowerCase().includes('systems')) {
      return <Cpu className="w-4 h-4 text-sky-400" />;
    }
    if (category.toLowerCase().includes('programming') || category.toLowerCase().includes('scientific')) {
      return <Code2 className="w-4 h-4 text-sky-400" />;
    }
    if (category.toLowerCase().includes('telemetry') || category.toLowerCase().includes('observability')) {
      return <LineChart className="w-4 h-4 text-emerald-400" />;
    }
    if (category.toLowerCase().includes('mathematics')) {
      return <Binary className="w-4 h-4 text-amber-400" />;
    }
    return <Terminal className="w-4 h-4 text-slate-400" />;
  };

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-white/[0.08] dark:border-white/[0.08] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-sky-400"></span>
              <span>// Technical Tooling & Core Competencies</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100">
              Systems & Applied Math Matrix
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-2 md:mt-0">
            Cluster Administration, Numerical Discretization & Telemetry Pipelines
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="tactile-card rounded-xl p-5 border border-white/[0.08] bg-[#161920] space-y-3.5"
            >
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-white/[0.06]">
                <div className="p-1.5 rounded bg-[#0F1115] border border-white/[0.08]">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="font-semibold text-slate-100 text-sm tracking-tight">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {cat.skills.map((skill) => {
                  const isAdv = skill.level === 'Advanced';
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0F1115] border border-white/[0.06] hover:border-sky-400/40 text-xs text-slate-300 transition-colors"
                      title={skill.description}
                    >
                      <span className="font-normal">{skill.name}</span>
                      {isAdv && (
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                      )}
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
