"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 bg-gold font-display text-xs font-bold uppercase tracking-widest text-ink px-6 py-3 shadow-lg shadow-gold/20 transition-colors hover:bg-gold-light md:bottom-8 md:right-8"
        >
          Book Now
        </motion.a>
      )}
    </AnimatePresence>
  );
}
