import { ImageResponse } from "next/og";
import { siteConfig } from "~/site.config";

// Served as /icon.png (see og.png/route.tsx for why the extension matters). Referenced from layout metadata.
export const dynamic = "force-static";

const size = { width: 64, height: 64 };

/** Favicon: initials on the banner gradient. */
export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        backgroundImage: "linear-gradient(135deg, #38bdf8, #6366f1)",
        color: "#0b1526",
        fontSize: 30,
        fontWeight: 800,
        letterSpacing: -1,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {siteConfig.initials}
    </div>,
    { ...size },
  );
}
