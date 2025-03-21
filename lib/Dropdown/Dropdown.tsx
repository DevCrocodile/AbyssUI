import { ReactNode, useState } from "react";

export interface DropdownProps {
    children: ReactNode,
    trigger: ReactNode
}

export function Dropdown({ children, trigger }: DropdownProps) {
    const [show, setShow] = useState(false)

    return (
        <div className="w-fit relative transition-all" onClick={() => setShow((curr: boolean) => !curr)}>
            <div>{trigger}</div>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${show ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                {show && <ul {...open} className="p-1 min-w-max relative right-0 mt-1 bg-white border border-slate-500/20 gap-2 rounded-md shadow overflow-hidden">{children}</ul>}
            </div>
        </div>
    )
}