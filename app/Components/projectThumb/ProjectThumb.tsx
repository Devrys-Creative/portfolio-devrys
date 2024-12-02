'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectThumbProps {
    videoSource: string,
    imageSrc: string,
    imageAlt: string,
}

export const ProjectThumb:React.FC<ProjectThumbProps> = ({videoSource, imageSrc, imageAlt}) => {

    const [webmSupport, setWebmSupport] = useState(false);

    useEffect(() => {
       const video = document.createElement("video");
       setWebmSupport(video.canPlayType('video/webm') !== '' && videoSource !== "" );
    },[videoSource]);

    return webmSupport ? (
            <video autoPlay loop muted className="project-card__thumb">
                <source src={`/projects/thumbs/${videoSource}`} type="video/webm" />
            </video>
        ) : (
            <Image
                className="project-card__thumb"
                src={`/projects/thumbs/${imageSrc}`}
                alt={imageAlt}
                width={500}
                height={500}
                priority
            />
        );
};