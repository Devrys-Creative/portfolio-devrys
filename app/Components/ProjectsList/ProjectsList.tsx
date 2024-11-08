
import { getAllProjectsData } from "@/app/Data/getProjectsData"
import { ProjectCard } from "../ProjectCard/ProjectCard"


export const ProjectsList = async () => {

    const projectsData = await getAllProjectsData();

    return (
        <>
        { projectsData?.map(project => (
            <ProjectCard
                key={project.id}
                src={project.image}
                alt=""
                title={project.title}
                summary="summary"
                techList={["react","js"]}
            />
        ))}
        </>
    )
}
