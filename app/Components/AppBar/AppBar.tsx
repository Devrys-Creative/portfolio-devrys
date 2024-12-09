
// vendor components
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// Custom components
import { AppBarMenuMarker } from "../ApparMenuMarker/AppBarMenuMarker";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { BurgerMenuButton } from "../BurgerMenuButton/BurgerMenuButton";

// Style
import "./appBar.scss";

export const AppBar = ({menuMarker = false}) => {

    // menu sections
    const sectionsList = [
        {
            id: "about",
            icon: "id-card-clip",
            label: "Bio",
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
            <BurgerMenuButton />
            <Link className="appbar__menu__home" href="/">Devrys-Creative</Link>
            <nav className="appbar__menu">
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
            <ThemeToggler />
        </header>
    )
}