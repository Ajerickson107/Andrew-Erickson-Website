export interface CourseItem {
  code: string;
  name: string;
  grade?: string;
  credits?: string | number;
  level: 'Graduate' | 'Undergraduate';
  subject: 'Computer Science' | 'Mathematics' | 'Sociology & Statistics' | 'General & Humanities';
  status: 'Completed' | 'In Progress';
  term?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'R&D' | 'Engineering' | 'Analysis' | 'Operations';
  highlights: string[];
  skills: string[];
  awards?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  honors?: string;
  details: string;
  highlights: string[];
  coursework?: CourseItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'HPC & Simulation' | 'Telemetry & Automation' | 'Graphics & Math' | 'Systems';
  period: string;
  summary: string;
  architectureDetails: string[];
  keyOutcomes: string[];
  technologies: string[];
  repoUrl?: string;
  interactiveDemoType?: 'heat-equation' | 'terminal' | 'webgl-matrix';
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Working Knowledge' | 'Core';
    description?: string;
  }[];
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  badgeType: 'national-lab' | 'academic' | 'leadership';
}

