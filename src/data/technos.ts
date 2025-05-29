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

export const TECHNO_INFOS: Record<string, TechnoData> = {
    "javascript" : {
        logo: javascriptIcon,
        lien: "https://developer.mozilla.org/fr/docs/Web/JavaScript"
    },
    "typescript" : {
        logo: typescriptIcon,
        lien: "https://www.typescriptlang.org/"
    },
    "react" : {
        logo: reactIcon,
        lien: "https://react.dev/"
    },
    "express" : {
        logo: expressIcon,
        lien: "https://expressjs.com"
    },
    "kotlin" : {
        logo: kotlinIcon,
        lien: "https://kotlinlang.org/"
    },
    "android" : {
        logo: androidIcon,
        lien: "https://developer.android.com/?hl=fr"
    },
    "java" : {
        logo: javaIcon,
        lien: "https://www.java.com/fr/"
    },
    "prisma" : {
        logo: prismaIcon,
        lien: "https://www.prisma.io/"
    },
    "unity" : {
        logo: unityIcon,
        lien: "https://unity.com/fr"
    }
}