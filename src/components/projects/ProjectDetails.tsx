'use client'

import { Badge } from "@components/global/Badge"
import { Button } from "@components/global/Button"
import { SectionDescriptive } from "@components/global/SectionDescriptive"
import { ProjectDTO } from "@utils/models/ProjectDTO"
import Link from "next/link"
import { HiArrowNarrowLeft, HiOutlineStatusOnline } from "react-icons/hi"
import { TbBrandGithub } from "react-icons/tb"
import { motion } from "framer-motion"

interface IProjectDetailsProps {
    details: ProjectDTO
}
export const ProjectDetails = ({ details } : IProjectDetailsProps) => {
    const { title, technologies, githubLink, thumb, demoLink, description } = details
    const buttonAnim = {
        initial: { opacity: 0, scale: 0.5 },
        exit: { opacity: 0, scale: 0.5 },
        whileInView: { opacity: 1, scale: 1},
        transition: { duration: .3 }
    }
    return (
        <SectionDescriptive 
                title={title}
                subtitle="projeto"
                full
                className="h-max py-32 items-center justify-end px-6 md:px-16 relative"
            >
                <motion.figure 
                    className="absolute inset-0 z-[-1] mask-gradient-b"
                    style={{
                        background: `url(/images/hero_bg.png) no-repeat center/cover, url(${thumb.url}) no-repeat center/cover`,
                    }}
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .5 }}
                />
                <div className="text-gray-400 text-sm max-w-2xl text-center" dangerouslySetInnerHTML={{ __html: description.html }}></div>
                <div className="flex flex-wrap w-full max-w-[500px] gap-2 items-center justify-center">
                    { technologies.map((tech, index) => (
                        <Badge 
                            initial={{ opacity: 0, scale:0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            label={tech.name} key={`tech-${tech.name}-${tech.experienceTime}`}
                        />
                    )) }
                </div>
                <div className="flex justify-between gap-5">
                    <motion.a href={githubLink} target="_blank" {...buttonAnim}>
                        <Button>
                            <TbBrandGithub />
                            Repositório
                        </Button>
                    </motion.a>
                    <motion.a href={demoLink} target="_blank" {...buttonAnim} transition={{ delay:.4 }}>
                        <Button>
                            <HiOutlineStatusOnline />
                            Demonstração
                        </Button>
                    </motion.a>
                </div>
                <Link href='/projetos' className={`
                    flex gap-2 items-center border border-transparent p-3 rounded-md
                    hover:gap-3 transition-all
                `}>
                    <HiArrowNarrowLeft />
                    Voltar aos projetos
                </Link>
            </SectionDescriptive>
    )
}