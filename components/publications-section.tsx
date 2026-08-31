import { ArrowUpRight } from 'lucide-react'

type Status = 'Published' | 'Preprint' | 'Under Review'

type Publication = {
  status: Status
  title: string
  venue: string
  year?: string
  note?: string
  url?: string
}

const STATUS_STYLES: Record<Status, string> = {
  Published: 'border-emerald-500/30 bg-emerald-500/12 text-emerald-400',
  Preprint: 'border-sky-500/30 bg-sky-500/12 text-sky-400',
  'Under Review': 'border-amber-500/30 bg-amber-500/12 text-amber-400',
}

const PUBLICATIONS: Publication[] = [
  {
    status: 'Published',
    title:
      'Vector-borne diseases in Bangladesh: a farmer-centric cross-sectional assessment',
    venue: 'npj Veterinary Sciences',
    year: '2026',
    note: '(6th Author)',
    url: 'https://www.nature.com/articles/s44433-026-00013-w',
  },
  {
    status: 'Preprint',
    title: 'In Silico Discovery of Potential Antiviral Leads Targeting the Canine Parvovirus Type 2 VP2 Capsid Protein',
    venue: 'Research Square',
    year: '2026',
    note: 'Independent Researcher',
    url: 'https://www.researchsquare.com/article/rs-9396596/v1',
  },
  {
    status: 'Under Review',
    title:
      'In silico Design of a Multi-Epitope Vaccine Targeting the VP2 Protein of Canine Parvovirus Type 2 Circulating in Vietnam',
    venue: 'CTU Journal of Innovation and Sustainable Development',
    note: '(Co-Author · Collaborative with Can Tho University)',
  },
]

export function PublicationsSection() {
  return (
    <section id="publications" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Publications</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Peer-reviewed &amp; in progress</h2>

        <ul className="mt-12 divide-y divide-border/60 overflow-hidden rounded-xl border border-border bg-card/50">
          {PUBLICATIONS.map((pub) => {
            const ContentWrapper = pub.url ? 'a' : 'div'
            const wrapperProps = pub.url
              ? {
                  href: pub.url,
                  target: '_blank',
                  rel: 'noreferrer',
                  className:
                    'group flex flex-col gap-4 p-6 transition-colors hover:bg-secondary/30 sm:flex-row sm:items-start cursor-pointer',
                }
              : {
                  className:
                    'group flex flex-col gap-4 p-6 transition-colors hover:bg-secondary/30 sm:flex-row sm:items-start',
                }

            return (
              <li key={pub.title}>
                {/* @ts-ignore */}
                <ContentWrapper {...wrapperProps}>
                  <div className="sm:w-36 sm:shrink-0">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs font-medium ${STATUS_STYLES[pub.status]}`}
                    >
                      {pub.status}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-pretty text-base font-medium leading-snug text-foreground group-hover:text-primary transition-colors">
                      {pub.title}
                      {pub.note && <span className="ml-2 font-mono text-xs text-muted-foreground">{pub.note}</span>}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      <span className="italic text-foreground/80">{pub.venue}</span>
                      {pub.year && <span> · {pub.year}</span>}
                    </p>
                  </div>

                  {pub.url && (
                    <ArrowUpRight
                      className="hidden h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary sm:block"
                      aria-hidden="true"
                    />
                  )}
                </ContentWrapper>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}