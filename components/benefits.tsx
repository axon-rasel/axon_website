"use client";

import { useRef, useEffect, useState } from "react";
import { Clock, Zap, TrendingUp, Award, Eye, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Catch Every Deadline",
    description: "Deadlines kill? We catch them with smart reminders and instant updates. Add every task knowing your focus is protected.",
    highlight: "Stay Visible, Stay Ahead",
  },
  {
    icon: Zap,
    title: "Instant Task Magic",
    description: "Add tasks in seconds—manually or straight from meetings. Notes stay right under each one, no hunting required.",
    highlight: null,
  },
  {
    icon: TrendingUp,
    title: "Progress That Shows",
    description: "Update % complete with one click, mark done, and watch it glow. Everyone sees real-time status—no more guessing.",
    highlight: null,
  },
  {
    icon: Award,
    title: "Rewards That Motivate",
    description: "Earn badges for on-time wins. Consistent completion unlocks recognition and keeps the team fired up.",
    highlight: null,
  },
  {
    icon: Eye,
    title: "Every Mission Under Control",
    description: "Managers get a bird's-eye view: full logs, live progress, and proactive alerts before anything slips.",
    highlight: "Total Control, Zero Surprises",
  },
  {
    icon: Users,
    title: "Meet Smarter",
    description: "Axon Technology turns chaotic meetings and vague emails into clear, actionable progress—live, seamless, and stress-free.",
    highlight: null,
  },
];

function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = benefit.icon;

  return (
    <div
      ref={cardRef}
      className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-accent" />
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>

        {benefit.highlight && (
          <p className="mt-4 text-sm font-medium text-accent">{benefit.highlight}</p>
        )}
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export function Benefits() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything you need to <span className="text-accent">master time</span>
          </h2>
          
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-24 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <p className="text-sm text-muted-foreground text-center">
            Command Your Team's Success Like a Pro
          </p>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  );
}
