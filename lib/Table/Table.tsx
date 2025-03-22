import { ReactNode } from "react"

interface TableProps {
    children: ReactNode
    columns: Array<{
        key: string,
        element: ReactNode
    }>
    data: Array<{
        [key: string]: ReactNode
    }>

}

function TableHeader({ children }: { children: ReactNode }) {
    return (
        <thead className="border-b border-b-slate-500/20 bg-gray-200/50">
            <tr className="transition-colors hover:bg-gray-200/70">
                {children}
            </tr>
        </thead>
    )
}

function TableHead({ children }: { children: ReactNode }) {
    return (
        <th className="h-12 px-4 text-left align-middle font-medium text-slate-500/80">
            {children}
        </th>
    )
}
function TableBody({ children }: { children: ReactNode }) {
    return <tbody className="[&_tr:last-child]:border-0">{children}</tbody>
}

function TableRow({ children }: { children: ReactNode }) {
    return (
        <tr className="border-b border-b-slate-500/20 transition-colors bg-white">
            {children}
        </tr>
    )
}
function TableCell({ children }: { children: ReactNode }) {
    return (
        <td className="p-4 align-middle">{children}</td>
    )
}
export function Table({ children, columns, data }: TableProps) {
    return (
        <div className="rounded-md border border-slate-500/20">
            <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                    <TableHeader>
                        <>
                            {
                                columns.map((column, index) => (
                                    <TableHead key={index}>{column.element}</TableHead>
                                ))
                            }
                        </>
                    </TableHeader>
                    <TableBody>
                        {
                            data.length > 0
                                ? (
                                    data.map((row, rowIndex) => (
                                        <TableRow key={rowIndex}>
                                            {
                                                columns.map((column, colIndex) => (
                                                    <TableCell key={`${rowIndex}-${colIndex}`}>
                                                        {row[column.key] || null}
                                                    </TableCell>
                                                ))
                                            }
                                        </TableRow>
                                    )

                                    )
                                )
                                : (
                                    <tr className="flex justify-center items-center ">
                                        <td colSpan={columns.length}>
                                            No data found
                                        </td>
                                    </tr>
                                )
                        }
                    </TableBody>
                    {children}
                </table>
            </div>
        </div>
    )
}
