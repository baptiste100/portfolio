import {NavLink} from "react-router-dom";
import {Download} from "lucide-react";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center px-[5%] sm:px-[10%] lg:px-[15%] xl:px-[22%] gap-5">
            <div className="flex flex-col gap-5 p-5 rounded-2xl text-lg">
                <p className="font-bold">👋 Bonjour, moi c’est Baptiste.</p>
                <p>Je suis actuellement à la recherche d’une alternance dans le développement informatique pour l'année 2026/2027. Je suis actuellement en 3ème année de BUT informatique à l’IUT Robert Schuman d’Illkirch-Graffenstaden, dans le parcours développement d’applications. Je souhaiterais poursuivre mes études en Master ou en école d'ingénieur.</p>
            </div>
                <a href="/cv_baptiste_kieffer.pdf" download className="module-border-wrap group transition duration-300 border border-white p-[2px] rounded-lg gap-4 font-bold hover:text-customYellow hover:border-customYellow" >
                    <div className="group-hover:bg-color1 rounded-sm p-2 flex gap-4">
                        <Download/>
                        <p className="group-hover:bg-gradient-to-tl group-hover:from-colorA group-hover:via-colorB group-hover:to-colorA group-hover:bg-clip-text group-hover:text-transparent">Télécharger mon CV</p>
                    </div>
                </a>
        </div>
    )
}

export default Home;