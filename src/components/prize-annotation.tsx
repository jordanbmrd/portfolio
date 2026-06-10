"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Caveat } from "next/font/google";
import { useRef } from "react";

const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"] });

const PRIZES = {
  first: {
    label: "1st prize",
    medal: "🥇",
    text: "text-amber-500 dark:text-amber-400",
  },
  second: {
    label: "2nd prize",
    medal: "🥈",
    text: "text-zinc-500 dark:text-zinc-300",
  },
  third: {
    label: "3rd prize",
    medal: "🥉",
    text: "text-orange-700 dark:text-orange-400",
  },
} as const;

export function PrizeAnnotation({
  position,
  className,
}: {
  position: keyof typeof PRIZES;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prize = PRIZES[position];

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none flex select-none items-center gap-1.5",
        className
      )}
    >
      <motion.p
        className={cn(
          caveat.className,
          "whitespace-nowrap text-2xl font-bold leading-none",
          prize.text
        )}
        initial={{ opacity: 0, y: 8, rotate: -10 }}
        animate={isInView ? { opacity: 1, y: 0, rotate: -4 } : {}}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
      >
        {prize.label}
      </motion.p>

      <motion.span
        aria-hidden
        className="text-xl leading-none"
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          delay: 0.35,
        }}
      >
        {prize.medal}
      </motion.span>
    </div>
  );
}
