import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { absoluteUrl, assetPath, siteConfig } from "~/site.config";
import { OG_IMAGES } from "@/lib/og";
import { themeInitScript } from "@/lib/theme";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PersonJsonLd } from "@/components/seo/JsonLd";
import { MotionController } from "@/components/ui/MotionController";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // Trailing slash so relative metadata URLs (OG images) resolve inside the sub-path.
  metadataBase: new URL(`${siteConfig.url}/`),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.links.linkedin }],
  creator: siteConfig.name,
  keywords: [
    "Product Engineer",
    "Full-Stack Software Engineer",
    "B2B SaaS",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "Lahore",
  ],
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [absoluteUrl("/og.png")],
  },
  icons: { icon: [{ url: assetPath("/icon.png"), type: "image/png", sizes: "64x64" }] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#f6f9fc" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <SkipLink />
        <div className="site-backdrop" aria-hidden="true">
          <div className="glow glow-sky" />
          <div className="glow glow-indigo" />
        </div>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
        <PersonJsonLd />
        <MotionController />
      </body>
    </html>
  );
}
