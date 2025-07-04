import {NavLink} from "react-router-dom";

const About = () => {
    return (
        <div className="flex flex-col items-left justify-center px-10 p-5 pr-[15%] sm:pr-[20%] lg:pr-[25%] rl:pr-[32%] gap-5">
            <h1 className="text-3xl">A propos</h1>
            <div className="flex flex-col gap-5 rounded-2xl text-lg">
                <p>Je m’apprête à entrer en 3ᵉ année de BUT Informatique à l’IUT Robert Schuman d’Illkirch-Graffenstaden, dans le parcours développement d’applications.</p>
                <p>J’ai découvert la programmation au lycée, et j’ai rapidement été attiré par le fait de pouvoir créer des outils et des applications à partir d’une simple idée. Depuis, j’ai confirmé ma passion pour le développement à travers ma formation et mes expériences, aussi bien à l’IUT qu’en entreprise.</p>
                <p>Je suis quelqu’un de curieux, rigoureux et autonome, avec une réelle envie de progresser et de comprendre comment les choses fonctionnent. J’aime concevoir des solutions claires et utiles, et travailler en équipe me motive autant que relever de nouveaux défis.</p>
            </div>
        </div>
    )
}

export default About;