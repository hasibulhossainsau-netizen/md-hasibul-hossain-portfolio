import type { ComponentType, SVGProps } from 'react'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, OrcidIcon, ScholarIcon } from '@/components/brand-icons'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

type Contact = {
  label: string
  value: string
  href: string
  icon: IconType
}

const CONTACTS: Contact[] = [
  {
    label: 'Email',
    value: 'hasibulhossain2010985@sau.edu.bd',
    href: 'mailto:hasibulhossain2010985@sau.edu.bd',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'hasibulhossainsau-netizen',
    href: 'https://github.com/hasibulhossainsau-netizen',
    icon: GithubIcon,
  },
  {
    label: 'ORCID',
    value: '0009-0001-5975-227X',
    href: 'https://orcid.org/0009-0001-5975-227X',
    icon: OrcidIcon,
  },
  {
    label: 'LinkedIn',
    value: 'in/md-hasibul-hossain-sau',
    href: 'https://www.linkedin.com/in/md-hasibul-hossain-sau/',
    icon: LinkedinIcon,
  },
  {
    label: 'Google Scholar',
    value: 'Md Hasibul Hossain',
    href: 'https://scholar.google.com/citations?user=K5fHmaYAAAAJ&hl=en',
    icon: ScholarIcon,
  },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Contact</p>
        <h2 className="mt-3 max-w-2xl text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s collaborate on the next question in One Health.
        </h2>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACTS.map((contact) => {
            const Icon = contact.icon
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-foreground">{contact.label}</span>
                  <span className="block truncate font-mono text-xs text-muted-foreground">{contact.value}</span>
                </span>
              </a>
            )
          })}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-sm text-foreground">
            MD Hasibul <span className="text-primary">Hossain</span>
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} · Computational Biology · One Health
          </p>
        </div>
      </div>
    </footer>
  )
}