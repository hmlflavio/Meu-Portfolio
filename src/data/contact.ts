import type { ContactData } from "../types/contact";

export const contactData: ContactData = {
  hero: {
    title: "Contato",
    description:
      "Se quiser conversar sobre tecnologia, projetos, oportunidades ou apenas trocar uma ideia, fique à vontade para entrar em contato.",
  },

  professional: [
    {
      name: "GitHub",
      username: "@SEU_USUARIO",
      url: "https://github.com/SEU_USUARIO",
      icon: "github",
    },
    {
      name: "LinkedIn",
      username: "Flávio Lins",
      url: "https://linkedin.com/in/SEU_USUARIO",
      icon: "linkedin",
    },
  ],

  social: [
    {
      name: "Instagram",
      username: "@SEU_USUARIO",
      url: "https://instagram.com/SEU_USUARIO",
      icon: "instagram",
    },
    {
      name: "Spotify",
      username: "@SEU_USUARIO",
      url: "https://open.spotify.com/user/...",
      icon: "spotify",
    },
    {
      name: "Last.fm",
      username: "@SEU_USUARIO",
      url: "https://last.fm/user/SEU_USUARIO",
      icon: "lastfm",
    },
    {
      name: "Letterboxd",
      username: "@SEU_USUARIO",
      url: "https://letterboxd.com/SEU_USUARIO",
      icon: "letterboxd",
    },
    {
      name: "Pinterest",
      username: "@SEU_USUARIO",
      url: "https://pinterest.com/SEU_USUARIO",
      icon: "pinterest",
    },
  ],

  email: {
    title: "E-mail",

    description:
      "Prefere falar diretamente? Você também pode copiar meu endereço.",

    address: "flavio@email.com",

    buttonLabel: "Copiar endereço",
  },

  form: {
    title: "Me mande uma mensagem",

    description:
      "Tem alguma dúvida, proposta, sugestão ou apenas quer conversar? Ficarei feliz em ler sua mensagem.",

    submitLabel: "Enviar mensagem",
  },

  footer: {
    text:
      "Obrigado pela visita. Espero que este portfólio transmita um pouco da minha trajetória e da forma como gosto de construir tecnologia.",
  },
};