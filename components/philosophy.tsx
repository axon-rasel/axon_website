"use client";

import { useRef, useEffect, useState } from "react";
import { Heart } from "lucide-react";

export function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.18_0.05_145_/_0.15)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-8">
            <Heart className="w-8 h-8 text-accent" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Work Matters. <br />
            <span className="text-accent">Your Time Matters More.</span>
          </h2>

          {/* Philosophy text */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              In the world of productivity software, everyone is chasing the "Apple Standard"—cold glass, white rooms, and sterile perfection. But at Axon, we believe that work isn't a laboratory; it's a living, breathing experience.
            </p>

            <div
              className={`p-6 border border-border transition-all duration-700 delay-300 bg-border opacity-100 leading-3 font-thin px-1.5 py-3 rounded-xl ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <p className="text-foreground italic leading-7 text-3xl font-semibold">
                "Built with logic. Driven by a heartbeat."
              </p>
            </div>

            <p className="text-pretty">
              We'll be the first to say it: We don't strive for the kind of perfection that feels untouchable. Robots are perfect, but robots don't know the pressure of a deadline or the thrill of a team breakthrough.
            </p>

            <p className="text-foreground font-medium text-pretty">
              Instead, we strive for <span className="text-accent">Functional Harmony</span>. We built Axon to be near-perfect in its logic, but deeply human in its soul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
