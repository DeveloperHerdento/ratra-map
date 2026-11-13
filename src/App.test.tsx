import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

// Leaflet needs a real browser layout engine; the map itself is not under test here.
vi.mock("react-leaflet", () => ({
  MapContainer: ({ children }: { children?: ReactNode }) => (
    <div data-testid="map">{children}</div>
  ),
  TileLayer: () => null,
  Polygon: () => null,
  CircleMarker: () => null,
}));

// jsdom has no IntersectionObserver; framer-motion's whileInView/useInView need one.
vi.stubGlobal(
  "IntersectionObserver",
  class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  },
);

afterEach(cleanup);

describe("App", () => {
  it("renders the landing page sections", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
      "Geospatial",
    );
    expect(screen.getByTestId("map")).toBeTruthy();
    for (const name of [
      "Fire Map",
      "Plantation Intelligence",
      "AI Disaster Mitigation",
    ]) {
      expect(screen.getAllByText(name).length).toBeGreaterThan(0);
    }
  });
});
