import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface IBadgeProps extends HTMLAttributes<HTMLSpanElement>{
    label: string
}
export const Badge = ({ label, className, ...spanProps } : IBadgeProps) => {
    return (
        <span className={twMerge(
            'text-sky-400 bg-sky-800/50 px-4 py-1 rounded-md text-sm uppercase',
            className
        )} {...spanProps}>
            {label}
        </span>
    )
}