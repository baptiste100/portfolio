import { Element } from "react-scroll";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import {Root} from "./root.tsx";
import About from "./pages/About.tsx";
import LanguagesList from "./pages/TechnoList.tsx";
import TechnoList from "./pages/TechnoList.tsx";
import ReactGA from 'react-ga4' ;
import {useEffect} from "react";

export default function App() {
    ReactGA.initialize('G-5MZYK9G3QP') ;

    useEffect(() => {
        ReactGA.send({ hitType : "pageview", page : window.location.pathname });
    }, []);

    return (
        <div>
            <Element name="home">
                <Root/>
                <Home/>
            </Element>
            <Element name="technos">
                <TechnoList/>
            </Element>
            <Element name="projects">
                <Projects/>
            </Element>
            <div className="flex flex-col lg:flex-row-reverse">
                <Element name="about">
                    <About/>
                </Element>
                <Element name="contact">
                    <Contact/>
                </Element>
            </div>
        </div>
    );
}