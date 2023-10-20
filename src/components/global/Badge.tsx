'use client'

import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { motion } from 'framer-motion'

interface IBadgeProps extends ComponentProps<typeof motion.span> {
    label: string
}
export const Badge = ({ label, className, ...spanProps } : IBadgeProps) => {
    return (
        <motion.span className={twMerge(
            'text-sky-400 bg-sky-800/50 px-4 py-1 rounded-md text-xs uppercase font-semibold grid place-items-center',
            className
        )} {...spanProps}>
            {label}
        </motion.span>
    )
}