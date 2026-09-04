import { ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const links = [
  ["Products", "#products"],
  ["Mission", "#mission"],
  ["Showcase", "#showcase"],
]

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center">
          <img src="/logotype.webp" alt="RATRA Maps" className="h-7 w-auto dark:brightness-0 dark:invert" />
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Explore products
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
