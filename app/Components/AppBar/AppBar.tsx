import Link from "next/link";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./appBar.scss";
// import { useTheme } from "@/app/Hooks/useTheme";

export const AppBar = () => {

    // const {theme, toggleTheme} = useTheme();

    return (
        <header className="appbar">
            <nav className="appbar__menu">
                <Link className="appbar__menu__home" href="/">Devrys-Creative</Link>
                <Link href="/#about"><FontAwesomeIcon icon="id-card-clip" /> Moi</Link>
                <Link href="/#skills"><FontAwesomeIcon icon="ranking-star" /> Mes compétences</Link>
                <Link href="/#projects"><FontAwesomeIcon icon="code" /> Mes projets</Link>
                <Link href="/#contact"><FontAwesomeIcon icon="comment-dots" /> Me contacter</Link>
            </nav>
            <ThemeToggler>
                <FontAwesomeIcon icon="sun" />
                <FontAwesomeIcon icon="moon" />
            </ThemeToggler>
        </header>
    )
}