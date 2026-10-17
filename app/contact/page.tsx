import {
  ArrowUpRight,
  BookOpen,
  Mail,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import {
  GithubIcon,
  LinkedinIcon,
  OrcidIcon,
  ScholarIcon,
} from '@/components/brand-icons'
import { ContactForm } from '@/components/contact-form'

type ContactLink = {
  label: string
  value: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const CONTACTS: ContactLink[] = [
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
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: 'https://www.linkedin.com/in/md-hasibul-hossain-sau/',
    icon: LinkedinIcon,
  },
  {
    label: 'ORCID',
    value: '0009-0001-5975-227X',
    href: 'https://orcid.org/0009-0001-5975-227X',
    icon: OrcidIcon,
  },
  {
    label: 'Google Scholar',
    value: 'View research profile',
    href: 'https://scholar.google.com/citations?user=K5fHmaYAAAAJ&hl=en',
    icon: ScholarIcon,
  },
  {
    label: 'Zotero',
    value: 'Research library profile',
    href: 'https://www.zotero.org/hossain434',
    icon: BookOpen,
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-[60vh]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <header className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-3 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s connect and explore a collaboration.
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I welcome academic collaborations, research discussions, and inquiries related to
            bioinformatics, microbiology, and One Health.
          </p>
        </header>

        <section className="mt-10" aria-labelledby="contact-links-heading">
          <h2 id="contact-links-heading" className="sr-only">
            Contact and academic profiles
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACTS.map(({ label, value, href, icon: Icon }) => {
              const isEmail = href.startsWith('mailto:')
              return (
                <a
                  key={label}
                  href={href}
                  target={isEmail ? undefined : '_blank'}
                  rel={isEmail ? undefined : 'noreferrer'}
                  className="group flex min-w-0 items-center gap-4 rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-foreground">{label}</span>
                    <span className="mt-1 block truncate font-mono text-xs text-muted-foreground">
                      {value}
                    </span>
                  </span>
                  {!isEmail && (
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                  )}
                </a>
              )
            })}
          </div>
        </section>

        <section className="mt-14 grid gap-8 border-t border-border/60 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Get in touch</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Send an inquiry</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Share a little about your question or collaboration idea. Submitting opens a prefilled
              draft in your email app; this site does not send or store form submissions.
            </p>
          </div>
          <ContactForm />
        </section>
      </div>
    </main>
  )
}
