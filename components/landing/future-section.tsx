"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

const futures = [
  {
    title: "Autonomous Ecological Monitoring",
    description:
      "Networks of distributed sensors spanning entire landscapes, continuously mapping the health of ecosystems at scales impossible for human observation alone. Forest canopies monitored for early disease detection, wetlands tracked for biodiversity indicators, agricultural regions assessed for soil degradation patterns.",
  },
  {
    title: "Predictive Environmental Modeling",
    description:
      "Machine learning systems trained on decades of climate data, projecting future growing conditions and recommending adaptive strategies. Species selection guided by predicted temperature ranges, irrigation infrastructure designed for anticipated precipitation patterns, cultivation practices evolved in anticipation of changing seasons.",
  },
  {
    title: "Integrated Biological Networks",
    description:
      "Gardens that communicate with each other, sharing data about pest outbreaks, successful cultivation techniques, and optimal timing for seasonal activities. Collective intelligence emerging from distributed observation, with insights flowing across geographic and cultural boundaries.",
  },
];

export function FutureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-48 overflow-hidden bg-black">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#eca8d6]/5 blur-[100px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#eca8d6]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatGentle ${8 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <span
            className={`inline-flex items-center gap-4 text-sm font-mono text-white/40 mb-8 justify-center transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-white/20" />
            Future Implications
            <span className="w-12 h-px bg-white/20" />
          </span>

          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[1.1] text-white mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Toward a deeper
            <br />
            <span className="text-[#eca8d6]">understanding.</span>
          </h2>

          <p
            className={`text-xl text-white/60 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            The technologies explored in this investigation point toward possibilities 
            that extend far beyond the boundaries of individual gardens, into the realm 
            of planetary-scale ecological intelligence.
          </p>
        </div>

        {/* Future cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {futures.map((item, index) => (
            <div
              key={item.title}
              className={`p-8 lg:p-10 border border-white/10 hover:border-white/20 bg-white/[0.02] transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <h3 className="text-xl font-display text-white mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Closing reflection */}
        <div
          className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-display italic max-w-3xl mx-auto mb-4">
            The future of cultivation is not separate from technology.
          </p>

          <p className="text-2xl md:text-3xl text-white/50 leading-relaxed font-display italic max-w-3xl mx-auto mb-16">
            It grows alongside it, in patterns we are only beginning to perceive.
          </p>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToTop}
            className="h-14 px-8 text-base rounded-full border-white/20 text-white hover:bg-white/10"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Return to Beginning
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatGentle {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(8px); }
          66% { transform: translateY(10px) translateX(-5px); }
        }
      `}</style>
    </section>
  );
}
