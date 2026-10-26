import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { experiences } from '../data/resumeData';

export const Experience: React.FC = () => {
  return (
    <section id="work" className="py-16 md:py-24 border-b border-white/[0.08] dark:border-white/[0.08] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-xs text-sky-400 uppercase tracking-wider mb-1.5">
              Work Experience
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">
              Professional Experience
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 md:mt-0">
            HPC systems monitoring, telemetry pipelines, and operations
          </p>
        </div>

        {/* Structured Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp) => {
            const isFullTime = exp.type === 'Full-Time';

            return (
              <div
                key={exp.id}
                className={`tactile-card rounded-xl p-6 sm:p-7 transition-all ${
                  isFullTime
                    ? 'border-sky-500/30 bg-[#161920]'
                    : 'border-white/[0.08] bg-[#161920]'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 pb-4 border-b border-white/[0.06]">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-100 tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.statusBadge && (
                        <span
                          className={`px-2.5 py-0.5 rounded font-mono text-[11px] font-medium tracking-tight ${
                            isFullTime
                              ? 'bg-sky-500/15 border border-sky-400/40 text-sky-300'
                              : 'bg-white/[0.05] border border-white/[0.1] text-slate-300'
                          }`}
                        >
                          {exp.statusBadge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <span className="text-sky-400 font-medium">{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 flex items-center gap-1 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period badge */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span className="bg-[#0F1115] px-2.5 py-1 rounded border border-white/[0.08] text-slate-300">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="pt-4 space-y-2">
                  <ul className="space-y-2">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <span className="text-sky-400 font-bold mt-1 text-xs shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Awards / Recognition if present */}
                {exp.awards && exp.awards.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400/90 flex items-center gap-1.5 mr-1">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>Recognition:</span>
                    </span>
                    {exp.awards.map((award, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/25 text-amber-300 font-mono text-[11px]"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech / Skills Pills */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mr-2">
                    Focus:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-[#0F1115] border border-white/[0.06] font-mono text-xs text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
