import {NavLink, Outlet} from "react-router-dom";
import {Link} from "react-scroll";

export const Root = () => {
    return (<div>
        <header>
            <OnePageAppNav/>
        </header>
        <main className="mt-25">
            <Outlet/>
        </main>
    </div>)
}

export function OnePageAppNav() {
    return (
        <div className="fixed top-0 w-full z-50 bg-gradient-to-l from-color1 via-color2 to-color1  text-white flex justify-between text-xl font-bold pt-3 pb-3 px-20 mb-10 gap-5 cursor-pointer">
            <nav className="flex items-center gap-10 px-5">
                <Link smooth={true} duration={500} offset={-100} className="p-2 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack " to="home" > Accueil </Link>
                <Link smooth={true} duration={500} offset={-90} className="p-2 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack" to="technos"> Technologies </Link>
                <Link smooth={true} duration={500} offset={-90} className="p-2 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack" to="projects"> Projets </Link>
                <Link smooth={true} duration={500} offset={-90} className="p-2 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack" to="contact"> Contact </Link>
                <Link smooth={true} duration={500} offset={-90} className="p-2 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack" to="about"> A propos </Link>
            </nav>
        </div>
    )
}

export function MyAppNav() {
    return (
        <div className="bg-stone-900 text-white flex justify-between text-3xl font-bold pt-3 pb-3 px-20 mb-10 gap-5">
            <nav className="flex items-center gap-10 px-5">
                <NavLink className="p-2 rounded-2xl hover:bg-white hover:text-black" to="/home" end> Accueil </NavLink>
                <NavLink className="p-2 rounded-2xl hover:bg-white hover:text-black" to="/projects" end> Projets </NavLink>
                <NavLink className="p-2 rounded-2xl hover:bg-white hover:text-black" to="/contact" end> Contact </NavLink>
            </nav>
        </div>
    )
}