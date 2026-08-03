"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hoverState, setHoverState] = useState<"none" | "button" | "text">("none");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setHoverState("button");
      } else if (
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.dataset.cursorHover === "true" ||
        target.closest("h1") ||
        target.closest("h2")
      ) {
        setHoverState("text");
      } else {
        setHoverState("none");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#141414] pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: hoverState === "button" ? 2.2 : hoverState === "text" ? 3.2 : 1,
          backgroundColor:
            hoverState === "button"
              ? "rgba(20, 20, 20, 0.1)"
              : hoverState === "text"
              ? "rgba(20, 20, 20, 0.05)"
              : "rgba(20, 20, 20, 0)",
          borderColor: hoverState === "text" ? "rgba(20, 20, 20, 0.4)" : "rgb(20, 20, 20)",
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 28,
          mass: 0.2,
        }}
      />

      {/* Inner cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#141414] pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: hoverState === "text" ? 0.5 : 1,
          opacity: hoverState === "button" ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
        }}
      />
    </>
  );
}
