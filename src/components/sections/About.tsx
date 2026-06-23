"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Split text reveal for huge headline
      gsap.fromTo(
        ".split-line",
        { y: 150, opacity: 0, rotateZ: 5 },
        {
          y: 0,
          opacity: 1,
          rotateZ: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Image reveal
      gsap.fromTo(
        ".about-image-mask",
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Years Experience", value: "08+" },
    { label: "Projects", value: "50+" },
    { label: "Clients", value: "100+" },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-32 md:py-48 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col justify-center border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div 
          className="lg:col-span-6 relative w-full h-[70vh] md:h-[100vh] about-image-mask mix-blend-multiply dark:mix-blend-normal"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)",
            maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)"
          }}
        >
          <Image 
            src="/profile.png" 
            alt="Rashitha Nalaranga" 
            fill 
            className="object-cover object-top hover:scale-105 transition-transform duration-700" 
            priority
            quality={100}
            unoptimized={true}
          />
        </div>

        {/* Content Side */}
        <div className="lg:col-span-6 flex flex-col gap-16 lg:pl-12">
          
          <div className="flex flex-col">
            <h2 ref={textRef} className="text-5xl md:text-[6vw] leading-[0.9] font-black uppercase tracking-tighter text-black dark:text-white transition-colors duration-500">
              <div className="overflow-hidden pb-2 md:pb-4"><div className="split-line">BUILDING</div></div>
              <div className="overflow-hidden pb-2 md:pb-4"><div className="split-line text-[var(--brand-primary)]">DIGITAL</div></div>
              <div className="overflow-hidden pb-2 md:pb-4"><div className="split-line">SYSTEMS</div></div>
              <div className="overflow-hidden pb-2 md:pb-4"><div className="split-line">THAT SCALE.</div></div>
            </h2>
          </div>

          <div className="flex flex-col gap-8 text-black/90 dark:text-white/90 font-light text-lg md:text-xl leading-[1.6] tracking-tight transition-colors duration-500">
            <div className="overflow-hidden">
              <p className="split-line">
                With over 8 years in the tech industry, my focus is crafting robust, scalable solutions ranging from high-performance web applications to complex, enterprise-level IoT infrastructure. 
              </p>
            </div>
            <div className="overflow-hidden">
              <p className="split-line">
                I thrive on bridging the gap between physical hardware sensors and highly intelligent cloud-based analytics platforms. Precision, scalability, and relentless innovation.
              </p>
            </div>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 border-t border-black/10 dark:border-white/10 pt-12 transition-colors duration-500">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-black text-black dark:text-white transition-colors duration-500">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-primary)]">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
