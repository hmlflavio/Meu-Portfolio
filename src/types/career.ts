// src/types/career.ts

export interface Education {
  institution: string;
  course: string;
  period: string;
  status: string;
  description: string;
}

export interface Certification {
  title: string;
  institution: string;
  year: string;
  certificateUrl?: string;
}

export interface Skills {
  languages: string[];
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
}

export interface Language {
  language: string;
  level: string;
}

export interface CareerData {
  title: string;
  description: string;

  resumeUrl: string;

  education: Education[];

  certifications: Certification[];

  skills: Skills;

  languages: Language[];
}