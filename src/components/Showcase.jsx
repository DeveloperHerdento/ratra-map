import { ArrowUpRight } from "lucide-react"
import { domains } from "@/lib/products"
import { Reveal } from "./Reveal"

const dotLayout = [
  [30, 62],
  [52, 38],
  [66, 70],
  [78, 46],
]

export function Showcase() {
  return (
    <section id="showcase" className="border-t border-border">
      <div className="mx-auto max-w-[88rem] px-6 py-24 lg:px-10">
        <Reveal className="flex items-start justify-between gap-8 pb-10">
          <h2 className="max-w-md text-4xl leading-tight font-semibold sm:text-5xl">
            Every product, map-first by design.
          </h2>
          <span className="label-mono hidden md:block">Showcase / 03</span>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.08}>
              <a
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface/40 transition-colors hover:bg-surface"
              >
                <div className="hairline-grid relative aspect-[5/4] overflow-hidden border-b border-border bg-background/60">
                  {d.shot ? (
                    <img src={d.shot} alt={`${d.name} dashboard screenshot`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  ) : (
                    dotLayout.map(([l, t], j) => (
                      <span
                        key={j}
                        style={{ left: `${l}%`, top: `${t}%` }}
                        className={`absolute h-2 w-2 rounded-full bg-current ${d.tone}`}
                      />
                    ))
                  )}
                  <span className="label-mono absolute top-3 left-3 rounded bg-background/80 px-1.5 py-0.5">{d.name}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    Open {d.name.split(" ")[0]} dashboard
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
