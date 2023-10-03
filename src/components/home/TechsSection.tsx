import { SectionDescriptive } from "@components/global/SectionDescriptive"
import { TechDTO } from "@models/TechDTO"
import { TechCard } from "@components/global/TechCard"

interface ITechsSectionProps {
    data: TechDTO[]
}
export const TechsSection = ({ data: techs } : ITechsSectionProps) => {
    return (
        <SectionDescriptive title="Meus conhecimentos" subtitle="conhecimentos">
           <main className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-5">
            {
                techs.map((tech, index) => (
                    <TechCard key={index} name={tech.name} iconSvg={tech.iconSvg} experienceTime={tech.experienceTime} />
                ))
            }
           </main>
        </SectionDescriptive>
    )
}