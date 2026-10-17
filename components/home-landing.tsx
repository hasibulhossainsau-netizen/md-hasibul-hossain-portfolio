import Link from 'next/link'
import Image from 'next/image'
import {
  Activity,
  ArrowRight,
  Atom,
  Code2,
  Dna,
  GitFork,
  Globe2,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Syringe,
  Target,
  Workflow,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type FocusArea = {
  title: string
  description: string
  icon: LucideIcon
}

type Skill = {
  label: string
  icon: LucideIcon
}

type GlanceItem = {
  label: string
  value: string
  icon: LucideIcon
}

const SKILLS: Skill[] = [
  { label: 'NGS Analysis', icon: Dna },
  { label: 'Phylogenomics', icon: GitFork },
  { label: 'Nextflow', icon: Workflow },
  { label: 'Snakemake', icon: Workflow },
  { label: 'Molecular Dynamics', icon: Atom },
  { label: 'In Silico Vaccine Design', icon: Syringe },
]

const FOCUS_AREAS: FocusArea[] = [
  {
    title: 'NGS Data Analysis',
    description: 'Turning sequencing data into clear, reproducible biological insight.',
    icon: Dna,
  },
  {
    title: 'Phylogenomics',
    description: 'Tracing pathogen diversity and evolutionary relationships across genomes.',
    icon: GitFork,
  },
  {
    title: 'Reproducible Workflows',
    description: 'Building portable analysis pipelines with modern workflow tools.',
    icon: Workflow,
  },
  {
    title: 'Molecular Dynamics',
    description: 'Studying biomolecular motion and interactions through simulation.',
    icon: Atom,
  },
  {
    title: 'Infectious Diseases & AMR',
    description: 'Investigating pathogens and the evolution of antimicrobial resistance.',
    icon: ShieldCheck,
  },
  {
    title: 'One Health',
    description: 'Connecting animal, human, and environmental health perspectives.',
    icon: Globe2,
  },
]

const AT_A_GLANCE: GlanceItem[] = [
  {
    label: 'Education',
    value: 'ASVM, Sher-e-Bangla Agricultural University',
    icon: GraduationCap,
  },
  {
    label: 'Research Interests',
    value:
      'AMR, pathogen evolution, infectious disease genomics, molecular epidemiology, One Health',
    icon: Target,
  },
  {
    label: 'Tools & Languages',
    value: 'Nextflow, Snakemake, Python, R, Linux, Git',
    icon: Code2,
  },
  {
    label: 'Based in',
    value: 'Dhaka, Bangladesh 🇧🇩',
    icon: MapPin,
  },
]

function HeroIllustration() {
  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] shadow-2xl shadow-emerald-950/20 ring-1 ring-white/5 sm:aspect-[5/4] lg:aspect-square"
    >
      <Image
        src="/profile.jpg"
        alt="Md Hasibul Hossain"
        fill
        priority
        sizes="(min-width: 1024px) 42vw, (min-width: 640px) 80vw, 100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-slate-950/25 via-transparent to-emerald-950/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(148 163 184 / 8%) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 8%) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl"
      />
      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2.5 shadow-lg shadow-slate-950/30 backdrop-blur-md sm:bottom-6 sm:left-6">
        <Activity className="h-4 w-4 animate-pulse text-emerald-400" aria-hidden="true" />
        <span className="text-sm font-medium text-slate-100">Let&apos;s Build an AMR Free World</span>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgb(16_185_129_/_8%),transparent_45%)]"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-24">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-emerald-400 sm:text-xs sm:tracking-[0.2em]">
            BIOINFORMATICS <span className="text-slate-600">·</span> COMPUTATIONAL BIOLOGY{' '}
            <span className="text-slate-600">·</span> ONE HEALTH
          </p>
          <h1 className="mt-6 max-w-3xl text-pretty text-4xl font-semibold leading-[1.08] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Veterinarian &amp;{' '}
            <span className="text-emerald-400">Computational Biology</span> Researcher
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
            I combine veterinary science and computational biology to investigate antimicrobial
            resistance, pathogen evolution, and infectious diseases. I develop reproducible
            bioinformatics workflows and apply genomic and molecular analysis to biological research
            questions.
          </p>

          <ul className="mt-7 flex max-w-2xl flex-wrap gap-2" aria-label="Areas and tools">
            {SKILLS.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-300"
              >
                <Icon className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/research"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Explore My Research
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="https://github.com/hasibulhossainsau-netizen"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-emerald-500/50 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View GitHub
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <HeroIllustration />
      </div>
    </section>
  )
}

function WhatIDoSection() {
  return (
    <section className="border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          What I Do
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Bridging Veterinary Science and Computational Biology
        </h2>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {FOCUS_AREAS.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-colors hover:border-emerald-500/40 hover:bg-slate-900"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/15 bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/15">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-semibold leading-snug text-slate-100">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AtAGlanceSection() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/25">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          At a Glance
        </p>
        <dl className="mt-7 grid gap-0 sm:grid-cols-2 xl:grid-cols-4">
          {AT_A_GLANCE.map(({ label, value, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex gap-4 border-slate-800 py-5 sm:px-5 ${
                index > 0 ? 'sm:border-l' : ''
              } ${index > 1 ? 'xl:border-l' : ''} ${index === 0 ? 'sm:pl-0' : ''}`}
            >
              <Icon
                className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                aria-hidden="true"
              />
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                  {label}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-200">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function HomeLanding() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <HeroSection />
      <WhatIDoSection />
      <AtAGlanceSection />
    </main>
  )
}
