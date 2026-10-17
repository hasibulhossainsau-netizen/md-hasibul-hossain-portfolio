'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'

const CONTACT_EMAIL = 'hasibulhossain2010985@sau.edu.bd'

export function ContactForm() {
  const [isOpening, setIsOpening] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isOpening) return

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const subject = String(formData.get('subject') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const body = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n')
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setIsOpening(true)
    window.location.href = mailtoUrl
    window.setTimeout(() => setIsOpening(false), 1500)
  }

  const inputClassName =
    'mt-2 w-full rounded-lg border border-border bg-background/70 px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-2 focus:ring-ring/30'

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            placeholder="Your name"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-subject" className="text-sm font-medium text-foreground">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          maxLength={160}
          placeholder="What would you like to discuss?"
          className={inputClassName}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder="Write your message..."
          className={`${inputClassName} resize-y`}
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isOpening}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-wait disabled:opacity-70"
        >
          {isOpening ? 'Opening email draft…' : 'Prepare email'}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
        <p aria-live="polite" className="text-xs leading-relaxed text-muted-foreground">
          {isOpening ? 'Your email app should open with a draft.' : 'Your message is not sent until you send it from your email app.'}
        </p>
      </div>
    </form>
  )
}
