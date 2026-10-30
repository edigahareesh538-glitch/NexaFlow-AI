"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  BarChart3,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

const features = [
  {
    icon: Bot,
    title: "AI Customer Support Agents",
    description: "Deploy intelligent chat agents that resolve 80% of customer inquiries instantly, 24/7, without human operators on duty.",
    benefits: ["Instant responses", "Multi-language support", "Escalation to humans", "Learning from interactions"],
  },
  {
    icon: Zap,
    title: "Lead Management Automation",
    description: "Automatically capture, qualify, score, and route leads from multiple sources to the right sales reps in real-time.",
    benefits: ["Auto-qualification", "Smart routing", "CRM sync", "Lead scoring"],
  },
  {
    icon: Brain,
    title: "Business Workflow Automation",
    description: "Design complex multi-step workflows visually. Connect apps, set conditions, and let AI handle the execution logic.",
    benefits: ["Visual builder", "Conditional logic", "Parallel execution", "Error handling"],
  },
  {
    icon: Shield,
    title: "AI-Powered Data Processing",
    description: "Extract, classify, and transform unstructured data from documents, emails, and messages using LLMs.",
    benefits: ["Document parsing", "Data extraction", "Classification", "Validation"],
  },
  {
    icon: Users,
    title: "Intelligent Business Assistants",
    description: "Personal AI assistants that understand your business context, schedule meetings, draft emails, and prepare reports.",
    benefits: ["Context awareness", "Calendar management", "Email drafting", "Report generation"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Real-time dashboards showing automation performance, ROI metrics, and actionable optimization recommendations.",
    benefits: ["Real-time metrics", "ROI tracking", "Bottleneck detection", "Predictive insights"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-background relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" aria-hidden="true" />
      
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
            <Sparkles className="w-4 h-4" />
            Key Capabilities
          </motion.span>
          <motion.h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6" variants={itemVariants}>
            Everything you need to{" "}
            <span className="text-primary">automate your business</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
            Powerful AI-driven features designed to eliminate manual work, reduce errors,
            and scale your operations without scaling your headcount.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card variant="glass" hover padding="lg" className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3" role="list">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-3 h-3 text-primary" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}