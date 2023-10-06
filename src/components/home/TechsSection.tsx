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
                    <TechCard 
                        initial={{ opacity: 0, x: -100 }}
                        exit={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15, delay: index * 0.1 }}
                        key={index} {...tech} 
                    />
                ))
            }
           </main>
        </SectionDescriptive>
    )
}