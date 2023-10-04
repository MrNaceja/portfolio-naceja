import { ExperiencesTimeline } from "./ExperiencesTimeline"
import { SectionDescriptive } from "../global/SectionDescriptive"
import { ExperienceWorkDTO } from "@utils/models/ExperienceWorkDTO"

interface IExperienceWorkSectionProps {
    data: ExperienceWorkDTO[] 
}
export const ExperienceWorkSection = ({ data } : IExperienceWorkSectionProps) => {
    return (
        <SectionDescriptive title="Experiências profissionais" subtitle="experiências">
            <div className="flex gap-16 flex-col sm:flex-row">
                <div className="max-w-[420px]">
                    <p className="text-gray-400">Sou desenvolvedor e amante de design (de todos os tipos e encargos) estou aberto a novas oportunidades de crescimento profissional e aprendizado.</p>
                </div>
                <ExperiencesTimeline experiences={data}/>
            </div>
        </SectionDescriptive>
    )
}