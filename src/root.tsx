import {NavLink, Outlet} from "react-router-dom";
import {Link} from "react-scroll";
import { useState } from "react";

export const Root = () => {
    return (<div>
        <header>
            <OnePageAppNav/>
        </header>
        <main className="mt-16 md:mt-25">
            <Outlet/>
        </main>
    </div>)
}

export function OnePageAppNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="fixed top-0 w-full z-50 bg-gradient-to-l from-color1 via-color2 to-color1 text-white">
            <div>

            </div>
            {/* Navigation desktop */}
            <div className="hidden lg:flex justify-between text-xl font-bold pt-3 pb-3 px-5 lg:px-20 mb-10 gap-5">
                <div className="hidden lg:flex items-center lg:text-2xl">
                    <p>Baptiste Kieffer</p>
                </div>
                <nav className="flex items-center gap-5 lg:gap-10 px-2 lg:px-5">
                    <Link smooth={true} duration={500} offset={-100} className="p-2 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack cursor-pointer" to="home">Accueil</Link>
                    <Link smooth={true} duration={500} offset={-90} className="p-2 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack cursor-pointer" to="technos">Technologies</Link>
                    <Link smooth={true} duration={500} offset={-90} className="p-2 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack cursor-pointer" to="projects">Projets</Link>
                    <Link smooth={true} duration={500} offset={-90} className="p-2 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack cursor-pointer" to="about">A propos</Link>
                    <Link smooth={true} duration={500} offset={-90} className="p-2 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack cursor-pointer" to="contact">Contact</Link>
                </nav>
            </div>

            {/* Navigation mobile */}
            <div className="lg:hidden flex justify-between items-center px-5 py-3">
                <div className="text-xl font-bold">Baptiste Kieffer</div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu mobile déroulant */}
            {isMenuOpen && (
                <div className="lg:hidden bg-gradient-to-l from-color1 via-color2 to-color1 border-t border-colorA/30 text-lg font-bold">
                    <nav className="flex flex-col p-4 space-y-2">
                        <Link smooth={true} duration={500} offset={-100} className="p-3 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack cursor-pointer text-center" to="home" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
                        <Link smooth={true} duration={500} offset={-90} className="p-3 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack cursor-pointer text-center" to="technos" onClick={() => setIsMenuOpen(false)}>Technologies</Link>
                        <Link smooth={true} duration={500} offset={-90} className="p-3 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack cursor-pointer text-center" to="projects" onClick={() => setIsMenuOpen(false)}>Projets</Link>
                        <Link smooth={true} duration={500} offset={-90} className="p-3 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack cursor-pointer text-center" to="contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        <Link smooth={true} duration={500} offset={-90} className="p-3 rounded-2xl hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customBlack cursor-pointer text-center" to="about" onClick={() => setIsMenuOpen(false)}>A propos</Link>
                    </nav>
                </div>
            )}
        </div>
    )
}