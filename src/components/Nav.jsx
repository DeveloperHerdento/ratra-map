import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"

const links = [
  ["Products", "#products"],
  ["Mission", "#mission"],
  ["Showcase", "#showcase"],
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/85 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] backdrop-blur-xl"
          : "border-transparent bg-background/40 backdrop-blur-sm"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[88rem] items-center justify-between px-6 transition-[height] duration-300 lg:px-10",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <a href="#top" className="flex items-center transition-transform duration-300 hover:scale-[1.02]">
          <img src="/logotype.webp" alt="RATRA Maps" className="h-7 w-auto dark:brightness-0 dark:invert" />
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
              <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-2 text-sm font-medium text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
          >
            Explore products
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
