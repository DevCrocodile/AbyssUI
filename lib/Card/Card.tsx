import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export interface CardProps {
    children: ReactNode,
    className?: string
}

export function Card({ children, className = "" }: CardProps) {
    const baseStyles = 'rounded-xl border border-slate-500/20 bg-transparent shadow w-[350px]'

    return (
        <section className={twMerge(clsx(baseStyles, className))}>
            {children}
        </section>
    )
}