"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, Scale, Users } from "lucide-react";

const reflections = [
  {
    icon: Brain,
    title: "Intelligence in Natural Systems",
    description:
      "Plants exhibit sophisticated information processing: roots grow toward water through chemotropism, leaves orient toward light through phototropism, and chemical signals coordinate responses across the entire organism. Is this intelligence? The question reveals the assumptions embedded in our definitions. Artificial systems process information differently, but the boundary between calculation and cognition remains philosophically contested.",
  },
  {
    icon: Scale,
    title: "Observation and Intervention",
    description:
      "Every measurement affects the system being measured, and every intervention carries consequences beyond its immediate target. The decision to automate irrigation removes certain choices from human deliberation while creating others. Where does beneficial assistance end and unwarranted interference begin? These boundaries require ongoing negotiation between human values and technological capabilities.",
  },
  {
    icon: Users,
    title: "The Human Role",
    description:
      "As machines assume tasks previously requiring human attention, what remains for the cultivator? Perhaps the role evolves from labor to stewardship, from execution to intention-setting. The gardener becomes the one who decides what should be optimized, what values should guide the system, and what outcomes matter beyond mere efficiency. Technology serves; humans direct.",
  },
];

export function EthicalSection() {
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
    <section ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <span
            className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 justify-center transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-foreground/20" />
            Philosophical Reflection
            <span className="w-12 h-px bg-foreground/20" />
          </span>

          <h2
            className={`text-5xl md:text-6xl lg:text-[80px] font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Questions of
            <br />
            <span className="text-muted-foreground">meaning and method.</span>
          </h2>

          <p
            className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            The integration of artificial intelligence into living systems raises questions 
            that extend beyond technical implementation into the realm of values, 
            meaning, and the nature of our relationship with the natural world.
          </p>
        </div>

        {/* Reflection cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {reflections.map((item, index) => (
            <div
              key={item.title}
              className={`group p-8 lg:p-10 border border-foreground/10 hover:border-foreground/20 bg-foreground/[0.02] transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-foreground/20 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300 mb-8">
                <item.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-display mb-4">{item.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom reflection */}
        <div
          className={`mt-16 p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.02] text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-2xl lg:text-3xl font-display text-foreground/90 leading-relaxed max-w-4xl mx-auto">
            &ldquo;The question is not whether machines can think, but whether humans 
            will remain thoughtful in how we deploy them.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
