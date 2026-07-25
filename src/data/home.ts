// src/data/home.ts

import type { HomeData } from "../types/home";

export const homeData: HomeData = {
  hero: {
    name: "Flávio Lins",

    title:
      "Desenvolvedor Full Stack em formação e estudante de Análise e Desenvolvimento de Sistemas.",

    description:
      "Gosto de criar aplicações, aprender novas tecnologias e transformar ideias em projetos que unem tecnologia, criatividade e aprendizado contínuo.",

    availability: "Disponível para estágio.",

    buttons: [
      {
        label: "Ver Projetos",
        href: "/projetos",
      },
      {
        label: "Baixar Currículo",
        href: "/curriculo.pdf",
      },
    ],
  },

  mission:
    "Construindo software, explorando ideias e documentando minha evolução como desenvolvedor e pessoa.",

  quickLinks: [
    {
      name: "GitHub",
      url: "https://github.com/SEU_USUARIO",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/SEU_USUARIO",
      icon: "linkedin",
    },
    {
      name: "E-mail",
      url: "mailto:seu@email.com",
      icon: "mail",
    },
  ],

  highlights: [
    {
      icon: "graduation",
      text: "ADS — Fatec São José dos Campos",
    },
    {
      icon: "code",
      text: "Foco em Java, Python e MySQL",
    },
    {
      icon: "map-pin",
      text: "São José dos Campos — SP",
    },
  ],

  galleryCallToAction: {
    title: "Além da tecnologia",

    description:
      "Este não é apenas meu portfólio profissional. É um espaço onde registro meus projetos, interesses, conquistas e tudo aquilo que faz parte da minha trajetória.",

    buttonLabel: "Explorar a Galeria",

    href: "/galeria",
  },
};