import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ResearchFocus } from '@/components/research-focus'
import { ProjectsSection } from '@/components/projects-section'
import { PublicationsSection } from '@/components/publications-section'
import { ExperienceSection } from '@/components/experience-section'
import { SkillsSection } from '@/components/skills-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ResearchFocus />
        <ProjectsSection />
        <PublicationsSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
