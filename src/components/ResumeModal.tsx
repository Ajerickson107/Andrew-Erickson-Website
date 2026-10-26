import React, { useState } from 'react';
import { X, Printer, Copy, Check, Shield, FileText } from 'lucide-react';
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
    const resumeText = `ANDREW J. ERICKSON
Albuquerque, NM | (505) 269-4251 | ajerickson107@gmail.com
github.com/ajerickson107 | lobogit.unm.edu/aerickson107 | linkedin.com/in/andrew-j-erickson
Clearance: Department of Energy Q-Level Security Clearance (Active)

PROFESSIONAL EXPERIENCE
Sandia National Laboratories, Albuquerque, NM
R&D S&E Computer Science — HPC Systems (Full-Time | Promoted from Graduate Intern) (Oct. 2026 – Present)
- HPC Monitoring & Telemetry: Engineering multi-cluster telemetry pipelines continuously ingesting compute metrics, scheduler logs, and fabric counters into PostgreSQL.
- Cluster Sanity Automation (admincheck): Developed and maintain automated daily Python health daemon verifying administrative nodes, Lustre/NFS filesystems, and InfiniBand/Omni-Path network fabrics with responsive HTML reporting.
- Operational Triage: Collaborating with system administrators on cluster triage, isolating node hardware anomalies, and investigating partition queue bottlenecks.
- Storage Optimization: Profiling petabytes of parallel storage using Starfish and Redash to isolate cold data and improve allocation efficiency.

Sandia National Laboratories, Albuquerque, NM
R&D Graduate & Undergraduate Intern – HPC Systems (May 2026 – Oct. 2026)
- Engineered end-to-end multi-cluster telemetry pipeline via Python and Bash automating collection, parsing, and ETL of SLURM scheduler logs into PostgreSQL.
- Constructed Grafana operational dashboards for system administrators, enabling drill-down analysis from cluster-wide heatmaps to per-core utilization.

Sandia National Laboratories, Albuquerque, NM
Business Undergraduate Intern – Safeguards & Security (Nov. 2024 – May 2026)
- Spearheaded digital transformation of self-assessment reporting system using Power Automate, Excel computation logic, and automated SharePoint deliverables.
- Developed dynamic Power BI dashboards for executive security oversight.
- Honored with Intern Thunderbird Award (July 2026), 2x Sandia SPOT Awards, and 2x Sandia ERA Nominations.

NM Taxation and Revenue Department, Santa Fe, NM
Undergraduate Intern (May 2024 – Aug. 2024)
- Researched and structured datasets to support the modernization of state tax statutes; prepared data-driven briefings for the Cabinet Secretary.
- Conducted systematic inventory, distribution, and reconciliation of state assets.

Chill Zone LLC, Rio Rancho, NM
Marketing Coordinator & Sales Lead (Mar. 2021 – Nov. 2024)
- Maintained the point-of-sale (POS) and inventory database for a retail business generating $150k–$200k annually, ensuring transactional accuracy.
- Managed onboarding and operational training for 3+ new hires annually and provided daily floor guidance to a team of 5–10 staff members.

University of Denver, Denver, CO
Honors Program Recruitment Assistant (Sept. 2022 – June 2023)
- Managed prospective student demographic datasets from SIS to support student recruitment campaigns for the University Honors Program.

APPLIED SYSTEMS & VENTURES
Emily Erickson Massage LLC, Albuquerque, NM (emilyericksonmassage.com)
General Business Administrator & Systems Lead (2024 – Present)
- Manage business and technical operations: website build & maintenance, online booking system, City of Albuquerque business licensing and NM RLD state compliance, bookkeeping, and quarterly state GRT and federal tax filings.

EDUCATION
University of New Mexico, Albuquerque, NM
M.S. in Computer Science (Plan I Thesis Option) (Aug. 2026 – Expected May 2028, Part-Time)
- Focus: Parallel architectures, distributed systems, algorithms, scientific computing simulation, computer graphics.
- Coursework: CS 561 (Algorithms), CS 512 (Computer Graphics), CS 533 (Experimental Methods in CS), CS 341L (Computer Architecture).

University of New Mexico, Albuquerque, NM
B.S. in Mathematics & Sociology (Dual Major), Minor in Computer Science (Aug. 2023 – May 2026)
- Conferred Summa Cum Laude with a 3.96 Cumulative GPA across 141 collegiate credit hours.
- UNM Presidential Scholarship Recipient (top 75 incoming New Mexico freshmen).
- Coursework: Scientific Computing (MATH 471), Real Analysis (MATH 401), Numerical Computing (MATH 375), Linear Algebra (MATH 321), PDEs (MATH 312), Vector Analysis (MATH 311), DSA I & II (CS 361L/362).

University of Denver, Denver, CO
Undergraduate Coursework in Mathematics & Socio-Legal Studies (Sept. 2022 – June 2023)
- Elected Freshman Senator in Undergraduate Student Government; collegiate honors curriculum.

HONORS & RECOGNITION
- Intern Thunderbird Award (Sandia National Laboratories, July 2026)
- Sandia SPOT Award (2x Recipient)
- Sandia Employee Recognition Award (ERA) Nominee (2x Nominee)
- Summa Cum Laude Honors (UNM, 3.96 GPA)
- UNM Presidential Scholarship (2023 – 2026)
- Student Government Senator (University of Denver, 2022 – 2023)
- Community Impact Award (The ASK Academy, May 2022)

TECHNICAL SKILLS
Languages: Python (NumPy, SciPy, mpi4py), Bash, C/C++, SQL (PostgreSQL), MATLAB, C# (Unity), GLSL/HLSL, Java, LaTeX
HPC & Systems: MPI, OpenMP, SLURM, TOSS RHEL / Linux, InfiniBand, Omni-Path, Lustre, NFS
Observability & Tools: PostgreSQL, Grafana, Starfish, Redash, Power BI, Power Automate, Git/GitHub/LoboGit, OpenXR VR`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#161920] border border-white/[0.12] rounded-xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden font-sans">
        
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#0F1115] border-b border-white/[0.08] print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>Resume Sheet</span>
            </span>
            <span className="hidden sm:inline-block text-slate-600 font-mono text-xs">|</span>
            <span className="hidden sm:flex items-center gap-1 text-xs text-amber-400 font-mono">
              <Shield className="w-3 h-3" />
              <span>DOE Q Clearance (Active)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161920] border border-white/[0.1] hover:border-white/20 text-xs font-mono text-slate-300 transition-colors cursor-pointer"
              title="Copy plain text version"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-sky-500 hover:bg-sky-400 text-xs font-mono font-semibold text-slate-950 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-white/[0.06] text-slate-400 hover:text-white transition-colors ml-2 cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0F1115] text-slate-200">
          <div
            id="printable-resume-sheet"
            className="max-w-3xl mx-auto bg-[#161920] border border-white/[0.08] p-8 sm:p-12 rounded-lg shadow-sm print:shadow-none print:border-none print:bg-white print:text-black space-y-6 text-xs leading-relaxed"
          >
            {/* Resume Header */}
            <div className="text-center border-b border-white/[0.08] print:border-black/30 pb-4 space-y-1">
              <h1 className="text-2xl font-bold text-slate-100 print:text-black tracking-tight">
                Andrew J. Erickson
              </h1>
              <div className="text-[11px] text-slate-400 print:text-neutral-700 flex flex-wrap items-center justify-center gap-2 font-mono">
                <span>Albuquerque, NM</span>
                <span>•</span>
                <span>(505) 269-4251</span>
                <span>•</span>
                <span className="text-sky-400 print:text-black font-semibold">ajerickson107@gmail.com</span>
              </div>
              <div className="text-[11px] text-slate-400 print:text-neutral-700 flex flex-wrap items-center justify-center gap-3 font-mono pt-0.5">
                <a href="https://github.com/ajerickson107" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 print:text-black">
                  github.com/ajerickson107
                </a>
                <span>•</span>
                <a href="https://lobogit.unm.edu/aerickson107" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 print:text-black">
                  lobogit.unm.edu/aerickson107
                </a>
                <span>•</span>
                <a href="https://www.linkedin.com/in/andrew-j-erickson/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 print:text-black">
                  linkedin.com/in/andrew-j-erickson
                </a>
                <span>•</span>
                <span className="text-amber-400 print:text-black font-semibold">
                  Clearance: DOE Q Clearance (Active)
                </span>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 print:text-black border-b border-white/[0.08] print:border-black/30 pb-1 mb-2 font-mono">
                Professional Experience
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between font-semibold text-slate-100 print:text-black">
                    <span>Sandia National Laboratories — R&D S&E Computer Science (HPC Systems)</span>
                    <span className="font-mono text-[11px]">Oct. 2026 – Present</span>
                  </div>
                  <div className="text-[11px] font-mono text-sky-400 print:text-neutral-700">
                    Full-Time | Promoted from Graduate Intern
                  </div>
                  <ul className="list-disc list-inside text-slate-300 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>HPC Telemetry Ingestion: Engineering multi-cluster telemetry pipelines polling compute metrics and SLURM logs into PostgreSQL.</li>
                    <li>Cluster Sanity Automation (admincheck): Developed and maintain automated daily Python sanity utility validating administrative nodes, Lustre/NFS filesystems, and InfiniBand/Omni-Path network fabrics with responsive HTML reporting.</li>
                    <li>Operational Triage: Collaborating with system administrators on cluster triage, isolating node hardware anomalies, and investigating partition queue bottlenecks.</li>
                    <li>Storage Optimization: Profiling petabytes of parallel storage using Starfish and Redash to isolate cold data and improve allocation efficiency.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-100 print:text-black">
                    <span>Sandia National Laboratories — R&D Graduate & Undergraduate Intern (HPC Systems)</span>
                    <span className="font-mono text-[11px]">May 2026 – Oct. 2026</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Engineered multi-cluster telemetry pipeline via Python and Bash automating ETL into PostgreSQL and Grafana.</li>
                    <li>Hardened multi-cluster telemetry pipelines, scheduler log ingestion, and admincheck daily cluster sanity sweeps.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-100 print:text-black">
                    <span>Sandia National Laboratories — Business Undergraduate Intern (Safeguards & Security)</span>
                    <span className="font-mono text-[11px]">Nov. 2024 – May 2026</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Spearheaded digital transformation of self-assessment reporting system using Power Automate, Excel computation logic, and automated SharePoint deliverables.</li>
                    <li>Developed dynamic Power BI dashboards for executive security oversight.</li>
                    <li>Honored with Intern Thunderbird Award (July 2026), 2x Sandia SPOT Awards, and 2x Sandia ERA Nominations.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-100 print:text-black">
                    <span>NM Taxation and Revenue Department — Undergraduate Intern</span>
                    <span className="font-mono text-[11px]">May 2024 – Aug. 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Researched and structured datasets to support the modernization of state tax statutes; prepared data-driven briefings for the Cabinet Secretary.</li>
                    <li>Conducted systematic inventory, distribution, and reconciliation of state assets.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-100 print:text-black">
                    <span>Chill Zone LLC — Marketing Coordinator & Sales Lead</span>
                    <span className="font-mono text-[11px]">Mar. 2021 – Nov. 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Maintained the point-of-sale (POS) and inventory database for a retail business generating $150k–$200k annually, ensuring inventory and transactional accuracy.</li>
                    <li>Managed onboarding and training for new hires and provided floor leadership to a 5–10 person team.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-100 print:text-black">
                    <span>University of Denver — Honors Program Recruitment Assistant</span>
                    <span className="font-mono text-[11px]">Sept. 2022 – June 2023</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Managed prospective student demographic datasets from SIS to support student recruitment campaigns for the University Honors Program.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Applied Systems & Ventures */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 print:text-black border-b border-white/[0.08] print:border-black/30 pb-1 mb-2 font-mono">
                Applied Systems & Ventures
              </h2>
              <div>
                <div className="flex justify-between font-semibold text-slate-100 print:text-black">
                  <span>Emily Erickson Massage LLC — General Business Administrator & Systems Lead</span>
                  <span className="font-mono text-[11px]">2024 – Present</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 print:text-neutral-700">
                  emilyericksonmassage.com | Albuquerque, NM
                </div>
                <ul className="list-disc list-inside text-slate-300 print:text-neutral-700 space-y-0.5 mt-1">
                  <li>Manage business and technical operations: website build & maintenance, online booking system, City of Albuquerque business licensing and NM RLD state compliance, bookkeeping, and quarterly state GRT and federal tax filings.</li>
                </ul>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 print:text-black border-b border-white/[0.08] print:border-black/30 pb-1 mb-2 font-mono">
                Education
              </h2>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between font-semibold text-slate-100 print:text-black">
                    <span>University of New Mexico</span>
                    <span className="font-mono text-[11px]">Albuquerque, NM</span>
                  </div>
                  <div className="flex justify-between text-slate-300 print:text-neutral-800 italic">
                    <span>M.S. Computer Science (Plan I Thesis Option)</span>
                    <span className="font-mono text-[11px] not-italic">Expected May 2028 (Part-Time)</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-400 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Research Focus: Parallel architectures, distributed systems, algorithms, scientific computing simulation, computer graphics.</li>
                    <li>Graduate Coursework: CS 561 (Algorithms), CS 512 (Computer Graphics), CS 533 (Experimental Methods in CS), CS 341L (Computer Architecture).</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-100 print:text-black">
                    <span>University of New Mexico</span>
                    <span className="font-mono text-[11px]">Albuquerque, NM</span>
                  </div>
                  <div className="flex justify-between text-slate-300 print:text-neutral-800 italic">
                    <span>B.S. Mathematics & Sociology (Dual Major), Minor in Computer Science</span>
                    <span className="font-mono text-[11px] not-italic">Aug. 2023 – May 2026</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-400 print:text-neutral-700 space-y-0.5 mt-1">
                    <li><strong className="text-slate-100 print:text-black">Cumulative GPA: 3.96 / 4.0</strong> — Awarded <strong className="text-slate-100 print:text-black">Summa Cum Laude</strong> | UNM Presidential Scholarship</li>
                    <li>Coursework: Scientific Computing (MATH 471), Real Analysis (MATH 401), Numerical Computing (MATH 375), Linear Algebra, PDEs, Vector Analysis, Complex Variables, DSA I & II.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-100 print:text-black">
                    <span>University of Denver</span>
                    <span className="font-mono text-[11px]">Denver, CO</span>
                  </div>
                  <div className="flex justify-between text-slate-300 print:text-neutral-800 italic">
                    <span>Undergraduate Coursework in Mathematics & Socio-Legal Studies</span>
                    <span className="font-mono text-[11px] not-italic">Sept. 2022 – June 2023</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-400 print:text-neutral-700 space-y-0.5 mt-1">
                    <li>Elected Freshman Senator in Undergraduate Student Government; collegiate honors curriculum.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Honors & Awards */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 print:text-black border-b border-white/[0.08] print:border-black/30 pb-1 mb-2 font-mono">
                Honors & Recognition
              </h2>
              <ul className="list-disc list-inside text-slate-400 print:text-neutral-700 space-y-1">
                <li><strong className="text-slate-100 print:text-black">Intern Thunderbird Award:</strong> Sandia National Laboratories laboratory-wide honor for digital automation (July 2026).</li>
                <li><strong className="text-slate-100 print:text-black">Sandia SPOT Award (2x Recipient):</strong> Cash performance award presented by Center Director.</li>
                <li><strong className="text-slate-100 print:text-black">Sandia ERA Nominee (2x Nominee):</strong> Nominated for systems integration and cost savings.</li>
                <li><strong className="text-slate-100 print:text-black">Summa Cum Laude Honors:</strong> Conferred with 3.96 GPA across 141 credit hours.</li>
                <li><strong className="text-slate-100 print:text-black">UNM Presidential Scholarship:</strong> Merit award granted to top 75 incoming freshmen in New Mexico.</li>
                <li><strong className="text-slate-100 print:text-black">Student Government Senator:</strong> University of Denver (2022 – 2023).</li>
                <li><strong className="text-slate-100 print:text-black">Community Impact Award:</strong> The ASK Academy (May 2022).</li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 print:text-black border-b border-white/[0.08] print:border-black/30 pb-1 mb-2 font-mono">
                Technical Tooling & Skills
              </h2>
              <div className="space-y-1 text-slate-300 print:text-neutral-800">
                <div><strong className="text-slate-100 print:text-black">Languages:</strong> Python (NumPy, SciPy, mpi4py), Bash, C/C++, SQL (PostgreSQL), MATLAB, C# (Unity), GLSL/HLSL, Java, LaTeX</div>
                <div><strong className="text-slate-100 print:text-black">High Performance Computing:</strong> MPI, OpenMP, SLURM Job Scheduling, TOSS RHEL / Linux, InfiniBand, Omni-Path, Lustre, NFS</div>
                <div><strong className="text-slate-100 print:text-black">Data & Observability:</strong> PostgreSQL, Grafana, Starfish, Redash, Microsoft Power Platform (Power BI, Power Automate), SharePoint</div>
                <div><strong className="text-slate-100 print:text-black">Interactive & Graphics:</strong> Unity, OpenXR VR, WebGL, Shader Programming</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
