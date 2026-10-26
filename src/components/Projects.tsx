import React, { useState } from 'react';
import { Terminal, GitBranch, Cpu, Activity, Gamepad2, ArrowUpRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { projects } from '../data/resumeData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-white/[0.08] dark:border-white/[0.08] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-sky-400"></span>
              <span>// 04. Technical Work & Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">
              High-Performance Systems & Software
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 mt-2 md:mt-0">
            Telemetry Ingestion, Parallel MPI Solvers & Interactive Engines
          </p>
        </div>

        {/* 2x2 Grid of Technical Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((proj) => {
            return (
              <div
                key={proj.id}
                className="tactile-card rounded-xl p-6 sm:p-7 border border-white/[0.08] bg-[#161920] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Category & Period */}
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/[0.06] text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-400/30 text-sky-300 font-medium tracking-tight">
                      {proj.category}
                    </span>
                    <span className="text-slate-500 bg-[#0F1115] px-2 py-0.5 rounded border border-white/[0.06]">
                      {proj.period}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="pt-4 space-y-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-100 tracking-tight flex items-center justify-between">
                      <span>{proj.title}</span>
                      {proj.repoUrl && (
                        <a
                          href={proj.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-sky-400 transition-colors p-1"
                          title="View Repository on UNM LoboGit"
                          aria-label="View Repository on UNM LoboGit"
                        >
                          <GitBranch className="w-4 h-4" />
                        </a>
                      )}
                    </h3>
                    <p className="text-xs font-mono text-sky-400/90">
                      {proj.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="pt-3 text-sm text-slate-300 leading-relaxed font-sans">
                    {proj.summary}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="pt-4 space-y-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500 block">
                      Architecture & Implementation:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {proj.architectureDetails.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-sky-400 font-mono shrink-0">›</span>
                          <span className="leading-snug">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Section: Technologies & Repository / Details Button */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#0F1115] border border-white/[0.06] font-mono text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {proj.repoUrl && (
                    <div className="flex justify-end pt-1">
                      <a
                        href={proj.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 hover:underline"
                      >
                        <span>UNM LoboGit Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
