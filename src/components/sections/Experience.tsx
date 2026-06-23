"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    { role: "Senior Full Stack Engineer", company: "Talenfort Pvt Ltd", period: "2022 - Present", description: "Leading the development of highly scalable ERP and LIMS systems. Architecting AWS cloud infrastructure and deploying real-time IoT monitoring solutions." },
    { role: "System & Network Engineer", company: "RR Construction Pvt Ltd", period: "2019 - 2022", description: "Managed enterprise networking, server deployments, and cloud migrations. Designed comprehensive infrastructure for large-scale construction projects." },
    { role: "IoT Developer", company: "IoT Synergy IT", period: "2017 - 2019", description: "Developed embedded firmware for ESP32 and Arduino, integrating sensors and building real-time dashboards for predictive maintenance." },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Line drawing effect
      gsap.fromTo(
        lineRef.current,
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // Reveal items
      const items = gsap.utils.toArray<HTMLElement>(".exp-item");
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen relative bg-[#f9f9f9] dark:bg-black transition-colors duration-500">
      <div className="mb-32">
        <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter text-black dark:text-white leading-[0.85] transition-colors duration-500">
          CAREER <br /> <span className="text-gray-300 dark:text-gray-800 transition-colors duration-500">TIMELINE</span>
        </h2>
      </div>

      <div className="relative pl-10 md:pl-0">
        {/* The glowing line container */}
        <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-black/5 dark:bg-white/5 transition-colors duration-500">
          <div ref={lineRef} className="w-full bg-[var(--brand-primary)] shadow-[0_0_20px_var(--brand-primary)]" />
        </div>

        <div className="flex flex-col gap-32">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`exp-item relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24 ${
                index % 2 === 0 ? "md:flex-row-reverse text-left" : "text-left md:text-right"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-35px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#f9f9f9] dark:bg-black border-2 border-[var(--brand-primary)] z-10 transition-colors duration-500" />

              <div className="md:w-1/2 flex flex-col">
                <span className="text-[var(--brand-primary)] font-bold tracking-[0.3em] uppercase text-xs mb-6">{exp.period}</span>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black dark:text-white mb-2 leading-none transition-colors duration-500">{exp.role}</h3>
                <h4 className="text-xl md:text-3xl font-bold text-gray-400 dark:text-gray-500 mb-8 uppercase tracking-tight transition-colors duration-500">{exp.company}</h4>
                <p className={`text-black/90 dark:text-white/90 font-light text-lg md:text-xl leading-[1.6] tracking-tight max-w-md transition-colors duration-500 ${index % 2 !== 0 ? "md:ml-auto" : ""}`}>
                  {exp.description}
                </p>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
