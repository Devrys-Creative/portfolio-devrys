
import { getAllProjectsData } from "@/app/Data/getProjectsData"
import { ProjectCard } from "../ProjectCard/ProjectCard"
import "./projectsList.scss";

export const ProjectsList = async () => {

    const projectsData = await getAllProjectsData();

    const projectsPerRow = 4;

    const projectsChunks = [];
    for(let i=0; i<=projectsData.length; i += projectsPerRow) {
        projectsChunks.push(projectsData.slice(i,Math.min(i+projectsPerRow,projectsData.length)));
    }

    return (
        <div className="projects-list">
            { projectsChunks.map((chunk,index) => (
                <div className="projects-list__wrapper" key={`chunk${index}`}>
                    { chunk.map(project => (
                        <ProjectCard
                            key={project.id}
                            video={project.video}
                            src={project.image}
                            alt={project.imageAlt}
                            title={project.title}
                            summary={project.summary}
                            techList={project.tags}
                        />
                    ))}
                </div>
            ))}
            
        </div>
    )
}
