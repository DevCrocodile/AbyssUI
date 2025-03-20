import React, { ReactNode } from "react"

export function Button({ children }: { children: ReactNode }) {
    return (
        <button className="bg-blue-500 py-2 px-4 rounded-md">
            {children}
        </button>
    )
}