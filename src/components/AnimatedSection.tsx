"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AnimatedSection({
  id,
  className,
  children,
  once = true,
  amount = 0.2,
  immediate = false,            // ⬅️ NEW
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  once?: boolean;
  amount?: number;
  /** joue l'anim tout de suite au mount (pour le HERO) */
  immediate?: boolean;          // ⬅️ NEW
}) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeUp}
      initial={immediate ? "show" : "hidden"}              // ⬅️
      animate={immediate ? "show" : undefined}              // ⬅️
      whileInView={immediate ? undefined : "show"}          // ⬅️
      viewport={immediate ? undefined : { once, amount, margin: "0px 0px -10% 0px" }} // ⬅️ marge pour déclencher plus tôt
    >
      {children}
    </motion.section>
  );
}
