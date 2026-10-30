"use client";

import { motion } from "framer-motion";
import { 
  Clock, 
  DollarSign, 
  Users, 
  Target, 
  Shield, 
  Zap,
  BarChart3,
  ArrowUpRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive tasks and free up 20+ hours per week per employee for high-value work.",
    metric: "20h+/week",
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description: "Lower operational costs by up to 60% by replacing manual processes with AI automation.",
    metric: "60% less",
  },
  {
    icon: Users,
    title: "Scale Without Hiring",
    description: "Handle 10x more volume with the same team. AI agents work 24/7 without burnout.",
    metric: "10x capacity",
  },
  {
    icon: Target,
    title: "Improve Accuracy",
    description: "Eliminate human error in data entry, lead routing, and customer responses with AI precision.",
    metric: "99.9% accuracy",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant, end-to-end encryption, and granular access controls keep your data safe.",
    metric: "SOC 2 ready",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Get started in minutes, not months. Pre-built templates and no-code configuration.",
    metric: "Minutes",
  },
  {
    icon: BarChart3,
    title: "Real-time Insights",
    description: "Track automation performance, ROI, and bottlenecks with live dashboards and alerts.",
    metric: "Live metrics",
  },
  {
    icon: ArrowUpRight,
    title: "Faster Growth",
    description: "Focus on strategy and growth while AI handles operations. Companies grow 3x faster.",
    metric: "3x growth",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function Benefits() {
  return (
    <section className="py-24 sm:py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6"
            variants={itemVariants}
          >
            <ArrowUpRight className="w-4 h-4" />
            Why Choose NexaFlow AI
          </motion.span>
          <motion.h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6" variants={itemVariants}>
            Measurable impact for{" "}
            <span className="text-primary">growing businesses</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
            Real results from companies that have automated with NexaFlow AI.
            <strong className="text-foreground"> (Statistics shown are illustrative examples, not actual customer data.)</strong>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card variant="glass" hover padding="lg" className="h-full">
                <CardContent className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{benefit.description}</p>
                  <div className="pt-4 border-t border-border/50">
                    <span className="text-2xl font-bold gradient-text">{benefit.metric}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}