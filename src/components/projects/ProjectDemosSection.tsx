'use client'

import { Divider } from "@components/global/Divider"
import { SectionDescriptive } from "@components/global/SectionDescriptive"
import { ProjectDemoDTO } from "@utils/models/ProjectDTO"
import Image from "next/image"
import { motion } from "framer-motion"

interface IProjectDemosSectionProps {
    demos: ProjectDemoDTO[]
}
export const ProjectDemosSection = ({ demos } : IProjectDemosSectionProps) => {
    return (
        <SectionDescriptive
            title="Confira algumas demonstrações"
            subtitle="demonstração"
        >
            {
                demos.map(demo => (
                    <motion.section 
                        initial={{ opacity: 0, y: 100 }}
                        exit={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        key={demo.title} className="flex flex-col gap-8 items-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-400">{ demo.title }</h2>
                        <Image 
                            src={demo.image.url}
                            alt={`Imagem de demonstração ${demo.title}`}
                            height={672}
                            width={720}
                            className="min-w-1/4 w-1/2 aspect-auto rounded-lg object-cover"
                            unoptimized
                        />
                        <Divider />
                    </motion.section>
                ))
            }
        </SectionDescriptive>
    )
}