
'use client';
// React and next components
import { useEffect, useState } from "react";
import styled from "styled-components";

// style
import "./appBarMenuMarker.scss";

interface sectionInterface {
    id: string,
    icon: string,
    label: string,
    offset: number,
}
interface AppBarMenuMarkerProps {
    sectionsList: Array<sectionInterface>,
}

interface styledMarkerProps {
    top: number,
    left: number,
    width: number,
    height: number,
}
const StyledMarker = styled.div<styledMarkerProps>`
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;


export const AppBarMenuMarker:React.FC<AppBarMenuMarkerProps> = ({sectionsList}) => {

    // Current displayed section
    const [displayedSection, setDisplayedSection] = useState(sectionsList[0]);
    const [selectedMenuLink, setSelectedMenuLink] = useState(document.getElementById(`menu-${sectionsList[0].id}`) as HTMLElement);

    useEffect(() => {
        // get sections offsets
        sectionsList.forEach(section => {
            section.offset = (document.getElementById(section.id) as HTMLElement).offsetTop;
        });
        console.log(sectionsList);
        // handle scroll
        const handleScroll = () => {
            const currentOffset = window.scrollY;
            const activeSection = sectionsList.reduce((prevSection, currentSection) => {
                if(currentOffset >= currentSection.offset - 300) { return currentSection; } else { return prevSection; }
            });
            setDisplayedSection(activeSection);
        }
        window.addEventListener("scroll", handleScroll);
        // initialize on mount
        handleScroll();
        // remove scroll event listener on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);
    
    useEffect(() => {
        console.log(displayedSection);
        setSelectedMenuLink(document.getElementById(`menu-${displayedSection.id}`) as HTMLElement);
    },[displayedSection])

    return selectedMenuLink && (
        <StyledMarker
            className="menu-marker"
            top={selectedMenuLink.offsetTop}
            left={selectedMenuLink.offsetLeft}
            width={selectedMenuLink.offsetWidth}
            height={selectedMenuLink.offsetHeight}
        />
    )
};
