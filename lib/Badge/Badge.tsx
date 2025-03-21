import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const colors = {
    blue: "bg-blue-100 text-blue-700 border-blue-300",
    amber: "bg-amber-100 text-amber-700 border-amber-300",
    red: "bg-red-100 text-red-700 border-red-300",
    green: "bg-green-100 text-green-700 border-green-300",
    purple: "bg-purple-100 text-purple-700 border-purple-300",
    teal: "bg-teal-100 text-teal-700 border-teal-300"
}

export interface BadgeProps {
    children: ReactNode,
    color: keyof typeof colors
}
export function Badge({ children, color }: BadgeProps) {
    const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
    const colorStyles = colors[color]

    return (
        <div className={twMerge(clsx(baseStyles, colorStyles))}>
            {children}
        </div>
    )
}