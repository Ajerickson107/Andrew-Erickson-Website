import React from 'react';
import { Mail, Github, Linkedin, GitBranch, ArrowUp, Shield, Terminal, FileText, Cpu, MapPin } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0A0C0F] border-t border-white/[0.08] text-slate-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Contact & Dispatch Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Main Info (col-span-6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-sky-400"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
                // 06. Communication Channels
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-100 tracking-tight">
              Get in Touch
            </h3>
            
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Open to technical discussions regarding high-performance computing systems, cluster telemetry pipelines, scientific computing numerical methods, or applied mathematics.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono text-xs font-semibold tracking-wide transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#161920] hover:bg-[#1C2029] border border-white/[0.12] hover:border-sky-400/40 text-slate-200 font-mono text-xs tracking-wide transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Print / View Resume</span>
              </button>
            </div>
          </div>

          {/* Direct Minimal Links Column (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 block">
                Direct Profiles & Repositories:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#161920] border border-white/[0.08] hover:border-sky-400/40 hover:bg-[#1C2029] flex items-center justify-between text-xs font-mono text-slate-200 group transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <span className="text-slate-500 group-hover:text-sky-400 transition-colors">↗</span>
                </a>

                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#161920] border border-white/[0.08] hover:border-sky-400/40 hover:bg-[#1C2029] flex items-center justify-between text-xs font-mono text-slate-200 group transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub Repositories</span>
                  </span>
                  <span className="text-slate-500 group-hover:text-slate-300 transition-colors">↗</span>
                </a>

                <a
                  href={personalInfo.links.lobogit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#161920] border border-white/[0.08] hover:border-sky-400/40 hover:bg-[#1C2029] flex items-center justify-between text-xs font-mono text-slate-200 group transition-all"
                >
                  <span className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-sky-400" />
                    <span>UNM LoboGit</span>
                  </span>
                  <span className="text-slate-500 group-hover:text-sky-400 transition-colors">↗</span>
                </a>

                <a
                  href="https://emilyericksonmassage.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#161920] border border-white/[0.08] hover:border-sky-400/40 hover:bg-[#1C2029] flex items-center justify-between text-xs font-mono text-slate-200 group transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span>emilyericksonmassage.com</span>
                  </span>
                  <span className="text-slate-500 group-hover:text-emerald-400 transition-colors">↗</span>
                </a>
              </div>
            </div>

            {/* Clearance & Sandia Security Marker */}
            <div className="p-3 rounded-lg bg-[#161920] border border-amber-500/20 text-xs font-mono text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-2 text-amber-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Department of Energy Q-Level Security Clearance (Active)</span>
              </span>
              <span className="text-slate-500 text-[11px] hidden sm:inline">DOE / NNSA</span>
            </div>
          </div>

        </div>

        {/* Colophon & Bottom Telemetry */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-mono">
          
          {/* Colophon Text */}
          <div className="space-y-1 max-w-2xl">
            <div className="text-slate-300">
              {personalInfo.colophon}
            </div>
            <div className="text-slate-500 text-[11px]">
              Host: GitHub Pages (CNAME: andrewerickson.me) • Node: Albuquerque, NM [{personalInfo.telemetry.coordinates}]
            </div>
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-slate-500 text-[11px]">
              © {new Date().getFullYear()} Andrew J. Erickson
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-[#161920] border border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-white transition-colors"
              title="Return to Top"
              aria-label="Return to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
