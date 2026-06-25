const stats = [
  { value: '2021', label: 'Founded in Sibu' },
  { value: '5', label: 'Residences' },
  { value: '200+', label: 'Happy tenants' },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28" style={{ backgroundColor: '#F9F9F7' }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.25em]" style={{ color: '#1A1A1A66' }}>
            About Us
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl" style={{ color: '#1A1A1A' }}>
            Transforming rooms into residences since 2021
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed" style={{ color: '#1A1A1AA6' }}>
            <p>
              The Room Residence began with a simple belief: renting a room in
              Sibu shouldn&apos;t mean compromising on comfort or design. What
              started as a single furnished space has grown into a curated
              collection of premium residences.
            </p>
            <p>
              Every room is designed, furnished and maintained to a hotel-grade
              standard — so you can simply arrive with your suitcase and feel at
              home from day one. Our mission is to make elevated living
              accessible, transparent and effortless.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-zinc-200 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-semibold md:text-4xl" style={{ color: '#1A1A1A' }}>
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug" style={{ color: '#1A1A1A66' }}>
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl border border-zinc-200">
              <img
                src="/images/lifestyle-1.png"
                alt="Cozy furnished living corner with armchair"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200">
              <img
                src="/images/norway.png"
                alt="Bright Scandinavian bedroom"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200">
              <img
                src="/images/lifestyle-3.png"
                alt="Elegant marble and brass bathroom"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="-mt-10 overflow-hidden rounded-2xl border border-zinc-200">
              <img
                src="/images/lifestyle-2.png"
                alt="Modern kitchen and dining detail"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
      </div>
    </section>
  )
}
