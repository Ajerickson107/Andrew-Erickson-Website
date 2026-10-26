import { ExperienceItem, EducationItem, ProjectItem, VentureItem, BentoItem, SkillCategory, AwardItem, CourseItem } from '../types';

export const personalInfo = {
  name: "Andrew J. Erickson",
  fullName: "Andrew John Erickson",
  title: "R&D S&E Computer Science — HPC Systems",
  roleStatus: "R&D S&E @ Sandia HPC | M.S. CS @ UNM",
  location: "Albuquerque, NM",
  phone: "(505) 269-4251",
  email: "ajerickson107@gmail.com",
  eduEmail: "aerickson107@unm.edu",
  photoUrl: "/images/PXL_20251230_001347792.jpg",
  photoCaption: "Emily and me in Las Vegas",
  clearance: "Active DOE Q Clearance",
  clearanceDetails: "Department of Energy Q-Level Security Clearance (Active)",
  links: {
    github: "https://github.com/ajerickson107",
    linkedin: "https://www.linkedin.com/in/andrew-j-erickson/",
    lobogit: "https://lobogit.unm.edu/aerickson107",
    gitlabHeatEq: "https://lobogit.unm.edu/aerickson107/2025_fall_math471_erickson",
  },
  heroHeading: "Computer scientist working on high-performance computing systems, telemetry pipelines, and applied mathematics.",
  heroBio: "I recently converted from a graduate intern to a full-time R&D S&E Computer Science role at Sandia National Laboratories within HPC Systems, while completing my Master of Science in Computer Science at the University of New Mexico after earning my undergraduate degree in Mathematics.",
  colophon: "Built with precision. Running on clean HTML/CSS/JS, hosted via GitHub Pages. Powered by Linux, mechanical keyboards, and energy drinks.",
  locationDisplay: "Albuquerque, New Mexico"
};

export const experiences: ExperienceItem[] = [
  {
    id: "sandia-hpc-fulltime",
    role: "R&D S&E Computer Science — HPC Systems",
    company: "Sandia National Laboratories",
    location: "Albuquerque, NM",
    period: "Oct. 2026 – Present",
    type: "Full-Time",
    statusBadge: "Full-Time | Promoted from Graduate Intern",
    highlights: [
      "HPC System Monitoring & Telemetry: Engineering multi-cluster telemetry pipelines that continuously poll compute node metrics, scheduler queues, and fabric health into a centralized PostgreSQL timeseries data store.",
      "Cluster Sanity Automation (admincheck): Developed and maintain an automated daily Python health utility verifying administrative nodes, Lustre/NFS parallel storage mounts, and InfiniBand/Omni-Path network fabrics with responsive HTML reporting.",
      "Performance Observability & Triage: Working closely with system administrators to diagnose node hardware anomalies, investigate queue bottlenecks, and streamline scheduler throughput.",
      "Storage Resource Optimization: Running analytic queries and dashboards in Starfish and Redash across petabytes of parallel storage to detect stagnant datasets and help teams stay within storage quotas."
    ],
    skills: ["Python", "Bash", "PostgreSQL", "Grafana", "SLURM", "TOSS RHEL", "InfiniBand", "Omni-Path", "Lustre", "Linux"],
    awards: ["Active DOE Q Clearance", "Promoted to Full-Time R&D S&E"]
  },
  {
    id: "sandia-hpc-grad",
    role: "R&D Graduate Intern – HPC Systems",
    company: "Sandia National Laboratories",
    location: "Albuquerque, NM",
    period: "Aug. 2026 – Oct. 2026",
    type: "R&D",
    statusBadge: "Graduate Intern",
    highlights: [
      "Hardened multi-cluster telemetry pipelines, enhancing automated scheduler log ingestion and error handling into PostgreSQL.",
      "Maintained and enhanced admincheck cluster sanity monitors across production nodes.",
      "Assisted cluster administrators with daily diagnostic sweeps, isolating node hardware anomalies across InfiniBand and Omni-Path fabrics."
    ],
    skills: ["Python", "Bash", "PostgreSQL", "SLURM", "InfiniBand", "Lustre", "Linux", "TOSS RHEL"]
  },
  {
    id: "sandia-hpc-undergrad",
    role: "R&D Undergraduate Intern – HPC Systems",
    company: "Sandia National Laboratories",
    location: "Albuquerque, NM",
    period: "May 2026 – Aug. 2026",
    type: "R&D",
    statusBadge: "Undergraduate Intern",
    highlights: [
      "Engineered an end-to-end multi-cluster telemetry pipeline using Python and Bash to automate the collection, parsing, and ETL of node utilization and SLURM scheduler data into PostgreSQL.",
      "Constructed Grafana operational dashboards for system administrators, enabling drill-down analysis from cluster-wide heatmaps to per-core memory and CPU utilization.",
      "Built Starfish and Redash dashboards to profile petabyte-scale storage resources and identify cold data."
    ],
    skills: ["Python", "Bash", "PostgreSQL", "Grafana", "SLURM", "Starfish", "Redash", "Linux", "TOSS RHEL"]
  },
  {
    id: "sandia-sec",
    role: "Business Undergraduate Intern – Safeguards & Security",
    company: "Sandia National Laboratories",
    location: "Albuquerque, NM",
    period: "Nov. 2024 – May 2026",
    type: "Engineering",
    statusBadge: "Thunderbird Award & SPOT Recipient",
    highlights: [
      "Spearheaded the digital transformation of the Safeguards & Security self-assessment reporting system, replacing manual spreadsheets with an automated pipeline.",
      "Engineered backend pipelines using Microsoft Power Automate to ingest data from MS Forms, process verification logic in Excel, and generate formal PDF deliverables systematically published to SharePoint.",
      "Developed dynamic Power BI dashboards to provide executive leadership with real-time oversight of security assessment milestones.",
      "Honored with the Intern Thunderbird Award (July 2026), two Sandia SPOT Awards, and two Sandia ERA Nominations for cost savings and operational modernization."
    ],
    skills: ["Microsoft Power Platform", "Power BI", "Power Automate", "SharePoint", "Data Automation", "Process Modernization"],
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
      "Researched and structured datasets to support the modernization of state tax statutes; prepared data-driven municipal briefings for the Cabinet Secretary.",
      "Conducted systematic inventory, distribution, and reconciliation of state assets."
    ],
    skills: ["Data Analysis", "SQL", "Statistical Modeling", "Executive Briefings"]
  },
  {
    id: "chill-zone",
    role: "Marketing Coordinator & Sales Lead",
    company: "Chill Zone LLC",
    location: "Rio Rancho, NM",
    period: "Mar. 2021 – Nov. 2024",
    type: "Operations",
    highlights: [
      "Maintained the point-of-sale (POS) and inventory database for a retail business generating $150k–$200k annually, ensuring inventory and transactional accuracy.",
      "Managed onboarding and operational training for 3+ new hires annually and provided daily floor guidance to a team of 5–10 staff members."
    ],
    skills: ["Database Operations", "Inventory Systems", "POS Administration", "Team Leadership"]
  },
  {
    id: "univ-denver-recruitment",
    role: "Honors Program Recruitment Assistant",
    company: "University of Denver",
    location: "Denver, CO",
    period: "Sept. 2022 – June 2023",
    type: "Operations",
    highlights: [
      "Managed prospective student demographic datasets from the Student Information System (SIS) to support student recruitment campaigns for the University Honors Program.",
      "Collaborated with academic directors and faculty to design informational presentations and coordinate prospective student campus visits."
    ],
    skills: ["Student Information System (SIS)", "Dataset Management", "Academic Communications"]
  }
];

export const educationList: EducationItem[] = [
  {
    id: "unm-ms-cs",
    degree: "Master of Science in Computer Science",
    institution: "University of New Mexico",
    location: "Albuquerque, NM",
    period: "Aug. 2026 – Expected May 2028",
    details: "Pursuing my master's degree part-time while working full-time in HPC Systems at Sandia National Laboratories.",
    highlights: [
      "Focus areas: Parallel computer architectures, distributed systems, algorithms, scientific computing simulation, and computer graphics.",
      "Current coursework: Advanced Algorithms (CS 561), Intro to Computer Graphics (CS 512), Experimental Methods in CS (CS 533), and Intro to Computer Architecture & Organization (CS 341L).",
      "Plan I Thesis Option: Researching large-scale simulation and cluster performance observability."
    ]
  },
  {
    id: "unm-bs-math",
    degree: "Bachelor of Science in Mathematics & Sociology (Dual Major), Minor in Computer Science",
    institution: "University of New Mexico",
    location: "Albuquerque, NM",
    period: "Aug. 2023 – May 2026 (Graduated May 16, 2026)",
    gpa: "3.96 / 4.0",
    honors: "SUMMA CUM LAUDE | UNM Presidential Scholarship",
    details: "Completed 141 credit hours with highest university honors, uniting partial differential equations, numerical computing, linear algebra, vector analysis, real analysis, and foundational algorithms.",
    highlights: [
      "Graduated Summa Cum Laude with a 3.96 Cumulative GPA across 141 completed collegiate credit hours.",
      "UNM Presidential Scholarship Recipient (merit award granted to the top 75 incoming freshmen in New Mexico).",
      "Dean's List recognition across every semester enrolled at UNM.",
      "Coursework: Scientific Computing (MATH 471), Numerical Computing (MATH 375), Real Analysis (MATH 401), Linear Algebra (MATH 321), PDEs (MATH 312), Vector Analysis (MATH 311), Complex Variables (MATH 313), Data Structures & Algorithms I & II (CS 361L / CS 362)."
    ]
  },
  {
    id: "univ-denver",
    degree: "Undergraduate Coursework in Mathematics & Socio-Legal Studies",
    institution: "University of Denver",
    location: "Denver, CO",
    period: "Sept. 2022 – June 2023",
    details: "Completed collegiate calculus sequences and honors curriculum prior to transferring to UNM for dual Mathematics & Computer Science studies.",
    highlights: [
      "Honors Program Recruitment Assistant: Managed student demographic datasets from SIS for admissions outreach.",
      "Undergraduate Student Government: Elected Freshman Senator representing student directives in campus governance."
    ]
  }
];

export const awards: AwardItem[] = [
  {
    id: "thunderbird",
    title: "Intern Thunderbird Award",
    organization: "Sandia National Laboratories",
    date: "July 2026",
    description: "Sandia's premier laboratory-wide intern award, received for demonstrating laboratory core values and driving mission impact through the digital automation of the Safeguards & Security reporting system.",
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
    description: "Formally nominated for systems integration, cost savings, and structural improvements across laboratory operations.",
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
    description: "Elected Freshman Senator in Undergraduate Student Government; managed student directives and voted on university budgets.",
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

export const ventureData: VentureItem = {
  id: "emily-erickson-massage",
  title: "Emily Erickson Massage LLC",
  domain: "emilyericksonmassage.com",
  url: "https://emilyericksonmassage.com",
  role: "General Business Administrator & Systems Lead",
  period: "2024 – Present",
  status: "Active Practice",
  image: "/images/IMG_4587.jpg",
  imageCaption: "Emily's studio treatment room — Albuquerque, NM",
  summary: "Outside of engineering, I help my partner Emily manage the business and technical operations for her private massage therapy practice in Albuquerque. I built and maintain her website and booking system, take care of local business registration and state licensing compliance, and handle the bookkeeping and taxes. It’s been a great hands-on way to support a local business I care about.",
  stack: [
    {
      category: "Website & Online Booking",
      details: "Built and maintain emilyericksonmassage.com, with a clean online booking flow, automated appointment reminders, and mobile-friendly design."
    },
    {
      category: "Business Licensing & Compliance",
      details: "Handled city business registration and State of New Mexico Regulation & Licensing Department (RLD) establishment licensing."
    },
    {
      category: "Bookkeeping & Tax Administration",
      details: "Manage daily expense tracking, income reconciliation, and quarterly state Gross Receipts Tax (GRT) and federal filings."
    },
    {
      category: "Studio Buildout & Equipment",
      details: "Helped set up the treatment room, install custom lighting, and maintain equipment for client comfort."
    }
  ]
};

export const projects: ProjectItem[] = [
  {
    id: "hpc-telemetry-pipeline",
    title: "HPC Telemetry & Observability Pipeline",
    subtitle: "Automated Node Metrics ETL, Structured Storage & Sysadmin Dashboards",
    category: "HPC & Systems",
    period: "May 2026 – Present",
    summary: "Engineered an end-to-end telemetry pipeline across production HPC clusters at Sandia National Laboratories to aggregate node utilization, hardware metrics, and SLURM scheduler logs into a centralized PostgreSQL database.",
    architectureDetails: [
      "Automated extraction, transform, and load (ETL) routines via asynchronous Bash and Python jobs polling node-level metrics without degrading compute job throughput.",
      "Designed normalized PostgreSQL schemas with timeseries indexing for rapid querying over millions of hardware and job records.",
      "Constructed Grafana operational dashboards for system administrators, enabling drill-down analysis from cluster-wide heatmaps to per-core memory and CPU utilization.",
      "Integrated automated anomaly detection rules to isolate failing compute nodes and degraded InfiniBand links before jobs fail."
    ],
    keyOutcomes: [
      "Substantially reduced root-cause diagnostic time for cluster administrators across production partitions.",
      "Enabled empirical capacity planning and scheduler allocation reviews across national laboratory workloads.",
      "Automated discovery of dormant cluster nodes and unbalanced compute queues."
    ],
    technologies: ["Python", "Bash", "PostgreSQL", "Grafana", "SLURM", "TOSS RHEL", "InfiniBand", "Linux"],
    interactiveDemoType: "terminal",
    featured: true
  },
  {
    id: "mpi-heat-equation",
    title: "Parallel Scientific Computing: 2D Heat Equation Solver",
    subtitle: "Distributed Numerical Simulation with MPI & Domain Decomposition",
    category: "Simulation & Math",
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
      "Validated numerical stability against the CFL stability condition.",
      "Full repository code published on UNM LoboGit with reproducible SLURM job scripts."
    ],
    technologies: ["Python", "mpi4py (MPI)", "NumPy", "SLURM", "UNM CARC Supercomputer", "Bash", "Linux", "Git"],
    repoUrl: "https://lobogit.unm.edu/aerickson107/2025_fall_math471_erickson",
    interactiveDemoType: "heat-equation",
    featured: true
  },
  {
    id: "game-dev-interactive",
    title: "Game Development & Interactive Systems",
    subtitle: "Physics Mechanics, Custom HLSL Shaders & OpenXR VR",
    category: "Interactive & Graphics",
    period: "2024 – Present",
    summary: "Independent game development in Unity, C#, WebGL, and OpenXR VR — engineering responsive gameplay mechanics, custom graphics shaders, and spatial tracking systems.",
    architectureDetails: [
      "Programmed custom physics-based character controllers with kinematic movement, predictive collision solvers, and responsive input buffering.",
      "Authored procedural HLSL and GLSL vertex and fragment shaders for real-time lighting, distortion effects, and terrain deformations.",
      "Engineered full 6DoF spatial tracking, VR controller kinematics, and custom interactive grab systems built on the OpenXR standard.",
      "Optimized draw calls, asset packing, and frame rates for smooth 60fps WebGL in-browser delivery and 90Hz VR head-mounted displays."
    ],
    keyOutcomes: [
      "Designed and deployed multiple interactive prototypes combining computational math with game physics.",
      "Delivered high-performance real-time interactive loops with minimal CPU/GPU overhead.",
      "Bridged 3D affine matrix transformations and quaternion mathematics into playable spatial environments."
    ],
    technologies: ["Unity", "C#", "OpenXR VR", "WebGL", "HLSL / GLSL", "Linear Algebra", "Physics Engines"],
    interactiveDemoType: "game-dev",
    featured: true
  },
  {
    id: "admin-nodecheck",
    title: "HPC Administrative Node Health Automation (admincheck)",
    subtitle: "Automated Cluster Verification & Resilient Status Alerting",
    category: "Systems & Automation",
    period: "2026",
    summary: "Engineered an automated daily Python sanity utility that validates administrative nodes, verifies key parallel storage filesystems (Lustre/NFS), and confirms operational health across InfiniBand (IB) and Omni-Path (OPA) network fabrics with responsive HTML reporting.",
    architectureDetails: [
      "Executes parallel diagnostic probes across login, management, and storage gateway nodes checking daemon states and port responsiveness.",
      "Parses InfiniBand (ibstat, ibnetdiscover) and Omni-Path fabric interfaces to ensure full link speed and zero error counter degradation.",
      "Engineered an automated email delivery subsystem generating responsive, cross-platform HTML/CSS reports rendered cleanly in desktop and mobile clients.",
      "Structured with configurable JSON thresholds, retry timeouts, and exit code telemetry."
    ],
    keyOutcomes: [
      "Catches transient storage unmounts and fabric link drops prior to user login spikes.",
      "Standardized daily operational health reports across cluster administrative staff.",
      "Zero false-positive dispatch rate through multi-tier retry verifications."
    ],
    technologies: ["Python", "Bash", "Linux / TOSS RHEL", "InfiniBand", "Lustre Filesystems", "Systemd", "HTML Email"],
    interactiveDemoType: "terminal",
    featured: true
  }
];

export const bentoItems: BentoItem[] = [
  {
    id: "dogs-qa",
    tag: "The Pugs",
    title: "Clementine & Mosey",
    caption: "Resident Morale Officers & QA Team",
    description: "Our two black pugs, Clementine and Mosey, keeping us company on the patio, claiming camping chairs, and making sure we take regular breaks away from our screens.",
    image: "/images/PXL_20260802_022017884.jpg",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: "bouldering",
    tag: "Rock Climbing",
    title: "Bouldering & Movement",
    caption: "Route problem-solving & movement",
    description: "I spend much of my free time bouldering at local gyms and on New Mexico granite. It’s a great physical puzzle—figuring out balance, body positioning, and movement sequences to solve a tough route.",
    image: "/images/Screenshot 2026-10-25 174224.jpg",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: "field-hardware",
    tag: "Outdoors & Hardware",
    title: "Outdoors & Custom Builds",
    caption: "Field exploration & custom hardware rigs",
    description: "Hiking and exploring the New Mexico backcountry with friends (like this hike to an old decommissioned helicopter), building custom PCs, and tinkering with dedicated Linux setups and Steam Machines.",
    image: "/images/1.jpg",
    aspectRatio: "aspect-[4/3]"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "HPC & Systems Engineering",
    iconName: "Cpu",
    skills: [
      { name: "Linux & TOSS RHEL", level: "Advanced", description: "Daily CLI cluster administration, Tri-Lab Operating System Stack, WSL, SSH workflows" },
      { name: "SLURM Workload Manager", level: "Proficient", description: "Job batch scripts, allocation parameters, partition management, queue monitoring" },
      { name: "MPI (Message Passing Interface)", level: "Proficient", description: "Domain decomposition, non-blocking ghost cell halo exchange in 2D Heat Equation solver" },
      { name: "OpenMP & Multi-Threading", level: "Proficient", description: "Shared-memory parallelization, thread allocation, loop scheduling" },
      { name: "UNM CARC Supercomputer", level: "Proficient", description: "Deployed multi-node MPI jobs and scalability benchmarks on Center for Advanced Research Computing" },
      { name: "InfiniBand & Omni-Path Fabrics", level: "Proficient", description: "Fabric link verification, ibstat checks, automated node health diagnostics" },
      { name: "Parallel Filesystems (Lustre / NFS)", level: "Proficient", description: "Mount verification, high-throughput I/O monitoring, cluster sanity scripting" }
    ]
  },
  {
    category: "Programming & Scientific Computing",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Advanced", description: "NumPy, SciPy, mpi4py, automated ETL pipelines, telemetry parsers, daily health sanity monitors" },
      { name: "Bash / Shell Scripting", level: "Advanced", description: "Automated cluster diagnostics, cron jobs, environment setup, scheduler log parsing" },
      { name: "C / C++", level: "Proficient", description: "Systems programming, data structures, pointer memory management" },
      { name: "SQL", level: "Proficient", description: "PostgreSQL schema design, time-series telemetry indexing, aggregation queries" },
      { name: "MATLAB", level: "Proficient", description: "Numerical analysis, finite difference discretization, matrix decompositions" },
      { name: "C# / Unity", level: "Proficient", description: "Physics systems, input buffering, gameplay architecture, OpenXR VR" },
      { name: "GLSL & HLSL", level: "Proficient", description: "Affine matrix transforms, procedural lighting shaders, vertex deformation" },
      { name: "Java", level: "Proficient", description: "Object-oriented software development, data structures coursework" },
      { name: "LaTeX", level: "Proficient", description: "Scientific documentation, mathematical problem sets, technical reports" }
    ]
  },
  {
    category: "Telemetry, Data & Observability",
    iconName: "LineChart",
    skills: [
      { name: "PostgreSQL", level: "Proficient", description: "HPC telemetry data lake ingestion, daily automated ETL synchronization" },
      { name: "Grafana", level: "Proficient", description: "Operational dashboards for cluster administrators, hardware resource utilization heatmaps" },
      { name: "Microsoft Power Platform", level: "Advanced", description: "Power BI, Power Automate, SharePoint automation (awarded Thunderbird & SPOT Awards)" },
      { name: "Starfish & Redash", level: "Proficient", description: "Petabyte-scale storage metadata queries and capacity visualization" },
      { name: "Automated HTML Reporting", level: "Proficient", description: "Responsive email templates for daily cluster health status and alert dispatch" }
    ]
  },
  {
    category: "Applied Mathematics & Theory",
    iconName: "Binary",
    skills: [
      { name: "Linear Algebra & Vector Calculus", level: "Advanced", description: "Matrix decompositions, eigenvalues, vector fields, affine transformations (3.96 GPA)" },
      { name: "Calculus & Real Analysis", level: "Advanced", description: "Real analysis, multivariate calculus, metric spaces" },
      { name: "Numerical Computing & PDEs", level: "Advanced", description: "Finite difference methods, CFL stability criteria, parabolic solvers" },
      { name: "Data Structures & Algorithms", level: "Proficient", description: "Algorithmic complexity, graph algorithms, dynamic programming" },
      { name: "Complex Variables", level: "Proficient", description: "Analytic functions, contour integration, residue theory" }
    ]
  },
  {
    category: "Tools & Hardware",
    iconName: "Terminal",
    skills: [
      { name: "Git, GitHub & LoboGit", level: "Proficient", description: "CLI version control, branch management, collaborative repositories" },
      { name: "Remote Development (VSCode / Nano)", level: "Proficient", description: "SSH-based editing on remote headless cluster nodes and server environments" },
      { name: "Dedicated Server Administration", level: "Proficient", description: "Configured dedicated community server for Sandia TITANS cohort, JVM tuning, port security" },
      { name: "Hardware & Diagnostic Testing", level: "Proficient", description: "CANbus OBD-II diagnostics, multimeter troubleshooting, custom PC builds" }
    ]
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
  { code: "SPAN 1110", name: "Spanish I", credits: 3.0, grade: "A+", level: "Undergraduate", subject: "General & Humanities", status: "Completed", term: "Fall 2023" }
];
