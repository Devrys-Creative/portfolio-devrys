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
    $top: number,
    $left: number,
    $width: number,
    $height: number,
}
const StyledMarker = styled.div<styledMarkerProps>`
    top: ${props => props.$top}px;
    left: ${props => props.$left}px;
    width: ${props => props.$width}px;
    height: ${props => props.$height}px;
`;


export const AppBarMenuMarker:React.FC<AppBarMenuMarkerProps> = ({sectionsList}) => {

    // Current displayed section
    const [displayedSection, setDisplayedSection] = useState(sectionsList[0]);
    const [selectedMenuLink, setSelectedMenuLink] = useState<HTMLElement|undefined>(); //document.getElementById(`menu-${sectionsList[0].id}`) as HTMLElement
    const [polygonCoords, setPolygonCoords] = useState([
        {x:50,y:0,},
        {x:93,y:25,},
        {x:93,y:75,},
        {x:50,y:100,},
        {x:7,y:75,},
        {x:7,y:25,},
    ])

    useEffect(() => {
        // get sections offsets
        sectionsList.forEach(section => {
            section.offset = (document.getElementById(section.id) as HTMLElement).offsetTop;
        });
        // handle scroll
        const handleScroll = () => {
            const currentOffset = window.scrollY;
            const activeSection = sectionsList.reduce((prevSection, currentSection) => {
                if(currentOffset >= currentSection.offset - 300) { return currentSection; } else { return prevSection; }
            });
            setDisplayedSection(activeSection);
        }
        // morph Polygon
        const morphCoord = (n:number) => {
            const sign = (Math.round(Math.random())*2)-1; // sign is +1 or -1
            const value = (Math.round(Math.random()*5))+5; //value between 5 and 10
            return Math.max(0,Math.min(n + (sign*value),100));
        }
        const morphPolygon = () => {
            const newCoordsList = polygonCoords.map(polygonCoord => {
                return {
                    x:morphCoord(polygonCoord.x),
                    y:morphCoord(polygonCoord.y),
                }
            });
            setPolygonCoords(newCoordsList);
        }
        window.addEventListener("scroll", handleScroll);
        // initialize on mount
        handleScroll();
        const polygonInterval = setInterval(morphPolygon,2000);
        // remove scroll event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(polygonInterval);
        }
    },[]);
    
    useEffect(() => {
        setSelectedMenuLink(document.getElementById(`menu-${displayedSection.id}`) as HTMLElement);
    },[displayedSection])

    return selectedMenuLink && polygonCoords && (
        <StyledMarker
            className="menu-marker"
            $top={selectedMenuLink.offsetTop}
            $left={selectedMenuLink.offsetLeft}
            $width={selectedMenuLink.offsetWidth}
            $height={selectedMenuLink.offsetHeight}
            style={{
                clipPath: `polygon(${polygonCoords.map(coord => `${coord.x}% ${coord.y}%`).join(',')})`,
            }}
            aria-roledescription="Cet élément graphique se positionne derrière l'ancre (du menu) actuellement affichée (varie selon le défilement vertical de la page)"
            aria-hidden="true"
        />
    )
};
