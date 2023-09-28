import { Divider } from "@components/global/Divider"
import { SectionDescriptive } from "@components/global/SectionDescriptive"
import Image from "next/image"

const DEMOS = [
    {
        title: 'Tela transações',
        demoImg: '/images/project_economize.png'
    },
    {
        title: 'Tela contas',
        demoImg: '/images/project_economize.png'
    },
]

export const ProjectDemosSection = () => {
    return (
        <SectionDescriptive
            title="Confira algumas demonstrações"
            subtitle="demonstração"
        >
            {
                DEMOS.map(demo => (
                    <section key={demo.title} className="flex flex-col gap-8 items-center">
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-400">{ demo.title }</h2>
                        <Image 
                            src={demo.demoImg}
                            alt={`Imagem de demonstração ${demo.title}`}
                            height={672}
                            width={1080}
                            className="w-1/2 aspect-auto rounded-lg object-cover"
                            unoptimized
                        />
                        <Divider />
                    </section>
                ))
            }
        </SectionDescriptive>
    )
}