// next & react importation
import { redirect } from 'next/navigation';
import Image from 'next/image';
// custom importation
import { AppBar } from '../../Components/AppBar/AppBar';
import { getProjectByTitle } from '@/app/Data/getProjectsData';
// style
import './page-project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
            <main className='project-page'>
                <h1 className='project-page__main-title'>{projectData.title}</h1>
                <Image
                    className='project-page__main-image'
                    src={projectData.image}
                    alt="Capture d'écran du projet"
                    width={300}
                    height={300}
                    priority
                />
                <div className='project-page__main-link'>
                    <FontAwesomeIcon icon="arrow-up-right-from-square" className='project-page__main-link__icon'/>
                    <a href={projectData.url} target="_blank">{projectData.url}</a>
                    <a href={projectData.source} target="_blank">{projectData.source}</a>
                </div>
                <p>tags ?</p>

                <section className='project-page__section project-page__context'>
                    <h2 className='project-page__section__title project-page__context__title'><FontAwesomeIcon icon="clipboard-user" /> Contexte du projet</h2>
                    <div
                        dangerouslySetInnerHTML={
                            { __html: projectData.context }
                        }
                    />
                </section>
                
                <section className='project-page__section project-page__problem'>
                    <h2 className='project-page__section__title project-page__problem__title'><FontAwesomeIcon icon="clipboard-question" /> Problématique</h2>
                    <div
                        dangerouslySetInnerHTML={
                            { __html: projectData.problem }
                        }
                    />
                </section>
                
                <section className='project-page__section project-page__solution'>
                    <h2 className='project-page__section__title project-page__solution__title'><FontAwesomeIcon icon="clipboard-check" /> Solution apportée</h2>
                    <div
                        dangerouslySetInnerHTML={
                            { __html: projectData.solution }
                        }
                    />
                </section>
                
                <section className='project-page__section project-page__evolution'>
                    <h2 className='project-page__section__title project-page__evolution__title'><FontAwesomeIcon icon="clipboard-list" /> Évolution</h2>
                    <div
                        dangerouslySetInnerHTML={
                            { __html: projectData.evolution }
                        }
                    />
                </section>

                <p>DOM purify ?</p>
            </main>
        ) }
        </>
    );
};

export default ProjectPage;