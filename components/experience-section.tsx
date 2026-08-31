import { GraduationCap, FlaskConical, Stethoscope } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type TimelineItem = {
  period: string
  role: string
  place: string
  description: string
  icon: LucideIcon
}

const TIMELINE: TimelineItem[] = [
  {
    period: '2026 — Present',
    role: 'MS (Fellow) in Microbiology',
    place: 'Sher-e-Bangla Agricultural University (SAU)',
    description:
      'Focusing research on molecular microbiology, pathogen genomics, and antimicrobial resistance determinants.',
    icon: GraduationCap,
  },
  {
    period: '2020 — 2026',
    role: 'BSc in Veterinary Science & Animal Husbandry',
    place: 'Sher-e-Bangla Agricultural University (SAU)',
    description:
      'Graduated with a 3.68/4.00 CGPA while building a strong core foundation in microbiology, immunology, and One Health.',
    icon: GraduationCap,
  },
  {
    period: '2026 (Jan)',
    role: 'Clinical Veterinary Intern',
    place: 'Can Tho University, Vietnam',
    description:
      'Completed an intensive clinical internship placement, gaining hands-on practical veterinary medicine and diagnostic exposure.',
    icon: Stethoscope,
  },
  {
    period: '2025 — Present',
    role: 'Independent Computational Researcher',
    place: 'Self-directed',
    description:
      'Leading research in immunoinformatics vaccine design, AMR genomics pipelines, and structural bioinformatics.',
    icon: FlaskConical,
  },
]

export function ExperienceSection() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Experience &amp; Education</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">The path so far</h2>

        <ol className="mt-12 max-w-3xl">
          {TIMELINE.map((item, i) => {
            const Icon = item.icon
            const last = i === TIMELINE.length - 1
            return (
              <li key={item.role} className="relative flex gap-5 pb-10 last:pb-0">
                {!last && <span className="absolute left-[22px] top-12 h-[calc(100%-2.5rem)] w-px bg-border" aria-hidden="true" />}
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="pt-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">{item.period}</span>
                  <h3 className="mt-1.5 text-lg font-medium text-foreground">{item.role}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{item.place}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}