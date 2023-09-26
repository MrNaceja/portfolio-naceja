import { ExperienceWorkSection } from "@components/home/ExperienceSection"
import { HeroSection } from "@components/home/HeroSection"
import { HighlightedProjectsSection } from "@components/home/HighlightedProjectsSection"
import { TechsSection } from "@components/home/TechsSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechsSection />
      <HighlightedProjectsSection />
      <ExperienceWorkSection />
    </>
  )
}
