import { useState, useEffect } from 'react'
import { Menu, X, Dumbbell } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Classes', href: '#classes' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400 text-zinc-950 transition group-hover:scale-105">
              <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Gym<span className="text-lime-400">Flow</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors rounded-lg hover:bg-zinc-800/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-lime-300 glow-lime"
            >
              Start Free Trial
            </a>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950/98 backdrop-blur-xl">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center rounded-full bg-lime-400 px-5 py-3 text-sm font-semibold text-zinc-950"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
