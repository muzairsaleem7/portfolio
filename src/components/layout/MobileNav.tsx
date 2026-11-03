"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { nav } from "~/content/nav";

type Item = { label: string; href: string };

export function MobileNav({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? nav.menuClose : nav.menuOpen}
        onClick={() => setOpen((v) => !v)}
        className="rounded-pill border-line bg-surface text-heading hover:border-chip-border hover:bg-surface-strong inline-flex h-10 w-10 items-center justify-center border transition-[background-color,border-color] duration-300"
      >
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span
            className={`ease-out-soft absolute left-0 h-0.5 w-5 rounded bg-current transition-[transform,top] duration-300 motion-reduce:transition-none ${
              open ? "top-[7px] rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute top-[7px] left-0 h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`ease-out-soft absolute left-0 h-0.5 w-5 rounded bg-current transition-[transform,top] duration-300 motion-reduce:transition-none ${
              open ? "top-[7px] -rotate-45" : "top-[14px]"
            }`}
          />
        </span>
      </button>

      <div
        id={panelId}
        className={`border-line ease-out-soft absolute inset-x-0 top-full grid border-b transition-[grid-template-rows,opacity] duration-400 motion-reduce:transition-none ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        style={{ background: "var(--bg)" }}
        inert={!open}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
            <ul className="flex flex-col">
              {items.map((item, i) => (
                <li
                  key={item.href}
                  style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
                  className={`ease-out-soft transition-[opacity,transform] duration-400 motion-reduce:transition-none ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                  }`}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-heading hover:bg-surface-strong block rounded-lg px-3 py-3 text-base font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="border-line mt-2 border-t pt-3">
                <Link
                  href={nav.resume.href}
                  onClick={() => setOpen(false)}
                  className="text-heading hover:bg-surface-strong block rounded-lg px-3 py-3 text-base font-medium transition-colors"
                >
                  {nav.resume.label}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
