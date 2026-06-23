"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Monitor } from "lucide-react";

export default function Websites() {
  const sectionRef = useRef<HTMLElement>(null);

  const sites = [
    { name: "Hyatt Photography", url: "https://hyattphotography.au", displayUrl: "hyattphotography.au" },
    { name: "TD Handyman", url: "https://tdhandyman.au", displayUrl: "tdhandyman.au" },
    { name: "TOL.lk", url: "https://tol.lk", displayUrl: "tol.lk" },
    { name: "A4 Tours", url: "https://a4tours.net", displayUrl: "a4tours.net" },
    { name: "KHK Auto Parts", url: "https://khkautoparts.com", displayUrl: "khkautoparts.com" },
    { name: "Your Next Project", url: "#contact", isCTA: true },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".website-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
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
    <section ref={sectionRef} className="relative z-20 py-32 md:py-48 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-[#f2f2f2] dark:bg-black border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="mb-24 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-[8vw] font-black uppercase tracking-tighter text-black dark:text-white leading-[0.85] transition-colors duration-500">
          WEB <span className="text-[var(--brand-primary)]">DEVELOPMENT</span>
        </h2>
        <p className="mt-8 text-black/50 dark:text-white/50 font-bold tracking-[0.5em] uppercase text-sm transition-colors duration-500">
          Selected Digital Experiences
        </p>
      </div>

      {/* 3x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {sites.map((site, index) => (
          <div 
            key={index} 
            className={`website-card group relative flex flex-col rounded-xl overflow-hidden border ${site.isCTA ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)]/10' : 'border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a]'} transition-colors duration-500 hover:border-black/30 dark:hover:border-white/30 shadow-2xl`}
          >
            {/* Mac OS Window Header */}
            <div className="h-10 border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center px-4 justify-between shrink-0 transition-colors duration-500">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="text-[10px] font-mono text-black/50 dark:text-white/50 tracking-widest truncate max-w-[200px] bg-black/5 dark:bg-black/30 px-3 py-1 rounded-md transition-colors duration-500">
                {site.displayUrl}
              </div>
            </div>

            {/* Content Body */}
            <div className="relative h-[250px] md:h-[320px] w-full flex flex-col justify-center items-center overflow-hidden">
              {site.isCTA ? (
                <div className="flex flex-col items-center text-center gap-6 p-6">
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-black dark:text-white transition-colors duration-500">Let's Build It</h3>
                  <a href={site.url} className="px-8 py-4 bg-[var(--brand-primary)] text-white font-bold uppercase tracking-widest text-xs hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors">
                    Start Project
                  </a>
                </div>
              ) : (
                <>
                  {/* Iframe Preview */}
                  <div className="absolute inset-0 w-[400%] h-[400%] origin-top-left scale-[0.25] opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none grayscale group-hover:grayscale-0 bg-[#111111] z-0 flex items-center justify-center">
                    <iframe 
                      src={site.url} 
                      className="w-full h-full border-none bg-white"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                      tabIndex={-1}
                    />
                  </div>
                  
                  {/* Overlay Title */}
                  <div className="absolute inset-0 bg-white/90 dark:bg-black/70 group-hover:bg-white/40 dark:group-hover:bg-black/30 transition-colors duration-500 flex flex-col justify-center items-center p-6 z-10 pointer-events-none">
                    <Monitor className="w-12 h-12 text-black/20 dark:text-white/20 mb-6 group-hover:opacity-0 transition-all duration-500" />
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black dark:text-white text-center drop-shadow-2xl transition-colors duration-500">
                      {site.name}
                    </h3>
                  </div>

                  {/* Visit Button */}
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20 hover:scale-110 hover:bg-[var(--brand-primary)] dark:hover:bg-[var(--brand-primary)] hover:text-white dark:hover:text-white shadow-xl"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
