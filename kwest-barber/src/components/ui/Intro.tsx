"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/kwest-logo.jpeg`}
              alt="Kwest The Barber"
              width={448}
              height={448}
              priority
              className="h-64 w-64 [mix-blend-mode:screen] md:h-96 md:w-96"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
