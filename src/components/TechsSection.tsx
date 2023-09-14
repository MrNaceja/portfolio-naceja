import { SectionDescriptive } from "@components/SectionDescriptive"
import { TECHS } from "@models/TechDTO"
import { TechCard } from "@components/TechCard"

export const TechsSection = () => {
    return (
        <SectionDescriptive title="Meus conhecimentos" subtitle="conhecimentos">
           <main className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-5">
            {
                TECHS.map((tech, index) => <TechCard key={index} name={tech.name} icon={tech.icon} experienceTime={tech.experienceTime} />)
            }
           </main>
        </SectionDescriptive>
    )
}