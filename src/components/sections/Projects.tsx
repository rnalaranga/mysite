"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    { title: "Hospital Management", type: "ERP System", bgClass: "bg-white dark:bg-[#000000]" },
    { title: "LIMS Platform", type: "Lab Automation", bgClass: "bg-gray-100 dark:bg-[#151045]" },
    { title: "Loan Management", type: "Financial System", bgClass: "bg-[#f2f2f2] dark:bg-[#111111]" },
    { title: "Vehicle Management", type: "Fleet Tracking", bgClass: "bg-gray-100 dark:bg-[#151045]" },
    { title: "Face Detection", type: "AI Attendance", bgClass: "bg-white dark:bg-[#000000]" },
    { title: "IoT Dashboard", type: "Real-time Analytics", bgClass: "bg-[#f2f2f2] dark:bg-[#111111]" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray<HTMLElement>(".project-panel");

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });

      // Parallax text inside each panel
      gsap.fromTo(
        panel.querySelector(".project-text"),
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative w-full bg-black">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className={`project-panel h-screen w-full flex flex-col justify-center items-center relative overflow-hidden transition-colors duration-500 ${project.bgClass}`}
          style={{ zIndex: index }}
        >
          {/* Large Background Numbers */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <span className="text-[50vw] font-black leading-none tracking-tighter text-black dark:text-white transition-colors duration-500">
              0{index + 1}
            </span>
          </div>

          <div className="project-text relative z-10 flex flex-col items-center text-center px-4 w-full">
            <h3 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-black dark:text-white transition-colors duration-500">
              {project.title}
            </h3>
            <p className="mt-8 text-xs md:text-lg font-bold tracking-[0.5em] md:tracking-[1em] uppercase text-black/50 dark:text-white/50 transition-colors duration-500">
              {project.type}
            </p>
            
            <div className="mt-16">
              <button className="group relative px-10 py-5 border border-black/20 dark:border-white/20 rounded-full overflow-hidden hover:border-black dark:hover:border-white transition-colors duration-500">
                <div className="absolute inset-0 w-full h-full bg-black dark:bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                <span className="relative z-10 text-black dark:text-white group-hover:text-white dark:group-hover:text-black font-bold uppercase tracking-widest text-xs transition-colors duration-500">
                  View Project
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
