import {
  Clock,
  Users,
  Dumbbell,
  HeartPulse,
  Smartphone,
  Trophy,
} from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: '24/7 Access',
    description:
      'Train on your schedule. Keycard entry and smart lighting mean the gym is ready whenever you are.',
  },
  {
    icon: Users,
    title: 'World-Class Coaches',
    description:
      'Certified trainers who specialize in strength, HIIT, mobility, and performance programming.',
  },
  {
    icon: Dumbbell,
    title: 'Premium Equipment',
    description:
      'Eleiko, Rogue, Technogym & more. From free weights to recovery tools — everything you need.',
  },
  {
    icon: HeartPulse,
    title: 'Recovery Zone',
    description:
      'Sauna, cold plunge, compression, and mobility studio so you bounce back faster.',
  },
  {
    icon: Smartphone,
    title: 'GymFlow App',
    description:
      'Book classes, track progress, unlock workouts, and check live capacity from your phone.',
  },
  {
    icon: Trophy,
    title: 'Results Community',
    description:
      'Challenges, leaderboards, and a culture that celebrates consistency over perfection.',
  },
]

export default function Features() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-400 mb-3">
            Why GymFlow
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Built for people who{' '}
            <span className="text-gradient">actually train</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg">
            Everything you need to stay consistent, improve performance, and
            enjoy the process.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8 transition hover:border-lime-400/40 hover:bg-zinc-900/80"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 transition group-hover:bg-lime-400 group-hover:text-zinc-950">
                <f.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {f.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
