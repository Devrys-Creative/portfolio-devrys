'use client';

import "./ThemeToggler.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

type themeType = null | "light" | "dark";

export const ThemeToggler = () => {

    const [theme,setTheme] = useState<themeType>(null);

    const invertTheme = (theme:themeType) => theme==="dark" ? "light" : "dark";
    const toggleTheme = () => {
        setTheme( invertTheme(theme) );
    };

    useEffect(() => {
        // initial toggler position
        if(document.documentElement.classList.contains("theme-light")) { setTheme("light"); } else { setTheme("dark"); }
    },[]);

    useEffect(() => {
        if(theme !== null) { 
            document.documentElement.classList.replace(`theme-${invertTheme(theme)}`,`theme-${theme}`);
            const themeToggler = document.querySelector(".theme-toggler") as HTMLElement;
            themeToggler.classList.remove(`theme-toggler--${invertTheme(theme)}`);
            themeToggler.classList.add(`theme-toggler--${theme}`);
            localStorage.setItem("theme",theme);
        }
    },[theme]);


    return theme && (
        <div className={`theme-toggler`} onClick={toggleTheme} role="button" aria-label="widget de changement de thème" aria-roledescription="permet de passer du thème clair au thème foncé et inversement">
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faMoon} />
        </div>
    );
}; 