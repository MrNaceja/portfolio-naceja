import { ExperienceWorkSection } from "@components/ExperienceSection"
import { HeroSection } from "@components/HeroSection"
import { HighlightedProjectsSection } from "@components/HighlightedProjectsSection"
import { TechsSection } from "@components/TechsSection"

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
