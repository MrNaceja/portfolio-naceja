import { ExperiencesTimeline } from "./ExperiencesTimeline"
import { SectionDescriptive } from "../global/SectionDescriptive"

export const ExperienceWorkSection = () => {
    return (
        <SectionDescriptive title="Experiências profissionais" subtitle="experiências">
            <div className="flex gap-16 flex-col sm:flex-row">
                <div className="max-w-[420px]">
                    <p className="text-gray-400">Sou desenvolvedor e amante de design (de todos os tipos e encargos) estou aberto a novas oportunidades de crescimento profissional e aprendizado.</p>
                </div>
                <ExperiencesTimeline />
            </div>
        </SectionDescriptive>
    )
}