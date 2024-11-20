
import Link from "next/link";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./appBar.scss";
import { AppBarMenuMarker } from "../ApparMenuMarker/AppBarMenuMarker";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
// import { useTheme } from "@/app/Hooks/useTheme";

export const AppBar = ({menuMarker = false}) => {

    // const {theme, toggleTheme} = useTheme();

    
    // menu sections
    const sectionsList = [
        {
            id: "about",
            icon: "id-card-clip",
            label: "À propos",
            offset: 0,
        },
        {
            id: "projects",
            icon: "code",
            label: "Projets",
            offset: 0,
        },
        {
            id: "contact",
            icon: "comment-dots",
            label: "Contact",
            offset: 0,
        },
    ];

    return (
        <header className="appbar">
            <nav className="appbar__menu">
                
                <Link className="appbar__menu__home" href="/">Devrys-Creative</Link>
                {menuMarker && <AppBarMenuMarker sectionsList={sectionsList} /> }
                {sectionsList.map(section => (
                    <Link
                        className="appbar__menu__link"
                        id={`menu-${section.id}`}
                        key={section.id}
                        href={`/#${section.id}`}
                    >
                    <span className="appbar__menu__link__icon"><FontAwesomeIcon icon={section.icon as IconProp} /></span>
                    {section.label}
                    </Link>
                ))}
            </nav>
            <ThemeToggler>
                <FontAwesomeIcon icon="sun" />
                <FontAwesomeIcon icon="moon" />
            </ThemeToggler>
        </header>
    )
}