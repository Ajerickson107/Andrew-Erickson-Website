import React from 'react';
import { GraduationCap, BookOpen, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationList, allCourseworkList } from '../data/resumeData';

export const Education: React.FC = () => {
  return (
    <section id="research" className="py-16 md:py-24 border-b border-white/[0.08] dark:border-white/[0.08] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-sky-400"></span>
              <span>// 02. Academic Foundations & Research</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">
              Education & Advanced Coursework
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 mt-2 md:mt-0">
            Parallel Architectures, Distributed Systems & Applied Mathematics
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* M.S. in Computer Science Card */}
          <div className="tactile-card rounded-xl p-6 sm:p-7 border-sky-500/30 bg-[#161920] flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.06]">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded bg-sky-500/15 border border-sky-400/40 text-sky-300 font-mono text-[11px] font-medium tracking-tight">
                    In Progress • Part-Time (1–2 classes/term)
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-100 pt-1">
                    Master of Science in Computer Science
                  </h3>
                  <div className="text-sm font-medium text-sky-400 flex items-center gap-2">
                    <span>University of New Mexico</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-xs font-mono">Albuquerque, NM</span>
                  </div>
                </div>
                <div className="font-mono text-xs text-slate-400 bg-[#0F1115] px-2.5 py-1 rounded border border-white/[0.08] shrink-0">
                  Expected 2028
                </div>
              </div>

              {/* Details & Research Focus */}
              <div className="pt-4 space-y-3">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Balancing full-time R&D S&E systems engineering at Sandia National Laboratories with graduate computer science research.
                </p>
                
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 block">
                    Research & Technical Focus:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-sky-400 font-mono">›</span>
                      <span>Parallel architectures & distributed system scalability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-400 font-mono">›</span>
                      <span>High-performance computing modeling & scientific simulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-400 font-mono">›</span>
                      <span>Advanced algorithms & data structure optimization</span>
                    </li>
                  </ul>
                </div>

                {/* Graduate Coursework Badges */}
                <div className="pt-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 block mb-2">
                    Current & Core Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["CS 561 Algorithms", "CS 512 Computer Graphics", "CS 533 Experimental Methods", "CS 341L Architecture"].map((course) => (
                      <span
                        key={course}
                        className="px-2 py-0.5 rounded bg-[#0F1115] border border-white/[0.08] font-mono text-xs text-sky-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
              <span>UNM School of Engineering</span>
              <span className="text-sky-400">Plan I Thesis Option</span>
            </div>
          </div>

          {/* B.S. in Mathematics Card */}
          <div className="tactile-card rounded-xl p-6 sm:p-7 border-white/[0.08] bg-[#161920] flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.06]">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 font-mono text-[11px] font-semibold tracking-tight">
                      Summa Cum Laude • 3.96 GPA
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-[11px]">
                      Presidential Scholar
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-100 pt-1">
                    B.S. in Mathematics, Minor in Computer Science
                  </h3>
                  <div className="text-sm font-medium text-sky-400 flex items-center gap-2">
                    <span>University of New Mexico</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-xs font-mono">Albuquerque, NM</span>
                  </div>
                </div>
                <div className="font-mono text-xs text-slate-400 bg-[#0F1115] px-2.5 py-1 rounded border border-white/[0.08] shrink-0">
                  May 2026
                </div>
              </div>

              {/* Details & Academic Highlights */}
              <div className="pt-4 space-y-3">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Dual major in Mathematics and Sociology with minor in Computer Science. Completed 141 credit hours uniting partial differential equations, real analysis, numerical methods, and algorithm design.
                </p>

                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 block">
                    Distinctions & Academic Honors:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">›</span>
                      <span>Conferred Summa Cum Laude with 3.96 Cumulative GPA across 141 credits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">›</span>
                      <span>UNM Presidential Scholarship (awarded to top 75 incoming NM freshmen)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">›</span>
                      <span>Consistent Dean's List honors every semester enrolled</span>
                    </li>
                  </ul>
                </div>

                {/* Quantitative Math Coursework Highlights */}
                <div className="pt-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 block mb-2">
                    Key Quantitative Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["MATH 471 Scientific Computing", "MATH 401 Real Analysis", "MATH 375 Numerical Computing", "MATH 321 Linear Algebra", "MATH 311 Vector Analysis", "MATH 312 PDEs"].map((c) => (
                      <span
                        key={c}
                        className="px-2 py-0.5 rounded bg-[#0F1115] border border-white/[0.08] font-mono text-xs text-slate-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
              <span>UNM College of Arts & Sciences</span>
              <span className="text-slate-400">141 Credits Completed</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
