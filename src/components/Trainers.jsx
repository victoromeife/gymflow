const trainers = [
  {
    name: 'Marcus Reid',
    role: 'Head Strength Coach',
    specialty: 'Powerlifting · Olympic Lifting',
    image:
      'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop',
    bio: 'Former competitive powerlifter. 12 years coaching athletes from beginner to national level.',
  },
  {
    name: 'Sofia Chen',
    role: 'HIIT & Conditioning',
    specialty: 'Hyrox · Metabolic Training',
    image:
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop',
    bio: 'Hyrox competitor and programming specialist. Makes hard sessions feel purposeful.',
  },
  {
    name: 'Jordan Blake',
    role: 'Mobility & Recovery',
    specialty: 'Yoga · Breathwork · Soft Tissue',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
    bio: 'Helps members move better, recover faster, and stay injury-free for the long game.',
  },
  {
    name: 'Aisha Okonkwo',
    role: 'Boxing & Combat',
    specialty: 'Technical Boxing · Conditioning',
    image:
      'https://images.unsplash.com/photo-1599058945522-28d584b6f14f?q=80&w=600&auto=format&fit=crop',
    bio: 'Amateur boxing background. Builds confidence, footwork, and real-world conditioning.',
  },
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-400 mb-3">
            Coaches
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Train with the best
          </h2>
          <p className="mt-4 text-zinc-400 text-lg">
            Experienced coaches who care about your form, progress, and long-term
            results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t) => (
            <article
              key={t.name}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition hover:border-lime-400/30"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-lime-400 font-medium mt-0.5">
                  {t.role}
                </p>
                <p className="text-xs text-zinc-500 mt-1">{t.specialty}</p>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {t.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
