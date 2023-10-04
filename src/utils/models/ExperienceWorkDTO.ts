import { TechDTO } from "@models/TechDTO"

export type ExperienceWorkDTO = {
    companyName: string
    companySite: string
    companyLogo:  { url: string }
    activitiesDescription: { html: string }
    role: string
    since: string
    until: string | null
    technologies: TechDTO[]
}