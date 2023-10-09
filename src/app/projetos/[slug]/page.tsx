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
import { ProjectDetails } from "@components/projects/ProjectDetails";

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
        demos,
        ...projectDetails
    } = pageData.project
    return (
        <>
            <ProjectDetails details={projectDetails}/>
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