import { ImageResponse } from "next/og";
import { hero } from "~/content/hero";
import { siteConfig } from "~/site.config";

export const alt = `${siteConfig.name} – ${hero.heading}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Home page Open Graph image in the banner palette. */
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundImage: "linear-gradient(115deg, #0b1526 0%, #0f2240 55%, #123a5e 100%)",
        color: "#ffffff",
        fontFamily: "Inter, sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 10,
          backgroundImage: "linear-gradient(90deg, #38bdf8, #6366f1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -220,
          top: -380,
          width: 820,
          height: 820,
          borderRadius: 9999,
          backgroundImage:
            "radial-gradient(circle, rgba(56,189,248,0.26) 0%, rgba(56,189,248,0) 62%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 300,
          bottom: -420,
          width: 620,
          height: 620,
          borderRadius: 9999,
          backgroundImage:
            "radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(99,102,241,0) 65%)",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#7dd3fc",
            fontWeight: 600,
          }}
        >
          {hero.eyebrow}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 66,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -1.5,
            maxWidth: 980,
          }}
        >
          {hero.heading}
        </div>
        <div style={{ marginTop: 20, fontSize: 30, color: "#cbd5e1" }}>{hero.sub}</div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 14 }}>
          {hero.chips.map((chip) => (
            <div
              key={chip}
              style={{
                fontSize: 22,
                padding: "10px 20px",
                border: "1px solid rgba(125,211,252,0.45)",
                borderRadius: 9999,
                color: "#e0f2fe",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ fontSize: 26, fontWeight: 700 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 20, color: "#94a3b8" }}>{siteConfig.location.label}</div>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
