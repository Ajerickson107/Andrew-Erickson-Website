import React, { useState, useEffect } from 'react';
import { Shield, FileText, Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface NavbarProps {
  onOpenResume: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, isDark, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['overview', 'work', 'research', 'ventures', 'projects', 'life', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Research', href: '#research', id: 'research' },
    { name: 'Ventures', href: '#ventures', id: 'ventures' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Life', href: '#life', id: 'life' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="top-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0F1115]/95 dark:bg-[#0F1115]/95 bg-white/95 border-b border-white/[0.08] dark:border-white/[0.08] border-slate-200 backdrop-blur-md shadow-sm'
          : 'bg-[#0F1115]/85 dark:bg-[#0F1115]/85 bg-white/85 border-b border-white/[0.05] dark:border-white/[0.05] border-slate-200/60 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Identity & Status Tag */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="#overview"
              onClick={(e) => scrollToSection(e, '#overview')}
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="Andrew J. Erickson Home"
            >
              <div className="w-8 h-8 rounded-md bg-[#161920] border border-white/[0.12] dark:border-white/[0.12] border-slate-300 flex items-center justify-center font-mono text-xs font-semibold text-sky-400 group-hover:border-sky-400/60 transition-colors">
                <span>AE</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm sm:text-base text-slate-900 dark:text-[#F3F4F6] tracking-tight group-hover:text-sky-400 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="text-[11px] text-slate-400 tracking-tight hidden sm:inline-block">
                  HPC Systems • Sandia R&D
                </span>
              </div>
            </a>

            {/* Live Status Chip: ● R&D S&E @ Sandia HPC | M.S. CS @ UNM */}
            <div
              className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-md bg-[#161920] border border-white/[0.08] dark:border-white/[0.08] border-slate-200 text-xs font-mono text-slate-300 dark:text-slate-300"
              title="Current Professional Appointment and Academic Standing"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300 text-[11px] tracking-tight">
                {personalInfo.roleStatus}
              </span>
            </div>
          </div>

          {/* Right Navigation & Quick Actions */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <nav className="flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-3 py-1.5 text-xs font-mono transition-colors rounded-md ${
                      isActive
                        ? 'text-sky-400 bg-sky-500/10 font-medium border border-sky-500/20'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="h-4 w-px bg-white/[0.1] mx-1"></div>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-[#161920] hover:bg-[#1C2029] border border-white/[0.12] hover:border-sky-400/40 text-slate-200 transition-all cursor-pointer"
              title="Open Printable Resume"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-colors cursor-pointer"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded bg-[#161920] border border-white/[0.1] text-slate-200"
            >
              <FileText className="w-3 h-3 text-sky-400" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Live Status Banner */}
        <div className="lg:hidden pb-2.5 pt-0.5 flex items-center justify-between text-[11px] font-mono border-t border-white/[0.04] text-slate-400">
          <div className="flex items-center gap-2 truncate">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="truncate">{personalInfo.roleStatus}</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0F1115] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block px-3 py-2 rounded-md text-sm font-mono text-slate-300 hover:text-white hover:bg-white/[0.05]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between border-t border-white/[0.08]">
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-slate-400"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              <span>{isDark ? 'Light Theme' : 'Dark Theme'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
