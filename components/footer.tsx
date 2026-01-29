import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            {/* Powered by */}
            <p className="text-sm text-muted-foreground">
              Powered by Axon Technology
            </p>

            {/* Logo */}
            <a href="#" className="flex items-center">
              <Image
                src="/images/axon-logo.png"
                alt="Axon"
                width={100}
                height={33}
                className="h-8 w-auto"
              />
            </a>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <a
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#values"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Why Axon
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2026 Axon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
