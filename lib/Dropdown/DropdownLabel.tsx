import { ReactNode } from "react";

export function DropdownLabel({ children }: { children: ReactNode }) {
    return (
        <li className="flex items-center px-2 py-1.5 border-b border-b-slate-500/10 w-full font-semibold text-sm">{children}</li>
    )
}