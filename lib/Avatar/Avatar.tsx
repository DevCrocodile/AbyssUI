import clsx from "clsx"
import { twMerge } from "tailwind-merge"


const colors = {
    blue: "bg-blue-100 text-blue-700 border-blue-300",
    amber: "bg-amber-100 text-amber-700 border-amber-300",
    red: "bg-red-100 text-red-700 border-red-300",
    green: "bg-green-100 text-green-700 border-green-300",
    purple: "bg-purple-100 text-purple-700 border-purple-300",
    teal: "bg-teal-100 text-teal-700 border-teal-300"
}
interface AvatarProps {
    imgSrc?: string,
    userName: string,
    size: 'sm' | 'md' | 'lg'
    color?: keyof typeof colors
}

export function Avatar({ imgSrc, userName = 'unknown', size = 'sm', color = 'blue' }: AvatarProps) {
    const initials = userName.split(' ').map((name) => name[0]).join('').toUpperCase()
    const baseStyles = 'rounded-full flex items-center justify-center overflow-hidden'
    const sizeStyles = {
        sm: 'w-8 h-8 text-sm',
        md: 'w-10 h-10 text-base',
        lg: 'w-12 h-12 text-lg'
    }
    return (
        <div className={twMerge(clsx(sizeStyles[size], colors[color], baseStyles))}>
            {imgSrc
                ? <img src={imgSrc} className="object-contain"></img>
                : initials
            }
        </div>
    )
}