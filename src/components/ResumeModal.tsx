import React, { useState } from 'react';
import { X, Printer, Copy, Check, Shield } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `ANDREW ERICKSON
Albuquerque, NM | (505) 269-4251 | ajerickson107@gmail.com
github.com/ajerickson107 | lobogit.unm.edu/aerickson107 | linkedin.com/in/andrew-j-erickson | Clearance: DOE Q Clearance (Active)

EDUCATION
University of New Mexico, Albuquerque, NM
M.S. Computer Science (Expected May 2028)
B.S. Mathematics & Sociology (Dual Major), Computer Science (Minor) (Aug 2023 – May 2026)
Cumulative GPA: 3.96 / 4.0 | Summa Cum Laude | Dean's List (Majority of Semesters)

TECHNICAL SKILLS
Programming Languages: Python (NumPy, SciPy, mpi4py), Bash, C, Java, SQL, MATLAB, LaTeX
High Performance Computing: MPI, OpenMP, Bash/Shell Scripting, SLURM Job Scheduling, TOSS RHEL, InfiniBand, Lustre
Dev Environment: Linux (WSL), Git / GitHub / LoboGit, VSCode, Nano
Data & Observability: PostgreSQL, Grafana, Starfish, Redash, Microsoft Power Platform

PROFESSIONAL EXPERIENCE
Sandia National Laboratories, Albuquerque, NM
R&D Graduate Intern – HPC Systems (Aug. 2026 – Present)
- Cluster Sanity Automation: Developed and maintain an automated daily Python sanity utility validating administrative nodes, Lustre/NFS filesystems, and InfiniBand/Omni-Path fabric link status with HTML email alerting.
- Telemetry Hardening: Polished and optimized multi-cluster telemetry pipelines and scheduler log ingestion into PostgreSQL.

Sandia National Laboratories, Albuquerque, NM
R&D Undergraduate Intern – HPC Systems (May 2026 – Aug. 2026)
- HPC Observability: Engineered multi-cluster telemetry pipeline via Python/Bash into PostgreSQL.
- Operational Analytics & Storage: Designed Grafana, Starfish, and Redash dashboards to analyze petabyte storage and cluster efficiency.

Sandia National Laboratories, Albuquerque, NM
Business Undergraduate Intern – Safeguards & Security (Nov 2024 – May 2026)
- Digital transformation of self-assessment reporting system using Power Automate, Excel logic, and SharePoint PDF automation.
- Developed dynamic Power BI dashboards for executive security oversight.

NM Taxation and Revenue Department, Santa Fe, NM
Undergraduate Intern (May 2024 – Aug. 2024)

University of Denver, Denver, CO
Honors Program Recruitment Assistant (Sept 2022 – June 2023)
- Managed prospective student demographic datasets from SIS to support student recruitment campaigns for the University Honors Program.

AWARDS & HONORS
- Intern Thunderbird Award (Sandia National Laboratories, July 2026)
- Sandia SPOT Award (2x Recipient)
- Sandia ERA Nominee (2x Nominee)
- UNM Presidential Scholarship (Top 75 incoming freshmen in New Mexico)
- Summa Cum Laude Honors (UNM BS Mathematics, 3.96 GPA)
- Student Government Senator (University of Denver, 2022 – 2023)`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800 rounded-xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-50 dark:bg-[#0b0f17] border-b border-slate-200 dark:border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider">
              Resume Preview
            </span>
            <span className="hidden sm:inline-block text-slate-400 dark:text-slate-600 font-mono text-xs">|</span>
            <span className="hidden sm:flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400 font-mono">
              <Shield className="w-3.5 h-3.5" />
              DOE Q Clearance Active
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-xs font-mono text-slate-700 dark:text-slate-200 transition-colors shadow-xs"
              title="Copy plain text version"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs font-semibold text-white transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100 dark:bg-[#070a10] text-slate-800 dark:text-slate-200">
          <div
            id="printable-resume-sheet"
            className="max-w-3xl mx-auto bg-white dark:bg-[#131b2c] border border-slate-200 dark:border-slate-800 p-8 sm:p-12 rounded-lg shadow-sm print:shadow-none print:border-none print:bg-white print:text-black space-y-6 text-xs leading-relaxed"
          >
            {/* Resume Header */}
            <div className="text-center border-b border-slate-200 dark:border-slate-800 print:border-black/30 pb-4 space-y-1">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white print:text-black tracking-tight">
                Andrew Erickson
              </h1>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 print:text-neutral-700 flex flex-wrap items-center justify-center gap-2 font-mono">
                <span>Albuquerque, NM</span>
                <span>•</span>
                <span>(505) 269-4251</span>
                <span>•</span>
                <span className="text-emerald-700 dark:text-emerald-400 print:text-black font-semibold">ajerickson107@gmail.com</span>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 print:text-neutral-700 flex flex-wrap items-center justify-center gap-3 font-mono pt-0.5">
                <a href="https://github.com/ajerickson107" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 print:text-black">
                  github.com/ajerickson107
                </a>
                <span>•</span>
                <a href="https://lobogit.unm.edu/aerickson107" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 print:text-black">
                  lobogit.unm.edu/aerickson107
                </a>
                <span>•</span>
                <a href="https://www.linkedin.com/in/andrew-j-erickson/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 print:text-black">
                  linkedin.com/in/andrew-j-erickson
                </a>
                <span>•</span>
                <span className="text-emerald-700 dark:text-emerald-400 print:text-black font-bold">
                  Clearance: DOE Q Clearance (Active)
                </span>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 print:text-black border-b border-slate-200 dark:border-slate-800 print:border-black/30 pb-1 mb-2 font-mono">
                Education
              </h2>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white print:text-black">
                    <span>University of New Mexico</span>
                    <span className="font-mono text-[11px]">Albuquerque, NM</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300 print:text-neutral-800 italic">
                    <span>M.S. Computer Science (Plan I Thesis Option)</span>
                    <span className="font-mono text-[11px] not-italic">Expected May 2028</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Academic Plan: Focus on High-Performance Computing (HPC) modeling and simulation; applying for NSF GRFP.</li>
                    <li>Graduate Coursework: Intro to Computer Graphics (CS 512), Experimental Methods in CS (CS 533), Algorithms & Data Structures (CS 561).</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white print:text-black">
                    <span>University of New Mexico</span>
                    <span className="font-mono text-[11px]">Albuquerque, NM</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300 print:text-neutral-800 italic">
                    <span>B.S. Mathematics & Sociology (Dual Major), Computer Science (Minor)</span>
                    <span className="font-mono text-[11px] not-italic">Aug. 2023 – May 2026</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 print:text-neutral-700 space-y-0.5 mt-1">
                    <li><strong className="text-slate-900 dark:text-white print:text-black">Cumulative GPA: 3.96 / 4.0</strong> — Awarded <strong className="text-slate-900 dark:text-white print:text-black">Summa Cum Laude</strong> | Dean's List (Majority of Semesters)</li>
                    <li>Relevant Coursework: Scientific Computing (MATH 471), Data Structures & Algorithms I & II (CS 361L/362), Real Analysis, Discrete Structures, Linear Algebra, Vector Analysis, Complex Variables.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 print:text-black border-b border-slate-200 dark:border-slate-800 print:border-black/30 pb-1 mb-2 font-mono">
                Technical Skills
              </h2>
              <div className="space-y-1 text-slate-600 dark:text-slate-300 print:text-neutral-800">
                <div><strong className="text-slate-900 dark:text-white print:text-black">Programming Languages:</strong> Python (NumPy, SciPy, MPI), Bash, C, Java, SQL, MATLAB, LaTeX</div>
                <div><strong className="text-slate-900 dark:text-white print:text-black">High Performance Computing:</strong> MPI (Message Passing), OpenMP, Bash/Shell Scripting, SLURM Job Scheduling, TOSS RHEL, InfiniBand, Lustre</div>
                <div><strong className="text-slate-900 dark:text-white print:text-black">Dev Environment:</strong> Linux (WSL), Git (CLI Version Control), VSCode, Nano, IntelliJ</div>
                <div><strong className="text-slate-900 dark:text-white print:text-black">Data & Automation:</strong> PostgreSQL, Grafana, Starfish, Redash, Microsoft Power Platform (Power BI, Power Automate), SharePoint</div>
              </div>
            </div>

            {/* Selected Technical Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 print:text-black border-b border-slate-200 dark:border-slate-800 print:border-black/30 pb-1 mb-2 font-mono">
                Selected Technical Projects
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white print:text-black">
                    <span>HPC Telemetry & Observability Pipeline | HPC Systems R&D</span>
                    <span className="font-mono text-[11px]">May 2026 – August 2026</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Data Engineering: Engineered multi-cluster pipeline using Bash and Python automating collection, parsing, and ETL of node utilization and scheduler data.</li>
                    <li>Structured Storage: Developed daily synchronization workflows ingesting raw telemetry into PostgreSQL.</li>
                    <li>Operational Analytics: Designed interactive Grafana dashboards for historical resource analysis and anomaly detection.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white print:text-black">
                    <span>Parallelization of Heat Equation on HPC Cluster | Scientific Computing</span>
                    <span className="font-mono text-[11px]">Fall 2025</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Algorithm Design: Developed parallelized finite difference solver for 2D Heat Equation using Python and MPI to optimize computational time for large-scale matrix operations.</li>
                    <li>HPC Implementation: Deployed code on UNM Center for Advanced Research Computing (CARC) supercomputer with SLURM batch allocation scripts.</li>
                    <li>Version Control: Managed iterative development in Git pushed to UNM LoboGit.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 print:text-black border-b border-slate-200 dark:border-slate-800 print:border-black/30 pb-1 mb-2 font-mono">
                Professional Experience
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white print:text-black">
                    <span>Sandia National Laboratories — R&D Graduate Intern (HPC Systems)</span>
                    <span className="font-mono text-[11px]">Aug. 2026 – Present</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Cluster Sanity Automation: Developed and maintain an automated daily Python sanity utility validating administrative nodes, Lustre/NFS filesystems, and InfiniBand/Omni-Path fabric links with HTML email alerting.</li>
                    <li>Telemetry Hardening: Polished and optimized multi-cluster telemetry pipelines and scheduler log ingestion into PostgreSQL.</li>
                    <li>Operational Triage: Assisted cluster administrators with daily diagnostic sweeps and anomaly isolation across compute nodes.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white print:text-black">
                    <span>Sandia National Laboratories — R&D Undergraduate Intern (HPC Systems)</span>
                    <span className="font-mono text-[11px]">May 2026 – Aug. 2026</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>HPC Observability: Engineered multi-cluster telemetry pipeline via Python/Bash into PostgreSQL.</li>
                    <li>Operational Analytics & Storage: Designed Grafana, Starfish, and Redash dashboards to analyze petabyte storage and cluster efficiency.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white print:text-black">
                    <span>Sandia National Laboratories — Business Undergraduate Intern (Safeguards & Security)</span>
                    <span className="font-mono text-[11px]">Nov. 2024 – May 2026</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Spearheaded digital transformation of self-assessment reporting system using Power Automate, Excel logic, and SharePoint PDF automation.</li>
                    <li>Developed dynamic Power BI dashboards for executive security oversight.</li>
                    <li>Honored with Intern Thunderbird Award, Sandia SPOT Award (2x), and Sandia ERA Nomination (2x).</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white print:text-black">
                    <span>NM Taxation and Revenue — Undergraduate Intern</span>
                    <span className="font-mono text-[11px]">May 2024 – Aug. 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Researched data sets for tax statute modernization and prepared municipal briefings for the Cabinet Secretary.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white print:text-black">
                    <span>University of Denver — Honors Program Recruitment Assistant</span>
                    <span className="font-mono text-[11px]">Sept. 2022 – June 2023</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Managed prospective student demographic datasets from SIS to support student recruitment campaigns for the University Honors Program.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Leadership & Awards */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 print:text-black border-b border-slate-200 dark:border-slate-800 print:border-black/30 pb-1 mb-2 font-mono">
                Leadership & Awards
              </h2>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 print:text-neutral-700 space-y-1">
                <li><strong className="text-slate-900 dark:text-white print:text-black">Intern Thunderbird Award:</strong> Received for embodying laboratory core values and driving mission impact through digital transformation (July 2026).</li>
                <li><strong className="text-slate-900 dark:text-white print:text-black">Sandia SPOT Award (2x Recipient):</strong> Cash bonus awarded by Center Director & Leadership for AI-accelerated reporting system.</li>
                <li><strong className="text-slate-900 dark:text-white print:text-black">Sandia ERA Nominee (2x Recipient):</strong> Recognized for systems integration and cost savings.</li>
                <li><strong className="text-slate-900 dark:text-white print:text-black">UNM Presidential Scholarship:</strong> Merit award granted to top 75 incoming freshmen in New Mexico.</li>
                <li><strong className="text-slate-900 dark:text-white print:text-black">Student Government Senator (Univ. of Denver):</strong> Managed student directives and voted on multi-million dollar budgets.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
