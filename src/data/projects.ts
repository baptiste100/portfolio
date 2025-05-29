import javascriptIcon from "../assets/icons/javascript.png";
import type { ProjectData } from "../types.ts";

export const PROJECTS : ProjectData[] = [
    {
        title: "Portfolio",
        description: "Site web qui répertorie tous mes projets",
        technos: ["typescript", "react"],
        github: "https://github.com/baptiste100/portfolio"
    },
    {
        title: "ChecklistApp",
        description: "Application de gestion de tâches",
        technos: ["kotlin", "android"],
        github: ""
    },
    {
        title: "ABC API",
        description: "API de gestion de livres et d'auteurs",
        technos: ["typescript", "express", "prisma"],
        github: ""
    },
    {
        title: "ABC Web",
        description: "Application web de gestion de livres et d'auteurs",
        technos: ["typescript", "react"],
        github: ""
    },
    {
        title: "ABC App",
        description: "Application mobile de gestion de livres et d'auteurs",
        technos: ["java", "android"],
        github: ""
    },
    {
        title: "Ressources inhumaines",
        description: "Jeu de gestion RH",
        technos: ["csharp","unity"],
        github: ""
    },
];