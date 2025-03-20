import { ReactNode, useState } from "react";

export function Dropdown({ children, trigger }: { children: ReactNode, trigger: ReactNode }) {
    const [show, setShow] = useState(false)
    return (
        <div className="w-fit relative transition-all" onClick={() => setShow((curr: boolean) => !curr)}>
            <div>{trigger}</div>
            {show && <ul className="p-1 min-w-max relative right-0 mt-1 bg-white border border-slate-500/20 gap-2 rounded-lg shadow overflow-hidden">{children}</ul>}
        </div>
    )
}