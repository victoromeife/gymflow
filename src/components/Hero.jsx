import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Modern gym interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1.5 text-sm font-medium text-lime-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            Now open 24/7 in 12 cities
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Find Your{' '}
            <span className="text-gradient">Flow</span>
            <br />
            Transform Your Body
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-xl leading-relaxed">
            Premium equipment, elite coaches, and a community that refuses to
            settle. Experience training that feels less like work and more like
            momentum.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-base font-bold text-zinc-950 transition hover:bg-lime-300 glow-lime"
            >
              Start Free 7-Day Trial
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#classes"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-zinc-900/60 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:border-zinc-400 hover:bg-zinc-800/80"
            >
              <Play className="h-5 w-5 fill-current" />
              Explore Classes
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&h=100&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=100&h=100&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=100&h=100&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=100&h=100&fit=crop&crop=face',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-zinc-950 object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-lime-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-zinc-400">
                Trusted by <span className="text-white font-medium">12,400+</span> members
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
