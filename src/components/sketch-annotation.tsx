"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Caveat } from "next/font/google";
import { useRef } from "react";

const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"] });

const STARS = [0, 1, 2, 3, 4];

export function SketchAnnotation({ className }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
    >
      {/* Hand-drawn arrow pointing up-right, toward the card */}
      <svg
        viewBox="0 0 130 84"
        fill="none"
        className="-mr-3 ml-auto block h-auto w-28 text-foreground/75"
      >
        <motion.path
          d="M6 72 C 38 81 72 74 97 55 C 109 46 118 36 124 24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeInOut" }}
        />
        <motion.path
          d="M107 27 L 124 24 L 121 42"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.25, delay: 1.1, ease: "easeOut" }}
        />
      </svg>

      <motion.div
        className={cn(caveat.className, "-mt-1 -rotate-6 text-center")}
        initial={{ opacity: 0, y: 12, rotate: -12 }}
        animate={isInView ? { opacity: 1, y: 0, rotate: -6 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <p className="mt-3 whitespace-nowrap text-4xl font-bold leading-none text-foreground">
          400+ users
        </p>
        <div className="mt-2.5 flex items-center justify-center gap-1">
          {STARS.map((i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.35 + i * 0.08,
              }}
            >
              <Star className="size-4 fill-amber-400 text-amber-400" />
            </motion.span>
          ))}
        </div>
        <p className="mt-1.5 whitespace-nowrap text-xl font-semibold leading-none text-muted-foreground">
          5.0 average rating
        </p>
      </motion.div>
    </div>
  );
}
