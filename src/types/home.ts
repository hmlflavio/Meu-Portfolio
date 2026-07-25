// src/types/home.ts

export interface HomeButton {
  label: string;
  href: string;
  external?: boolean;
}

export interface QuickLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
}

export interface Highlight {
  icon: "graduation" | "code" | "map-pin";
  text: string;
}

export interface GalleryCallToAction {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export interface Hero {
  name: string;
  title: string;
  description: string;
  availability: string;
  buttons: HomeButton[];
}

export interface HomeData {
  hero: Hero;
  mission: string;
  quickLinks: QuickLink[];
  highlights: Highlight[];
  galleryCallToAction: GalleryCallToAction;
}