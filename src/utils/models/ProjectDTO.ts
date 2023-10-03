import { TechDTO } from "./TechDTO"

export type ProjectDTO = {
    slug: string,
    title: string,
    shortDescription: string, 
    description: { html: string }
    thumb: { url: string },
    technologies: TechDTO[]
}