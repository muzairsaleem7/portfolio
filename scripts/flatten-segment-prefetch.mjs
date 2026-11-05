/**
 * Post-build fix for the static export (GitHub Pages).
 *
 * Next.js 16 writes per-segment prefetch data as nested files, for example
 *   out/resume/__next.resume/__PAGE__.txt
 * but the client router requests the flattened name
 *   out/resume/__next.resume.__PAGE__.txt
 * A plain static host has no rewrite to bridge the two, so those prefetches 404 (navigation
 * still works, but the failed requests show as console errors and waste a round trip).
 * This copies every nested segment file to its flattened name. Runs after `next build`.
 */
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const out = fileURLToPath(new URL("../out", import.meta.url));
if (!existsSync(out)) throw new Error("out/ not found; run next build with output: export first");

let copied = 0;

function filesUnder(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? filesUnder(p) : [p];
  });
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) {
      for (const file of filesUnder(p)) {
        const flat = join(dir, [name, ...relative(p, file).split(sep)].join("."));
        if (!existsSync(flat)) {
          copyFileSync(file, flat);
          copied++;
        }
      }
    } else {
      walk(p);
    }
  }
}

walk(out);
console.log(`segment prefetch: ${copied} flattened copies written`);
