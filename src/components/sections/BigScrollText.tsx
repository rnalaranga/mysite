"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedIcon from "../ui/AnimatedIcon";
import { Sparkles, Hexagon, Circle } from "lucide-react";

export default function BigScrollText() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Background color shift when scrolling into this section
      gsap.to(containerRef.current, {
        backgroundColor: "#0a0a0a",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      });

      // Text reveal animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0.2, scale: 0.9 },
        {
          opacity: 1, 
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "center center",
            scrub: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-40 md:py-60 px-6 md:px-12 w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050505]">
      
      {/* Floating Shapes matching Juan Mora style */}
      <div className="absolute top-20 left-[10%] opacity-20">
        <AnimatedIcon delay={0}><Hexagon className="w-32 h-32 text-[var(--brand-primary)]" strokeWidth={1} /></AnimatedIcon>
      </div>
      <div className="absolute bottom-40 right-[10%] opacity-20">
        <AnimatedIcon delay={0.5}><Circle className="w-48 h-48 text-white" strokeWidth={1} /></AnimatedIcon>
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-30">
        <AnimatedIcon delay={0.8}><Sparkles className="w-16 h-16 text-[var(--brand-primary)]" strokeWidth={1} /></AnimatedIcon>
      </div>

      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <h2 
          ref={textRef}
          className="text-5xl md:text-7xl lg:text-[8vw] leading-[1.05] font-bold tracking-tight text-white mix-blend-difference"
        >
          8 years making <br /> systems <span className="text-[var(--brand-primary)]">scalable</span> <br /> and <span className="text-gray-500">secure</span>.
        </h2>
      </div>
    </section>
  );
}
