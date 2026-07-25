// src/data/career.ts

import type { CareerData } from "../types/career";

export const careerData: CareerData = {
  title: "Carreira",

  description:
    "Minha trajetória na tecnologia está sendo construída por meio da graduação, projetos pessoais e aprendizado contínuo. Acredito que evoluir constantemente faz parte da profissão de desenvolvedor.",

  resumeUrl: "/curriculo.pdf",

  education: [
    {
      institution: "Fatec São José dos Campos",

      course: "Análise e Desenvolvimento de Sistemas",

      period: "2025 — 2027",

      status: "Em andamento",

      description:
        "Tecnólogo focado em desenvolvimento de software, banco de dados, engenharia de software e metodologias ágeis."
    }
  ],

  certifications: [
    {
      title: "Adicionar certificado",
      institution: "Nome da instituição",
      year: "2026"
    }
  ],

  skills: {
    languages: [
      "Java",
      "Python",
      "TypeScript"
    ],

    frontend: [
      "React",
      "Tailwind CSS"
    ],

    backend: [
      "Spring Boot"
    ],

    databases: [
      "MySQL"
    ],

    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA"
    ]
  },

  languages: [
    {
      language: "Português",
      level: "Nativo"
    },
    {
      language: "Inglês",
      level: "B2"
    },
    {
      language: "Francês",
      level: "A1"
    }
  ]
};