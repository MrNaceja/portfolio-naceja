'use client'

import { DetailedHTMLProps, HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"

interface ISectionDescriptiveProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    title: string,
    subtitle: string,
    children: React.ReactNode,
    full?: boolean  
}
export const SectionDescriptive = ({title, subtitle, children, className, full = false, ...sectionProps} : ISectionDescriptiveProps) => {
    const animConfig = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    }
    return (
        <section className={twMerge('py-16 flex flex-col gap-5', className, !full && 'container')} { ...sectionProps }>
            <header className="flex flex-col gap-2">
                <motion.span 
                    {...animConfig}
                    transition={{ duration: 0.5 }}
                    className="font-mono text-sky-500 text-sm"
                >{`.../${subtitle}`}</motion.span>
                <motion.h3 
                    {...animConfig}
                    transition={{ duration: 0.8 }}
                    className="text-white text-2xl animate-pulse"
                >{title}</motion.h3>
            </header>
            { children }
        </section>
    )
}