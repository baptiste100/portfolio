import githubIcon from "../assets/icons/github-white.png"
import linkedinIcon from "../assets/icons/linkedin-removebg-preview.png"
import { Mail, Copy, Check } from "lucide-react";
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
        <div className="flex flex-col justify-start items-start p-10 gap-3">
            <h1 className="text-2xl mb-1"> Contact </h1>
            <button onClick={handleCopyClick} className="border border-transparent rounded-lg flex p-2 gap-4 hover:border-white hover:cursor-pointer">
                <Mail/> <p className="font-bold"> {email} </p> {emailCopied ? <Check/> : <Copy/> }
            </button>
           <a className="border border-transparent flex p-2 rounded-lg gap-4 font-bold hover:border-white" href={"https://github.com/baptiste100"} target="_blank">
               <img className="w-6" alt="github" src={githubIcon}/>
               <p> baptiste100 </p>
           </a>
            <a className="border border-transparent flex p-2 rounded-lg gap-4 font-bold hover:border-white" href="https://www.linkedin.com/in/baptistekieffer/" target="_blank">
                <img className="w-6" alt="linkedin" src={linkedinIcon}/>
                <p> baptistekieffer </p>
            </a>
        </div>
    )
}