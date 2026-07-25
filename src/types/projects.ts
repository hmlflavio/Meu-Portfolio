// src/types/project.ts

export type ProjectStatus = "Concluído" | "Em desenvolvimento";

export type ProjectCategory =
  | "Faculdade"
  | "Pessoal"
  | "Freelance"
  | "Open Source";

export interface Project {
  id: number;
  title: string;
  description: string;

  technologies: string[];

  status: ProjectStatus;
  category: ProjectCategory;

  github?: string;
  demo?: string;

  featured: boolean;
}