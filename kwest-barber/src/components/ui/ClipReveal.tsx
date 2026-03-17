"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  type?: "circle" | "inset" | "diagonal";
  delay?: number;
}

const clipVariants = {
  circle: {
    hidden: "circle(0% at 50% 50%)",
    visible: "circle(75% at 50% 50%)",
  },
  inset: {
    hidden: "inset(12% 12% 12% 12%)",
    visible: "inset(0% 0% 0% 0%)",
  },
  diagonal: {
    hidden: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    visible: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};

export function ClipReveal({
  children,
  className,
  type = "inset",
  delay = 0,
}: ClipRevealProps) {
  const { hidden, visible } = clipVariants[type];

  return (
    <motion.div
      initial={{ clipPath: hidden, opacity: 0.3 }}
      whileInView={{ clipPath: visible, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
