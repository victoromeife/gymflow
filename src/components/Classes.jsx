import { Clock, Users, Flame } from 'lucide-react'

const classes = [
  {
    title: 'Power Strength',
    category: 'Strength',
    duration: '60 min',
    level: 'All levels',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    description: 'Compound lifts, progressive overload, and pure strength gains.',
    spots: 8,
  },
  {
    title: 'HIIT Ignite',
    category: 'Cardio',
    duration: '45 min',
    level: 'Intermediate',
    image:
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=800&auto=format&fit=crop',
    description: 'High-intensity intervals that torch calories and build engine.',
    spots: 4,
  },
  {
    title: 'Flow Yoga',
    category: 'Mobility',
    duration: '50 min',
    level: 'All levels',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    description: 'Breath-led movement to unlock mobility and recovery.',
    spots: 12,
  },
  {
    title: 'Boxing Conditioning',
    category: 'Combat',
    duration: '55 min',
    level: 'Beginner+',
    image:
      'https://images.unsplash.com/photo-1549719386-91ced2477542?q=80&w=800&auto=format&fit=crop',
    description: 'Pads, footwork, and conditioning that builds real toughness.',
    spots: 6,
  },
  {
    title: 'Hyrox Prep',
    category: 'Hybrid',
    duration: '60 min',
    level: 'Advanced',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    description: 'Race-specific training for the fastest-growing fitness sport.',
    spots: 10,
  },
  {
    title: 'Core & Mobility',
    category: 'Recovery',
    duration: '40 min',
    level: 'All levels',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    description: 'Stability, breathwork, and soft-tissue work for longevity.',
    spots: 15,
  },
]

export default function Classes() {
  return (
    <section id="classes" className="py-20 md:py-28 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400 mb-3">
              Classes
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Train with purpose
            </h2>
            <p className="mt-4 text-zinc-400 text-lg">
              From pure strength to recovery flow — book the session that matches
              your goal today.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex self-start md:self-auto items-center justify-center rounded-full border border-zinc-600 px-6 py-2.5 text-sm font-semibold text-white hover:border-lime-400 hover:text-lime-400 transition"
          >
            View full schedule
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-zinc-600"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-zinc-950/80 backdrop-blur px-3 py-1 text-xs font-semibold text-lime-400 border border-lime-400/30">
                  {c.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold mb-1">
                  {c.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                  {c.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {c.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Flame className="h-3.5 w-3.5" />
                    {c.level}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {c.spots} spots
                  </span>
                </div>
                <button
                  type="button"
                  className="w-full rounded-xl bg-zinc-800 py-2.5 text-sm font-semibold text-white transition hover:bg-lime-400 hover:text-zinc-950"
                >
                  Book Class
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
