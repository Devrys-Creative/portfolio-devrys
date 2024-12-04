'use client';

import { useEffect } from "react";
import "./burgerMenuButton.scss";

export const BurgerMenuButton = () => {

    const toggleMenu = () => {
        console.log("toggle");
        const burgerButton = document.querySelector(".burger-menu") as HTMLElement;
        burgerButton.classList.toggle("burger-menu--active");
        const menu = document.querySelector(".appbar__menu") as HTMLElement;
        if(burgerButton.classList.contains("burger-menu--active")) { menu.classList.add("appbar__menu--visible"); } else { menu.classList.remove("appbar__menu--visible"); }
    }

    useEffect(() => {
        document.querySelector(".burger-menu")?.addEventListener("click", toggleMenu);
    },[])

    return (
        <div className="burger-menu">
            <div className="burger-menu__icon"></div>
        </div>
    )
}