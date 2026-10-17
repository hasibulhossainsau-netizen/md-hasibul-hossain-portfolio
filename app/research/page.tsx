import { PublicationsSection } from '@/components/publications-section'

export default function ResearchPage() {
  return (
    <main className="min-h-[60vh]">
      <header className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Academic Research
        </p>
        <h1 className="mt-3 max-w-3xl text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
          Studies and findings in veterinary and computational biology
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Research spanning infectious disease, pathogen biology, and in silico approaches to
          questions in animal and public health.
        </p>
      </header>

      <PublicationsSection />
    </main>
  )
}
