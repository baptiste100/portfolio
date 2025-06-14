import {NavLink, Outlet} from "react-router-dom";

export const Root = () => {
    return (<div>
        <header>
            <MyAppNav/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>)
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