import { useState } from "react"

export function useField({ type }: { type: string }) {
    const [value, setValue] = useState<string | undefined>(undefined)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return { type, value, onChange }
}