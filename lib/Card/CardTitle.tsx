import { ReactNode } from "react";

interface CardTitleProps {
    children: ReactNode
}

export function CardTitle({ children }: CardTitleProps) {
    return <h3 className="font-semibold leading-none tracking-tight text-lg">{children}</h3>
}