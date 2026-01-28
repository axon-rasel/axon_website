"use client";

import { useRef, useEffect, useState } from "react";
import { UserCheck, Archive, Clock } from "lucide-react";

const values = [
  {
    icon: UserCheck,
    title: "Ownership, Instantly",
    question: "Tired of repeating yourself because no one took notes?",
    answer: "With Axon, assign every action point to employees live, ensuring total ownership before the meeting even ends.",
  },
  {
    icon: Archive,
    title: "Vault Your Insights",
    question: "Meeting records will never get lost again.",
    answer: "Every agenda, note, and task is logged into a permanent history, keeping your team's collective brain perfectly organized.",
  },
  {
    icon: Clock,
    title: "We Value Your Time",
    question: "Transform your workflow into a living, breathing asset.",
    answer: "Navigate projects with intuitive ease, update progress in real-time, and generate insightful reports effortlessly. Your team's potential, amplified. Your projects, under perfect control.",
  },
];

function ValueCard({ value, index }: { value: (typeof values)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = value.icon;

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : index % 2 === 0 ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12 p-8 rounded-3xl bg-card border border-border hover:border-accent/30 transition-colors duration-300">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Icon className="w-8 h-8 text-accent" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
          <p className="text-lg text-muted-foreground mb-4">{value.question}</p>
          <p className="text-foreground/80 leading-relaxed">{value.answer}</p>
        </div>

        {/* Number indicator */}
        <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-border text-muted-foreground font-mono text-sm">
          0{index + 1}
        </div>
      </div>
    </div>
  );
}

export function Values() {
  return (
    <section id="values" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-accent/30 text-accent text-sm font-medium mb-4">
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Built for how <span className="text-accent">you work</span>
          </h2>
        </div>

        {/* Values list */}
        <div className="space-y-6">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
