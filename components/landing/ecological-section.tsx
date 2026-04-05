"use client";

import { useEffect, useRef, useState } from "react";

const interactions = [
  {
    title: "Adaptive Irrigation",
    description:
      "Water delivery systems guided by soil moisture sensors and evapotranspiration models adjust flow rates in response to real-time plant demand. Rather than operating on fixed schedules, these systems respond to the actual hydrological state of the root zone, matching water availability to plant uptake capacity. The result is precise hydration that respects both plant physiology and resource conservation.",
    insight: "Water is delivered when needed, not when scheduled.",
  },
  {
    title: "Growth Pattern Analysis",
    description:
      "Computer vision systems track morphological changes over time: the rate of leaf expansion, the angle of stem growth, the progression of flowering stages. These measurements reveal growth trajectories that indicate whether conditions support optimal development or suggest emerging stress. Subtle changes in leaf color, invisible to casual observation, become quantifiable indicators of physiological state.",
    insight: "Growth tells a story visible only in aggregate.",
  },
  {
    title: "Resource Optimization",
    description:
      "Machine learning models correlate input variables with output metrics, identifying the relationships between environmental conditions and plant performance. This analysis reveals opportunities to reduce resource consumption while maintaining or improving yields. Energy, water, and nutrients flow to where they are most effectively utilized, guided by continuous feedback loops.",
    insight: "Efficiency emerges from understanding relationships.",
  },
];

export function EcologicalSection() {
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
            Ecological Interaction
          </span>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <h2
              className={`text-5xl md:text-6xl lg:text-[80px] font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Working with
              <br />
              <span className="text-muted-foreground">natural systems.</span>
            </h2>

            <div
              className={`self-end transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Artificial intelligence in gardening operates not as a controlling force imposing 
                external order, but as an interpretive layer that enhances responsiveness to 
                the inherent dynamics of biological systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The distinction is significant: control implies dominance over nature, 
                while interaction suggests partnership with it.
              </p>
            </div>
          </div>
        </div>

        {/* Interaction cards */}
        <div className="space-y-6">
          {interactions.map((item, index) => (
            <div
              key={item.title}
              className={`group grid lg:grid-cols-12 gap-6 lg:gap-12 p-8 lg:p-12 border border-foreground/10 hover:border-foreground/20 bg-background transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-display mb-4">{item.title}</h3>
                <p className="text-sm text-[#eca8d6] font-mono italic">{item.insight}</p>
              </div>

              {/* Description */}
              <div className="lg:col-span-8">
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In each case, the artificial system responds to signals generated by the natural system, 
            creating a feedback loop where machine intelligence serves plant biology rather than 
            overriding it. This is cultivation enhanced, not replaced.
          </p>
        </div>
      </div>
    </section>
  );
}
