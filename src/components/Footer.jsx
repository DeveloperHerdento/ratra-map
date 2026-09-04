import { domains } from "@/lib/products"
import { Reveal } from "./Reveal"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Reveal y={16}>
        <div className="mx-auto grid max-w-[88rem] gap-12 px-6 py-16 md:grid-cols-[2fr_1fr_1fr] lg:px-10">
          <div>
            <img src="/logotype.webp" alt="RATRA Maps" className="h-7 w-auto dark:brightness-0 dark:invert" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Geospatial intelligence for a safer &amp; smarter future. A product by HGS —
              Innovations for Smarter Future.
            </p>
          </div>
          <div>
            <p className="label-mono">Products</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {domains.map((d) => (
                <li key={d.id}>
                  <a href={d.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
                    {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-mono">Contact</p>
            <a
              href="mailto:hello@ratra.maps"
              className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              hello@ratra.maps
            </a>
          </div>
        </div>
      </Reveal>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[88rem] flex-wrap justify-between gap-3 px-6 py-6 lg:px-10">
          <span className="label-mono">© 2026 RATRA Maps · HGS</span>
          <span className="label-mono">Built on open satellite data</span>
        </div>
      </div>
    </footer>
  )
}
