import {
  Activity,
  ChevronDown,
  Cpu,
  Dna,
  FlaskConical,
  GraduationCap,
  MapPin,
  ShieldAlert,
  Stethoscope,
  Workflow,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type ResearchInterest = {
  title: string
  description: string
  icon: LucideIcon
}

type SkillGroup = {
  title: string
  icon: LucideIcon
  skills: string[]
}

type TimelineEntry = {
  category: string
  title: string
  organization: string
  description: string
  icon: LucideIcon
  current?: boolean
}

const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    title: 'Antimicrobial Resistance',
    description:
      'Investigating resistance determinants and their evolution across bacterial pathogens.',
    icon: ShieldAlert,
  },
  {
    title: 'Viral & Bacterial Genomics',
    description:
      'Using genome data to study pathogen diversity, virulence, and population structure.',
    icon: Dna,
  },
  {
    title: 'Structural Dynamics',
    description:
      'Exploring biomolecular structure, interactions, and behavior through computational simulation.',
    icon: Cpu,
  },
  {
    title: 'Evolutionary Selection Pressure',
    description:
      'Applying evolutionary analysis to understand selection and change in pathogen populations.',
    icon: Activity,
  },
]

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Workflows & Automation',
    icon: Workflow,
    skills: ['Nextflow DSL2', 'Snakemake', 'Conda',],
  },
  {
    title: 'Computational & Genomic Tools',
    icon: Dna,
    skills: [
      'BLAST',
      'SPAdes',
      'Bakta',
      'HyPhy',
      'GROMACS',
      'AutoDock Vina',
      'ResFinder',
    ],
  },
  {
    title: 'Programming & Data Visualization',
    icon: FlaskConical,
    skills: ['Python','R', 'ggplot2','Bash', 'Git', 'GitHub'],
  },
]

const TIMELINE: TimelineEntry[] = [
  {
    category: 'Current · Graduate education',
    title: "Master's in Microbiology",
    organization: 'Sher-e-Bangla Agricultural University',
    description:
      'Graduate study in microbiology, building on veterinary training to investigate infectious disease through laboratory and computational approaches.',
    icon: GraduationCap,
    current: true,
  },
  {
    category: 'Undergraduate education',
    title: "Bachelor's in Animal Science & Veterinary Medicine (ASVM)",
    organization: 'Sher-e-Bangla Agricultural University',
    description:
      'Undergraduate education grounding a multidisciplinary approach in animal science and veterinary medicine.',
    icon: GraduationCap,
  },
  {
    category: 'Clinical placement',
    title: 'Clinical Placement',
    organization: 'Upazila Livestock Office',
    description:
      'Clinical placement experience within a livestock and veterinary service setting.',
    icon: Stethoscope,
  },
  {
    category: 'Clinical / research placement',
    title: 'Clinical & Research Placement',
    organization: 'Can Tho University',
    description:
      'Placement experience in a university environment spanning clinical and research exposure.',
    icon: MapPin,
  },
  {
    category: 'Internship',
    title: 'Veterinary Internship',
    organization: 'Remount Vet & Farm Corps',
    description:
      'Internship experience at Remount Vet & Farm Corps, extending practical exposure to veterinary and animal health work.',
    icon: Stethoscope,
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}

function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
          About · Veterinary Science × Computational Biology
        </p>
        <h1 className="mt-5 max-w-4xl text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Bridging veterinary medicine and microbiology with computational biology.
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          My background in animal science & veterinary medicine and currently persuing a master's degree
          in microbiology. I bring my veterinary experience with computational biology, genomics,
          and biomolecular simulations to investigate infectious disease and pathogen biology.
        </p>
      </div>
    </section>
  )
}

function ResearchInterestsSection() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Research Focus"
          title="Questions at the intersection of pathogens and computation"
          description="My interests span pathogen evolution, genome-scale analysis, and molecular mechanisms relevant to animal and public health."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESEARCH_INTERESTS.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechnicalSkillsSection() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Technical Toolkit"
          title="Tools for reproducible biological research"
          description="A practical toolkit spanning workflow automation, genome analysis, evolutionary methods, molecular simulation, and data visualization."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {SKILL_GROUPS.map(({ title, icon: Icon, skills }) => (
            <article key={title} className="rounded-xl border border-border bg-card/50 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-medium text-foreground">{title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-secondary/40 px-2.5 py-1.5 font-mono text-xs text-foreground/85"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceTimeline() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Education & Experience"
          title="A multidisciplinary path"
          description="Expand an entry to read more about the education and placements that shape my work."
        />
        <ol className="mt-8 max-w-4xl space-y-3">
          {TIMELINE.map(({ category, title, organization, description, icon: Icon, current }) => (
            <li key={`${title}-${organization}`}>
              <details className="group rounded-xl border border-border bg-card/50 open:border-primary/30">
                <summary className="flex cursor-pointer list-none items-center gap-4 p-4 marker:hidden sm:p-5 [&::-webkit-details-marker]:hidden">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary">
                      {category}
                      {current && (
                        <span className="rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10px]">
                          In progress
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-sm font-medium leading-snug text-foreground sm:text-base">
                      {title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">{organization}</span>
                  </span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="border-t border-border/60 py-4 pl-[4.75rem] pr-5 sm:pl-[5.25rem]">
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <ResearchInterestsSection />
      <TechnicalSkillsSection />
      <ExperienceTimeline />
    </main>
  )
}
