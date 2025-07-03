import {TECHNO_INFOS} from "../data/technos.ts";
import type {TechnoData} from "../types.ts";
import {motion} from "framer-motion";

export default function TechnoList () {
    const technos = ["react","typescript","express","java","javascript","csharp",""];

    return (
        <div className="flex flex-col justify-start items-start px-10 p-5 gap-5">
            <h1 className="text-3xl">Technologies</h1>
            <div className="flex flex-wrap items-center gap-5">
                {  Object.entries(TECHNO_INFOS).map(([techno, data]) => (
                    <motion.a key={techno} href={data.lien} target="_blank" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.15 }}>
                        <img alt={techno} className="max-w-[40px]" src={data.logo}/>
                    </motion.a>
                )) }
            </div>
        </div>
    )
}