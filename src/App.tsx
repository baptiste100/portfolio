import { Element } from "react-scroll";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import {Root} from "./root.tsx";
import About from "./pages/About.tsx";
import LanguagesList from "./pages/TechnoList.tsx";
import TechnoList from "./pages/TechnoList.tsx";

export default function App() {
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
            <div className="flex">
                <Element name="contact">
                    <Contact/>
                </Element>
                <Element name="about">
                    <About/>
                </Element>
            </div>
        </div>
    );
}