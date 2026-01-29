"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave layers */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[60%] animate-wave"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="oklch(0.55 0.15 195 / 0.08)"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,165.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[50%] animate-wave-slow"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="oklch(0.65 0.12 165 / 0.06)"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[40%] animate-wave-fast"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="oklch(0.75 0.1 145 / 0.05)"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Logo top left */}
      <div className="absolute top-6 left-6 z-20">
        <a href="#">
          <Image
            src="/images/axon-logo.png"
            alt="Axon"
            width={140}
            height={47}
            className="h-12 w-auto"
          />
        </a>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance animate-slide-up">
          {"Your brain's shortcut".split("").map((char, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                animationDelay: `${i * 0.02}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <br />
          <span className="text-accent">to success</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in text-pretty"
          style={{ animationDelay: "0.5s" }}
        >
          Turn messy meetings and vague emails into real progress instantly
        </p>

        {/* CTA button */}
        <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg group"
          >
            Request Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Tagline */}
        <p className="mt-16 text-muted-foreground animate-fade-in text-base" style={{ animationDelay: "0.9s" }}>
          Stop managing tasks. Start mastering time.{" "}
          <span className="text-accent font-medium">Reclaim your day with Axon.</span>
        </p>
      </div>
    </section>
  );
}
