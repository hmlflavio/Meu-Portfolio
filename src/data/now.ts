// src/data/now.ts

import type { NowData } from "../types/now";

export const nowData: NowData = {
  hero: {
    title: "Now",
    description:
      "Um retrato do que está ocupando minha atenção atualmente. Esta página acompanha meus estudos, projetos e interesses do momento.",
  },

  sections: [
    {
      icon: "book",
      title: "Estudando",
      description:
        "Tecnologias e assuntos que estou aprendendo neste momento.",
      items: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Arquitetura Front-end",
      ],
    },

    {
      icon: "rocket",
      title: "Construindo",
      description: "Projetos em desenvolvimento.",
      items: [
        "Meu portfólio pessoal",
        "Sistema PDI da Fatec",
      ],
    },

    {
      icon: "target",
      title: "Próximos objetivos",
      description: "Metas para os próximos meses.",
      items: [
        "Conseguir um estágio",
        "Aprender Spring Boot",
        "Melhorar meu inglês",
      ],
    },

    {
      icon: "music",
      title: "Atualmente",
      description:
        "Algumas coisas que têm feito parte da minha rotina.",
      items: [
        "Ouvindo novas músicas",
        "Explorando referências de design",
        "Descobrindo novos filmes",
      ],
    },
  ],
};