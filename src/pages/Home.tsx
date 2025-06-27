import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center px-[5%] sm:px-[10%] lg:px-[15%] xl:px-[22%] gap-15">
            <div className="flex flex-col gap-5 bg-customBlack p-5 rounded-2xl text-lg">
                <p>👋 Bonjour, moi c’est Baptiste.</p>
                <p>Actuellement en deuxième année de BUT Informatique à l’IUT de Strasbourg (parcours développement d’applications), je me spécialise dans le développement web et logiciel. J’ai eu l’occasion de travailler sur plusieurs projets en Java, React, Laravel ou encore C#, aussi bien côté front-end que back-end. Curieux, rigoureux, j’aime comprendre comment les choses fonctionnent et construire des solutions utiles et claires.
                </p>
                <p>
                    Ce portfolio me permet de présenter certains de mes projets, réalisés en cours ou lors de mes stages. Mon objectif : continuer à progresser, apprendre au contact de professionnels, et construire des applications qui ont du sens.
                </p>
            </div>
        </div>
    )
}

export default Home;