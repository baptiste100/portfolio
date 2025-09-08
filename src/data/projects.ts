import javascriptIcon from "../assets/icons/javascript.png";
import type { ProjectData } from "../types.ts";

export const PROJECTS : ProjectData[] = [
    {
        title: "Nest Notes",
        description: "API de gestion de notes",
        technos: ["typescript", "nest", "prisma"],
        github: "https://github.com/baptiste100/nest-notes"
    },
    {
        title: "Quiz FC",
        description: "Site web de quiz de football",
        technos: ["typescript", "next", "prisma", "react"],
        github: "https://github.com/baptiste100/quiz-fc"
    },
    {
        title: "CounterApp",
        description: "Application mobile de compteur",
        technos: ["typescript", "react native"],
        github: ""
    },
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
        description: "API de gestion de livres et d'auteurs (IUT)",
        technos: ["typescript", "express", "prisma"],
        github: "https://github.com/baptiste100/w41-express-books/tree/main/books"
    },
    {
        title: "ABC Web",
        description: "Application web de gestion de livres et d'auteurs (IUT)",
        technos: ["typescript", "react", "tailwind"],
        github: "https://github.com/baptiste100/w42-react-books/tree/main/tp5"
    },
    {
        title: "ABC App",
        description: "Application mobile de gestion de livres et d'auteurs (IUT)",
        technos: ["java", "android"],
        github: "https://github.com/baptiste100/p42-android-books"
    },
    {
        title: "Ressources inhumaines",
        description: "Jeu de gestion RH (IUT)",
        technos: ["csharp","unity"],
        github: ""
    },
];