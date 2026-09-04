import { Reveal } from "./Reveal"
import { StatCounter } from "./StatCounter"

const points = [
  {
    value: 1,
    suffix: " min",
    label: "Sync interval",
    body: "Fire hotspots reach the dashboard within a minute of satellite detection — not an overnight batch job.",
  },
  {
    value: 5,
    suffix: "",
    label: "Map layers, per field",
    body: "Tree age, yield, nutrient status and disease risk are generated automatically, without a GIS team.",
  },
  {
    value: 3,
    suffix: "",
    label: "Domains, one basemap",
    body: "Fire, crop and hazard data share the same drawing tools and access model — no switching platforms.",
  },
]

export function Evidence() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto flex max-w-[88rem] px-6 lg:px-10">
        <div className="hairline-diagonal hidden w-16 shrink-0 border-l border-border lg:block" aria-hidden="true" />

        <div className="min-w-0 flex-1 border-x border-border bg-background px-6 py-24 lg:px-10">
          <Reveal>
            <p className="label-mono">Evidence</p>
            <h2 className="mt-6 max-w-lg text-4xl leading-tight font-semibold sm:text-5xl">
              What the data shows.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {points.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.08}>
                <div className="font-display text-3xl font-semibold">
                  <StatCounter value={p.value} suffix={p.suffix} inline />
                </div>
                <div className="label-mono mt-2">{p.label}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="hairline-diagonal hidden w-16 shrink-0 border-r border-border lg:block" aria-hidden="true" />
      </div>
    </section>
  )
}
