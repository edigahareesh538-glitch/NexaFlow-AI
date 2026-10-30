"use client";

import { motion } from "framer-motion";
import { 
  Plug, 
  Settings, 
  FileText, 
  Eye, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect Your Tools",
    description: "Integrate with your existing stack in minutes. Connect CRM, email, Slack, calendars, and 50+ other tools with one-click authentication.",
    details: ["OAuth & API key support", "Real-time sync", "Custom webhooks", "Sandbox environments"],
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure Your AI Agent",
    description: "Define your agent's personality, capabilities, and boundaries. Choose from templates or build custom logic with our visual editor.",
    details: ["Prompt engineering UI", "Tool permissions", "Escalation rules", "Tone & style settings"],
  },
  {
    number: "03",
    icon: FileText,
    title: "Define Tasks & Permissions",
    description: "Specify exactly what your agents can do. Set up triggers, conditions, and approval workflows for sensitive actions.",
    details: ["Trigger-based automation", "Conditional logic", "Human-in-the-loop", "Audit trails"],
  },
  {
    number: "04",
    icon: Eye,
    title: "Review & Approve",
    description: "Maintain control with approval queues for important actions. Review AI decisions before they execute in production.",
    details: ["Approval workflows", "Real-time notifications", "Decision history", "Rollback capability"],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Monitor Results",
    description: "Track performance with real-time dashboards. Measure ROI, identify bottlenecks, and optimize continuously.",
    details: ["Live metrics", "ROI tracking", "A/B testing", "Predictive analytics"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-card/30 relative border-y border-border">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      
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
            <ArrowRight className="w-4 h-4" />
            How It Works
          </motion.span>
          <motion.h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6" variants={itemVariants}>
            From setup to scale in{" "}
            <span className="text-primary">5 simple steps</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
            No complex implementation. No coding required. Start automating in minutes.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card variant="glass" hover padding="lg" className="h-full relative">
                <div className="absolute -top-3 -right-3 text-6xl font-bold text-primary/5 font-mono">{step.number}</div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2" role="list">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary/70 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button variant="gradient" size="lg" className="group">
            Start Your First Automation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}