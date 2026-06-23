"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function TechStack() {
  const containerRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const techs = ["Next.js", "React", "Node.js", "PHP", "Laravel", "MySQL", "PostgreSQL", "AWS", "Docker", "Linux"];

  useEffect(() => {
    setMounted(true);
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".tech-item");
      
      items.forEach((item) => {
        // Random floating animation
        gsap.to(item, {
          x: () => `+=${gsap.utils.random(-150, 150)}`,
          y: () => `+=${gsap.utils.random(-100, 100)}`,
          rotation: () => gsap.utils.random(-15, 15),
          duration: () => gsap.utils.random(8, 15),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen bg-white dark:bg-[#111111] flex flex-col items-center justify-center relative overflow-hidden text-black dark:text-white border-y-2 border-black/10 dark:border-white/10 transition-colors duration-500">
      
      <div className="z-10 mb-20 text-center relative pointer-events-none">
        <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-none text-black/5 dark:text-white/5 transition-colors duration-500">
          TECHNOLOGY
        </h2>
        <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold tracking-[1em] uppercase text-[var(--brand-primary)] whitespace-nowrap">
          Core Stack
        </h3>
      </div>

      <div className="relative w-full max-w-[1400px] h-[60vh] flex flex-wrap justify-center items-center gap-4 md:gap-10 px-10">
        {mounted && techs.map((tech, i) => (
          <div 
            key={i} 
            className="tech-item px-6 py-3 md:px-12 md:py-6 rounded-full border-[3px] border-black/10 dark:border-white/10 bg-white dark:bg-black hover:border-[var(--brand-primary)] dark:hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] dark:hover:bg-[var(--brand-primary)] hover:text-white dark:hover:text-white transition-colors duration-500 cursor-pointer shadow-lg"
            style={{ 
              fontSize: `${Math.random() * (4 - 1.5) + 1.5}rem`,
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.05em'
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
