import React from 'react';
import { Shield, Mail, FileText, Github, Linkedin, GitBranch, ArrowDown, MapPin, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="overview"
      className="relative pt-24 pb-16 md:pt-32 md:pb-20 border-b border-white/[0.08] dark:border-white/[0.08] border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Editorial Text Column (col-span-7 or 8) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            
            {/* Systems Status & Clearance Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {/* DOE Q Clearance */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161920] border border-amber-500/30 text-amber-400 font-mono text-[11px] tracking-wide">
                <Shield className="w-3 h-3 text-amber-400" />
                <span>{personalInfo.clearance}</span>
              </div>

              {/* Sandia Lab Marker */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161920] border border-sky-500/30 text-sky-400 font-mono text-[11px] tracking-wide">
                <Cpu className="w-3 h-3 text-sky-400" />
                <span>Sandia National Labs // HPC Systems</span>
              </div>

              {/* UNM Academic Marker */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161920] border border-white/[0.1] text-slate-400 font-mono text-[11px] tracking-wide">
                <span>UNM M.S. CS & B.S. Math (3.96 GPA)</span>
              </div>
            </div>

            {/* Main Grounded Heading */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-slate-100 leading-snug">
                {personalInfo.heroHeading}
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed max-w-3xl font-normal">
                {personalInfo.heroBio}
              </p>
            </div>

            {/* Systems Quick Specs / Field Notes Table */}
            <div className="p-4 rounded-lg bg-[#161920] border border-white/[0.08] font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-sky-400 pb-1 border-b border-white/[0.06] text-[11px] uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                <span>Telemetry & Operator Profile</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-1 text-[12px]">
                <div className="flex justify-between sm:justify-start sm:gap-3">
                  <span className="text-slate-500">APPOINTMENT:</span>
                  <span className="text-slate-200 font-medium">R&D S&E Computer Science</span>
                </div>
                <div className="flex justify-between sm:justify-start sm:gap-3">
                  <span className="text-slate-500">DIVISION:</span>
                  <span className="text-slate-200">HPC Systems Group</span>
                </div>
                <div className="flex justify-between sm:justify-start sm:gap-3">
                  <span className="text-slate-500">GRADUATE:</span>
                  <span className="text-slate-200">M.S. Computer Science @ UNM</span>
                </div>
                <div className="flex justify-between sm:justify-start sm:gap-3">
                  <span className="text-slate-500">UNDERGRAD:</span>
                  <span className="text-slate-200">B.S. Mathematics (Summa Cum Laude)</span>
                </div>
                <div className="flex justify-between sm:justify-start sm:gap-3">
                  <span className="text-slate-500">LOCATION:</span>
                  <span className="text-slate-200 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    Albuquerque, NM
                  </span>
                </div>
                <div className="flex justify-between sm:justify-start sm:gap-3">
                  <span className="text-slate-500">CORE FOCUS:</span>
                  <span className="text-sky-300">Cluster Telemetry & MPI Solvers</span>
                </div>
              </div>
            </div>

            {/* Action Bar & Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono text-xs font-semibold tracking-wide transition-colors cursor-pointer"
              >
                <span>View Engineering Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#161920] hover:bg-[#1C2029] border border-white/[0.12] hover:border-sky-400/40 text-slate-200 font-mono text-xs tracking-wide transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Interactive Resume</span>
              </button>

              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-md bg-[#161920] hover:bg-[#1C2029] border border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-white transition-colors"
                  title={`Email: ${personalInfo.email}`}
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-[#161920] hover:bg-[#1C2029] border border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-white transition-colors"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-[#161920] hover:bg-[#1C2029] border border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-white transition-colors"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.links.lobogit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-[#161920] hover:bg-[#1C2029] border border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-white transition-colors"
                  title="UNM LoboGit Repository"
                  aria-label="UNM LoboGit"
                >
                  <GitBranch className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Portrait Card Column (col-span-5 or 4) */}
          <div className="lg:col-span-5 xl:col-span-4 w-full max-w-md mx-auto lg:max-w-none">
            <div className="tactile-card p-2.5 rounded-xl border border-white/[0.1] bg-[#161920] shadow-lg">
              
              {/* Photo Container with fixed aspect ratio to prevent CLS */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] overflow-hidden rounded-lg bg-[#0F1115] border border-white/[0.06]">
                <img
                  src={personalInfo.photoUrl}
                  alt="Andrew J. Erickson and Emily Erickson"
                  fetchPriority="high"
                  width="800"
                  height="800"
                  className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-300"
                />
                
                {/* Subtle telemetry corner watermark */}
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs font-mono text-[10px] text-slate-300 border border-white/10">
                  FIG. 01 // PORTRAIT
                </div>
              </div>

              {/* Minimalist Editorial Caption */}
              <div className="pt-3 pb-1 px-1.5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-300 font-medium">{personalInfo.photoCaption}</span>
                <span className="text-slate-500 text-[11px]">35.08°N</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
