import { Reveal } from "./Reveal"

const pillars = [
  ["Detect", "Hotspots from orbit"],
  ["Delineate", "Fields and areas"],
  ["Overlay", "Hazards in context"],
  ["Alert", "Teams on the ground"],
]

export function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden">
      <img
        src="/texture-contour.jpg"
        alt=""
        aria-hidden="true"
        width={1200}
        height={900}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div className="relative mx-auto grid max-w-[88rem] gap-10 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <Reveal>
          <p className="label-mono">Mission</p>
          <h2 className="mt-6 max-w-lg text-4xl leading-tight font-semibold sm:text-5xl">
            Turning raw satellite data into decisions people can act on.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            RATRA takes satellite imagery most people never see and turns it into a simple map.
            Fire teams, plantation operators and disaster coordinators all look at the same
            up-to-date picture — no mapping expertise required.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">
            {pillars.map(([t, s]) => (
              <div key={t} className="bg-background px-4 py-6 transition-colors duration-300 hover:bg-surface">
                <div className="font-display text-sm font-semibold">{t}</div>
                <div className="mt-2 text-xs text-muted-foreground">{s}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
