import { ReactNode } from "react"

interface CardContentProps {
    children: ReactNode
}

export function CardContent({ children }: CardContentProps) {
    return <main className="p-6 pt-0">{children}</main>
}