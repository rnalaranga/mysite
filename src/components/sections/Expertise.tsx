"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const windowWidth = window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(scrollRef.current, {
        x: -scrollWidth + windowWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollWidth}`,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const expertise = [
    { title: "IoT Development", number: "01" },
    { title: "LIMS Systems", number: "02" },
    { title: "ERP Solutions", number: "03" },
    { title: "Cloud Infra", number: "04" },
    { title: "Web Apps", number: "05" },
    { title: "System Arch", number: "06" },
  ];

  return (
    <section ref={sectionRef} className="h-screen bg-[#f9f9f9] dark:bg-[#0a0a0a] text-black dark:text-white flex items-center overflow-hidden transition-colors duration-500">
      <div ref={scrollRef} className="flex flex-nowrap items-center h-full w-max px-[10vw]">
        
        <div className="flex-shrink-0 pr-[10vw]">
          <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.85] transition-colors duration-500">
            SELECTED <br />
            <span className="text-[var(--brand-primary)]">SERVICES</span>
          </h2>
        </div>

        {expertise.map((item, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[80vw] md:w-[600px] h-full flex flex-col justify-center border-l-[3px] border-black/10 dark:border-white/10 pl-12 pr-24 group relative overflow-hidden transition-colors duration-500"
          >
            {/* Hover Reveal Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[var(--brand-primary)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />
            
            <div className="relative z-10 flex flex-col">
              <span className="text-2xl font-bold font-mono mb-8 group-hover:text-white transition-colors duration-500">
                {item.number}
              </span>
              <h4 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] group-hover:text-white transition-colors duration-500">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
        
        {/* Padding end */}
        <div className="flex-shrink-0 w-[10vw]"></div>
      </div>
    </section>
  );
}
