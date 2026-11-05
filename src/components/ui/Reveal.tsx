import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger in ms; applied via --reveal-delay. */
  delay?: number;
  as?: "div" | "li" | "article";
};

/**
 * Entrance-animation wrapper. This is a server component: it only emits a `data-reveal`
 * attribute, and the client-side MotionController (GSAP, mounted once in the root layout)
 * animates it in when it scrolls into view. Keeping this on the server avoids a
 * client boundary per section and keeps section markup out of the RSC payload.
 *
 * The hidden state only applies when <html class="js"> (see globals.css), so content is always
 * visible without JavaScript, and prefers-reduced-motion disables the motion entirely.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;
  return (
    <Tag data-reveal="" className={className} style={style}>
      {children}
    </Tag>
  );
}
