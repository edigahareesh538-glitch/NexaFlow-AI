"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight,
  MessageSquare,
  Link2,
  GitBranch
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "./ContactForm";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "General: hello@nexafow.ai",
      "Sales: sales@nexafow.ai",
      "Support: support@nexafow.ai",
    ],
    action: { label: "Send Email", href: "mailto:hello@nexafow.ai" },
  },
  {
    icon: MapPin,
    title: "Location",
    details: [
      "San Francisco, CA",
      "Remote-first team",
      "Global customers",
    ],
    action: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Mon-Fri: 9am-6pm PST",
      "24/7 for enterprise",
      "Average response: <4 hours",
    ],
    action: null,
  },
];

const socialLinks = [
  { name: "X", href: "#", icon: MessageSquare },
  { name: "LinkedIn", href: "#", icon: Link2 },
  { name: "GitHub", href: "#", icon: GitBranch },
];

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6">
            <ArrowRight className="w-4 h-4" />
            Get in Touch
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Let&apos;s start a{" "}
            <span className="gradient-text">conversation</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our AI automation platform? Want to see a demo?
            Our team is here to help you find the right solution for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function ContactInfo() {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="glass" hover padding="lg" className="h-full">
                <CardContent className="h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <ul className="space-y-2 text-muted-foreground mb-6 flex-1">
                    {item.details.map((detail) => (
                      <li key={detail} className="text-sm">{detail}</li>
                    ))}
                  </ul>
                  {item.action && (
                    <Button variant="ghost" size="sm" className="w-full justify-start group">
                      {item.action.label}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ContactFormSection() {
  return (
    <section className="py-24 bg-card/30 border-y border-border relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="glass-strong" padding="lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Send us a{" "}
                <span className="text-primary">message</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <ContactForm />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Prefer to chat{" "}
            <span className="text-primary">directly?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect with us on social media or schedule a call with our solutions team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-12 h-12 rounded-xl glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
          <Button variant="outline" size="lg" className="group">
            Schedule a Demo Call
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}