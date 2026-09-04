import { MapContainer, TileLayer, Polygon, CircleMarker } from "react-leaflet"
import { useDarkMode } from "@/lib/useDarkMode"

const CENTER = [0.51, 101.44]

const aoi = [
  [0.62, 101.32],
  [0.58, 101.4],
  [0.6, 101.5],
  [0.5, 101.54],
  [0.42, 101.46],
  [0.44, 101.35],
]

const markers = [
  { pos: [0.57, 101.35], color: "#ec3013" },
  { pos: [0.49, 101.42], color: "#ec3013" },
  { pos: [0.53, 101.49], color: "#4c8a2e" },
  { pos: [0.4, 101.51], color: "#2f66d0" },
]

export function HeroMap() {
  const dark = useDarkMode()
  const tileUrl = dark
    ? "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
    : "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"

  return (
    <MapContainer
      center={CENTER}
      zoom={9}
      scrollWheelZoom={false}
      attributionControl={false}
      zoomControl={false}
      className="absolute inset-0 h-full w-full"
    >
      <TileLayer key={tileUrl} url={tileUrl} />
      <Polygon
        positions={aoi}
        pathOptions={{ color: "#ec3013", weight: 1.5, dashArray: "5 4", fillOpacity: 0.08 }}
      />
      {markers.map((m, i) => (
        <CircleMarker
          key={i}
          center={m.pos}
          radius={5}
          pathOptions={{ color: m.color, fillColor: m.color, fillOpacity: 1, weight: 0 }}
        />
      ))}
    </MapContainer>
  )
}
