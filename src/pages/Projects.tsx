import Project from "../components/project.tsx";
import {PROJECTS} from "../data/projects.ts";

export default function Projects () {
    return (<div className="flex flex-col px-10 gap-8">
        <h1 className="text-4xl"> Projets </h1>
        <div className="grid grid-cols-4 gap-5">
            {
                PROJECTS.map((projectData, index) => (
                    <Project key={index} {...projectData}/>
                ))
            }
        </div>
    </div>)
}