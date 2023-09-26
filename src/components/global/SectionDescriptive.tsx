import { ComponentProps, DetailedHTMLProps, HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface ISectionDescriptiveProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    title: string,
    subtitle: string,
    children: React.ReactNode,
    full?: boolean  
}
export const SectionDescriptive = ({title, subtitle, children, className, full = false} : ISectionDescriptiveProps) => {
    return (
        <section className={twMerge('py-16 flex flex-col gap-5', className, !full && 'container')}>
            <header className="flex flex-col gap-2">
                <span className="font-mono text-sky-500 text-sm">{`.../${subtitle}`}</span>
                <h3 className="text-white text-2xl">{title}</h3>
            </header>
            { children }
        </section>
    )
}