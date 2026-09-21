import React, { useState } from 'react';
import { Shield, Mail, Phone, MapPin, GitBranch, Linkedin, Github, ArrowDown, FileText, GraduationCap, Cpu } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imgError, setImgError] = useState(false);
  const [customPhoto] = useState<string | null>(() => {
    return localStorage.getItem('aje_profile_photo') || null;
  });

  return (
    <section
      id="overview"
      className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-100/70 via-slate-50 to-white dark:from-[#080d14] dark:via-[#0b0f17] dark:to-[#0e1420] border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div
                id="hero-clearance-pill"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300/80 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 text-xs font-medium shadow-xs"
              >
                <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Active DOE Q Clearance</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800/70 text-sky-800 dark:text-sky-300 text-xs font-medium shadow-xs">
                <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Sandia National Laboratories R&D</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>UNM M.S. CS & B.S. Mathematics (3.96 GPA)</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Andrew John Erickson
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-medium">
                High-Performance Computing & R&D Systems Engineer
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                R&D Graduate Intern in High-Performance Computing (HPC) Systems at{' '}
                <strong className="text-slate-900 dark:text-slate-200 font-semibold">Sandia National Laboratories</strong>. 
                Dual background in Applied Mathematics (Summa Cum Laude, 3.96 GPA) and Computer Science with research interests 
                in cluster telemetry, parallel scientific computing (MPI/OpenMP), and automated infrastructure verification.
              </p>
            </div>

            {/* Quick Contact & Location Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span>{personalInfo.location}</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="btn-hero-resume"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm transition-all shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>View & Print Resume</span>
              </button>

              <a
                id="btn-hero-projects"
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition-all shadow-xs"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              </a>

              <a
                id="btn-hero-github"
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 text-xs sm:text-sm transition-all shadow-xs"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span>GitHub</span>
              </a>

              <a
                id="btn-hero-lobogit"
                href={personalInfo.links.lobogit}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 text-xs sm:text-sm transition-all shadow-xs"
                title="UNM LoboGit Repository"
              >
                <GitBranch className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span>LoboGit</span>
              </a>

              <a
                id="btn-hero-linkedin"
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 text-xs sm:text-sm transition-all shadow-xs"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Photo & Profile Card Column */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Profile Card Container */}
              <div className="bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-black/50 space-y-4">
                {/* Photo Frame with Headshot Image */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-tr from-emerald-100 via-sky-50 to-slate-100 dark:from-slate-900 dark:via-emerald-950/30 dark:to-sky-950/30 border border-slate-200 dark:border-slate-700/80 shadow-inner flex items-center justify-center group">
                  {customPhoto || !imgError ? (
                    <img
                      src={customPhoto || '/IMG_4475.jpg'}
                      alt="Andrew John Erickson"
                      onError={() => {
                        if (!customPhoto) setImgError(true);
                      }}
                      className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    /* Elegant Fallback Avatar */
                    <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                      <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border-2 border-emerald-400 dark:border-emerald-600 flex items-center justify-center text-emerald-800 dark:text-emerald-300 font-bold text-3xl tracking-wider font-mono">
                        AJE
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">
                          Andrew J. Erickson
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Albuquerque, New Mexico
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Status Overlay Pill */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 dark:bg-[#0b0f17]/95 border border-slate-200 dark:border-slate-700/80 rounded-lg p-2.5 backdrop-blur-md shadow-xs flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        Sandia National Labs
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                      HPC Systems R&D
                    </span>
                  </div>
                </div>

                {/* Quick Academic & Clearance Summary */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                    <div className="text-slate-500 dark:text-slate-400 text-[11px]">Undergrad GPA</div>
                    <div className="font-semibold text-slate-900 dark:text-white mt-0.5">3.96 / 4.0</div>
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-400">Summa Cum Laude</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                    <div className="text-slate-500 dark:text-slate-400 text-[11px]">Clearance</div>
                    <div className="font-semibold text-slate-900 dark:text-white mt-0.5">DOE Q Level</div>
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-400">Active Status</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
