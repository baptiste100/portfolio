import { Element } from "react-scroll";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import {Root} from "./root.tsx";

export default function App() {
    return (
        <div>
            <Element name="home">
                <Root/>
                <Home />
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
        </div>
    );
}