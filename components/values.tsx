"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const values = [
  {
    image: "/images/ownership-3d.jpg",
    title: "Ownership, Instantly",
    question: "Tired of repeating yourself because no one took notes?",
    answer:
      "With Axon, assign every action point to employees live, ensuring total ownership before the meeting even ends.",
  },
  {
    image: "/images/vault-3d.jpg",
    title: "Vault Your Insights",
    question: "Meeting records will never get lost again.",
    answer:
      "Every agenda, note, and task is logged into a permanent history, keeping your team's collective brain perfectly organized.",
  },
  {
    image: "/images/time-3d.jpg",
    title: "We Value Your Time",
    question: "Transform your workflow into a living, breathing asset.",
    answer:
      "Navigate projects with intuitive ease, update progress in real-time, and generate insightful reports effortlessly. Your team's potential, amplified. Your projects, under perfect control.",
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

  const isReversed = index % 2 === 1;

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-16`}
      >
        {/* Image */}
        <div className="flex-1 w-full">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-accent/10">
            <Image
              src={value.image || "/placeholder.svg"}
              alt={value.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 w-full">
          
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{value.title}</h3>
          <p className="text-xl text-muted-foreground mb-4">{value.question}</p>
          <p className="text-foreground/80 leading-relaxed text-lg">{value.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Values() {
  return (
    <section id="values" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full border border-accent/30 text-accent text-sm font-medium mb-4">
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Built for how <span className="text-accent">you work</span>
          </h2>
        </div>

        {/* Values list */}
        <div className="space-y-24">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
