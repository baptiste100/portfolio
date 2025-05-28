import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center px-100 gap-15">
            <p className="border border-yellow-400 p-5 rounded-2xl"> Je suis actuellement étudiant en 2ème année de BUT Informatique. J'ai déja réalisé plusieurs projets, comme un serious game pour gérer le personnel d'un IUT, une application de gestion partagée de dépenses avec WinForm, un jeu de cartes pokémon développé en Java, un jeu snake développé en assembleur, Jeu du labyrinthe codé en Java, ainsi qu'une API de gestion de livres et d'auteurs (Node-Express-Prisma) avec interface web (React) et application android (Java) associés.</p>
            <NavLink className="text-2xl border border-yellow-400 p-5 rounded-2xl font-bold" to="/projects" end> Voir mes projets </NavLink>
        </div>
    )
}

export default Home;