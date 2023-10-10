'use client'

import { ExperiencesTimeline } from "./ExperiencesTimeline"
import { SectionDescriptive } from "../global/SectionDescriptive"
import { ExperienceWorkDTO } from "@utils/models/ExperienceWorkDTO"
import { motion } from "framer-motion"
interface IExperienceWorkSectionProps {
    data: ExperienceWorkDTO[] 
}
export const ExperienceWorkSection = ({ data } : IExperienceWorkSectionProps) => {
    return (
        <SectionDescriptive title="Experiências profissionais" subtitle="experiências">
            <div className="flex gap-16 flex-col sm:flex-row w-full">
                <div className="max-w-[420px]">
                    <motion.p 
                        initial={{ opacity: 0,y: 100 }}
                        exit={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        className="text-gray-400"
                    >Sou desenvolvedor e amante de design (de todos os tipos e encargos) estou aberto a novas oportunidades de crescimento profissional e aprendizado.</motion.p>
                </div>
                <ExperiencesTimeline experiences={data}/>
            </div>
        </SectionDescriptive>
    )
}