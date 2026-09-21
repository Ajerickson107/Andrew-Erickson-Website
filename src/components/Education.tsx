import React, { useState, useMemo } from 'react';
import { GraduationCap, BookOpen, Search, Calendar, Award, CheckCircle2, Clock } from 'lucide-react';
import { educationList, allCourseworkList } from '../data/resumeData';

export const Education: React.FC = () => {
  const [levelFilter, setLevelFilter] = useState<'ALL' | 'Graduate' | 'Undergraduate'>('ALL');
  const [subjectFilter, setSubjectFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const subjects = ['ALL', 'Computer Science', 'Mathematics', 'Sociology & Statistics', 'General & Humanities'];

  const filteredCourses = useMemo(() => {
    return allCourseworkList.filter((c) => {
      const matchesLevel = levelFilter === 'ALL' || c.level === levelFilter;
      const matchesSubject = subjectFilter === 'ALL' || c.subject === subjectFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        c.code.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        (c.term && c.term.toLowerCase().includes(q));

      return matchesLevel && matchesSubject && matchesSearch;
    });
  }, [levelFilter, subjectFilter, searchQuery]);

  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-[#0e131d] border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education & Coursework
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Graduate and undergraduate foundations in Computer Science and Applied Mathematics from the University of New Mexico.
          </p>
        </div>

        {/* Degrees: Full-Width Rows for clear organizational hierarchy */}
        <div className="space-y-6 mb-14">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    {edu.gpa && (
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-semibold">
                        GPA: {edu.gpa}
                      </span>
                    )}
                    {edu.honors && (
                      <span className="px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800/80 text-sky-800 dark:text-sky-300 text-xs font-medium">
                        {edu.honors}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    {edu.institution} • <span className="text-slate-500 dark:text-slate-400 font-normal">{edu.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 self-start">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Details and Highlights */}
              <div className="mt-4 space-y-3">
                {edu.details && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {edu.details}
                  </p>
                )}

                {edu.highlights && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 text-xs text-slate-600 dark:text-slate-400">
                    {edu.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Complete Coursework Explorer */}
        <div className="bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                  Complete Coursework & Academic Transcript
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Official University of New Mexico courses & transfer coursework with dual-filter exploration
              </p>
            </div>

            {/* Course Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search code or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 w-full sm:w-64"
              />
            </div>
          </div>

          {/* Dual Filters: Level Filter + Subject Area Filter */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-50/70 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200/80 dark:border-slate-800/80 text-xs">
            {/* Filter 1: Level */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 dark:text-slate-400 font-medium shrink-0">Level:</span>
              <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 bg-white dark:bg-slate-800">
                {(['ALL', 'Graduate', 'Undergraduate'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setLevelFilter(lvl)}
                    className={`px-3 py-1 rounded-md transition-all font-medium ${
                      levelFilter === lvl
                        ? 'bg-emerald-600 text-white shadow-xs font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {lvl === 'ALL' ? 'All Levels' : lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter 2: Subject */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              <span className="text-slate-500 dark:text-slate-400 font-medium shrink-0">Subject:</span>
              <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 bg-white dark:bg-slate-800 shrink-0">
                {subjects.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSubjectFilter(sub)}
                    className={`px-2.5 py-1 rounded-md transition-all font-medium whitespace-nowrap ${
                      subjectFilter === sub
                        ? 'bg-slate-900 dark:bg-slate-700 text-white shadow-xs font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {sub === 'ALL' ? 'All Subjects' : sub}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Courses Count Counter & Transfer Credit Clarification */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 px-1">
            <div className="flex items-center gap-2">
              <span>
                Showing <strong className="text-slate-900 dark:text-white">{filteredCourses.length}</strong> courses
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-mono font-medium text-emerald-700 dark:text-emerald-400">CR</span> = Transfer credit from University of Denver (without incoming letter grade)
              </span>
            </div>
            {(levelFilter !== 'ALL' || subjectFilter !== 'ALL' || searchQuery) && (
              <button
                onClick={() => {
                  setLevelFilter('ALL');
                  setSubjectFilter('ALL');
                  setSearchQuery('');
                }}
                className="text-emerald-600 dark:text-emerald-400 hover:underline self-start sm:self-auto"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Full-width Responsive Course Rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {filteredCourses.map((c, idx) => {
              const isGrad = c.level === 'Graduate';
              const isTransfer = c.grade === 'CR' || (c.term && c.term.includes('Transfer'));

              return (
                <div
                  key={`${c.code}-${idx}`}
                  className="p-3.5 rounded-lg bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 text-xs">
                          {c.code}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.2 rounded border ${
                            isGrad
                              ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60 font-semibold'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          {c.level}
                        </span>
                        {isTransfer && (
                          <span
                            className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60"
                            title="Transferred from University of Denver"
                          >
                            DU Transfer
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mt-1 leading-snug">
                        {c.name}
                      </h4>
                    </div>

                    {/* Grade Badge */}
                    <span
                      title={c.grade === 'CR' ? 'Credit Transferred from University of Denver' : undefined}
                      className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded border shrink-0 ${
                        c.grade === 'A+' || c.grade === 'A'
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                          : c.grade === 'In Progress'
                          ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800'
                          : c.grade === 'CR'
                          ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {c.grade === 'CR' ? 'CR' : (c.grade || 'CR')}
                    </span>
                  </div>

                  {/* Metadata footer */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                    <span className="truncate max-w-[170px]">{c.subject}</span>
                    <div className="flex items-center gap-2 shrink-0 font-mono">
                      {c.credits && <span>{c.credits} cr</span>}
                      {c.term && <span>• {c.term}</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
