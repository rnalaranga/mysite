"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-line",
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-32 md:py-48 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col justify-center border-t border-black/5 dark:border-white/5 bg-[#f2f2f2] dark:bg-black text-black dark:text-white transition-colors duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Massive Headline */}
        <div className="flex flex-col justify-between">
          <h2 className="text-6xl md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter text-black dark:text-white transition-colors duration-500">
            <div className="overflow-hidden pb-4"><div className="contact-line">LET'S</div></div>
            <div className="overflow-hidden pb-4"><div className="contact-line">BUILD</div></div>
            <div className="overflow-hidden pb-4"><div className="contact-line text-[var(--brand-primary)]">SOMETHING</div></div>
            <div className="overflow-hidden pb-4"><div className="contact-line">GREAT.</div></div>
          </h2>

          <div className="mt-24 contact-line">
            <p className="text-sm tracking-[0.3em] font-bold uppercase text-[var(--brand-primary)] mb-4">Direct Contact</p>
            <a href="mailto:hello@rashithanalaranga.com" className="text-2xl md:text-4xl font-bold tracking-tight hover:text-[var(--brand-primary)] transition-colors duration-300">
              hello@rashithanalaranga.com
            </a>
            
            <div className="mt-12 flex gap-8">
              <a href="#" className="text-lg font-bold uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-500">LinkedIn</a>
              <a href="#" className="text-lg font-bold uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-500">Twitter</a>
              <a href="#" className="text-lg font-bold uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-500">Github</a>
            </div>
          </div>
        </div>

        {/* Minimal Form */}
        <div className="flex flex-col justify-center contact-line">
          <form className="flex flex-col gap-12 w-full max-w-xl ml-auto">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="01. What's your name?" 
                className="w-full bg-transparent border-b-[3px] border-black/10 dark:border-white/10 pb-4 text-xl md:text-3xl font-bold focus:outline-none focus:border-[var(--brand-primary)] transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-700 text-black dark:text-white"
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="02. What's your email?" 
                className="w-full bg-transparent border-b-[3px] border-black/10 dark:border-white/10 pb-4 text-xl md:text-3xl font-bold focus:outline-none focus:border-[var(--brand-primary)] transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-700 text-black dark:text-white"
              />
            </div>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="03. Tell me about your project." 
                className="w-full bg-transparent border-b-[3px] border-black/10 dark:border-white/10 pb-4 text-xl md:text-3xl font-bold focus:outline-none focus:border-[var(--brand-primary)] transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-700 text-black dark:text-white"
              />
            </div>
            <div className="relative group">
              <textarea 
                rows={3}
                placeholder="04. Any additional details?" 
                className="w-full bg-transparent border-b-[3px] border-black/10 dark:border-white/10 pb-4 text-xl md:text-3xl font-bold focus:outline-none focus:border-[var(--brand-primary)] transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-700 text-black dark:text-white resize-none"
              />
            </div>
            <button 
              type="submit" 
              className="mt-8 bg-[var(--brand-primary)] text-white font-black uppercase tracking-widest text-lg md:text-2xl py-6 md:py-8 rounded-none hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-500 w-full"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
