"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { nav, rsvpHref, site } from "@/data/site";
import { cx } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={cx("header", scrolled && "header--scrolled")}>
        <div className="container header__inner">
          <Link href="/" className="header__brand" aria-label="Tanuja & Prasid home">
            {site.couple.joined}
          </Link>

          <nav className="header__nav" aria-label="Primary">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="header__link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <Link href={rsvpHref} className="btn btn--solid header__cta">
              RSVP
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "✕" : <span className="menu-toggle__bar" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="menu-panel"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              href={rsvpHref}
              onClick={() => setOpen(false)}
              className="display"
              style={{ color: "var(--sindoor)" }}
            >
              RSVP
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
