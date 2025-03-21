import { ReactNode } from "react";

interface CardDescriptionProps {
    children: ReactNode
}

export function CardDescription({ children }: CardDescriptionProps) {
    return <p className="text-sm text-slate-500">{children}</p>
}