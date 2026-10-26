import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { educationList, awards } from '../data/resumeData';

export const Education: React.FC = () => {
  return (
    <section id="research" className="py-16 md:py-24 border-b border-white/[0.08] dark:border-white/[0.08] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-xs text-sky-400 uppercase tracking-wider mb-1.5">
              Academic Background
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">
              Education & Honors
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 md:mt-0">
            Computer science, applied mathematics, and university recognition
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {educationList.map((edu) => {
            const isMS = edu.id === 'unm-ms-cs';
            return (
              <div
                key={edu.id}
                className={`tactile-card rounded-xl p-6 sm:p-7 bg-[#161920] flex flex-col justify-between ${
                  isMS ? 'border-sky-500/30' : 'border-white/[0.08]'
                }`}
              >
                <div>
                  <div className="pb-3 border-b border-white/[0.06] space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>{edu.institution}</span>
                      <span className="text-slate-500">{edu.period}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-100 pt-1">
                      {edu.degree}
                    </h3>
                    {edu.honors && (
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-mono text-[11px] font-medium mt-1">
                        {edu.honors}
                      </span>
                    )}
                  </div>

                  <p className="pt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {edu.details}
                  </p>

                  <div className="pt-3 space-y-1.5">
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {edu.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-sky-400 font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>{edu.location}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Awards & Honors List (Full LinkedIn Parity) */}
        <div className="mt-12 pt-8 border-t border-white/[0.08]">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-100 tracking-tight flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Honors, Awards & Recognition</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Recognition from Sandia National Laboratories, University of New Mexico, and academic organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award) => {
              const isSandia = award.organization.includes('Sandia');
              return (
                <div
                  key={award.id}
                  className="p-4 rounded-lg bg-[#161920] border border-white/[0.08] hover:border-white/20 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span
                      className={`font-mono text-[11px] px-2 py-0.5 rounded border ${
                        isSandia
                          ? 'bg-amber-400/10 border-amber-400/25 text-amber-300'
                          : 'bg-sky-400/10 border-sky-400/25 text-sky-300'
                      }`}
                    >
                      {award.organization}
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">{award.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-100 pt-0.5">
                    {award.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
