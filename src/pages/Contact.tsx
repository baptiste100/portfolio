import githubWhiteIcon from "../assets/icons/github-white.png"
import githubYellowIcon from "../assets/icons/github-yellow.png"
import linkedinWhiteIcon from "../assets/icons/linkedin-removebg-preview.png"
import linkedinYellowIcon from "../assets/icons/linkedin-yellow.png"
import { Mail, Copy, Check, Download } from "lucide-react";
import { useState } from "react";

export default function Contact () {
    const [emailCopied, setEmailCopied] = useState(false);
    const email = "kieffer.baptiste@orange.fr"

    async function copyTextToClipboard(text: string) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        }
    }

    const handleCopyClick = () => {
        copyTextToClipboard(email)
            .then(() => {
                setEmailCopied(true);
                setTimeout(() => {
                    setEmailCopied(false)
                }, 1500)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="flex flex-col justify-start items-start px-10 p-5 gap-3">
            <h1 className="text-3xl mb-1"> Contact </h1>
            <a href="/cv_baptiste_kieffer.pdf" download className="group transition duration-300  border border-transparent flex p-2 rounded-lg gap-4 font-bold hover:border-customYellow hover:text-customYellow" >
                <Download/>
                <p>Télécharger mon CV</p>
            </a>
            <button onClick={handleCopyClick} className="group transition duration-300  border border-transparent rounded-lg flex p-2 gap-4 hover:text-customYellow hover:border-customYellow hover:cursor-pointer">
                <Mail className="block group-hover:hidden" />
                <Mail color="#F5CB5C" className="transition duration-300 hidden group-hover:block" />
                <p className="font-bold"> {email} </p>
                {emailCopied ? <Check/> : <Copy/> }
            </button>
           <a className="group transition duration-300  border border-transparent flex p-2 rounded-lg gap-4 font-bold hover:border-customYellow hover:text-customYellow" href={"https://github.com/baptiste100"} target="_blank">
               <img className="w-6 block group-hover:hidden" alt="github" src={githubWhiteIcon}/>
               <img className="w-6 hidden group-hover:block" alt="github" src={githubYellowIcon}/>
               <p> baptiste100 </p>
           </a>
            <a className="group transition duration-300  border border-transparent flex p-2 rounded-lg gap-4 font-bold hover:border-customYellow hover:text-customYellow" href="https://www.linkedin.com/in/baptistekieffer/" target="_blank">
                <img className="w-6 block group-hover:hidden" alt="linkedin" src={linkedinWhiteIcon}/>
                <img className="w-6 hidden group-hover:block" alt="linkedin" src={linkedinYellowIcon}/>
                <p className=""> baptistekieffer </p>
            </a>
        </div>
    )
}