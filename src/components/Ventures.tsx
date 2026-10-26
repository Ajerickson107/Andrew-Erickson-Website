import React from 'react';
import { ExternalLink, Globe, CalendarCheck, ShieldCheck, Receipt, Sparkles } from 'lucide-react';
import { ventureData } from '../data/resumeData';

export const Ventures: React.FC = () => {
  return (
    <section id="ventures" className="py-16 md:py-24 border-b border-white/[0.08] dark:border-white/[0.08] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-xs text-sky-400 uppercase tracking-wider mb-1.5">
              Side Venture & Operations
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">
              Emily Erickson Massage LLC
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 md:mt-0">
            Business administration, website management, and operations
          </p>
        </div>

        {/* Feature Card */}
        <div className="tactile-card rounded-xl border border-white/[0.08] bg-[#161920] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Studio Photo Column (col-span-5) */}
            <div className="lg:col-span-5 relative bg-[#0F1115] border-b lg:border-b-0 lg:border-r border-white/[0.08] p-4 sm:p-6 flex flex-col justify-between">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[360px] w-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#0A0C0F]">
                <img
                  src={ventureData.image}
                  alt="Emily Erickson Massage Studio treatment room in Albuquerque"
                  loading="lazy"
                  width="800"
                  height="600"
                  className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-300"
                />
              </div>

              {/* Natural Inset Caption */}
              <div className="pt-3 px-1 text-xs text-slate-400">
                <span className="text-slate-300 font-medium block">
                  Studio Space — Albuquerque, NM
                </span>
                <span className="text-[11px] text-slate-500">
                  Treatment room and studio setup
                </span>
              </div>
            </div>

            {/* Natural Narrative Column (col-span-7) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-medium">
                      Active Private Practice
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 tracking-tight pt-1">
                      {ventureData.title}
                    </h3>
                    <div className="text-xs sm:text-sm text-slate-400 pt-0.5">
                      Role: {ventureData.role}
                    </div>
                  </div>

                  <a
                    href={ventureData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0F1115] hover:bg-[#1C2029] border border-white/[0.12] hover:border-sky-400/50 text-sky-300 font-mono text-xs transition-colors shrink-0"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Grounded, Authentic Summary */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {ventureData.summary}
                </p>

                {/* What I Manage Grid */}
                <div className="pt-2 space-y-2.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block">
                    What I Take Care Of:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {ventureData.stack.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg bg-[#0F1115] border border-white/[0.06] space-y-1"
                      >
                        <div className="flex items-center gap-2 text-xs font-medium text-sky-300">
                          {idx === 0 && <Globe className="w-3.5 h-3.5 text-sky-400" />}
                          {idx === 1 && <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
                          {idx === 2 && <Receipt className="w-3.5 h-3.5 text-amber-400" />}
                          {idx === 3 && <Sparkles className="w-3.5 h-3.5 text-sky-400" />}
                          <span>{item.category}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                          {item.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Albuquerque, New Mexico</span>
                <span className="text-slate-400">{ventureData.domain}</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
