"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

// Selector matching elements that should trigger the "pointer" (hand) cursor state.
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]';

export default function CustomCursor() {
  // Raw pointer position — bound directly so the cursor tracks 1:1 with no lag.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reducedMotion) return;

    setEnabled(true);

    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);

      const target = e.target as Element | null;
      setHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);
    const handleLeave = () => setHidden(true);
    const handleEnter = () => setHidden(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x, y }}
      animate={{
        opacity: hidden ? 0 : 1,
        scale: pressed ? 0.82 : hovering ? 1.25 : 1,
      }}
      transition={{ type: "spring", damping: 26, stiffness: 500, mass: 0.4 }}
    >
      <ArrowCursor />
    </motion.div>
  );
}

/* Arrow cursor — the classic pointer, redrawn cleanly. */
function ArrowCursor() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 3L19 12L12 13L9 20L5 3Z"
        className="fill-foreground stroke-background"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}
