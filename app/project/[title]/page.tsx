// next & react importation
import { redirect } from 'next/navigation';
// custom importation
import { AppBar } from '../../Components/AppBar/AppBar';
import { getProjectByTitle } from '@/app/Data/getProjectsData';
// style
import './page-project.scss';


// props interface
interface projectProps {
    params: { title? : string }
}

// manage metadata
export const generateMetadata = async ({params} : projectProps) => {
    const { title } = await params;
    if (!title) { redirect('/'); }

    const projectData = await getProjectByTitle(title);
    if (!projectData) { console.log(projectData,title); redirect('/'); }

    return {
        title: `Devrys - ${title}`,
        description: projectData.summary,
    };
};

// project page component
const ProjectPage:React.FC<projectProps> = async ({params}) => {

    const { title } = await params;
    if (!title) { redirect('/'); }

    const projectData = await getProjectByTitle(title);
    if (!projectData) { console.log(projectData,title); redirect('/'); }

    return (
        <>
        <AppBar />
        { title && (
            <main>
                <h2>{projectData.title}</h2>
                <p>Concept (+démo vidéo/gif)</p>
                <p>Problématique</p>
                <p>Solution apportée</p>
                <p>Evolution</p>
            </main>
        ) }
        </>
    );
};

export default ProjectPage;