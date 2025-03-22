interface InputProps {
    field: {
        type: string,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
        value: string | undefined
    }
    placeholder: string,
    label: string
    errorMessage?: string
}

export function Input({ field, placeholder, errorMessage, label }: InputProps) {
    return (
        <div className="flex flex-col gap-2 mb-5">
            <label className="text-sm font-medium">{label}</label>
            <input {...field} placeholder={placeholder} className="flex h-10 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-blue-400" />
            <div className="h-3.5">
                {errorMessage && <p className="text-sm text-red-300">{errorMessage}</p>}
            </div>
        </div>

    )
}