import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/hasibulhossainsau-netizen',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-hasibul-hossain-sau/',
    icon: LinkedinIcon,
  },
  {
    label: 'Email',
    href: 'mailto:hasibulhossain2010985@sau.edu.bd',
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="max-w-2xl leading-relaxed text-slate-400">
          © 2026 Md Hasibul Hossain. Built with passion for science, open source and a healthier
          future.
        </p>
        <nav className="flex items-center gap-2" aria-label="Footer social links">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={label}
              title={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-900 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
