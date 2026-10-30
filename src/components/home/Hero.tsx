"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "./HeroBackground";

const stats = [
  { value: "10x", label: "Faster Workflows" },
  { value: "90%", label: "Tasks Automated" },
  { value: "24/7", label: "AI Availability" },
  { value: "50+", label: "Integrations" },
];

const trustBadges = [
  { icon: Shield, text: "Enterprise Security" },
  { icon: Zap, text: "Real-time Processing" },
  { icon: Users, text: "Team Collaboration" },
  { icon: CheckCircle, text: "99.9% Uptime" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">New: AI Agents for Business Automation</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="block">Automate Smarter.</span>
            <span className="block gradient-text">Grow Faster.</span>
          </h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            NexaFlow AI helps small and medium businesses automate repetitive tasks,
            manage customer interactions, organize leads, and boost productivity using
            cutting-edge LLMs and intelligent AI agents.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link href="/contact">
              <Button variant="gradient" size="xl" className="group w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Explore Solutions
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {trustBadges.map((badge, index) => (
              <motion.span
                key={badge.text}
                className="flex items-center gap-2 group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              >
                <badge.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                {badge.text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg className="w-6 h-6 text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}