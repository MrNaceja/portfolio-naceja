import { SectionDescriptive } from "@components/SectionDescriptive"
import { Divider } from "@components/Divider"
import Image from "next/image"
import { Button } from "@components/Button"
import { BsArrowUpRight } from 'react-icons/bs'

const PROJECTS = [
    {
        name: 'E-conomize',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ab labore eius eos aliquam repellat atque debitis veniam, molestiae tempora laborum ipsa iste rerum. Minima praesentium at dicta provident optio.',
        img: '/images/project_economize.png',
        linkTo: '/projetos/economize'
    },
    {
        name: 'Não sei ainda',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ab labore eius eos aliquam repellat atque debitis veniam, molestiae tempora laborum ipsa iste rerum. Minima praesentium at dicta provident optio.',
        img: '/images/project_economize.png',
        linkTo: '/projetos/economize'
    },
]

export const HighlightedProjectsSection = () => {
    return (
        <SectionDescriptive title="Projetos em destaque" subtitle="destaques">
            <Divider />
            <main>
                {
                    PROJECTS.map(project => (
                        <div key={project.name}>
                            <div className="flex items-center flex-col sm:flex-row justify-between gap-6 lg:gap-12">
                                <div className='w-full h-full'>
                                    <Image
                                        width={300}
                                        height={300}
                                        src={project.img}
                                        alt={`Imagem do projeto ${project.name}`}
                                        className={`
                                            object-cover w-72 h-72 rounded-md shadow-md
                                        `}
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h1 className="font-bold text-white text-2xl">{project.name}</h1>
                                    <p className="text-md text-gray-300">{project.description}</p>
                                    <Button className="bg-transparent">
                                        Visualizar
                                        <BsArrowUpRight />
                                    </Button>
                                </div>
                            </div>
                            <Divider className="my-3" />
                        </div>
                    ))
                }
            </main>
        </SectionDescriptive>
    )
}