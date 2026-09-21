import { ExperienceItem, EducationItem, ProjectItem, SkillCategory, AwardItem, CourseItem } from '../types';

export const personalInfo = {
  name: "Andrew John Erickson",
  shortName: "Andrew Erickson",
  title: "High-Performance Computing & R&D Systems Engineer",
  tagline: "HPC Systems R&D Intern at Sandia National Laboratories | Active DOE Q Clearance",
  location: "Albuquerque, NM",
  phone: "(505) 269-4251",
  email: "ajerickson107@gmail.com",
  eduEmail: "aerickson107@unm.edu",
  photoUrl: "/IMG_4475.jpg",
  clearance: "DOE Q Clearance (Active)",
  clearanceDetails: "Department of Energy Q-Level Security Clearance (Active)",
  links: {
    github: "https://github.com/ajerickson107",
    linkedin: "https://www.linkedin.com/in/andrew-j-erickson/",
    lobogit: "https://lobogit.unm.edu/aerickson107",
    gitlabHeatEq: "https://lobogit.unm.edu/aerickson107/2025_fall_math471_erickson",
  },
  bio: "Applied Mathematics graduate (Summa Cum Laude, 3.96 GPA) and M.S. Computer Science student at the University of New Mexico, specializing in high-performance computing, scientific simulation, and system observability. Currently an R&D Graduate Intern in HPC Systems at Sandia National Laboratories, maintaining cluster sanity monitors and polishing multi-cluster telemetry pipelines.",
  missionGoal: "Advancing high-performance systems engineering, scientific computing simulation, and automated cluster observability at Sandia National Laboratories and DOE research facilities."
};

export const experiences: ExperienceItem[] = [
  {
    id: "sandia-hpc-grad",
    role: "R&D Graduate Intern – HPC Systems",
    company: "Sandia National Laboratories",
    location: "Albuquerque, NM",
    period: "Aug. 2026 – Present",
    type: "R&D",
    highlights: [
      "Cluster Sanity Automation (admincheck): Developed and maintain an automated daily Python sanity utility that validates administrative nodes, verifies key parallel storage filesystems (Lustre/NFS), and confirms operational health across InfiniBand (IB) and Omni-Path (OPA) network fabrics with responsive HTML email alerting.",
      "Telemetry Pipeline Polishing: Hardened and optimized the multi-cluster telemetry pipeline, enhancing throughput, exception handling, and automated scheduler log ingestion for production cluster monitoring into PostgreSQL.",
      "Operational Triage: Collaborated closely with system administrators on daily cluster diagnostic sweeps, isolating node hardware anomalies and partition queue bottlenecks."
    ],
    skills: ["Python", "Bash", "PostgreSQL", "Grafana", "SLURM", "TOSS RHEL", "InfiniBand", "Lustre", "Omni-Path"],
    awards: ["Active DOE Q Clearance Deployment"]
  },
  {
    id: "sandia-hpc-undergrad",
    role: "R&D Undergraduate Intern – HPC Systems",
    company: "Sandia National Laboratories",
    location: "Albuquerque, NM",
    period: "May 2026 – Aug. 2026",
    type: "R&D",
    highlights: [
      "HPC Telemetry & Observability Pipeline: Engineered an end-to-end multi-cluster telemetry pipeline using Python and Bash to automate the collection, parsing, and ETL of node-level utilization and SLURM scheduler data into PostgreSQL.",
      "Operational Analytics: Designed interactive Grafana dashboards to visualize historical telemetry, enabling system administrators to analyze user resource efficiency and identify anomalous node behavior.",
      "Storage Resource Optimization: Developed Starfish and Redash dashboards to identify stagnant data across petabytes of storage resources, increasing the efficient use of high-end systems and reducing cost impact."
    ],
    skills: ["Python", "Bash", "PostgreSQL", "Grafana", "SLURM", "Starfish", "Redash", "TOSS RHEL", "Linux"],
    awards: ["Transitioned to Graduate Intern Appointment"]
  },
  {
    id: "sandia-sec",
    role: "Business Undergraduate Intern – Safeguards & Security",
    company: "Sandia National Laboratories",
    location: "Albuquerque, NM",
    period: "Nov. 2024 – May 2026",
    type: "Engineering",
    highlights: [
      "Business Intelligence Automation: Spearheaded digital transformation of the self-assessment reporting system, replacing manual spreadsheets with a fully automated ecosystem.",
      "Technical Implementation: Engineered backend pipelines using Microsoft Power Automate to ingest data from MS Forms, process verification logic in Excel, and generate HTML/PDF deliverables automatically pushed to SharePoint.",
      "Data Visualization: Developed dynamic Power BI dashboards to provide executive leadership with real-time oversight and analytics for security assessments.",
      "Recognition: Honored with the Intern Thunderbird Award, two Sandia SPOT Awards, and two Sandia ERA Nominations for cost savings and operational modernization."
    ],
    skills: ["Microsoft Power Platform", "Power BI", "Power Automate", "SharePoint", "Excel Modeling", "Process Automation"],
    awards: ["Intern Thunderbird Award (July 2026)", "Sandia SPOT Award (2x)", "Sandia ERA Nominee (2x)"]
  },
  {
    id: "nm-tax-rev",
    role: "Undergraduate Intern",
    company: "NM Taxation and Revenue Department",
    location: "Santa Fe, NM",
    period: "May 2024 – Aug. 2024",
    type: "Analysis",
    highlights: [
      "Data Analysis: Researched and structured datasets to assist in the modernization of state tax statutes and prepared data-driven municipal briefings for the Cabinet Secretary.",
      "Asset Management: Conducted inventory, distribution, and systematic reconciliation of state assets."
    ],
    skills: ["Data Analysis", "SQL", "Statistical Modeling", "Executive Briefings", "Asset Management"]
  },
  {
    id: "chill-zone",
    role: "Marketing Coordinator & Sales Lead",
    company: "Chill Zone LLC",
    location: "Rio Rancho, NM",
    period: "Mar. 2021 – Nov. 2024",
    type: "Operations",
    highlights: [
      "Database Management: Maintained the Point of Sale (POS) database for a business generating $150k–$200k annually, ensuring inventory and transactional accuracy.",
      "Operational Leadership: Managed onboarding and training for 3+ new hires annually, providing operational guidance to a team of 5–10 staff members."
    ],
    skills: ["Database Operations", "Inventory Systems", "Team Leadership", "POS Architecture"]
  },
  {
    id: "univ-denver-recruitment",
    role: "Honors Program Recruitment Assistant",
    company: "University of Denver",
    location: "Denver, CO",
    period: "Sept. 2022 – June 2023",
    type: "Operations",
    highlights: [
      "Recruitment Operations: Managed prospective student demographic datasets from the Student Information System (SIS) to support student recruitment campaigns for the University Honors Program.",
      "Admissions Coordination: Collaborated with academic directors and faculty to design informational presentations and coordinate prospective student campus visits."
    ],
    skills: ["Student Information System (SIS)", "Dataset Compilation", "Student Outreach", "Academic Communications"]
  }
];

export const allCourseworkList: CourseItem[] = [
  // Graduate Courses (UNM MS CS)
  { code: "CS 512", name: "Intro to Computer Graphics", credits: 3.0, grade: "In Progress", level: "Graduate", subject: "Computer Science", status: "In Progress", term: "Fall 2026" },
  { code: "CS 533", name: "Experimental Methods in CS", credits: 3.0, grade: "In Progress", level: "Graduate", subject: "Computer Science", status: "In Progress", term: "Fall 2026" },
  { code: "CS 561", name: "Algorithms & Data Structures", credits: 3.0, grade: "In Progress", level: "Graduate", subject: "Computer Science", status: "In Progress", term: "Fall 2026" },
  { code: "CS 341L", name: "Intro to Computer Architecture & Organization", credits: 3.0, grade: "In Progress", level: "Undergraduate", subject: "Computer Science", status: "In Progress", term: "Fall 2026" },

  // Senior Year (UNM BS Math / CS Minor)
  { code: "CS 362", name: "Data Structures & Algorithms II", credits: 3.0, grade: "A", level: "Undergraduate", subject: "Computer Science", status: "Completed", term: "Spring 2026" },
  { code: "MATH 401", name: "Advanced Calculus I (Real Analysis)", credits: 4.0, grade: "B+", level: "Undergraduate", subject: "Mathematics", status: "Completed", term: "Spring 2026" },
  { code: "SOCI 420", name: "Race & Inequality", credits: 3.0, grade: "A", level: "Undergraduate", subject: "Sociology & Statistics", status: "Completed", term: "Spring 2026" },
  { code: "MATH 471", name: "Intro to Scientific Computing", credits: 3.0, grade: "A", level: "Undergraduate", subject: "Mathematics", status: "Completed", term: "Fall 2025" },
  { code: "CS 361L", name: "Data Structures & Algorithms I", credits: 3.0, grade: "A+", level: "Undergraduate", subject: "Computer Science", status: "Completed", term: "Fall 2025" },
  { code: "SOCI 2120", name: "Intro Criminal Justice System", credits: 3.0, grade: "A+", level: "Undergraduate", subject: "Sociology & Statistics", status: "Completed", term: "Fall 2025" },
  { code: "SOCI 415", name: "Inequality and Power", credits: 3.0, grade: "A+", level: "Undergraduate", subject: "Sociology & Statistics", status: "Completed", term: "Fall 2025" },

  // Junior Year (UNM)
  { code: "MATH 375", name: "Intro to Numerical Computing", credits: 3.0, grade: "A", level: "Undergraduate", subject: "Mathematics", status: "Completed", term: "Spring 2025" },
  { code: "MATH 313", name: "Complex Variables", credits: 3.0, grade: "B+", level: "Undergraduate", subject: "Mathematics", status: "Completed", term: "Spring 2025" },
  { code: "CS 241L", name: "Data Organization", credits: 3.0, grade: "A", level: "Undergraduate", subject: "Computer Science", status: "Completed", term: "Spring 2025" },
  { code: "SOCI 488", name: "Sociology & Criminology Internship", credits: 6.0, grade: "A+", level: "Undergraduate", subject: "Sociology & Statistics", status: "Completed", term: "Spring 2025" },
  { code: "MATH 311", name: "Vector Analysis", credits: 3.0, grade: "A", level: "Undergraduate", subject: "Mathematics", status: "Completed", term: "Fall 2024" },
  { code: "MATH 312", name: "Partial Differential Equations for Engineering", credits: 3.0, grade: "B", level: "Undergraduate", subject: "Mathematics", status: "Completed", term: "Fall 2024" },
  { code: "CS 152L", name: "Computer Programming Fundamentals", credits: 3.0, grade: "A", level: "Undergraduate", subject: "Computer Science", status: "Completed", term: "Fall 2024" },
  { code: "CS 261", name: "Mathematical Foundations of CS", credits: 3.0, grade: "A", level: "Undergraduate", subject: "Computer Science", status: "Completed", term: "Fall 2024" },
  { code: "SOCI 381L", name: "Sociological Data Analysis", credits: 4.0, grade: "A+", level: "Undergraduate", subject: "Sociology & Statistics", status: "Completed", term: "Fall 2024" },

  // Sophomore Year (UNM)
  { code: "MATH 321", name: "Linear Algebra", credits: 3.0, grade: "A-", level: "Undergraduate", subject: "Mathematics", status: "Completed", term: "Spring 2024" },
  { code: "MATH 1350", name: "Introduction to Statistics", credits: 3.0, grade: "A", level: "Undergraduate", subject: "Mathematics", status: "Completed", term: "Spring 2024" },
  { code: "SOCI 371", name: "Sociological Theory", credits: 3.0, grade: "A+", level: "Undergraduate", subject: "Sociology & Statistics", status: "Completed", term: "Spring 2024" },
  { code: "SOCI 380", name: "Intro Research Methods", credits: 3.0, grade: "B", level: "Undergraduate", subject: "Sociology & Statistics", status: "Completed", term: "Spring 2024" },
  { code: "THEA 1220", name: "Beginning Acting", credits: 3.0, grade: "A+", level: "Undergraduate", subject: "General & Humanities", status: "Completed", term: "Spring 2024" },
  { code: "MATH 2531", name: "Calculus III", credits: 4.0, grade: "A+", level: "Undergraduate", subject: "Mathematics", status: "Completed", term: "Fall 2023" },
  { code: "MATH 316", name: "Applied Ordinary Differential Equations", credits: 3.0, grade: "B", level: "Undergraduate", subject: "Mathematics", status: "Completed", term: "Fall 2023" },
  { code: "ENG 130L", name: "Intro to Engineering Computing", credits: 3.0, grade: "A+", level: "Undergraduate", subject: "Computer Science", status: "Completed", term: "Fall 2023" },
  { code: "SOCI 1110", name: "Intro to Sociology", credits: 3.0, grade: "A+", level: "Undergraduate", subject: "Sociology & Statistics", status: "Completed", term: "Fall 2023" },
  { code: "SPAN 1110", name: "Spanish I", credits: 3.0, grade: "A+", level: "Undergraduate", subject: "General & Humanities", status: "Completed", term: "Fall 2023" },

  // Transfer Credits (University of Denver 2022–2023 - Transferred as Credit 'CR' without letter grade)
  { code: "MATH 1410", name: "Calculus I", credits: 4.0, grade: "CR", level: "Undergraduate", subject: "Mathematics", status: "Completed", term: "Transfer (DU 2022–2023)" },
  { code: "MATH 1420", name: "Calculus II", credits: 4.0, grade: "CR", level: "Undergraduate", subject: "Mathematics", status: "Completed", term: "Transfer (DU 2022–2023)" },
  { code: "PLSC 1000", name: "Intro to Political Science", credits: 3.0, grade: "CR", level: "Undergraduate", subject: "General & Humanities", status: "Completed", term: "Transfer (DU 2022–2023)" },
  { code: "WRIT 1122", name: "Rhetoric & Academic Writing", credits: 4.0, grade: "CR", level: "Undergraduate", subject: "General & Humanities", status: "Completed", term: "Transfer (DU 2022–2023)" },
  { code: "WRIT 1133", name: "Writing and Research", credits: 4.0, grade: "CR", level: "Undergraduate", subject: "General & Humanities", status: "Completed", term: "Transfer (DU 2022–2023)" },
  { code: "ASEM 1111", name: "First Year Honors Seminar", credits: 4.0, grade: "CR", level: "Undergraduate", subject: "General & Humanities", status: "Completed", term: "Transfer (DU 2022–2023)" },
  { code: "INTS 1500", name: "Contemporary Issues in Int'l Studies", credits: 4.0, grade: "CR", level: "Undergraduate", subject: "General & Humanities", status: "Completed", term: "Transfer (DU 2022–2023)" },
  { code: "INTS 1700", name: "Intro to International Relations", credits: 4.0, grade: "CR", level: "Undergraduate", subject: "General & Humanities", status: "Completed", term: "Transfer (DU 2022–2023)" },
  { code: "SPAN 1001", name: "Spanish Language & Culture I", credits: 4.0, grade: "CR", level: "Undergraduate", subject: "General & Humanities", status: "Completed", term: "Transfer (DU 2022–2023)" },
  { code: "SPAN 1002", name: "Spanish Language & Culture II", credits: 4.0, grade: "CR", level: "Undergraduate", subject: "General & Humanities", status: "Completed", term: "Transfer (DU 2022–2023)" }
];

export const educationList: EducationItem[] = [
  {
    id: "unm-ms-cs",
    degree: "Master of Science in Computer Science (Plan I Thesis Option)",
    institution: "University of New Mexico",
    location: "Albuquerque, NM",
    period: "Expected May 2028 (Enrolled Fall 2026)",
    details: "Focusing on High-Performance Computing (HPC) modeling, simulation, and cluster telemetry. Applying for the National Science Foundation Graduate Research Fellowship Program (NSF GRFP).",
    highlights: [
      "Thesis Track: Large-scale parallel simulation, scientific computing modeling, and high-performance system architectures.",
      "Bridging computational mathematics background with advanced computer science research while interning at Sandia National Laboratories.",
      "Current Coursework: Computer Graphics (CS 512), Experimental Methods (CS 533), and Advanced Algorithms (CS 561)."
    ]
  },
  {
    id: "unm-bs-math",
    degree: "Bachelor of Science in Mathematics & Sociology (Dual Major), Computer Science Minor",
    institution: "University of New Mexico",
    location: "Albuquerque, NM",
    period: "Aug. 2023 – May 2026 (Graduated May 16, 2026)",
    gpa: "3.96 / 4.0",
    honors: "SUMMA CUM LAUDE | Dean's List (Majority of Semesters)",
    details: "Rigorous quantitative foundation uniting partial differential equations, numerical computing, linear algebra, vector analysis, real analysis, and core computer science algorithms.",
    highlights: [
      "Graduated Summa Cum Laude with a 3.96 Cumulative GPA across 141 completed credit hours.",
      "UNM Presidential Scholarship Recipient (awarded to the top 75 incoming freshmen in New Mexico).",
      "Dean's List recognition across the majority of academic semesters at UNM."
    ]
  },
  {
    id: "univ-denver",
    degree: "Undergraduate Coursework in Mathematics & Socio-Legal Studies",
    institution: "University of Denver",
    location: "Denver, CO",
    period: "Sept. 2022 – June 2023",
    details: "Completed Calculus sequences and collegiate honors curriculum prior to transferring to UNM to pursue dual majors in Mathematics and Computer Science.",
    highlights: [
      "Honors Program Recruitment Assistant: Managed student demographic datasets from SIS for outreach.",
      "Undergraduate Student Government: Elected Freshman Senator representing student directives in university governance."
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: "mpi-heat-equation",
    title: "Parallel 2D Heat Equation Solver on HPC Cluster",
    subtitle: "Scientific Computing & Domain Decomposition with MPI",
    category: "HPC & Simulation",
    period: "Fall 2025",
    summary: "Developed a parallelized numerical solver for the unsteady 2D Heat Conduction Equation using Python and mpi4py, deploying the workload on the UNM Center for Advanced Research Computing (CARC) supercomputer.",
    architectureDetails: [
      "Discretized the 2D parabolic partial differential equation using the explicit Forward-Time Central-Space (FTCS) finite difference method.",
      "Implemented 1D and 2D Cartesian spatial domain decomposition across arbitrary MPI ranks with non-blocking ghost cell (halo) boundary exchange buffers.",
      "Authored SLURM batch allocation scripts to automate node configuration, CPU core pinning, and multi-node scalability benchmarks.",
      "Maintained structured version control and build automation in a Linux (WSL) environment pushed directly to UNM LoboGit."
    ],
    keyOutcomes: [
      "Demonstrated parallel speedup across multi-core nodes on the UNM Wheeler/CARC supercomputing cluster.",
      "Validated numerical stability against the CFL stability condition (dt <= dx^2 * dy^2 / (2 * alpha * (dx^2 + dy^2))).",
      "Full repository code published on UNM LoboGit with reproducible SLURM job scripts."
    ],
    technologies: ["Python", "mpi4py (MPI)", "NumPy", "SLURM", "UNM CARC Supercomputer", "Bash", "Linux", "Git"],
    repoUrl: "https://lobogit.unm.edu/aerickson107/2025_fall_math471_erickson",
    interactiveDemoType: "heat-equation",
    featured: true
  },
  {
    id: "hpc-telemetry-pipeline",
    title: "Multi-Cluster Telemetry & Observability Pipeline",
    subtitle: "Automated ETL, Structured Storage & Grafana Analytics",
    category: "Telemetry & Automation",
    period: "May 2026 – August 2026",
    summary: "Engineered an end-to-end telemetry pipeline across HPC production clusters at Sandia National Laboratories to aggregate node utilization, compute metrics, and SLURM scheduler logs into a centralized PostgreSQL data lake.",
    architectureDetails: [
      "Automated extraction, transform, and load (ETL) routines via asynchronous Bash and Python jobs polling node-level metrics without degrading compute throughput.",
      "Designed normalized PostgreSQL schemas with timeseries indexing for rapid querying over hardware and job records.",
      "Constructed Grafana operational dashboards for system administrators, enabling drill-down analysis from cluster-wide heatmaps to per-core memory/CPU utilization.",
      "Integrated automated anomaly detection rules to isolate failing compute nodes and degraded InfiniBand links before job failures occur."
    ],
    keyOutcomes: [
      "Reduced root-cause diagnostic time for cluster administrators from hours to minutes.",
      "Empowered capacity planning and allocation reviews across high-demand national laboratory workloads.",
      "Identified dormant cluster nodes and unbalanced scheduler queues."
    ],
    technologies: ["Python", "Bash", "PostgreSQL", "Grafana", "SLURM", "TOSS RHEL", "InfiniBand", "Linux"],
    interactiveDemoType: "terminal",
    featured: true
  },
  {
    id: "admin-nodecheck",
    title: "HPC Administrative Node Health Automation",
    subtitle: "Automated Cluster Verification & Resilient Alerting System",
    category: "Systems",
    period: "2026",
    summary: "Created an automated daily Python sanity utility to validate administrative nodes, verify network fabrics (InfiniBand/Omni-Path), check key mount points (NFS/Lustre), and dispatch responsive HTML email diagnostics.",
    architectureDetails: [
      "Executes parallel diagnostic probes across login, management, and storage gateway nodes checking daemon states and port responsiveness.",
      "Parses InfiniBand (ibstat, ibnetdiscover) and Omni-Path fabric interfaces to ensure full link speed and zero error counter degradation.",
      "Engineered an automated email delivery subsystem generating responsive, cross-platform HTML/CSS reports rendered cleanly in both desktop Outlook and mobile clients.",
      "Structured with configurable JSON thresholds, retry timeouts, and exit code telemetry."
    ],
    keyOutcomes: [
      "Catches transient storage unmounts and fabric link drops prior to user login spikes.",
      "Standardized daily operational health reports across cluster administrative staff.",
      "High reliability: Zero false-positive dispatch rate through multi-tier retry verifications."
    ],
    technologies: ["Python", "Bash", "Linux / TOSS RHEL", "InfiniBand", "Lustre Filesystems", "HTML/CSS Email Engines", "Systemd"],
    interactiveDemoType: "terminal",
    featured: true
  },
  {
    id: "sandia-bi-automation",
    title: "Sandia Safeguards & Security Self-Assessment Ecosystem",
    subtitle: "Award-Winning Enterprise Automation & Real-Time BI",
    category: "Telemetry & Automation",
    period: "Nov. 2024 – May 2026",
    summary: "Spearheaded the digital transformation of Sandia National Laboratories' Safeguards & Security self-assessment ecosystem, replacing manual spreadsheets with an automated backend and dynamic Power BI dashboards.",
    architectureDetails: [
      "Designed Microsoft Power Automate pipelines ingesting responses from structured Microsoft Forms.",
      "Engineered logic in Excel and Power Automate to perform multi-stage verification and calculate compliance scores.",
      "Automated generation of formal HTML/PDF executive assessment deliverables systematically published to protected SharePoint repositories.",
      "Developed interactive Power BI executive dashboards providing leadership with real-time oversight of security assessment milestones."
    ],
    keyOutcomes: [
      "Recognized with the prestigious Sandia Intern Thunderbird Award (July 2026) for driving lab mission impact.",
      "Awarded two Sandia SPOT Awards and two Sandia ERA Nominations for cost savings and system modernization.",
      "Eliminated hundreds of manual labor hours per assessment cycle while enhancing data transparency."
    ],
    technologies: ["Microsoft Power Automate", "Power BI", "SharePoint", "Excel Computation", "HTML/CSS Reporting", "Data Integration"],
    featured: false
  },
  {
    id: "webgl-transformations",
    title: "Computer Graphics: WebGL 2D Transformation Matrices",
    subtitle: "Custom GLSL Vertex Animations & Affine Matrix Engine",
    category: "Graphics & Math",
    period: "Fall 2026",
    summary: "Constructed an interactive graphics demonstration implementing 2D affine geometric transformation matrices from mathematical first principles, featuring vertex manipulation and GLSL shaders.",
    architectureDetails: [
      "Engineered 3x3 homogeneous coordinate transformation matrices for translation, rotation, scaling, and shear in raw WebGL.",
      "Wrote custom GLSL vertex and fragment shaders for real-time procedural color interpolation and deformation.",
      "Implemented a lightweight interactive control interface allowing users to adjust matrix composition order and observe non-commutative matrix multiplication in action."
    ],
    keyOutcomes: [
      "Demonstrated mathematical mastery of linear algebra applied to real-time graphics pipelines.",
      "Zero external math libraries used: pure typed arrays for Matrix3x3 arithmetic.",
      "High 60fps performance across mobile and desktop browsers."
    ],
    technologies: ["WebGL", "GLSL", "TypeScript / JavaScript", "Linear Algebra", "HTML5 Canvas"],
    interactiveDemoType: "webgl-matrix",
    featured: false
  },
  {
    id: "storage-analytics",
    title: "Petabyte-Scale Storage Resource Optimization",
    subtitle: "Stagnant Data Profiling with Starfish & Redash",
    category: "Systems",
    period: "2026",
    summary: "Developed analytic dashboards in Starfish and Redash to categorize multi-petabyte high-performance storage systems, isolating stale datasets and optimizing tiered storage costs.",
    architectureDetails: [
      "Queried filesystem metadata catalogs to identify dormant datasets exceeding retention policies.",
      "Designed visual distribution graphs showing file age versus capacity consumption.",
      "Formulated migration recommendations to transition cold data from flash tiers to archival storage."
    ],
    keyOutcomes: [
      "Freed substantial capacity on primary high-speed parallel storage systems.",
      "Improved lab research group compliance with institutional storage quotas."
    ],
    technologies: ["Starfish Storage", "Redash", "SQL", "Parallel Filesystems", "Data Profiling"],
    featured: false
  }
];

// Calibrated accurately and proportionally to reflect strong quantitative foundations and hands-on systems work
export const skillCategories: SkillCategory[] = [
  {
    category: "HPC & Systems Engineering",
    iconName: "Cpu",
    skills: [
      { name: "Linux & TOSS RHEL", level: "Advanced", description: "Daily CLI cluster administration, Tri-Lab Operating System Stack, WSL, SSH headless workflows" },
      { name: "SLURM Workload Manager", level: "Proficient", description: "Job batch scripts, allocation parameters, partition management, queue monitoring" },
      { name: "MPI (Message Passing Interface)", level: "Proficient", description: "Domain decomposition, non-blocking ghost cell halo exchange in 2D Heat Equation solver" },
      { name: "OpenMP & Multi-Threading", level: "Proficient", description: "Shared-memory parallelization, thread allocation, loop scheduling" },
      { name: "UNM CARC Supercomputer", level: "Proficient", description: "Deployed multi-node MPI jobs and scalability benchmarks on Center for Advanced Research Computing" },
      { name: "InfiniBand & Omni-Path Fabrics", level: "Proficient", description: "Fabric link verification, ibstat telemetry checks, automated node health diagnostics" },
      { name: "Parallel Filesystems (Lustre / NFS)", level: "Proficient", description: "Mount verification, high-throughput I/O monitoring, cluster sanity scripting" }
    ]
  },
  {
    category: "Programming & Scientific Computing",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Advanced", description: "NumPy, SciPy, mpi4py, automated ETL pipelines, telemetry parsers, daily health sanity monitors" },
      { name: "Bash / Shell Scripting", level: "Advanced", description: "Automated cluster diagnostics, cron jobs, environment setup, scheduler log parsing" },
      { name: "C / C++", level: "Proficient", description: "Systems programming, data structures, pointer memory management, CS 241L/341L" },
      { name: "SQL", level: "Proficient", description: "PostgreSQL schema design, time-series telemetry indexing, aggregation queries" },
      { name: "MATLAB", level: "Proficient", description: "Numerical analysis, finite difference discretization, matrix decompositions" },
      { name: "GLSL & WebGL", level: "Proficient", description: "2D/3D affine transformation matrices, custom vertex/fragment shaders" },
      { name: "Java", level: "Proficient", description: "Object-oriented software development, data structures coursework" },
      { name: "LaTeX", level: "Proficient", description: "Scientific documentation, mathematical problem sets, technical reports" }
    ]
  },
  {
    category: "Telemetry, Data & Observability",
    iconName: "LineChart",
    skills: [
      { name: "Microsoft Power Platform", level: "Advanced", description: "Power BI, Power Automate, SharePoint automation (awarded Thunderbird & SPOT Awards)" },
      { name: "PostgreSQL", level: "Proficient", description: "HPC telemetry data lake ingestion, daily automated ETL synchronization" },
      { name: "Grafana", level: "Proficient", description: "Operational dashboards for cluster administrators, hardware resource utilization heatmaps" },
      { name: "Starfish & Redash", level: "Proficient", description: "Petabyte-scale storage metadata queries and capacity visualization" },
      { name: "Automated HTML Reporting", level: "Proficient", description: "Responsive email templates for daily cluster health status and alert dispatch" }
    ]
  },
  {
    category: "Applied Mathematics & Theory",
    iconName: "Binary",
    skills: [
      { name: "Linear Algebra & Vector Calculus", level: "Advanced", description: "Matrix decompositions, eigenvalues, vector fields, affine transformations (3.96 GPA)" },
      { name: "Calculus & Analysis", level: "Advanced", description: "Real analysis, multivariate calculus, metric spaces (MATH 2531/401)" },
      { name: "Numerical Computing & PDEs", level: "Advanced", description: "Finite difference methods, CFL stability criteria, parabolic solvers (MATH 375/471/312)" },
      { name: "Data Structures & Algorithms", level: "Proficient", description: "Algorithmic complexity, graph algorithms, dynamic programming (CS 361L/362, A/A+)" },
      { name: "Complex Variables", level: "Proficient", description: "Analytic functions, contour integration, residue theory (MATH 313)" }
    ]
  },
  {
    category: "Tools, Version Control & Hardware",
    iconName: "Terminal",
    skills: [
      { name: "Git, GitHub & LoboGit", level: "Proficient", description: "CLI version control, branch management, collaborative repositories" },
      { name: "Remote Development (VSCode / Nano)", level: "Proficient", description: "SSH-based editing on remote headless cluster nodes and server environments" },
      { name: "Dedicated Server Administration (Windows / Linux)", level: "Proficient", description: "Configured dedicated community server on Windows for Sandia TITANS interns, JVM tuning, port security" },
      { name: "Hardware & Diagnostic Testing", level: "Proficient", description: "CANbus OBD-II scan diagnostics, multimeter circuit troubleshooting, custom PC builds" }
    ]
  }
];

export const awards: AwardItem[] = [
  {
    id: "thunderbird",
    title: "Intern Thunderbird Award",
    organization: "Sandia National Laboratories",
    date: "July 2026",
    description: "Prestigious laboratory honor awarded for embodying laboratory core values and driving mission impact through the digital transformation of the Safeguards & Security self-assessment reporting system.",
    badgeType: "national-lab"
  },
  {
    id: "spot-award",
    title: "Sandia SPOT Award (2x Recipient)",
    organization: "Sandia National Laboratories",
    date: "Awarded 2x",
    description: "Special cash performance bonus awarded by the Center Director & Leadership for architecting and deploying an automated self-assessments reporting and business intelligence system.",
    badgeType: "national-lab"
  },
  {
    id: "era-nomination",
    title: "Sandia Employee Recognition Award (ERA) Nominee (2x)",
    organization: "Sandia National Laboratories",
    date: "Nominated 2x",
    description: "Formally nominated for an advanced approach to systems integration, cost savings, and structural improvement across laboratory operations.",
    badgeType: "national-lab"
  },
  {
    id: "summa-cum-laude",
    title: "Summa Cum Laude Honors (3.96 / 4.0 GPA)",
    organization: "University of New Mexico",
    date: "May 2026",
    description: "Conferred with highest university honors upon graduation with dual major in Mathematics and Sociology, minor in Computer Science.",
    badgeType: "academic"
  },
  {
    id: "presidential-scholarship",
    title: "UNM Presidential Scholarship",
    organization: "University of New Mexico",
    date: "2023 – 2026",
    description: "Premier academic merit award granted to the top 75 incoming freshmen across New Mexico.",
    badgeType: "academic"
  },
  {
    id: "senator",
    title: "Student Government Senator",
    organization: "University of Denver",
    date: "2022 – 2023",
    description: "Elected Freshman Senator in Undergraduate Student Government; managed student directives and voted on multi-million dollar budgets.",
    badgeType: "leadership"
  },
  {
    id: "community-impact",
    title: "Community Impact Award",
    organization: "The ASK Academy",
    date: "May 2022",
    description: "Awarded for outstanding community involvement, leadership as National Honor Society President, and Model UN leadership.",
    badgeType: "leadership"
  }
];

export const hobbiesAndInterests = [
  {
    title: "Dedicated Minecraft Server Administration",
    category: "Systems & Community",
    description: "Configured and hosted a dedicated Paper Minecraft server on Windows for the Sandia National Laboratories TITANS SW (Technical Internships to Accelerate National Security – Software) intern cohort during the summer. Managed custom plugin configurations, JVM memory allocation and garbage collection tuning, automated backup routines, and port security.",
    icon: "Server"
  },
  {
    title: "Video Game Development",
    category: "Software & Creative",
    description: "Designs and programs independent game mechanics, interactive physics systems, procedural generation algorithms, and shader graphics. Bridges computational mathematics with real-time interactive rendering and player experience design.",
    icon: "Gamepad2"
  },
  {
    title: "Hardware, Electronics & Automotive",
    category: "Hardware",
    description: "Hands-on automotive maintenance, mechanical repairs, and electrical troubleshooting using digital multimeters, diagnostic test leads, and CANbus OBD-II scan adapters. Built and maintains a custom dual-boot SteamOS/Windows performance machine.",
    icon: "Wrench"
  },
  {
    title: "Rock Climbing",
    category: "Recreation",
    description: "Active bouldering and sport climbing enthusiast, navigating indoor routes and New Mexico's outdoor crags. Cultivates problem-solving discipline, dynamic balance, and physical resilience.",
    icon: "Mountain"
  }
];
