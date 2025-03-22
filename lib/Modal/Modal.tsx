import { ReactNode, forwardRef } from "react";

interface ModalProps {
    children: ReactNode,
    toggleModal: () => void
}

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(({ children, toggleModal }, ref) => {
    return (
        <dialog ref={ref} onClick={(e) => {
            if (e.currentTarget === e.target) {
                toggleModal();
            }
        }}>
            {children}
        </dialog>
    )
})