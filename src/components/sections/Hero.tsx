"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#f2f2f2] dark:bg-black flex flex-col justify-center items-center transition-colors duration-500">
      
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30 h-[200%] -top-1/2 pointer-events-none z-0" />
      
      {/* Spotlight */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-[var(--brand-primary)]/30 blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen z-0"
        animate={{ x: mousePosition.x - 300, y: mousePosition.y - 300 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      <div className="z-10 text-center uppercase flex flex-col items-center w-full px-4 mix-blend-normal dark:mix-blend-difference">
        <h1 className="text-[15vw] md:text-[14vw] leading-[0.8] font-black tracking-tighter text-black dark:text-white transition-colors duration-500">
          RASHITHA
        </h1>
        <h1 className="text-[15vw] md:text-[14vw] leading-[0.8] font-black tracking-tighter stroke-text mt-2 transition-colors duration-500">
          NALARANGA
        </h1>
        
        <div className="mt-16 flex flex-wrap justify-center items-center gap-3 md:gap-6 text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] font-medium text-gray-600 dark:text-gray-400 transition-colors duration-500">
          <span>SYSTEM ENGINEER</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)]" />
          <span>FULL STACK DEVELOPER</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)]" />
          <span>IOT SPECIALIST</span>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
        <span className="text-[10px] tracking-widest text-gray-500 uppercase font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-black/20 dark:bg-white/20 overflow-hidden relative transition-colors duration-500">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--brand-primary)] animate-[scrollDown_1.5s_infinite]" />
        </div>
      </div>
    </section>
  );
}
