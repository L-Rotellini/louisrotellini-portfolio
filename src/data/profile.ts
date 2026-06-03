// src/data/profile.ts
export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  availability?: string;

  // liens optionnels
  maltUrl?: string;
  linkedinUrl?: string;
}

export const profile = {
  name: "Louis Rotellini",
  title: "Développeur Front-End Senior · React / Next.js · Workflow AI-Native",
  location: "Lille / Paris",
  email: "louis.rotellini@gmail.com",
  phone: "",
  availability: "",
  maltUrl: "https://www.malt.fr/profile/louisrotellini",
  linkedinUrl: "https://www.linkedin.com/in/louis-rotellini/",
} satisfies Profile;
