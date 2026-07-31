import { Dumbbell, Instagram, Twitter, Youtube, Facebook } from 'lucide-react'

const footerLinks = {
  Explore: [
    { name: 'Classes', href: '#classes' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ],
  Support: [
    { name: 'FAQ', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'Locations', href: '#' },
    { name: 'App download', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400 text-zinc-950">
                <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Gym<span className="text-lime-400">Flow</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-zinc-400 max-w-xs leading-relaxed">
              Premium fitness for people who want more than just a gym. Find
              your flow. Build lasting strength.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-lime-400 hover:text-lime-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-lime-400 transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} GymFlow. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Built with React · Vite · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
