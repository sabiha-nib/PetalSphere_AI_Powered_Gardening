"use client";

import { useEffect, useRef, useState } from "react";
import { Cpu, Eye, Cloud, TrendingUp } from "lucide-react";

const scienceTopics = [
  {
    icon: Cpu,
    title: "Soil Moisture Sensors",
    description: "Capacitive sensors measure volumetric water content in real-time, enabling precise irrigation scheduling based on actual plant needs rather than estimates.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Convolutional neural networks analyze leaf patterns to detect early signs of disease, nutrient deficiencies, and pest damage before visible symptoms appear.",
  },
  {
    icon: TrendingUp,
    title: "Machine Learning Models",
    description: "Regression and classification algorithms predict optimal harvest times, growth trajectories, and resource requirements based on historical and environmental data.",
  },
  {
    icon: Cloud,
    title: "Environmental Data Systems",
    description: "IoT sensor networks collect microclimate data including temperature, humidity, light intensity, and CO2 levels for comprehensive ecosystem monitoring.",
  },
];

export function ScienceSection() {
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
        <div className="mb-20">
          <span
            className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-foreground/20" />
            The Science
          </span>

          <h2
            className={`text-6xl md:text-7xl lg:text-[100px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Behind
            <br />
            <span className="text-muted-foreground">the magic.</span>
          </h2>

          <p
            className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Understanding the technology that enables gardens to sense, adapt, and thrive autonomously.
          </p>
        </div>

        {/* Science cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {scienceTopics.map((topic, index) => (
            <div
              key={topic.title}
              className={`group p-8 lg:p-10 border border-foreground/10 hover:border-foreground/30 bg-foreground/[0.02] transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-foreground/20 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <topic.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display mb-3">{topic.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
