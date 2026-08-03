"use client";

import { motion, Variants } from "framer-motion";

interface InteractiveTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function InteractiveText({ text, className = "" }: InteractiveTextProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const childVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      data-cursor-hover="true"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block whitespace-nowrap hover:scale-105 transition-transform duration-200 cursor-default select-none mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
