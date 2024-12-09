// next & react importation
import { redirect } from 'next/navigation';
import Image from 'next/image';
// custom importation
import { AppBar } from '../../Components/AppBar/AppBar';
import { getProjectByTitle } from '@/app/Data/getProjectsData';
// style
import './page-project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { svgRepoImages } from '@/app/Assets/icons/svgRepo';
import Link from 'next/link';


// props interface
interface ProjectProps {
    params: Promise<{ title? : string }>
}

// generate static params
import projects from '../../Data/projects.json';
import slugify from 'slugify';

export async function generateStaticParams() {
    const staticParams = projects.map((project) => ({
        title: slugify(project.title,{lower: true,strict: true, locale: "fr"}),
    }));
    return staticParams;
}

// manage metadata
export const generateMetadata = async ({ params } : ProjectProps) => {
    const { title } = await params;
    if (!title) { redirect('/'); }

    const projectData = await getProjectByTitle(title);
    if (!projectData) { console.log(projectData,title); redirect('/'); }
    
    const pageTitle = `Devrys Creative : ${projectData.title}`;
    const pageDescription = projectData.summary;
    const pageCover = `/projects/cover/${projectData.image}`;
    const pageCoverAlt = projectData.imageAlt;

    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
          title: pageTitle,
          description: pageDescription,
          type: "article",
          url: `https://devrys-creative.com/projects/${title}`,
          images: {
            url: pageCover,
            alt: pageCoverAlt,
          }
        },
    };
};

// project page component
const ProjectPage:React.FC<ProjectProps> = async ({params}) => {

    const { title } = await params;
    if (!title) { redirect('/'); }

    const projectData = await getProjectByTitle(title);
    if (!projectData) { console.log(projectData,title); redirect('/'); }

    return (
        <>
        <AppBar />
        { title && (
            <main className='project-page'>
                
                <Link href="/#projects" className='project-page__prev-link'>&lt; Retour</Link>

                <div className='project-page__banner'>
                    <Image
                        className='project-page__banner__main-image'
                        src={`/projects/cover/${projectData.image}`}
                        alt="Capture d'écran du projet"
                        width={1200}
                        height={300}
                        priority
                    />
                    <div className='project-page__banner__main-links'>
                        { projectData.url && (<a href={projectData.url} target="_blank"><FontAwesomeIcon icon="arrow-up-right-from-square" className='project-page__banner__main-links__icon'/> Visiter</a>) }
                        { projectData.source && (<a href={projectData.source} target="_blank"><FontAwesomeIcon icon={["fab","github"]} className='project-page__banner__main-links__icon'/> Sources</a>) }
                    </div>
                </div>

                <h1 className='project-page__main-title'>{projectData.title}</h1>

                <div className='project-page__tags-list'>
                    {projectData.tags.map(tech => (
                            // <FontAwesomeIcon key={`${title.trim()}${tech}`} icon={["fab",tech]} />
                            <Image
                                key={`img_${tech}`}
                                src={svgRepoImages[`logo${tech}`]}
                                alt={`logo de la technologie de développement ${tech}`}
                                height={60}
                                width={60}
                            />
                        )) }
                </div>

                {projectData.context && (
                <section className='project-page__section project-page__context'>
                    <h2 className='project-page__section__title project-page__context__title'><FontAwesomeIcon icon="clipboard-user" /> Contexte du projet</h2>
                    <div
                        dangerouslySetInnerHTML={
                            { __html: projectData.context }
                        }
                    />
                </section>
                )}
                
                {projectData.problem && (
                <section className='project-page__section project-page__problem'>
                    <h2 className='project-page__section__title project-page__problem__title'><FontAwesomeIcon icon="clipboard-question" /> Problématique</h2>
                    <div
                        dangerouslySetInnerHTML={
                            { __html: projectData.problem }
                        }
                    />
                </section>
                )}
                
                {projectData.solution && (
                <section className='project-page__section project-page__solution'>
                    <h2 className='project-page__section__title project-page__solution__title'><FontAwesomeIcon icon="clipboard-check" /> Solution apportée</h2>
                    <div
                        dangerouslySetInnerHTML={
                            { __html: projectData.solution }
                        }
                    />
                </section>
                )}
                
                {projectData.evolution && (
                <section className='project-page__section project-page__evolution'>
                    <h2 className='project-page__section__title project-page__evolution__title'><FontAwesomeIcon icon="clipboard-list" /> Évolution</h2>
                    <div
                        dangerouslySetInnerHTML={
                            { __html: projectData.evolution }
                        }
                    />
                </section>
                )}
                
            </main>
        ) }
        </>
    );
};

export default ProjectPage;