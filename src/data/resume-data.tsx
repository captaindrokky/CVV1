import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mauricio Tovar",
  initials: "MT",
  location: "BJ, CDMX",
  locationLink: "contact@tovarcode.me",
  about: "Developer Engineer UX IX",
  summary: "Para obtener un puesto desafiante como Asistente de Asesor, donde mi habilidad para comunicarme eficazmente, mi capacidad para organizar información y mi compromiso con la excelencia en el servicio puedan ser utilizados para brindar un apoyo valioso al equipo y a los clientes.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "contact@tovarcode.me",
    tel: "5523067985",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Captaindrokky",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mauricio-tovar-b5a735259/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Oracle",
      degree: "Developer Front End",
      start: "2023",
      end: "2024",
    },
    {
      school: "Dev F Bootcamp",
      degree: "Developer Front End",
      start: "2022",
      end: "2023",
    },
  ],
  work: [
    {
      company: "VW AUDI CUPRA",
      link: "",
      badges: ["Remote"],
      title: "Client Care",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description: "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "ATT SOPORTE",
      link: "https://ATT.COM",
      badges: ["Presencial"],
      title: "Soporte técnico",
      start: "2018",
      end: "2019",
      description: "Soporte técnico conexión a radio bases",
    },
  ],
  skills: [
    "JavaScript",
    "React/Next.js/Remix",
    "Figma",
  ],
  projects: [
    {
      title: "Project 1",
      description: "Description of project 1",
      techStack: ["React", "TypeScript"],
      link: { href: "https://example.com/project1" },
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      techStack: ["Next.js", "GraphQL"],
      link: { href: "https://example.com/project2" },
    },
  ],
} as const;
