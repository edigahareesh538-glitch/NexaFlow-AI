"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Lightbulb, 
  Rocket, 
  Shield, 
  Users, 
  Brain,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const values = [
  {
    icon: Target,
    title: "Customer Obsession",
    description: "Every feature we build starts with a real customer problem. We measure success by the time and money our customers save.",
  },
  {
    icon: Lightbulb,
    title: "Pragmatic Innovation",
    description: "We use cutting-edge AI where it adds value, not for marketing. Our focus is reliable, practical automation that works today.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your data is your competitive advantage. We never use it to train our models, and we protect it with enterprise-grade security.",
  },
  {
    icon: Users,
    title: "Human-Centered AI",
    description: "AI should amplify human potential, not replace it. We design for human-in-the-loop workflows where judgment matters most.",
  },
];

const approach = [
  {
    title: "Start with the Problem",
    description: "We don't lead with technology. We lead with understanding your workflows, pain points, and goals. Then we apply the right AI tools.",
  },
  {
    title: "Human-in-the-Loop by Default",
    description: "Critical decisions stay with humans. Our agents handle execution, escalation, and preparation—but you approve what matters.",
  },
  {
    title: "Transparency & Control",
    description: "Every AI action is logged, explainable, and reversible. You always know what happened, why, and can intervene instantly.",
  },
  {
    title: "Continuous Improvement",
    description: "Our agents learn from feedback and outcomes. Performance improves over time without manual retraining.",
  },
];

const roadmap = [
  {
    phase: "Current",
    items: [
      "AI Customer Support Agents",
      "Lead Management Automation",
      "Visual Workflow Builder",
      "Document Processing",
      "50+ Integrations",
    ],
  },
  {
    phase: "Q2 2025",
    items: [
      "Multi-agent Orchestration",
      "Custom Model Fine-tuning",
      "Advanced Analytics Dashboard",
      "Voice AI Agents",
      "SOC 2 Type II Certification",
    ],
  },
  {
    phase: "Q4 2025",
    items: [
      "Autonomous Workflow Discovery",
      "Cross-platform Agent Memory",
      "Natural Language Workflow Creation",
      "Industry-specific Templates",
      "On-premise Deployment Option",
    ],
  },
  {
    phase: "2026+",
    items: [
      "Self-improving Agent Networks",
      "Predictive Business Optimization",
      "AI-powered Decision Support",
      "Global Compliance Automation",
      "Agent Marketplace",
    ],
  },
];

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6">
            <Brain className="w-4 h-4" />
            About NexaFlow AI
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Building the future of{" "}
            <span className="gradient-text">work automation</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We&apos;re a team of engineers and product builders who believe AI should handle
            the busywork so humans can focus on what matters: creativity, strategy, and relationships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function MissionVision() {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To democratize access to enterprise-grade AI automation for small and medium-sized businesses.
              We believe every company—regardless of size or technical resources—should be able to automate
              repetitive work, delight customers, and scale efficiently.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By combining the power of large language models with intuitive no-code tools, we&apos;re making
              sophisticated automation accessible to the 99% of businesses that have been left behind
              by complex, expensive enterprise platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A world where AI agents seamlessly handle operational complexity behind the scenes,
              freeing humans to focus on creative, strategic, and relationship-driven work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision every business having a team of specialized AI agents that understand
              their unique context, learn continuously, and collaborate with human teams to drive
              growth—without requiring a data science degree to set up.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" hover padding="lg" className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function OurApproach() {
  return (
    <section className="py-24 bg-card/30 border-y border-border relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Our approach to{" "}
            <span className="text-primary">AI automation</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe the best AI systems are invisible—they just work, reliably and transparently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approach.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="glass-strong" hover padding="lg" className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Roadmap() {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Product{" "}
            <span className="text-primary">roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We&apos;re building in public. Here&apos;s where we&apos;re headed&mdash;subject to change based on your feedback.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-4 font-semibold text-foreground">Phase</th>
                <th className="pb-4 font-semibold text-foreground">Planned Features</th>
              </tr>
            </thead>
            <tbody>
              {roadmap.map((phase, index) => (
                <motion.tr
                  key={phase.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-border/50"
                >
                  <td className="py-6 font-semibold text-foreground whitespace-nowrap">
                    {phase.phase}
                  </td>
                  <td className="py-6">
                    <ul className="flex flex-wrap gap-2" role="list">
                      {phase.items.map((item) => (
                        <li key={item} className="px-3 py-1 text-sm font-medium bg-muted rounded-full text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function AboutCTA() {
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Want to build the future{" "}
            <span className="gradient-text">with us?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We&apos;re always looking for talented engineers, designers, and product thinkers who share our vision.
            Check out our open roles or reach out to start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="gradient" size="xl" className="group w-full sm:w-auto">
                View Open Roles
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}