import type { TechnoData } from "../types.ts";
import javascriptIcon from "../assets/icons/javascript.png";
import typescriptIcon from "../assets/icons/typescript-removebg-preview.png";
import reactIcon from "../assets/icons/react-removebg-preview.png";
import expressIcon from "../assets/icons/express-removebg-preview.png";
import kotlinIcon from "../assets/icons/kotlin-removebg-preview.png";
import androidIcon from "../assets/icons/android-removebg-preview.png";
import javaIcon from "../assets/icons/java-removebg-preview.png";
import prismaIcon from "../assets/icons/prisma-removebg-preview.png";
import unityIcon from "../assets/icons/unity-removebg-preview.png";
import csharpIcon from "../assets/icons/csharp-removebg-preview.png";
import springIcon from "../assets/icons/spring-removebg-preview.png";
import cIcon from "../assets/icons/c-removebg-preview.png";
import pythonIcon from "../assets/icons/python-removebg-preview.png";
import tailwindIcon from "../assets/icons/tailwind-removebg-preview.png";
import nodeIcon from "../assets/icons/node-removebg-preview.png";
import phpIcon from "../assets/icons/php-removebg-preview.png";
import laravelIcon from "../assets/icons/laravel-removebg-preview.png";

export const TECHNO_INFOS: Record<string, TechnoData> = {
    "java" : {
        logo: javaIcon,
        lien: "https://www.java.com/fr/"
    },
    "react" : {
        logo: reactIcon,
        lien: "https://react.dev/"
    },
    "typescript" : {
        logo: typescriptIcon,
        lien: "https://www.typescriptlang.org/"
    },
    "tailwind" : {
        logo: tailwindIcon,
        lien: "https://tailwindcss.com/"
    },
    "express" : {
        logo: expressIcon,
        lien: "https://expressjs.com"
    },
    "javascript" : {
        logo: javascriptIcon,
        lien: "https://developer.mozilla.org/fr/docs/Web/JavaScript"
    },
    "kotlin" : {
        logo: kotlinIcon,
        lien: "https://kotlinlang.org/"
    },
    "android" : {
        logo: androidIcon,
        lien: "https://developer.android.com/?hl=fr"
    },
    "prisma" : {
        logo: prismaIcon,
        lien: "https://www.prisma.io/orm"
    },
    "csharp" : {
        logo: csharpIcon,
        lien: "https://dotnet.microsoft.com/fr-fr/languages/csharp#:~:text=C%23%20est%20un%20langage%20de,langages%20de%20programmation%20sur%20GitHub."
    },
    "c" : {
        logo: cIcon,
        lien: "https://fr.wikipedia.org/wiki/C_(langage)"
    },
    "spring" : {
        logo: springIcon,
        lien: "https://spring.io/projects/spring-framework"
    },
    "unity" : {
        logo: unityIcon,
        lien: "https://unity.com/fr"
    },
    "node" : {
        logo: nodeIcon,
        lien: "https://nodejs.org/en"
    },
    "php" : {
        logo: phpIcon,
        lien: "https://www.php.net/"
    },
    "laravel" : {
        logo: laravelIcon,
        lien: "https://laravel.com/"
    },
    "python" : {
        logo: pythonIcon,
        lien: "https://www.python.org/"
    },
}