// vendor components
import Image from "next/image";
import slugify from "slugify";
import Link from "next/link";

// custom components
import { svgRepoImages } from "@/app/Assets/icons/svgRepo";
import { ProjectThumb } from "../projectThumb/ProjectThumb";

// style
import "./projectCard.scss";

interface projectCardProps {
    video: string,
    src: string,
    alt: string,
    title: string,
    summary: string,
    techList: Array<string>
}
export const ProjectCard:React.FC<projectCardProps> = ({video,src,alt,title,summary,techList}) => {
    
    return (
        <Link href={`/project/${slugify(title,{lower: true,strict: true, locale: "fr"})}`}>
        <article className="project-card">
            <ProjectThumb
                videoSource={video}
                imageSrc={src}
                imageAlt={alt}
            />
            <h3 className="project-card__title">{title.replace(/[éèê]/gi,"e").replace(/[à]/gi,"a")}</h3>
            <div className="project-card__summary">
                <div>{summary}</div>
                <div className="project-card__tech">
                    {techList.map(tech => (
                        <Image
                            key={`img_${tech}`}
                            src={svgRepoImages[`logo${tech}`]}
                            alt={`logo de la technologie de développement ${tech}`}
                            height={30}
                            width={30}
                        />
                    )) }
                </div>
            </div>
        </article>
        </Link>
    );
};