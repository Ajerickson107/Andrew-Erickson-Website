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

  // Permanently lock dark theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.removeItem('theme');
  }, []);

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#F3F4F6] flex flex-col font-sans selection:bg-sky-500/25 selection:text-sky-200 systems-grid-bg">
      {/* Sticky Editorial Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Stream */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Work Experience */}
        <Experience />

        {/* Education & Honors */}
        <Education />

        {/* Technical Skills Matrix */}
        <Skills />

        {/* Emily Erickson Massage LLC */}
        <Ventures />

        {/* Technical Projects */}
        <Projects />

        {/* Beyond the Terminal */}
        <Life />
      </main>

      {/* Footer & Colophon */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Printable Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
