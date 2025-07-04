import javascriptIcon from "../assets/icons/javascript.png";
import type { ProjectData } from "../types.ts";

export const PROJECTS : ProjectData[] = [
    {
        title: "Portfolio",
        description: "Site web qui répertorie tous mes projets",
        technos: ["typescript", "react", "tailwind"],
        github: "https://github.com/baptiste100/portfolio"
    },
    {
        title: "ChecklistApp",
        description: "Application de gestion de tâches",
        technos: ["kotlin", "android"],
        github: "https://github.com/baptiste100/checklist-app"
    },
    {
        title: "ABC API",
        description: "API de gestion de livres et d'auteurs",
        technos: ["typescript", "node" , "express", "prisma"],
        github: ""
    },
    {
        title: "ABC Web",
        description: "Application web de gestion de livres et d'auteurs",
        technos: ["typescript", "react", "tailwind"],
        github: "https://github.com/baptiste100/w42-react-books/tree/main/tp5"
    },
    {
        title: "ABC App",
        description: "Application mobile de gestion de livres et d'auteurs",
        technos: ["java", "android"],
        github: "https://github.com/baptiste100/p42-android-books"
    },
    {
        title: "Ressources inhumaines",
        description: "Jeu de gestion RH",
        technos: ["csharp","unity"],
        github: ""
    }
];