import { ReactNode } from "react"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const solidColors = {
    white: "bg-white text-black/80 border border-slate-600/20 hover:bg-slate-100",
    teal: "bg-teal-600 text-white hover:bg-teal-700",
    blue: "bg-blue-600 text-white hover:bg-blue-700",
    red: "bg-red-600 text-white hover:bg-red-700"
}

const ghostColors = {
    white: "border border-slate-600/20 text-slate-600 hover:bg-slate-100",
    teal: "border border-teal-600 text-teal-600 hover:bg-teal-100",
    blue: "border border-blue-600 text-blue-600 hover:bg-blue-100",
    red: "border border-red-600 text-red-600 hover:bg-red-100"
}

export interface ButtonProps {
    children: ReactNode
    variant?: 'solid' | 'ghost',
    size?: "sm" | "md" | "lg"
    disabled?: boolean,
    className: string,
    onClick?: () => void,
    color?: keyof typeof solidColors
}

export function Button({ children, variant = "solid", size = "lg", disabled = false, className, onClick, color = "teal" }: ButtonProps) {

    const baseStyles = "rounded-md font-medium transition-all duration-200 flex items-center shadow-md justify-center"

    const variantStyles = variant === 'solid' ? solidColors[color] : ghostColors[color]

    const sizeStyles = {
        "px-2 py-1 text-sm": size === "sm",
        "px-4 py-2 text-base": size === "md",
        "px-6 py-3 text-lg": size === "lg"
    }

    const disabledStyles = disabled
        ? "opacity-50 cursor-not-allowed"
        : "cursor-pointer"

    return (
        <button className={twMerge(clsx(baseStyles, sizeStyles, disabledStyles, variantStyles), className)} disabled onClick={onClick}>
            {children}
        </button>
    )
}