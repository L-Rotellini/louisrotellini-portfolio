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
  githubUrl?: string;
}

export const profile = {
  name: "Louis Rotellini",
  title: "Webmaster / Développeur web",
  location: "Lille / Paris",
  email: "louis.rotellini@gmail.com",
  phone: "",
  availability: "Disponible pour missions freelance (soir/week-end)",
  // Renseigne si tu veux le CTA "Malt"
  maltUrl: "https://www.malt.fr/profile/louisrotellini",
  // linkedinUrl: "https://www.linkedin.com/in/louisrotellini/",
  // githubUrl: "https://github.com/tonhandle",
} satisfies Profile;
