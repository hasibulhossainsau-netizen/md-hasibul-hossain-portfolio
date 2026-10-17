import { ArrowUpRight, BookOpen } from 'lucide-react'

export default function BlogPage() {
  return (
    <main className="min-h-[60vh]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <header className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Field Notes</p>
          <h1 className="mt-3 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
            Bioinformatics, one workflow at a time
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Short reflections on reproducible research, computational biology, and the questions
            that connect them.
          </p>
        </header>

        <article className="mt-10 max-w-3xl rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BookOpen className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-primary">
            Welcome · Bioinformatics workflows
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Why make a workflow reproducible?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A bioinformatics result is more useful when another researcher can follow how it was
            produced. I use workflow tools such as Nextflow and Snakemake to make analysis steps,
            software, and inputs easier to track and rerun—so the focus can stay on the biology,
            not on guessing what happened between commands.
          </p>
          <a
            href="/projects"
            className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            Explore my workflow projects
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </article>
      </div>
    </main>
  )
}
