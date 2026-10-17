import { ArrowUpRight, BookOpen } from 'lucide-react'

type Status = 'Published' | 'Preprint' | 'Under Review'

type Publication = {
  status: Status
  title: string
  authors: string
  venue: string
  year?: string
  doiUrl?: string
  abstractUrl?: string
  abstractLabel?: string
}

const STATUS_STYLES: Record<Status, string> = {
  Published: 'border-emerald-500/30 bg-emerald-500/12 text-emerald-400',
  Preprint: 'border-sky-500/30 bg-sky-500/12 text-sky-400',
  'Under Review': 'border-amber-500/30 bg-amber-500/12 text-amber-400',
}

const PUBLICATIONS: Publication[] = [
  {
    status: 'Published',
    title: 'Vector-borne diseases in Bangladesh: a farmer-centric cross-sectional assessment',
    authors:
      'Prajwal Bhandari, Ritu Chalise, Md Ismile Hossain Bhuiyan, Ahmed Ishtiak Nirob, Shahrin Sultana Jami, Md Hasibul Hossain, Md Jayed Chowdhury, Delower Hossain, and Md Jisan Ahmed',
    venue: 'npj Veterinary Sciences',
    year: '2026',
    doiUrl: 'https://doi.org/10.1038/s44433-026-00013-w',
    abstractUrl: 'https://www.nature.com/articles/s44433-026-00013-w#Abs1',
  },
  {
    status: 'Preprint',
    title:
      'In Silico Discovery of Potential Antiviral Leads Targeting the Canine Parvovirus Type 2 VP2 Capsid Protein',
    authors: 'Md Hasibul Hossain',
    venue: 'Research Square',
    year: '2026',
    doiUrl: 'https://doi.org/10.21203/rs.3.rs-9396596/v1',
    abstractUrl: 'https://www.researchsquare.com/article/rs-9396596/v1',
  },
  {
    status: 'Under Review',
    title:
      'In silico Design of a Multi-Epitope Vaccine Targeting the VP2 Protein of Canine Parvovirus Type 2 Circulating in Vietnam',
    authors: 'Md Hasibul Hossain and collaborators',
    venue: 'CTU Journal of Innovation and Sustainable Development',
    abstractUrl:
      'https://scholar.google.com/scholar?q=In+silico+Design+of+a+Multi-Epitope+Vaccine+Targeting+the+VP2+Protein+of+Canine+Parvovirus+Type+2+Circulating+in+Vietnam',
    abstractLabel: 'Search abstract',
  },
]

export function PublicationsSection({ sectionId = 'publications' }: { sectionId?: string }) {
  return (
    <section id={sectionId} className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Research Papers &amp; Studies
        </p>
        <h2 className="mt-3 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
          Publications &amp; manuscripts
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PUBLICATIONS.map((publication) => (
            <li key={publication.title} className="min-w-0">
              <article className="flex h-full min-w-0 flex-col rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <span
                    className={`inline-flex max-w-full rounded-full border px-3 py-1 font-mono text-xs font-medium ${STATUS_STYLES[publication.status]}`}
                  >
                    {publication.status}
                  </span>
                  <span className="max-w-full rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
                    {publication.venue}
                  </span>
                </div>

                <h3 className="mt-5 text-pretty text-lg font-semibold leading-snug text-foreground">
                  {publication.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground/80">Authors: </span>
                  {publication.authors}
                </p>
                {publication.year && (
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{publication.year}</p>
                )}

                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-border/60 pt-5">
                  {publication.doiUrl ? (
                    <a
                      href={publication.doiUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-8 items-center gap-1.5 text-sm text-primary transition-colors hover:text-foreground"
                    >
                      DOI
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="inline-flex min-h-8 items-center text-sm text-muted-foreground">
                      DOI pending
                    </span>
                  )}
                  {publication.abstractUrl ? (
                    <a
                      href={publication.abstractUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-8 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                      {publication.abstractLabel ?? 'Abstract'}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="inline-flex min-h-8 items-center text-sm text-muted-foreground">
                      Abstract unavailable
                    </span>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
