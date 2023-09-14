interface ISectionDescriptiveProps {
    title: string,
    subtitle: string,
    children: React.ReactNode 
}
export const SectionDescriptive = ({title, subtitle, children} : ISectionDescriptiveProps) => {
    return (
        <section className="container py-16 flex flex-col gap-5">
            <header className="flex flex-col gap-2">
                <span className="font-mono text-sky-500 text-sm">{`.../${subtitle}`}</span>
                <h3 className="text-white text-2xl">{title}</h3>
            </header>
            { children }
        </section>
    )
}