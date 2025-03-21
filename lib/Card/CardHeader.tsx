import { ReactNode } from "react";

interface CardHeaderProps {
    children: ReactNode
}
export function CardHeader({ children }: CardHeaderProps) {
    return <header className="flex flex-col space-y-1.5 p-6">{children}</header>

}