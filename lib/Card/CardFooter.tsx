import { ReactNode } from "react";

interface CardFooterProps {
    children: ReactNode
}

export function CardFooter({ children }: CardFooterProps) {
    return <footer className="p-6 pt-0">{children}</footer>
}