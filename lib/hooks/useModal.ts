import { useRef } from "react"

export function useModal() {
    const dialogRef = useRef<HTMLDialogElement>(null)
    function toggleDialog() {
        if (!dialogRef.current) return

        if (dialogRef.current.hasAttribute("open")) dialogRef.current.close()
        else dialogRef.current.showModal()
    }
    return { dialogRef, toggleDialog }
}