"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Caveat } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"] });

export function DevoteamAnnotation({ className }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
    >
      {/* Hand-drawn arrow pointing up-left, toward the card */}
      <svg
        viewBox="0 0 130 84"
        fill="none"
        className="-ml-3 mr-auto block h-auto w-28 text-foreground/75"
      >
        <motion.path
          d="M124 72 C 92 81 58 74 33 55 C 21 46 12 36 6 24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeInOut" }}
        />
        <motion.path
          d="M23 27 L 6 24 L 9 42"
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
        className={cn(caveat.className, "-mt-1 rotate-6 text-center")}
        initial={{ opacity: 0, y: 12, rotate: 12 }}
        animate={isInView ? { opacity: 1, y: 0, rotate: 6 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <p className="mt-3 whitespace-nowrap text-3xl font-bold leading-none text-foreground">
          Built for
        </p>
        <Image
          src="/devoteam.png"
          alt="Devoteam"
          width={160}
          height={50}
          className="mx-auto mt-3 h-auto w-36"
        />
      </motion.div>
    </div>
  );
}
