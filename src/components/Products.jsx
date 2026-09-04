import { motion } from "framer-motion"
import { domains } from "@/lib/products"
import { Reveal } from "./Reveal"

export function Products() {
  return (
    <section id="products" className="border-t border-border">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <Reveal className="grid grid-cols-1 gap-6 border-b border-border py-16 md:grid-cols-[1fr_24rem] md:items-end md:gap-12">
          <h2 className="text-4xl leading-tight font-semibold sm:text-5xl">
            Three domains.
            <br />
            One consistent map.
          </h2>
          <p className="text-muted-foreground md:text-right">
            Each product opens its own dashboard, focused on one job — while sharing the same
            basemap, drawing tools and access model.
          </p>
        </Reveal>

      </div>

      <div className="mx-auto flex max-w-[88rem] px-6 lg:px-10">
        <div className="hairline-diagonal hidden w-16 shrink-0 border-l border-border lg:block" aria-hidden="true" />

        <div className="min-w-0 flex-1 border-x border-border bg-background px-6 lg:px-10">
          {domains.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.05}>
              <a
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-8 border-b border-border py-14 transition-colors hover:bg-surface/40 lg:grid-cols-[7rem_1fr_22rem] lg:gap-12"
              >
                <div className="flex items-center gap-3">
                  <span className="label-mono">{d.id}</span>
                  <d.icon
                    className={`h-6 w-6 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${d.tone}`}
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-semibold">{d.name}</h3>
                  <p className={`mt-2 text-lg ${d.tone}`}>{d.line}</p>
                  <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{d.body}</p>
                  <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {d.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                        <span className={`mt-2 h-1 w-4 flex-none bg-current ${d.tone}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between gap-6 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                  <div className="hairline-grid relative h-32 overflow-hidden rounded-md border border-border bg-surface/50 transition-transform duration-300 group-hover:scale-[1.02]">
                    {d.image ? (
                      <img src={d.image} alt={`${d.name} screenshot`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    ) : (
                      <svg viewBox="0 0 300 120" className="absolute inset-0 h-full w-full" aria-hidden="true">
                        <motion.polyline
                          points="0,96 30,88 60,92 90,70 120,78 150,54 180,62 210,40 240,46 270,26 300,18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={d.tone}
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 1.1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </svg>
                    )}
                    <span className="label-mono absolute top-3 left-3">{d.image ? d.name : "Signal"}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {d.meta.map(([v, l]) => (
                      <div key={l}>
                        <div className="font-display text-lg font-semibold">{v}</div>
                        <div className="label-mono mt-1">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="hairline-diagonal hidden w-16 shrink-0 border-r border-border lg:block" aria-hidden="true" />
      </div>
    </section>
  )
}
