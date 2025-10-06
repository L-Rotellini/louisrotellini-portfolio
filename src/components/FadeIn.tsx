"use client";

import { motion } from "framer-motion";
import type { ReactNode, HTMLAttributes } from "react";

export default function FadeIn({
  as: Tag = "div",
  className,
  children,
  delay = 0,
  ...rest
}: {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
  delay?: number;
} & HTMLAttributes<HTMLElement>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
