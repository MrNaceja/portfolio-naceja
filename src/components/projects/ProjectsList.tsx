'use client'

import { ProjectCard } from "@components/projects/ProjectCard"
import { ProjectDTO } from "@utils/models/ProjectDTO"
import { motion } from "framer-motion"
interface IProjectsListProps {
    projects: ProjectDTO[]
}
export const ProjectsList= ({ projects } : IProjectsListProps) => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: -50 }}
            exit={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .3 }}
            className="py-32 container rounded-2xl md:rounded-lg bg-gradient-to-b from-sky-900/5 gap-5 grid grid-cols-1 md:grid-cols-[repeat(3,minmax(200px,1fr))] overflow-x-clip"
        >
            {
                projects.map((project, index) => ( 
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        exit={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .4, delay: .3 * index }}
                        key={`project-${project.slug}-${project.title}`}
                    >
                        <ProjectCard project={project}/>
                    </motion.div>
                ))
            }
        </motion.section>
    )
}