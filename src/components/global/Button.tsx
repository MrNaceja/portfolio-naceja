import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export const Button = ({ children, className, ...buttonProps } : IButtonProps) => {
    return (
        <button 
            className={twMerge(`
                px-4 py-2 text-white bg-sky-500 transition-all rounded-md
                flex items-center justify-center gap-2
                hover:bg-sky-600 disabled:opacity-50
            `, className)}
            {...buttonProps}
        >
            {children}
        </button>
    )
}