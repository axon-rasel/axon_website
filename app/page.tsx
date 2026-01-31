import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import { Values } from "@/components/values";
import { Philosophy } from "@/components/philosophy";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

// This section is optimized for users searching for meeting and task management solutions
export const metadata: Metadata = {
  title: "AxonTeck | Convert Meeting Notes into Actionable Tasks",
  description: "Stop getting lost in meeting records. AxonTeck streamlines team management by turning meeting action points into tracked tasks with automated reminders and performance dashboards.",
  keywords: [
    "meeting notes to tasks", 
    "team management dashboard", 
    "deadline tracking", 
    "productivity visibility", 
    "performance tracking", 
    "meeting action points",
    "project management all-in-one",
    "Action Item Tracker",
    "Automated Meeting Follow-up",
    "Team Accountability Software",
    "Meeting Minutes to Workflow",
    "Deadline Escalation System",
    "Real-time Performance Metrics",
    "Centralized Task Hub",
    "Task Reminder Automation",
    "Productivity Blind Spots"
  ],
  openGraph: {
    title: "AxonTeck | All-in-One Meeting & Task Management",
    description: "From meeting invitations to performance ratings—manage your entire team's productivity in one place.",
    url: "https://axonteck.com",
    siteName: "AxonTeck",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "AxonTeck Management Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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