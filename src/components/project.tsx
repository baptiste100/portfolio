import githubIconWhite from "../assets/icons/github-white.png"
import githubIconBlack from "../assets/icons/github-removebg-preview.png"
import type {ProjectData, TechnoData} from "../types.ts";
import { TECHNO_INFOS } from "../data/technos.ts";

export default function Project({ title, description, technos, github } : ProjectData) {
    return (
        <div className="bg-stone-900 shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-2 text-white">{title}</h1>
            </div>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    { technos && technos.map((techno) => (
                        <a key={techno} href={TECHNO_INFOS[techno].lien} target="_blank">
                            <img alt={techno} className="max-w-[40px] hover:scale-115 transition transform duration-300" src={TECHNO_INFOS[techno].logo}/>
                        </a>
                    ))}
                </div>
                { github && <a className="group flex border p-2 rounded-lg gap-1 hover:bg-white hover:text-black" href={github} target="_blank">
                    <p>🠒</p>
                    <img className="max-w-[25px] block group-hover:hidden" alt="github" src={githubIconWhite}/>
                    <img className="max-w-[25px] hidden group-hover:block" alt="github" src={githubIconBlack}/>
                </a> }
            </div>
        </div>
    )
}