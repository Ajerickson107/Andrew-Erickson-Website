import React from 'react';
import { Server, Wrench, Mountain, Gamepad2 } from 'lucide-react';
import { hobbiesAndInterests } from '../data/resumeData';

export const PersonalInterests: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      default:
        return <Wrench className="w-5 h-5 text-slate-600 dark:text-slate-400" />;
    }
  };

  return (
    <section id="hardware" className="py-20 bg-slate-50/50 dark:bg-[#0e131d] border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>Applied Engineering & Pursuits</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Systems & Personal Interests
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Hands-on hardware troubleshooting, game development, dedicated server hosting for Sandia TITANS interns, and outdoor pursuits.
          </p>
        </div>

        {/* Interests Grid - 4 items in responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbiesAndInterests.map((interest) => (
            <div
              key={interest.title}
              className="bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                    {getIcon(interest.icon)}
                  </div>

                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {interest.category}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {interest.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
