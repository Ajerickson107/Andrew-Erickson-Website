import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Ventures } from './components/Ventures';
import { Projects } from './components/Projects';
import { Life } from './components/Life';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  // Default to dark mode as requested: "Dark-mode first with deep matte charcoal/slate (#0F1115)"
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
    }
    return true;
  });

  // Keep <html> class in sync with isDark
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#F3F4F6] flex flex-col font-sans selection:bg-sky-500/25 selection:text-sky-200 transition-colors duration-200 systems-grid-bg">
      {/* Sticky Editorial Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Editorial Content Stream */}
      <main className="flex-grow">
        {/* Hero Section with Couple Portrait & Grounded Bio */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Experience & Academic Timeline */}
        <Experience />

        <Education />

        {/* Systems & Math Technical Tooling Matrix */}
        <Skills />

        {/* Dedicated Applied Systems & Ventures Feature Card */}
        <Ventures />

        {/* Technical Work & Projects */}
        <Projects />

        {/* "Beyond the Terminal" Life & Hobbies Bento Grid */}
        <Life />
      </main>

      {/* Editorial Footer & Colophon */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Printable Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
