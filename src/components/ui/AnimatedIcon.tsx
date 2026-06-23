"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedIcon({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotate: [0, 5, -5, 0],
        filter: [
          "drop-shadow(0 0 0px rgba(0,85,255,0))",
          "drop-shadow(0 0 20px rgba(0,85,255,0.8))",
          "drop-shadow(0 0 0px rgba(0,85,255,0))",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className="relative z-10 flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}
