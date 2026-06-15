"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const directionOffset = {
  up: { x: 0, y: 30 },
  down: { x: 0, y: -30 },
  left: { x: -30, y: 0 },
  right: { x: 30, y: 0 },
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: keyof typeof directionOffset;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = prefersReducedMotion ? { x: 0, y: 0 } : directionOffset[direction];

  return (
    <motion.div
      initial={{ opacity: prefersReducedMotion ? 1 : 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.7,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: RevealGroupProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: prefersReducedMotion ? 0 : stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
}

export function RevealItem({ children, className }: RevealItemProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
