import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { siteConfig } from "~/site.config";
import { cn } from "@/lib/cn";

const photoExists = fs.existsSync(path.join(process.cwd(), "public", siteConfig.profileImage));

type Props = { size?: number; className?: string; priority?: boolean };

/**
 * Profile avatar. Renders /public/images/profile.jpg when the file exists (checked at build time),
 * otherwise an initials badge in the accent gradient.
 */
export function Avatar({ size = 160, className, priority = false }: Props) {
  return (
    <div
      className={cn(
        "relative shrink-0 rounded-full p-[3px]",
        "bg-[linear-gradient(135deg,#38bdf8,#6366f1)] shadow-[0_20px_60px_-24px_rgba(56,189,248,0.6)]",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {photoExists ? (
        <Image
          src={siteConfig.profileImage}
          alt={`${siteConfig.name}, ${siteConfig.title}`}
          width={size}
          height={size}
          priority={priority}
          sizes={`${size}px`}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`${siteConfig.name} initials`}
          className="flex h-full w-full items-center justify-center rounded-full bg-[var(--avatar-bg)] font-bold tracking-tight text-white select-none"
          style={{ fontSize: Math.round(size * 0.34) }}
        >
          {siteConfig.initials}
        </div>
      )}
    </div>
  );
}
