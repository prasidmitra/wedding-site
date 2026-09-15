"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { rsvpHref } from "@/data/site";

/** A tasteful floating RSVP control that appears once the hero CTA scrolls out of view. */
export function FloatingRSVP() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hidden = pathname === rsvpHref;

  return (
    <AnimatePresence>
      {show && !hidden && (
        <motion.div
          className="float-rsvp"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35 }}
        >
          <Link href={rsvpHref} className="btn">
            RSVP
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
