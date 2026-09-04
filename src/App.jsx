import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Products } from "./components/Products"
import { Mission } from "./components/Mission"
import { Evidence } from "./components/Evidence"
import { Showcase } from "./components/Showcase"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Products />
      <Mission />
      <Evidence />
      <Showcase />
      <Footer />
    </main>
  )
}
