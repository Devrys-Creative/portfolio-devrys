'use client';

import { useTheme } from "@/app/Hooks/useTheme";
import "./ThemeToggler.scss";

import { ReactNode } from "react";


interface themeTogglerProps {
    children: ReactNode,
};

export const ThemeToggler:React.FC<themeTogglerProps> = ({children}) => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`theme-toggler theme-toggler--${theme}`} onClick={toggleTheme}>
            {children}
        </div>
    );
}; 