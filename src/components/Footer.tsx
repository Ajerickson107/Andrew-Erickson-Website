import React from 'react';
import { GitBranch, Linkedin, Mail, Phone, MapPin, Shield, ArrowUp, FileText, ExternalLink, Github } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-100 dark:bg-[#070b12] border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Identity & Clearance */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800/80 flex items-center justify-center font-mono font-bold text-emerald-700 dark:text-emerald-400 text-xs">
                AJE
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                Andrew John Erickson
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
              High-Performance Computing & R&D Systems Engineer. Sandia National Laboratories intern and University of New Mexico graduate.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-[11px] font-mono">
              <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>DOE Q Clearance (Active)</span>
            </div>
          </div>

          {/* Col 2: Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Contact Details
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.eduEmail}`}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{personalInfo.eduEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Repositories & Profiles */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Repositories & Profiles
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.links.lobogit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <GitBranch className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                  <span>UNM LoboGit (GitLab)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.links.gitlabHeatEq}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <GitBranch className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>2D Heat Eq Repo (MATH 471)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Actions */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Resume Document
            </h4>
            <button
              onClick={onOpenResume}
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs text-white font-medium transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View & Print Resume</span>
            </button>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
              Active DOE Q Security Clearance • University of New Mexico M.S. CS
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Andrew John Erickson.</span>
            <span>•</span>
            <span>Sandia National Laboratories R&D Intern</span>
            <span>•</span>
            <span>UNM Computer Science & Mathematics</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
