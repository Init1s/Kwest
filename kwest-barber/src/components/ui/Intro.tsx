"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextScramble } from "./TextScramble";

export const INTRO_DURATION = 1.5;

export function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), INTRO_DURATION * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Gold line sweep */}
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-px bg-gold/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.05,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ originX: 0 }}
          />

          <div className="flex flex-col items-center">
            <span className="font-display text-5xl font-extrabold uppercase text-gold md:text-7xl">
              <TextScramble text="KWEST" delay={0.15} duration={0.7} />
            </span>
            <motion.span
              className="mt-2 font-mono text-[9px] uppercase tracking-ultra text-smoke"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.3 }}
            >
              The Barber
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
