import { TechDTO } from "./TechDTO"

export type ProjectDemoDTO = {
    title: string,
    image: { url: string }
}

export type ProjectDTO = {
    slug: string,
    title: string,
    shortDescription: string, 
    description: { html: string }
    thumb: { url: string },
    technologies: TechDTO[],
    demos?: ProjectDemoDTO[]
    githubLink?: string
    demoLink?: string
}