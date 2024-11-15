
import { getAllProjectsData } from "@/app/Data/getProjectsData"
import { ProjectCard } from "../ProjectCard/ProjectCard"


export const ProjectsList = async () => {

    const projectsData = await getAllProjectsData();

    return (
        <>
        { projectsData?.map(project => (
            <ProjectCard
                key={project.id}
                video={project.video}
                src={project.image}
                alt="capture du projet"
                title={project.title}
                summary={project.summary}
                techList={project.tags}
            />
        ))}
        </>
    )
}
