import Image from "next/image";
import "./projectCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

interface projectCardProps {
    src: string,
    alt: string,
    title: string,
    summary: string,
    techList: Array<IconName>
}
export const ProjectCard:React.FC<projectCardProps> = ({src,alt,title,summary,techList}) => {

    return (
        <Link href={`/project/${title.replace(/[^a-zA-Z0-9_-]/g,'-')}`}>
        <article className="project-card">
            <Image
                className="project-card__image"
                src={src}
                alt={alt}
                width={400}
                height={200}
                priority
            />
            <h3 className="project-card__title">{title}</h3>
            <div className="project-card__summary">{summary}</div>
            <div className="project-card__tech">
                {techList.map(tech => (<FontAwesomeIcon key={`${title.trim()}${tech}`} icon={["fab",tech]} />)) }
            </div>
        </article>
        </Link>
    );
};