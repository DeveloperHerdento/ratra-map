import { Flame, Sprout, TriangleAlert } from "lucide-react"

// Drop screenshots into public/screenshots/ and set the paths below.
//   image -> the small "Signal" thumb in the Products list (~960x384px, ~5:2, jpg/png/webp)
//   shot  -> the larger Showcase card cover (~1200x960px, ~5:4, jpg/png/webp)
// Both are cropped with object-cover, so exact size just needs to roughly match the ratio.
export const domains = [
  {
    id: "01",
    slug: "fire",
    name: "Fire Map",
    icon: Flame,
    tone: "text-fire",
    dot: "bg-fire",
    line: "Live hotspots inside your area of interest.",
    body: "Draw an area of interest and watch hotspots appear the moment they're detected from space — counted, severity-graded from low to severe, and synced to the minute, with nearby-fire radius alerts.",
    points: ["AOI hotspot counts, synced live", "Severity legend: low to severe", "Nearby-fire radius alerts", "Fire history timeline"],
    meta: [
      ["Kalimantan", "Pilot region"],
      ["≤ 1 min", "Sync interval"],
    ],
    href: "https://ratrafire.herdento.com",
    image: null,
    shot: null,
  },
  {
    id: "02",
    slug: "agriculture",
    name: "Plantation Intelligence",
    icon: Sprout,
    tone: "text-crop",
    dot: "bg-crop",
    line: "Every field mapped, aged and measured.",
    body: "A dashboard for plantation operators: tree-age estimation, fertilization, yield estimation, nutrient status and disease-risk maps — with total field area, growing and harvesting counts tracked automatically.",
    points: ["Tree-age estimation map", "Yield & fertilization dosage", "Nutrient status & disease risk", "Field and area totals, automatic"],
    meta: [
      ["Palm oil", "First crop"],
      ["5 map layers", "Per field"],
    ],
    href: "https://ratraagri.herdento.com",
    image: null,
    shot: null,
  },
  {
    id: "03",
    slug: "disaster",
    name: "AI Disaster Mitigation",
    icon: TriangleAlert,
    tone: "text-flood",
    dot: "bg-flood",
    line: "Real-time hazard layers for faster decisions.",
    body: "An AI-assisted platform layering flood, rainfall, typhoon and earthquake hazards on one shared map, giving response teams a single situational picture during fast-moving events.",
    points: ["Flood & rainfall forecasting", "Typhoon path tracking", "Earthquake shake-intensity maps", "AI-assisted mitigation view"],
    meta: [
      ["4", "Hazard types"],
      ["Real-time", "Layer sync"],
    ],
    href: "https://safeus.jp",
    image: null,
    shot: null,
  },
]
