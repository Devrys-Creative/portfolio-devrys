import Link from "next/link";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";


export const AppBar = () => {
    return (
        <header>
            <nav>
                <Link href="/">Devrys-Creative</Link>
                <Link href="/#about">Moi</Link>
                <Link href="/#skills">Mes compétences</Link>
                <Link href="/#projects">Mes projets</Link>
                <Link href="/#contact">Me contacter</Link>
            </nav>
            <div>
                <ThemeToggler />
            </div>
        </header>
    )
}