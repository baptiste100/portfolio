import githubIconWhite from "../assets/icons/github-white.png"
import githubIconBlack from "../assets/icons/github-removebg-preview.png"
import type {ProjectData, TechnoData} from "../types.ts";
import { TECHNO_INFOS } from "../data/technos.ts";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Project({ title, description, technos, github } : ProjectData) {
    return (
        <motion.div
            className="relative module-border-wrap shadow-lg rounded-2xl p-[3px] cursor-pointer bg-gradient-to-tl from-color1 via-color2 to-color1" initial={{ opacity: 0, y: 50 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5 }} whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",  borderColor: "#F5CB5C" }}
            style={{ boxShadow: 'inset 0 0 0 2px transparent, 0 0 0 0 #A89723'
        }}>
            <div className="module p-10 bg-gradient-to-tl from-color2 via-cyan-800 to-color2 rounded-xl h-full">
                <div className="flex justify-between">
                    <motion.h1 className="text-2xl font-bold mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        {title}
                    </motion.h1>
                </div>
                <motion.p className="text-customLightGray mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    {description}
                </motion.p>
                <div className="flex items-center justify-between mb-10 sm:mb-0">
                    <motion.div className="flex items-center gap-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        { technos && technos.map((techno) => (
                            <motion.a key={techno} href={TECHNO_INFOS[techno].lien} target="_blank" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.15 }}>
                                <img alt={techno} className="max-w-[35px]" src={TECHNO_INFOS[techno].logo}/>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
                { github &&
                    <motion.a className="group absolute bottom-5 right-5 flex flex-row items-center border border-white p-2 rounded-lg gap-1 hover:bg-gradient-to-tl from-colorA via-colorB to-colorA hover:text-customGray hover:border-transparent"
                              href={github} target="_blank" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    >
                        <ExternalLink className="w-5 sm:h-5"/>
                        <img className="max-w-[25px] block group-hover:hidden" alt="github" src={githubIconWhite}/>
                        <img className="max-w-[25px] hidden group-hover:block" alt="github" src={githubIconBlack}/>
                    </motion.a>
                }
            </div>
        </motion.div>
    )
}