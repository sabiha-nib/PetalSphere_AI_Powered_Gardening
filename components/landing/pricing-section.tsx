"use client";

import { useEffect, useRef, useState } from "react";
import { Droplets, Sprout, Globe, Utensils } from "lucide-react";

const reasons = [
  {
    icon: Droplets,
    title: "Saves Water",
    description: "AI-optimized irrigation reduces water usage by up to 40% while maintaining optimal plant health through precise moisture management.",
    stat: "40%",
    statLabel: "less water",
  },
  {
    icon: Sprout,
    title: "Improves Agriculture",
    description: "Smart farming techniques powered by machine learning increase crop yields, reduce waste, and enable year-round growing in controlled environments.",
    stat: "25%",
    statLabel: "higher yields",
  },
  {
    icon: Globe,
    title: "Supports Sustainability",
    description: "Reduced resource consumption, minimized chemical usage, and optimized energy use contribute to more environmentally responsible food production.",
    stat: "60%",
    statLabel: "less chemicals",
  },
  {
    icon: Utensils,
    title: "Helps Food Systems",
    description: "Scalable AI gardening solutions can transform local and global food production, making fresh produce more accessible and reducing supply chain dependencies.",
    stat: "3x",
    statLabel: "local produce",
  },
];

export function PricingSection() {
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
    <section id="pricing" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
              <span className="w-12 h-px bg-foreground/30" />
              Why It Matters
            </span>
            <h2 className={`text-6xl md:text-7xl lg:text-[100px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Growing a
              <br />
              <span className="text-muted-foreground">better future.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 relative p-0 h-80 lg:h-auto">
            <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
              <img
                src="/images/whale.png"
                alt="Organic form"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Impact cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group p-8 border border-foreground/10 hover:border-foreground/30 bg-foreground/[0.02] transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-foreground/20 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300 mb-6">
                <reason.icon className="w-6 h-6" />
              </div>

              {/* Stat */}
              <div className="mb-4">
                <span className="text-4xl font-display text-[#eca8d6]">{reason.stat}</span>
                <span className="block text-sm text-muted-foreground font-mono mt-1">{reason.statLabel}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Fun fact callout */}
        <div className={`mt-16 p-8 lg:p-12 border border-[#eca8d6]/30 bg-[#eca8d6]/5 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
            <div className="shrink-0">
              <span className="text-sm font-mono text-[#eca8d6] uppercase tracking-widest">Research Insight</span>
            </div>
            <p className="text-xl lg:text-2xl font-display text-foreground/90 leading-relaxed">
              AI irrigation systems can reduce water waste by up to 40% compared to traditional timer-based methods, 
              while simultaneously improving plant health and crop yields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
