'use client'

import { SectionDescriptive } from "@components/global/SectionDescriptive"
import { Divider } from "@components/global/Divider"
import Image from "next/image"
import { BsArrowUpRight } from 'react-icons/bs'
import Link from "next/link"
import { ProjectDTO } from "@utils/models/ProjectDTO"
import { Badge } from "@components/global/Badge"
import { motion } from "framer-motion"

interface IHighlightedProjectsSectionProps {
    data: ProjectDTO[]
}
export const HighlightedProjectsSection = ({ data: projects } : IHighlightedProjectsSectionProps) => {
    return (
        <SectionDescriptive title="Projetos em destaque" subtitle="destaques">
            <Divider />
            <main>
                {
                    projects.map((project, index) => (
                        <div key={project.slug}>
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                exit={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y:0 }}
                                transition={{ duration: .5, delay: index * 0.1 }}
                                className="flex items-center flex-col sm:flex-row gap-6 lg:gap-12"
                            >
                                <div className='w-full h-full'>
                                    <Image
                                        width={300}
                                        height={300}
                                        src={project.thumb.url}
                                        alt={`Imagem do projeto ${project.title}`}
                                        className={`
                                            object-cover w-full h-72 rounded-md shadow-md
                                        `}
                                    />
                                </div>
                                <div className="flex flex-col gap-5">
                                   <div>
                                        <h1 className="font-bold text-white text-2xl">{project.title}</h1>
                                        <p className="text-md text-gray-300">{project.shortDescription}</p>
                                   </div>
                                    <div className="flex gap-3">
                                    {
                                        project.technologies.map((tech, index) => {
                                            return <Badge label={tech.name} key={index} />
                                        })
                                    }
                                    </div>
                                    <Link href={`/projetos/${project.slug}`} className="flex gap-2 items-center self-center md:self-start transition-colors hover:text-sky-500" target="_blank">
                                        Visualizar
                                        <BsArrowUpRight />
                                    </Link>
                                </div>
                            </motion.div>
                            <Divider className="my-5" />
                        </div>
                    ))
                }
            </main>
            <div className="flex gap-2 items-center justify-center md:justify-start">
                <span className="text-gray-300">Se interressou?</span>
                <Link href='/projetos' target="_blank" className="flex gap-2 items-center hover:text-sky-500 transition-colors">
                    Visualizar todos
                    <BsArrowUpRight />
                </Link>
            </div>
        </SectionDescriptive>
    )
}