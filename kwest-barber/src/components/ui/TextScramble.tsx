"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TextScrambleProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function TextScramble({
  text,
  delay = 0,
  duration = 0.8,
  className,
}: TextScrambleProps) {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
      const startTime = performance.now();
      const durationMs = duration * 1000;
      const len = text.length;

      function update() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        const result = text
          .split("")
          .map((char, i) => {
            if (char === " " || char === "." || char === "," || char === "'")
              return char;
            const threshold = i / len;
            if (progress > threshold + 0.35) return char;
            if (progress > threshold)
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            return "\u00A0";
          })
          .join("");

        setDisplay(result);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setDisplay(text);
        }
      }

      requestAnimationFrame(update);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [text, delay, duration]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: started ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      {display || "\u00A0"}
    </motion.span>
  );
}
