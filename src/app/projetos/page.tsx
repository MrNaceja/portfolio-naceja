import { ProjectsIntroSection } from "@components/projects/ProjectsIntroSection";
import { ProjectsList } from "@components/projects/ProjectsList";
import { ProjectDTO } from "@utils/models/ProjectDTO";
import { fetchHygraphQuery } from "@utils/scripts/fetchHygraphQuery";
import { Metadata } from "next";

type ProjectsPageDTO = {
    projects: ProjectDTO[]
}

export const metadata : Metadata = {
    title: 'Projetos'
}

async function fetchData() : Promise<ProjectsPageDTO> {
    const data = await fetchHygraphQuery<ProjectsPageDTO>(`
        query ProjectsPageQuery {
            projects {
                slug
                title
                shortDescription
                thumb { url }
                technologies { name }
            }
        }
    `)
    return data
}

export default async function ProjectsPage() {
    const pageData = await fetchData()
    return (
        <>
            <ProjectsIntroSection />
            <ProjectsList projects={pageData.projects} />
        </>
    )
}