import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'

type Project = {
  name: string
  focus: string
  description: string
  tags: string[]
  repoUrl: string
}

const PROJECTS: Project[] = [
  {
    name: 'amr_pipeline_proto',
    focus: 'AMR Genomics Pipeline',
    description:
      'A reproducible Snakemake pipeline for detecting antimicrobial resistance genes across bacterial genomes.',
    tags: ['Snakemake', 'RGI', 'ResFinder'],
    repoUrl: 'https://github.com/hasibulhossainsau-netizen/amr_pipeline_proto',
  },
  {
    name: 'Ekaghni_strikes',
    focus: 'Computational Vaccinology',
    description:
      'An end-to-end immunoinformatics workflow for multi-epitope vaccine construction, docking, and validation.',
    tags: ['Immunoinformatics', 'Docking', 'DLA'],
    repoUrl: 'https://github.com/hasibulhossainsau-netizen/Ekaghni_strikes',
  },
  {
    name: 'Let_it_flow',
    focus: 'CRISPR/Cas9 Guide Design',
    description:
      'A pipeline for designing high-specificity CRISPR/Cas9 guide RNAs with integrated off-target scoring and ranking.',
    tags: ['CRISPR', 'Python', 'Off-target Analysis'],
    repoUrl: 'https://github.com/hasibulhossainsau-netizen/Let_it_flow',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Selected Work</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Research projects</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
            >
              <span className="w-fit rounded-full border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                {project.focus}
              </span>

              <h3 className="mt-4 flex items-center gap-2 font-mono text-lg font-medium text-foreground">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  {project.name}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                </a>
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
                View repository
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}