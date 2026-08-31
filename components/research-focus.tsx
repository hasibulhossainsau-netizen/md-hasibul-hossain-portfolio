import { ShieldAlert, Syringe, Dna, Boxes } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Focus = {
  num: string
  title: string
  description: string
  icon: LucideIcon
}

const FOCUS_AREAS: Focus[] = [
  {
    num: '01',
    title: 'Antimicrobial Resistance',
    description:
      'Tracking resistance determinants and evolutionary dynamics to inform stewardship across animal and human health.',
    icon: ShieldAlert,
  },
  {
    num: '02',
    title: 'Computational Vaccinology',
    description:
      'Designing epitope-based vaccine candidates with immunoinformatics, molecular docking, and dynamics simulations.',
    icon: Syringe,
  },
  {
    num: '03',
    title: 'Pathogen Genomics',
    description:
      'Assembling and interrogating microbial genomes to reveal virulence, transmission, and outbreak signatures.',
    icon: Dna,
  },
  {
    num: '04',
    title: 'Structural Bioinformatics',
    description:
      'Modeling protein structures and interactions to connect molecular form with biological function.',
    icon: Boxes,
  },
]

export function ResearchFocus() {
  return (
    <section id="research" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Research Focus</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Where computation meets biology</h2>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon
            return (
              <article
                key={area.num}
                className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">{area.num}</span>
                </div>
                <h3 className="mt-5 text-lg font-medium text-foreground">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
