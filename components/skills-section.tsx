import { Code2, Workflow, Dna, Syringe, Boxes, TestTube } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type SkillGroup = {
  title: string
  icon: LucideIcon
  items: string[]
}

const GROUPS: SkillGroup[] = [
  {
    title: 'Programming',
    icon: Code2,
    items: ['Python', 'R', 'Bash', 'Biopython'],
  },
  {
    title: 'Workflow & Tools',
    icon: Workflow,
    items: ['Snakemake', 'Git', 'Linux', 'Conda'],
  },
  {
    title: 'Genomics',
    icon: Dna,
    items: ['RGI', 'ResFinder', 'BLAST', 'SPAdes'],
  },
  {
    title: 'Immunoinformatics',
    icon: Syringe,
    items: ['IEDB', 'NetMHC', 'ClusPro', 'AllerTOP'],
  },
  {
    title: 'Structural Bio',
    icon: Boxes,
    items: ['AlphaFold', 'PyMOL', 'GROMACS', 'AutoDock'],
  },
  {
    title: 'Wet Lab & Diagnostics',
    icon: TestTube,
    items: ['Bacterial Culture', 'DNA Extraction', 'PCR', 'Gel Electrophoresis'],
  },
]

export function SkillsSection() {
  return (
    <section id="cv" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Technical Skills</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">The computational &amp; laboratory toolkit</h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.title} className="rounded-xl border border-border bg-card/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-medium text-foreground">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-xs text-foreground/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}