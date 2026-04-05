"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, BarChart3, Lightbulb } from "lucide-react";

const comparisons = [
  {
    icon: Eye,
    title: "Human Observation",
    description:
      "The human observer brings contextual understanding and intuitive pattern recognition developed through experience. We perceive the garden holistically, integrating aesthetic judgment with biological assessment. Yet our observation is necessarily intermittent, limited to conscious attention, and filtered through cognitive biases that favor certain signals over others.",
    characteristics: ["Intermittent sampling", "Contextual understanding", "Intuitive pattern recognition", "Aesthetic integration"],
  },
  {
    icon: BarChart3,
    title: "Data-Driven Observation",
    description:
      "Sensor networks provide continuous, quantified measurement across multiple environmental parameters simultaneously. Data streams capture fluctuations invisible to human perception: the subtle temperature gradient between soil layers, the hourly variation in leaf moisture content, the cumulative light energy received over precise intervals.",
    characteristics: ["Continuous monitoring", "Quantified measurement", "Multi-parameter correlation", "Historical comparison"],
  },
  {
    icon: Lightbulb,
    title: "The Synthesis",
    description:
      "Neither approach alone captures the full complexity of a living system. The integration of human wisdom with computational analysis creates a new mode of understanding, where data informs intuition and experience guides interpretation. This synthesis represents not the replacement of traditional knowledge but its augmentation.",
    characteristics: ["Complementary strengths", "Enhanced interpretation", "Accelerated learning", "Deeper understanding"],
  },
];

export function ObservationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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
    <section id="observation" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span
            className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-foreground/20" />
            Epistemology
          </span>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <h2
              className={`text-5xl md:text-6xl lg:text-[80px] font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Perception
              <br />
              <span className="text-muted-foreground">versus analysis.</span>
            </h2>

            <p
              className={`text-xl text-muted-foreground leading-relaxed self-end transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              There exists a fundamental distinction between perceiving and understanding, 
              between the immediate apprehension of sensory data and the deeper comprehension 
              of underlying patterns and causal relationships.
            </p>
          </div>
        </div>

        {/* Comparison cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {comparisons.map((item, index) => (
            <div
              key={item.title}
              className={`group p-8 lg:p-10 border transition-all duration-500 cursor-default ${
                activeCard === index
                  ? "border-foreground/30 bg-foreground/[0.04]"
                  : "border-foreground/10 hover:border-foreground/20 bg-foreground/[0.02]"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center border mb-8 transition-all duration-300 ${
                  activeCard === index
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/20"
                }`}
              >
                <item.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display mb-4">{item.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">{item.description}</p>

              {/* Characteristics */}
              <div className="space-y-2 pt-6 border-t border-foreground/10">
                {item.characteristics.map((char) => (
                  <div key={char} className="flex items-center gap-3 text-sm">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        activeCard === index ? "bg-[#eca8d6]" : "bg-foreground/20"
                      }`}
                    />
                    <span className="text-muted-foreground">{char}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
