import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 * The site is served from a sub-path (https://<user>.github.io/<repo>/). The deploy workflow
 * passes that path as PAGES_BASE_PATH (from actions/configure-pages); locally it is empty.
 */
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // GitHub Pages has no image optimizer; images are served as-is.
  images: { unoptimized: true },
  // Exposed to the client so plain asset URLs (icon sprite, images) can be prefixed.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
