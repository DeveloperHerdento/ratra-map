import { ArrowUpRight, Crosshair, Satellite } from "lucide-react"
import { StatCounter } from "./StatCounter"
import { HeroMap } from "./HeroMap"

const widgetLegend = [
  ["Fire", "bg-fire"],
  ["Crops", "bg-crop"],
  ["Hazard", "bg-flood"],
]

const widgetStats = [
  [3, "", "Live products"],
  [5, "", "Field map layers"],
  [24, "/7", "Downlinked"],
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <img
        src="/hero-earth.jpg"
        alt="Satellite view of Southeast Asia at dawn with fire hotspots visible"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,var(--color-background)_18%,transparent_75%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-background)_2%,transparent_45%)]" />

      <div className="relative mx-auto grid max-w-[88rem] gap-16 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-10 lg:py-36">
        <div className="rise-in">
          <p className="label-mono flex items-center gap-3">
            <Satellite className="h-3.5 w-3.5 text-primary" />
            RATRA Maps · by HGS
          </p>
          <h1 className="mt-8 text-5xl leading-[1.15] font-semibold tracking-normal sm:text-6xl lg:text-[4.5rem]">
            Geospatial
            <br />
            intelligence for a
            <br />
            <span className="text-primary">safer &amp; smarter future.</span>
          </h1>
          <p className="mt-9 max-w-lg text-lg leading-relaxed text-muted-foreground">
            RATRA watches the ground from space, so teams can see fire hotspots, plantation
            health and disaster-response areas on one simple map — updated as it happens.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore products
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#mission"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface"
            >
              About RATRA
            </a>
          </div>
        </div>

        <div className="rise-in relative rounded-lg border border-border bg-surface/70 p-1 shadow-[var(--shadow-lift)] backdrop-blur-md">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-background/80">
            <HeroMap />

            <div className="scan-sweep pointer-events-none absolute inset-x-0 top-0 z-[500] h-1/3 bg-gradient-to-b from-primary/10 to-transparent" />

            <span className="label-mono pointer-events-none absolute top-3 left-3 z-[500] flex items-center gap-1.5 rounded bg-background/80 px-1.5 py-1 text-[10px]">
              <Crosshair className="h-3 w-3" />
              0.51°N 101.44°E
            </span>

            <div className="absolute bottom-3 left-3 z-[500] flex gap-4 rounded-md border border-border bg-background/80 px-3 py-2">
              {widgetLegend.map(([l, c]) => (
                <span key={l} className="label-mono flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${c}`} />
                  {l}
                </span>
              ))}
            </div>

            <span className="pointer-events-none absolute right-2 bottom-2 z-[500] text-[9px] text-muted-foreground/70">
              Esri, HERE, Garmin, OSM
            </span>
          </div>
          <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
            {widgetStats.map(([v, suffix, l]) => (
              <div key={l} className="px-4 py-4">
                <div className="font-display text-2xl font-semibold">
                  <StatCounter value={v} suffix={suffix} inline />
                </div>
                <div className="label-mono mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
