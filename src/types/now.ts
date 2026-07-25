// src/types/now.ts

export interface NowSection {
  icon: "book" | "rocket" | "target" | "music";

  title: string;

  description?: string;

  items: string[];
}

export interface NowData {
  hero: {
    title: string;
    description: string;
  };

  sections: NowSection[];
}