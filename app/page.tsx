import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import { Values } from "@/components/values";
import { Philosophy } from "@/components/philosophy";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Benefits />
      <Values />
      <Philosophy />
      <ContactForm />
      <Footer />
    </main>
  );
}
