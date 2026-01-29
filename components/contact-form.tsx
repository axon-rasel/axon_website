"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Prepare data for Web3Forms
    const submissionData = {
      ...formData,
      access_key: "3cc1ca3b-4883-4072-8bd3-75de7829d22e", // PASTE YOUR KEY FROM WEB3FORMS HERE
      from_name: "Axon Technology Website",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Web3Forms Honeypot (Anti-Spam) */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-primary text-primary-foreground py-6 text-lg"
          >
            {status === "loading" ? "Sending..." : (
              <span className="flex items-center">
                Send Message <Send className="ml-2 w-5 h-5" />
              </span>
            )}
          </Button>

          {status === "success" && (
            <div className="flex items-center gap-2 justify-center text-green-500">
              <CheckCircle className="w-5 h-5" />
              <span>Message sent! We'll email you soon.</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 justify-center text-red-500">
              <AlertCircle className="w-5 h-5" />
              <span>Failed to send. Please try again later.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
