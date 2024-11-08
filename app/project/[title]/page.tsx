import { redirect } from 'next/navigation';
import { AppBar } from '../../Components/AppBar/AppBar';
import './page-project.scss';

interface projectProps {
    params: { title? : string }
}

const ProjectPage:React.FC<projectProps> = async ({params}) => {

    const { title } = await params;

    if (!title) { redirect('/'); }

    return (
        <>
        <AppBar />
        { title && (
            <main>
                <h2>{title}</h2>
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