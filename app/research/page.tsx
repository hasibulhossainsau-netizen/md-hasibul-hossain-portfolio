import Link from 'next/link'
import { Boxes, GitBranch, Workflow } from 'lucide-react'
import { ProjectsSection } from '@/components/projects-section'
import { PublicationsSection } from '@/components/publications-section'

const METHODS = [
  {
    title: 'Nextflow & Snakemake workflows',
    description:
      'Reproducible workflow design for organizing bioinformatics analyses, from inputs and parameters through results.',
    icon: Workflow,
  },
  {
    title: 'Structural phylogenomics',
    description:
      'Connecting genome-scale evolutionary comparisons with structural context to investigate pathogen biology.',
    icon: GitBranch,
  },
  {
    title: 'Molecular dynamics',
    description:
      'Simulation-based analysis of molecular systems to explore protein stability and biomolecular interactions.',
    icon: Boxes,
  },
]

export default function ResearchPage() {
  return (
    <main className="min-h-[60vh]">
      <header className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Research &amp; Projects
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Research studies, pipelines &amp; computational tools
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Explore academic studies alongside reproducible bioinformatics software and computational
          approaches for genomics, evolution, and molecular biology.
        </p>
        <nav className="mt-8 flex flex-wrap gap-3" aria-label="Research categories">
          <Link
            href="#research-papers"
            className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            Research Papers / Studies
          </Link>
          <Link
            href="#computational-pipelines"
            className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            Computational Pipelines / Software
          </Link>
        </nav>
      </header>

      <PublicationsSection sectionId="research-papers" />
      <ProjectsSection sectionId="computational-pipelines" />

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Methods &amp; Tools</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Computational approaches
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {METHODS.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-medium text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
