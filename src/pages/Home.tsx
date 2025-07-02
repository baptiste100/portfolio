import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center px-[5%] sm:px-[10%] lg:px-[15%] xl:px-[22%] gap-15">
            <div className="flex flex-col gap-5 bg-customBlack p-5 rounded-2xl text-lg">
                <p className="font-bold">👋 Bonjour, moi c’est Baptiste.</p>
                <p>Je m’apprête à entrer en 3ᵉ année de BUT Informatique à l’IUT Robert Schuman d’Illkirch-Graffenstaden, dans le parcours développement d’applications.</p>
                <p>J’ai découvert la programmation au lycée, et j’ai rapidement été attiré par le fait de pouvoir créer des outils et des applications à partir d’une simple idée. Depuis, j’ai confirmé ma passion pour le développement à travers ma formation et mes expériences, aussi bien à l’IUT qu’en entreprise.</p>
                <p>Je suis quelqu’un de curieux, rigoureux et autonome, avec une réelle envie de progresser et de comprendre comment les choses fonctionnent. J’aime concevoir des solutions claires et utiles, et travailler en équipe me motive autant que relever de nouveaux défis.</p>
                <p>Je suis actuellement à la recherche d’une alternance pour ma 3ᵉ année, afin de continuer à apprendre, gagner en expérience et contribuer à des projets concrets.</p>
                <p>Ce portfolio me permet de présenter certains de mes projets, réalisés en cours ou bien personnels.</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home;