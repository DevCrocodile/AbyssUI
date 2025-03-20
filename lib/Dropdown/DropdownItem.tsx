import { ReactNode } from "react"

export function DropdownItem({ children }: { children: ReactNode }) {
    return (
        <li className="flex gap-3 items-center px-4 py-1 text-gray-800 hover:bg-slate-100 cursor-pointer rounded text-sm">
            {children}
        </li>
    )
}