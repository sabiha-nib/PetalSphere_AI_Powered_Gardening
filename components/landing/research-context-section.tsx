"use client";

import { useEffect, useRef, useState } from "react";

const contexts = [
  {
    number: "01",
    title: "The Natural Process",
    description:
      "Gardening, at its essence, is an act of collaboration with biological processes that operate according to their own internal logic. Plants convert light into chemical energy through photosynthesis, draw water and minerals through vascular systems, and respond to environmental stimuli through hormone-mediated signaling cascades. These processes unfold continuously, governed by genetic programming refined over millions of years of evolution.",
  },
  {
    number: "02",
    title: "Environmental Dependencies",
    description:
      "Every plant exists within a web of environmental relationships. Soil chemistry determines nutrient availability; ambient temperature influences enzymatic reaction rates; light spectrum and intensity drive photosynthetic efficiency; humidity affects transpiration and water stress. These variables interact in complex, non-linear ways, creating conditions that can shift from optimal to damaging within hours.",
  },
  {
    number: "03",
    title: "Traditional Observation",
    description:
      "For centuries, gardeners have relied on direct sensory observation: the color of leaves indicating nitrogen status, the feel of soil suggesting moisture content, the appearance of wilting signaling water stress. This knowledge, accumulated through experience, represents a form of pattern recognition honed across generations, yet limited by the sampling frequency of human attention.",
  },
];

export function ResearchContextSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden bg-foreground/[0.02]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span
            className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-foreground/20" />
            Research Context
          </span>

          <h2
            className={`text-5xl md:text-6xl lg:text-[80px] font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Understanding
            <br />
            <span className="text-muted-foreground">the baseline.</span>
          </h2>
        </div>

        {/* Context cards */}
        <div className="space-y-6">
          {contexts.map((context, index) => (
            <div
              key={context.number}
              className={`group grid lg:grid-cols-12 gap-6 lg:gap-12 p-8 lg:p-12 border border-foreground/10 hover:border-foreground/20 bg-background transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <span className="text-4xl font-display text-foreground/20 group-hover:text-[#eca8d6] transition-colors duration-300">
                  {context.number}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-display">{context.title}</h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-8">
                <p className="text-muted-foreground leading-relaxed">{context.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom insight */}
        <div
          className={`mt-16 p-8 lg:p-12 border border-[#eca8d6]/30 bg-[#eca8d6]/5 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl lg:text-2xl font-display text-foreground/90 leading-relaxed">
            The introduction of artificial intelligence into this ancient practice does not displace traditional knowledge, 
            but rather extends the temporal and spatial resolution of observation, creating new categories of insight 
            previously unavailable to human cognition alone.
          </p>
        </div>
      </div>
    </section>
  );
}
