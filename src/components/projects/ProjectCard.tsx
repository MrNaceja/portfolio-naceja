import { Badge } from "@components/global/Badge"
import { ProjectDTO } from "@utils/models/ProjectDTO"
import Image from "next/image"
import Link from "next/link"

interface IProjectCardProps {
    project: ProjectDTO
}
export const ProjectCard = ({ project } : IProjectCardProps) => {
    return (
        <Link href={`/projetos/${project.slug}`}>
            <div className={`
                rounded-lg h-[430px] overflow-hidden bg-sky-950 border border-transparent hover:border-sky-500 
                group transition-all duration-200 cursor-pointer flex flex-col opacity-50 hover:opacity-100
                hover:shadow-md scale-95 hover:scale-100 mask-gradient-r
            `}>
                <div className="w-full h-52 overflow-hidden">
                    <Image 
                        width={200}
                        height={350}
                        alt={`Imagem projeto ${project.title}`}
                        src={project.thumb.url}
                        unoptimized
                        className="w-full h-full object-cover group-hover:scale-150 transition-all duration-300"
                    />
                </div>
                <div className="p-5 gap-3 flex flex-col" /** verificar possibilidade de uma cor dinamica aqui (verde economize)*/>
                    <h1 className="text-md group-hover:text-sky-500 font-semibold uppercase">{project.title}</h1>
                    <p className="text-sm text-gray-400 font-medium line-clamp-4">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                        {
                            project.technologies.map(tech => ( <Badge label={tech.name} key={`tech-${tech.name}-${tech.experienceTime}`} className="p-1 text-xs bg-transparent border border-sky-500"/> ))
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}