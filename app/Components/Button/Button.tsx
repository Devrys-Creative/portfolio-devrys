'use client';

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode,
};

export const Button:React.FC<ButtonProps> = ({children}) => {
    return (
        <Link href='#'>{children}</Link>
    )
}