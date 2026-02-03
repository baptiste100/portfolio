import githubWhiteIcon from "../assets/icons/github-white.png"
import githubYellowIcon from "../assets/icons/github-yellow.png"
import linkedinWhiteIcon from "../assets/icons/linkedin-removebg-preview.png"
import linkedinYellowIcon from "../assets/icons/linkedin-yellow.png"
import { Mail, Copy, Check, Download } from "lucide-react";
import {  useState} from "react";

export default function Contact () {
    const [emailCopied, setEmailCopied] = useState(false);
    const email = "kieffer.baptiste(at)orange.fr";

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
        <div className="flex flex-col justify-start px-10 p-5">
            <h1 className="text-3xl mb-1"> Contact </h1>
            <div className='flex flex-col xl:flex-row justify-center px-10 p-5 gap-5'>
                <a href="/cv_baptiste_kieffer.pdf" download className="module-border-wrap group transition duration-300 border border-transparent p-[2px] rounded-lg gap-4 font-bold hover:text-customYellow hover:border-customYellow" >
                    <div className="group-hover:bg-color1 rounded-sm p-2 flex gap-4">
                        <Download/>
                        <p className="group-hover:bg-gradient-to-tl group-hover:from-colorA group-hover:via-colorB group-hover:to-colorA group-hover:bg-clip-text group-hover:text-transparent">Télécharger mon CV</p>
                    </div>
                </a>
                <button onClick={handleCopyClick} className="module-border-wrap group transition duration-300  border border-transparent rounded-lg flex p-[2px] gap-4 hover:text-customYellow hover:border-customYellow hover:cursor-pointer font-bold">
                    <div className="group-hover:bg-color1 rounded-sm p-2 flex gap-4 w-full">
                        <Mail className="block group-hover:hidden" />
                        <Mail color="#F5CB5C" className="transition duration-300 hidden group-hover:block" />
                        <p className="group-hover:bg-gradient-to-tl group-hover:from-colorA group-hover:via-colorB group-hover:to-colorA group-hover:bg-clip-text group-hover:text-transparent"> {email} </p>
                        {emailCopied ? <Check/> : <Copy/> }
                    </div>
                </button>
                <a className="module-border-wrap group transition duration-300 border border-transparent p-[2px] rounded-lg font-bold" href={"https://github.com/baptiste100"} target="_blank">
                    <div className="group-hover:bg-color1 rounded-sm p-2 flex gap-4">
                        <img className="w-6 block group-hover:hidden" alt="github" src={githubWhiteIcon}/>
                        <img className="w-6 hidden group-hover:block" alt="github" src={githubYellowIcon}/>
                        <p className="group-hover:bg-gradient-to-tl group-hover:from-colorA group-hover:via-colorB group-hover:to-colorC group-hover:bg-clip-text group-hover:text-transparent">
                            baptiste100
                        </p>
                    </div>
                </a>
                <a className="module-border-wrap group transition duration-300  border border-transparent flex p-[2px] rounded-lg gap-4 font-bold" href="https://www.linkedin.com/in/baptistekieffer/" target="_blank">
                    <div className="group-hover:bg-color1 rounded-sm p-2 flex gap-4 w-full">
                        <img className="w-6 block group-hover:hidden" alt="linkedin" src={linkedinWhiteIcon}/>
                        <img className="w-6 hidden group-hover:block" alt="linkedin" src={linkedinYellowIcon}/>
                        <p className="group-hover:bg-gradient-to-tl group-hover:from-colorA group-hover:via-colorB group-hover:to-colorC group-hover:bg-clip-text group-hover:text-transparent"> baptistekieffer </p>
                    </div>
                </a>
            </div>
        </div>
    )
}