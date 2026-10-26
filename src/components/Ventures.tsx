import React from 'react';
import { ExternalLink, ShieldCheck, Globe, CalendarCheck, Receipt, Landmark, Terminal, ArrowUpRight } from 'lucide-react';
import { ventureData } from '../data/resumeData';

export const Ventures: React.FC = () => {
  return (
    <section id="ventures" className="py-16 md:py-24 border-b border-white/[0.08] dark:border-white/[0.08] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-sky-400"></span>
              <span>// 03. Applied Systems & Ventures</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">
              Business & Technical Infrastructure
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 mt-2 md:mt-0">
            End-to-End Operational Stack, DNS & Financial Compliance
          </p>
        </div>

        {/* Dedicated Feature Card (Half-Split Layout) */}
        <div className="tactile-card rounded-xl border border-white/[0.1] bg-[#161920] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Column (col-span-5) */}
            <div className="lg:col-span-5 relative bg-[#0F1115] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between p-4 sm:p-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[380px] w-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#0A0C0F]">
                <img
                  src={ventureData.image}
                  alt="Emily Erickson Massage Studio treatment room with custom lighting installation"
                  loading="lazy"
                  width="800"
                  height="600"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* Visual Telemetry Pill */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs font-mono text-[10px] text-sky-300 border border-white/10">
                  FACILITY // ABQ, NM
                </div>
              </div>

              {/* Inset Caption */}
              <div className="pt-3 px-1 text-xs font-mono text-slate-400 leading-snug">
                <span className="text-slate-300 font-medium block">
                  Studio Headquarters & Treatment Room
                </span>
                <span className="text-[11px] text-slate-500">
                  {ventureData.imageCaption}
                </span>
              </div>
            </div>

            {/* Architecture & Content Column (col-span-7) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div>
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-medium tracking-tight">
                        {ventureData.status}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {ventureData.period}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 tracking-tight pt-2">
                      {ventureData.title}
                    </h3>
                    <div className="text-sm font-mono text-sky-400 pt-0.5">
                      Role: {ventureData.role}
                    </div>
                  </div>

                  <a
                    href={ventureData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0F1115] hover:bg-[#1C2029] border border-white/[0.12] hover:border-sky-400/50 text-sky-300 font-mono text-xs transition-colors shrink-0"
                  >
                    <span>{ventureData.domain}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Summary */}
                <p className="pt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {ventureData.summary}
                </p>

                {/* Technical & Operational Architecture Stack */}
                <div className="pt-5 space-y-3">
                  <div className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>Engineered Technical & Operational Stack</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {ventureData.stack.map((item, idx) => {
                      return (
                        <div
                          key={idx}
                          className="p-3.5 rounded-lg bg-[#0F1115] border border-white/[0.06] space-y-1.5"
                        >
                          <div className="flex items-center gap-2 text-xs font-mono font-medium text-sky-300">
                            {idx === 0 && <Globe className="w-3.5 h-3.5 text-sky-400" />}
                            {idx === 1 && <CalendarCheck className="w-3.5 h-3.5 text-sky-400" />}
                            {idx === 2 && <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
                            {idx === 3 && <Receipt className="w-3.5 h-3.5 text-amber-400" />}
                            <span>{item.category}</span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            {item.details}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <Landmark className="w-3.5 h-3.5 text-slate-500" />
                  <span>Licensed State of NM Establishment • City of Albuquerque</span>
                </span>
                <span className="text-slate-500">
                  Cloudflare Edge • Automated GRT / Tax Accounting
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
