import { ExperienceWorkSection } from "@components/home/ExperienceSection"
import { HeroSection, HeroSectionDTO } from "@components/home/HeroSection"
import { HighlightedProjectsSection } from "@components/home/HighlightedProjectsSection"
import { TechsSection } from "@components/home/TechsSection"
import { ProjectDTO } from "@utils/models/ProjectDTO"
import { SocialMediaDTO } from "@utils/models/SocialMediaDTO"
import { TechDTO } from "@utils/models/TechDTO"
import { fetchHygraphQuery } from "@utils/scripts/fetchHygraphQuery"

type HomePageDTO = {
  basicInformation: {
    introduction: { html: string },
    principalTechs: TechDTO[],
    socialMedias: SocialMediaDTO[],
    image: { url: string },
    highlightedProjects: ProjectDTO[]
  }
}

async function fetchData() : Promise<HomePageDTO> {
  const data = await fetchHygraphQuery(`
      query HomePageQuery {
          basicInformation(where: { id: "${process.env.HYGRAPH_BASIC_INFORMATION_ID}" }) {
              introduction { html }
              principalTechs { name, iconSvg, experienceTime }
              socialMedias{ iconSvg, url }
              image { url }
              highlightedProjects {
                slug
                thumb { url }
                title
                shortDescription
                description { html }
                technologies {
                  name
                }
              }
          }
      }
  `)
  return data
}

export default async function HomePage() {
  const pageData = await fetchData()
  const { introduction, principalTechs, socialMedias, image, highlightedProjects } = pageData.basicInformation

  const heroSectionData : HeroSectionDTO = {
    introduction: introduction.html,
    profilePhoto: image.url,
    principalTechs, 
    socialMedias
  }

  return (
    <>
      <HeroSection data={heroSectionData} />
      <TechsSection data={principalTechs}/>
      <HighlightedProjectsSection data={highlightedProjects}/>
      <ExperienceWorkSection />
    </>
  )
}
