export interface ContactLink {
  name: string;
  username: string;
  url: string;

  icon:
    | "github"
    | "linkedin"
    | "instagram"
    | "spotify"
    | "lastfm"
    | "letterboxd"
    | "pinterest";
}

export interface ContactData {
  hero: {
    title: string;
    description: string;
  };

  professional: ContactLink[];

  social: ContactLink[];

  email: {
    title: string;
    description: string;
    address: string;
    buttonLabel: string;
  };

  form: {
    title: string;
    description: string;
    submitLabel: string;
  };

  footer: {
    text: string;
  };
}