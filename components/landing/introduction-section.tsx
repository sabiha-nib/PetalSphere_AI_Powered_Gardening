"use client";

import { useEffect, useRef, useState } from "react";

export function IntroductionSection() {
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
        <div className="mb-16">
          <span
            className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-foreground/20" />
            An Inquiry
          </span>

          <h2
            className={`text-5xl md:text-6xl lg:text-[80px] font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Where observation
            <br />
            <span className="text-muted-foreground">meets intelligence.</span>
          </h2>
        </div>

        {/* Main content - Scientific prose */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div
              className={`space-y-8 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed font-display">
                For millennia, the cultivation of plants has relied upon the accumulated wisdom of generations, 
                passed from hand to hand through observation, intuition, and the slow accumulation of seasonal knowledge. 
                A gardener learns to read the subtle language of leaves, the weight of soil between fingers, 
                the shifting patterns of light across a day.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Yet there exists a fundamental limitation in human perception. We observe in fragments, 
                sample moments from a continuous stream of biological activity. The plant does not pause 
                its metabolism while we sleep, does not halt its chemical signaling while we attend to other matters. 
                Life proceeds in an unbroken continuum, indifferent to the constraints of human attention.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                What emerges when we extend the capacity for observation beyond these biological limits? 
                When sensors maintain vigilance through every hour, when algorithms process data faster than 
                neurons can fire, when patterns invisible to the eye become legible to mathematical analysis? 
                This is not a replacement for the gardener&apos;s art, but an extension of it into territories 
                previously inaccessible to human perception.
              </p>
            </div>
          </div>

          {/* Side content - Key concept */}
          <div className="lg:col-span-5">
            <div
              className={`p-8 lg:p-10 border border-foreground/10 bg-foreground/[0.02] transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6 block">
                Central Question
              </span>
              <p className="text-2xl lg:text-3xl font-display leading-snug text-foreground/90">
                How does artificial intelligence transform our relationship with the living systems we cultivate?
              </p>
              <div className="mt-8 pt-8 border-t border-foreground/10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This exploration examines the intersection of computational systems and botanical science, 
                  investigating how machine learning, sensor networks, and predictive modeling create 
                  new possibilities for understanding and interacting with plant ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
