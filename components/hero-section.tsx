import { Download, BookOpen, FileText, Mail } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'

// SVG LinkedIn Icon component
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const STATS = [
  { value: '3.68', suffix: '/4.00', label: 'Academic CGPA', subtext: "Dean's List Eligiblegi" },
  { value: '7.5', suffix: '', label: 'IELTS Overall', subtext: 'L 8.0 | R 8.5 | W 6.5 | S 7.0' },
  { value: '3', suffix: '', label: 'Featured Projects', subtext: 'Computational Genomics' },
  { value: '1', suffix: '', label: 'Q1 Publication', subtext: 'Co-Author (6th)' },
]

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Veterinary Scientist &amp; Computational Biologist
        </span>

        <h1 className="mt-6 max-w-4xl text-pretty text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          Md Hasibul Hossain — <span className="text-primary">Decoding Biology</span> Through Computation.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          I use computational approaches to understand infectious diseases, antimicrobial resistance, and design
          vaccines for animal and public health from a One Health perspective.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="/Hasibul_Hossain_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
          <a
            href="https://github.com/hasibulhossainsau-netizen"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://orcid.org/0009-0001-5975-227X"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            ORCID
          </a>
          <a
            href="https://www.linkedin.com/in/md-hasibul-hossain-sau/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="mailto:hasibulhossain2010985@sau.edu.bd"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-mono text-3xl font-semibold tracking-tight text-foreground">
                {stat.value}
                <span className="text-lg text-muted-foreground">{stat.suffix}</span>
              </dd>
              <p className="mt-1 text-sm font-medium text-foreground">{stat.label}</p>
              {stat.subtext && <p className="mt-0.5 text-xs text-muted-foreground">{stat.subtext}</p>}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}