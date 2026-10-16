import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#f5f0e6",
        color: "#1b1915",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <svg width="72" height="72" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="3" fill="#2b3a8f" />
          <path
            d="M7 24 15 8v16M11 16h12M15 8h10M15 24h10"
            fill="none"
            stroke="#f5f0e6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div style={{ fontSize: 26, color: "#2b3a8f", letterSpacing: 2 }}>{site.role.toUpperCase()}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", borderTop: "3px solid #1b1915", paddingTop: 28 }}>
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>{site.name}</div>
        <div style={{ fontSize: 36, color: "#585246", marginTop: 24, maxWidth: 920 }}>{site.headline}</div>
        <div style={{ width: 120, height: 8, background: "#d2451e", marginTop: 28 }} />
      </div>
      <div style={{ fontSize: 26, color: "#585246" }}>{site.url.replace("https://", "")}</div>
    </div>,
    size,
  );
}
