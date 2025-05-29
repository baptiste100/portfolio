import githubIcon from "../assets/icons/github-white.png"
import linkedinIcon from "../assets/icons/linkedin-removebg-preview.png"
import { Mail } from "lucide-react";

export default function Contact () {
    return (
        <div className="flex flex-col justify-start items-start p-10 gap-5">
            <h1 className="text-2xl"> Contact </h1>
            <div className="flex gap-4">
                <Mail/> <p className="font-bold"> kieffer.baptiste@orange.fr</p>
            </div>
           <a className="flex gap-4 font-bold" href={"https://github.com/baptiste100"} target="_blank">
               <img className="w-6" alt="github" src={githubIcon}/>
               <p> baptiste100 </p>
           </a>
            <a className="flex gap-4 font-bold" href="https://www.linkedin.com/in/baptistekieffer/" target="_blank">
                <img className="w-6" alt="linkedin" src={linkedinIcon}/>
                <p> baptistekieffer </p>
            </a>
        </div>
    )
}