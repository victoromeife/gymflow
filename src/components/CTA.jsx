import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-400/10 via-transparent to-transparent" />
          <div className="relative grid lg:grid-cols-2 gap-10 p-8 md:p-12 lg:p-16">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Ready to find your flow?
              </h2>
              <p className="mt-4 text-zinc-400 text-lg max-w-md">
                Start your 7-day free trial. No commitment. Just show up and
                experience the difference.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-zinc-300">
                  <MapPin className="h-5 w-5 text-lime-400 shrink-0" />
                  <span>12 locations across major cities</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <Phone className="h-5 w-5 text-lime-400 shrink-0" />
                  <span>+1 (800) 555-FLOW</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <Mail className="h-5 w-5 text-lime-400 shrink-0" />
                  <span>hello@gymflow.fit</span>
                </div>
              </div>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thanks! We will contact you shortly to set up your free trial.')
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  required
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  required
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
              />
              <select
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-sm text-white focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Interested in...
                </option>
                <option>Starter membership</option>
                <option>Flow membership</option>
                <option>Elite membership</option>
                <option>Just browsing / tour</option>
              </select>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-lime-300 glow-lime"
              >
                Claim Free Trial
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-zinc-500">
                By submitting you agree to our terms. We never spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
