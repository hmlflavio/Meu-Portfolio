// src/data/projects.ts

import type { Project } from "../types/projects";

export const projectsData: Project[] = [
  {
    id: 1,

    title: "Sistema de Gestão Escolar",

    description:
      "Plataforma para gerenciamento de notas, faltas e alunos desenvolvida como projeto integrador da Fatec.",

    technologies: ["Java", "Spring Boot", "MySQL", "React"],

    status: "Concluído",

    category: "Faculdade",

    github: "#",

    demo: "#",

    featured: true,
  },

  {
    id: 2,

    title: "Portfólio Pessoal",

    description:
      "Meu espaço na internet para compartilhar projetos, carreira, evolução e interesses pessoais.",

    technologies: ["React", "TypeScript", "Tailwind CSS"],

    status: "Em desenvolvimento",

    category: "Pessoal",

    github: "#",

    featured: true,
  },

  {
    id: 3,

    title: "Automação de Relatórios",

    description:
      "Aplicação em Python para geração automática de relatórios em PDF a partir de planilhas.",

    technologies: ["Python", "Pandas", "ReportLab"],

    status: "Concluído",

    category: "Pessoal",

    github: "#",

    featured: false,
  },
];