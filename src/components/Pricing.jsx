import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 49,
    period: '/mo',
    description: 'Perfect for getting started and building the habit.',
    features: [
      'Gym floor access (peak hours)',
      '2 group classes / week',
      'Locker & shower access',
      'GymFlow app basic',
      'Community challenges',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Flow',
    price: 89,
    period: '/mo',
    description: 'Our most popular plan for serious, consistent training.',
    features: [
      '24/7 unlimited gym access',
      'Unlimited group classes',
      '2 PT sessions / month',
      'Recovery zone (sauna + plunge)',
      'Full GymFlow app + progress tracking',
      'Priority class booking',
      'Guest passes (2/mo)',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Elite',
    price: 149,
    period: '/mo',
    description: 'Maximum support, recovery, and personal coaching.',
    features: [
      'Everything in Flow',
      '8 PT sessions / month',
      'Custom programming',
      'Nutrition consult monthly',
      'Unlimited recovery suite',
      'Race / competition prep',
      'Priority equipment booking',
    ],
    cta: 'Talk to Coach',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-400 mb-3">
            Membership
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Simple pricing. Real results.
          </h2>
          <p className="mt-4 text-zinc-400 text-lg">
            7-day free trial on every plan. Cancel anytime. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 md:p-8 transition ${
                plan.popular
                  ? 'border-lime-400 bg-zinc-900 shadow-xl shadow-lime-400/10 scale-[1.02] z-10'
                  : 'border-zinc-800 bg-zinc-950 hover:border-zinc-600'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-400 px-4 py-1 text-xs font-bold text-zinc-950">
                  MOST POPULAR
                </span>
              )}
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold tracking-tight">
                    ${plan.price}
                  </span>
                  <span className="text-zinc-500">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 shrink-0 text-lime-400" />
                    <span className="text-zinc-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full rounded-xl py-3 text-center text-sm font-bold transition ${
                  plan.popular
                    ? 'bg-lime-400 text-zinc-950 hover:bg-lime-300 glow-lime'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
