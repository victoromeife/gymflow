const stats = [
  { value: '12K+', label: 'Active Members' },
  { value: '180+', label: 'Weekly Classes' },
  { value: '45', label: 'Expert Coaches' },
  { value: '24/7', label: 'Access' },
]

export default function Stats() {
  return (
    <section className="relative border-y border-zinc-800/80 bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-lime-400 tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm sm:text-base text-zinc-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
