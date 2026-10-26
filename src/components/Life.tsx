import React from 'react';
import { Camera, Compass, Heart, Wrench, Mountain, Dog, Terminal } from 'lucide-react';
import { bentoItems } from '../data/resumeData';

export const Life: React.FC = () => {
  return (
    <section id="life" className="py-16 md:py-24 border-b border-white/[0.08] dark:border-white/[0.08] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-sky-400"></span>
              <span>// 05. Beyond The Terminal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">
              Field Notes, Hardware & Hobbies
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 mt-2 md:mt-0">
            Real-World Problem Solving, Outdoor Exploration & Companion QA
          </p>
        </div>

        {/* Lightweight 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bentoItems.map((item, idx) => {
            return (
              <div
                key={item.id}
                className="tactile-card rounded-xl p-5 border border-white/[0.08] bg-[#161920] flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Top Tag */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-xs font-mono">
                    <span className="text-sky-400 font-medium flex items-center gap-1.5">
                      {idx === 0 && <Dog className="w-3.5 h-3.5 text-sky-400" />}
                      {idx === 1 && <Mountain className="w-3.5 h-3.5 text-amber-400" />}
                      {idx === 2 && <Wrench className="w-3.5 h-3.5 text-emerald-400" />}
                      <span>{item.tag}</span>
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      FIG. 0{idx + 2}
                    </span>
                  </div>

                  {/* Image Container with fixed aspect ratio to prevent layout shifts */}
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0A0C0F] border border-white/[0.08] mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width="600"
                      height="450"
                      className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  {/* Title & Caption */}
                  <h3 className="text-base sm:text-lg font-semibold text-slate-100 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <div className="pt-1 font-mono text-xs text-sky-400/90 font-medium">
                    "{item.caption}"
                  </div>

                  {/* Description */}
                  <p className="pt-2 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Spec Footer */}
                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>STATUS: NOMINAL</span>
                  <span>ALBUQUERQUE, NM</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
