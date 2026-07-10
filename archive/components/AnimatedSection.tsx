"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // ✅ valeur autorisée par Framer Motion
      ease: "easeOut", // aussi possible: "linear" | "easeIn" | "easeInOut" ou un tableau [0.16, 1, 0.3, 1]
    },
  },
};

export default function AnimatedSection({
  id,
  className,
  children,
  once = true,
  amount = 0.2,
  immediate = false,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  once?: boolean;
  amount?: number;
  /** joue l'anim tout de suite au mount (pour le HERO) */
  immediate?: boolean;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeUp}
      initial={immediate ? "show" : "hidden"}
      animate={immediate ? "show" : undefined}
      whileInView={immediate ? undefined : "show"}
      viewport={immediate ? undefined : { once, amount, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.section>
  );
}
