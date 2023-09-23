import { SectionDescriptive } from "@components/SectionDescriptive"
import { Divider } from "@components/Divider"
import Image from "next/image"
import { BsArrowUpRight } from 'react-icons/bs'
import { TECHS } from "@utils/models/TechDTO"
import { Badge } from "@components/Badge"
import Link from "next/link"

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
                    PROJECTS.map((project, index) => (
                        <div key={project.name}>
                            <div className="flex items-center flex-col sm:flex-row gap-6 lg:gap-12">
                                <div className='w-full h-full'>
                                    <Image
                                        width={300}
                                        height={300}
                                        src={project.img}
                                        alt={`Imagem do projeto ${project.name}`}
                                        className={`
                                            object-cover w-full h-72 rounded-md shadow-md
                                        `}
                                    />
                                </div>
                                <div className="flex flex-col gap-5">
                                   <div>
                                        <h1 className="font-bold text-white text-2xl">{project.name}</h1>
                                        <p className="text-md text-gray-300">{project.description}</p>
                                   </div>
                                    <div className="flex gap-3">
                                    {
                                        TECHS.map((tech, index) => {
                                            return <Badge label={tech.name} key={index} />
                                        })
                                    }
                                    </div>
                                    <Link href='/projetos/economize' className="flex gap-2 items-center self-center md:self-start" target="_blank">
                                        Visualizar
                                        <BsArrowUpRight />
                                    </Link>
                                </div>
                            </div>
                            <Divider className="my-5" />
                        </div>
                    ))
                }
            </main>
            <div className="flex gap-2 items-center justify-center">
                <span className="text-gray-300">Se interressou?</span>
                <Link href='/projetos' target="_blank" className="flex gap-2 items-center">
                    Visualizar todos
                    <BsArrowUpRight />
                </Link>
            </div>
        </SectionDescriptive>
    )
}