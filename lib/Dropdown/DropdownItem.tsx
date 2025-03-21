import { ReactNode } from "react"

export function DropdownItem({ children }: { children: ReactNode }) {
    return (
        <li className="relative flex gap-2 items-center px-2 py-1.5 transition-colors text-gray-800 hover:bg-slate-100 cursor-pointer rounded-sm text-sm">
            {children}
        </li>
    )
}