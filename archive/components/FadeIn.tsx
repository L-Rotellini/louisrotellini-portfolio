"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode, ElementType } from "react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 6 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

type Props = {
  as?: ElementType;         // ✅ au lieu de keyof JSX.IntrinsicElements
  className?: string;
  children: ReactNode;
  delay?: number;
  once?: boolean;
};

export default function FadeIn({
  as: Tag = "div",
  className,
  children,
  delay = 0,
  once = true,
  ...rest
}: Props & React.ComponentPropsWithoutRef<"div">) {
  const Comp = motion(Tag as ElementType);
  return (
    <Comp
      className={className}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
