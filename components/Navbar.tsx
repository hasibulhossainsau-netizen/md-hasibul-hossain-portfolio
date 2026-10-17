'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, type ComponentType, type SVGProps } from 'react'
import { GraduationCap, Menu, X } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

type SocialLink = {
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const SOCIAL_LINKS: SocialLink[] = [
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
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=K5fHmaYAAAAJ&hl=en',
    icon: GraduationCap,
  },
]

function isActivePath(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
}

function SocialLinks({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex items-center gap-1.5">
      {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          onClick={onClick}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-emerald-400/10 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 text-slate-100 shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="group inline-flex min-w-0 shrink-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 font-mono text-sm font-bold tracking-tight text-emerald-300 transition-colors group-hover:border-emerald-400/50 group-hover:bg-emerald-400/15">
            MH
          </span>
          <span className="hidden whitespace-nowrap text-sm font-semibold tracking-tight text-slate-100 sm:inline">
            Md Hasibul Hossain
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const active = isActivePath(pathname, item.href)
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:bg-emerald-400 after:transition-transform ${
                  active
                    ? 'text-emerald-300 after:scale-x-100'
                    : 'text-slate-400 after:scale-x-0 hover:text-slate-100 hover:after:scale-x-100'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <span className="h-6 w-px bg-slate-800" aria-hidden="true" />
          <SocialLinks />
        </div>

        <button
          type="button"
          onClick={() => setOpen((isOpen) => !isOpen)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 text-slate-300 transition-colors hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav
          id="mobile-navigation"
          className="min-h-0 overflow-hidden border-t border-slate-800 bg-slate-950/95"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <div className="grid gap-1 sm:grid-cols-2">
              {NAV_ITEMS.map((item) => {
                const active = isActivePath(pathname, item.href)
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-lg border px-3.5 py-3 text-sm transition-colors ${
                      active
                        ? 'border-emerald-400/20 bg-emerald-400/10 font-medium text-emerald-300'
                        : 'border-transparent text-slate-300 hover:border-slate-800 hover:bg-slate-900 hover:text-emerald-300'
                    }`}
                  >
                    {item.label}
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
                  </Link>
                )
              })}
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-slate-800 pt-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Connect
              </span>
              <SocialLinks onClick={() => setOpen(false)} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
