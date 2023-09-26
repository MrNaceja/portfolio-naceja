import { ProjectCard } from "@components/projects/ProjectCard"

export const ProjectsList= () => {
    return (
        <section className="py-32 container rounded-2xl md:rounded-lg bg-gradient-to-b from-sky-900/25 gap-5 grid grid-cols-1 md:grid-cols-[repeat(3,minmax(200px,1fr))]">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </section>
    )
}