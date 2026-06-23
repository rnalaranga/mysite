"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO at TechCorp",
    content: "Rashitha delivered an outstanding ERP system that completely transformed our operations. His understanding of complex business logic is unmatched.",
  },
  {
    name: "Jane Smith",
    role: "Director of Healthcare SaaS",
    content: "The LIMS platform built by Rashitha exceeded all our expectations regarding compliance, speed, and user experience.",
  },
  {
    name: "Michael Chen",
    role: "IoT Hardware Lead",
    content: "Bridging our sensor arrays to a real-time AWS cloud dashboard was seamless thanks to his deep expertise in both firmware and full-stack development.",
  },
  {
    name: "Sarah Williams",
    role: "Operations Manager",
    content: "The custom Face Detection Attendance system completely automated our HR workflow. Exceptional quality and delivery time.",
  },
];

export default function Testimonials() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clone elements to create an infinite loop
      if (marqueeRef.current) {
        const items = Array.from(marqueeRef.current.children);
        items.forEach((item) => {
          const clone = item.cloneNode(true);
          marqueeRef.current?.appendChild(clone);
        });

        gsap.to(marqueeRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 30,
          repeat: -1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 w-full bg-[#020202] overflow-hidden border-t border-white/5 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[var(--brand-primary)]/5 blur-[120px] pointer-events-none rounded-[100%]" />

      <div className="mb-20 text-center px-4 relative z-10">
        <h2 className="text-sm tracking-[0.3em] text-[var(--brand-primary)] uppercase font-semibold mb-4">
          Client Feedback
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          What They Say
        </h3>
      </div>

      <div className="relative w-full flex overflow-hidden z-10">
        {/* Gradient masks for smooth fading edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none" />

        <div ref={marqueeRef} className="flex gap-8 px-4 whitespace-nowrap">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[450px] p-8 glass rounded-3xl flex-shrink-0 flex flex-col justify-between whitespace-normal hover:bg-white/5 transition-colors duration-300 border border-white/10"
            >
              <div>
                <Quote className="w-10 h-10 text-[var(--brand-primary)] opacity-80 mb-6" />
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)]/20 flex items-center justify-center text-xl font-bold text-[var(--brand-primary)]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-wide">{testimonial.name}</h4>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

