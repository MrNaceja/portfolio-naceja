import { Badge } from "@components/global/Badge";
import { Button } from "@components/global/Button";
import { SectionDescriptive } from "@components/global/SectionDescriptive";
import { TbBrandGithub } from 'react-icons/tb'
import { HiOutlineStatusOnline, HiArrowNarrowLeft } from 'react-icons/hi'
import Link from "next/link";
import { ProjectDemosSection } from "@components/projects/ProjectDemosSection";
import { ProjectDTO } from "@utils/models/ProjectDTO";
import { fetchHygraphQuery } from "@utils/scripts/fetchHygraphQuery";
import { Metadata } from "next";

type ProjectPageDTO = {
    project: ProjectDTO
}

async function fetchData(slug: ProjectDTO['slug']) : Promise<ProjectPageDTO> {
    const data = await fetchHygraphQuery<ProjectPageDTO>(`
        query ProjectPageQuery {
            project (where: { slug: "${slug}" }) {
                title
                description { html, text }
                shortDescription
                thumb { url }
                technologies { name }
                githubLink
                demoLink
                demos { title, image { url } }
            }
        }
    `)
    return data
}

interface IProjectPageProps {
    params: { slug: string }
}
export default async function ProjectPage({ params: { slug } } : IProjectPageProps) {
    const pageData = await fetchData(slug)
    const {
        title,
        technologies,
        description,
        thumb,
        demoLink,
        githubLink,
        demos
    } = pageData.project
    return (
        <>
            <SectionDescriptive 
                title={title}
                subtitle="projeto"
                full
                className="h-[600px] md:h-[650px] items-center justify-end px-16 relative"
            >
                <figure 
                    className="absolute inset-0 z-[-1] mask-gradient-b"
                    style={{
                        background: `url(/images/hero_bg.png) no-repeat center/cover, url(${thumb.url}) no-repeat center/cover`,
                    }}
                />
                <div className="text-gray-400 text-sm max-w-2xl text-center" dangerouslySetInnerHTML={{ __html: description.html }}></div>
                <div className="flex flex-wrap w-full max-w-[500px] gap-2 items-center justify-center">
                    { technologies.map((tech) => <Badge label={tech.name} key={`tech-${tech.name}-${tech.experienceTime}`}/>) }
                </div>
                <div className="flex justify-between gap-5">
                    <a href={githubLink} target="_blank">
                        <Button>
                            <TbBrandGithub />
                            Repositório
                        </Button>
                    </a>
                    <a href={demoLink} target="_blank">
                        <Button>
                            <HiOutlineStatusOnline />
                            Demonstração
                        </Button>
                    </a>
                </div>
                <Link href='/projetos' className={`
                    flex gap-2 items-center border border-transparent p-3 rounded-md
                    hover:gap-3 transition-all
                `}>
                    <HiArrowNarrowLeft />
                    Voltar aos projetos
                </Link>
            </SectionDescriptive>
            { demos && <ProjectDemosSection demos={demos}/>}
        </>
    )
}

export async function generateStaticParams() {
    const { projects } = await fetchHygraphQuery<{ projects: Pick<ProjectDTO, 'slug'>[] }>(`
        query ProjectSlugsQuery {
            projects (first: 100) {
                slug
            }
        }
    `)
    return projects
}

export async function generateMetadata({ params: { slug } } : IProjectPageProps) : Promise<Metadata> {
    const pageData = await fetchData(slug)
    return {
        title: pageData.project.title,
        description: pageData.project.description.text,
        openGraph: {
            images: {
                url: pageData.project.thumb.url,
                width: 1280,
                height: 720
            }
        }
    }
}