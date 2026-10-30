"use client";

import { motion } from "framer-motion";
import { 
  Plug, 
  Settings, 
  FileText, 
  Eye, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Zap,
  Shield,
  Users,
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect Your Business Tools",
    description: "Integrate with your existing stack in minutes. Connect CRM, email, Slack, calendars, and 50+ other tools with one-click authentication.",
    details: [
      "One-click OAuth for major platforms",
      "API key support for custom integrations",
      "Real-time bidirectional sync",
      "Custom webhook endpoints",
      "Sandbox environments for testing",
      "Data mapping & transformation",
    ],
    technical: [
      "REST & GraphQL API support",
      "OAuth 2.0 / OIDC compliant",
      "Rate limiting & retry logic",
      "Webhook signature verification",
    ],
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure Your AI Agent",
    description: "Define your agent's personality, capabilities, and boundaries. Choose from templates or build custom logic with our visual editor.",
    details: [
      "Pre-built agent templates",
      "Visual prompt engineering UI",
      "Tool & permission management",
      "Escalation rule builder",
      "Tone & style configuration",
      "Multi-language support",
    ],
    technical: [
      "System prompt versioning",
      "Function calling configuration",
      "Token usage optimization",
      "Response streaming support",
    ],
  },
  {
    number: "03",
    icon: FileText,
    title: "Define Tasks & Permissions",
    description: "Specify exactly what your agents can do. Set up triggers, conditions, and approval workflows for sensitive actions.",
    details: [
      "Event-based triggers",
      "Conditional logic (if/then/else)",
      "Human-in-the-loop approvals",
      "Audit trail logging",
      "Rollback capabilities",
      "Scheduled & recurring tasks",
    ],
    technical: [
      "Workflow DSL (YAML/JSON)",
      "Parallel & sequential execution",
      "Error handling strategies",
      "Idempotency guarantees",
    ],
  },
  {
    number: "04",
    icon: Eye,
    title: "Review & Approve Important Actions",
    description: "Maintain control with approval queues for important actions. Review AI decisions before they execute in production.",
    details: [
      "Real-time approval notifications",
      "Mobile-responsive approval UI",
      "Batch approval actions",
      "Decision history & rationale",
      "One-click rollback",
      "Slack & email notifications",
    ],
    technical: [
      "Webhook-based notifications",
      "Signed approval tokens",
      "Audit log immutability",
      "Compliance reporting",
    ],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Monitor Automation Results",
    description: "Track performance with real-time dashboards. Measure ROI, identify bottlenecks, and optimize continuously.",
    details: [
      "Live execution monitoring",
      "ROI & cost tracking",
      "Bottleneck detection",
      "A/B testing framework",
      "Predictive analytics",
      "Custom report builder",
    ],
    technical: [
      "Real-time metrics streaming",
      "Data warehouse integration",
      "Alerting & anomaly detection",
      "API for custom dashboards",
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function HowItWorksHero() {
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
            <Zap className="w-4 h-4" />
            5 Steps to Automation
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            From setup to scale in{" "}
            <span className="gradient-text">5 simple steps</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No complex implementation. No coding required. Start automating in minutes,
            not months. Our guided setup gets you running fast.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function HowItWorksSteps() {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step) => (
            <motion.article
              key={step.number}
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <Card variant="glass-strong" hover padding="lg" className="h-full relative">
                <div className="absolute -top-4 -right-4 text-7xl font-bold text-primary/5 font-mono">{step.number}</div>
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{step.title}</CardTitle>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-primary" />
                      What you can do
                    </h4>
                    <ul className="space-y-2" role="list">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary/70 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      Technical details
                    </h4>
                    <ul className="space-y-1" role="list">
                      {step.technical.map((detail) => (
                        <li key={detail} className="text-xs text-muted-foreground/80 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksFeatures() {
  const features = [
    { icon: Zap, title: "Deploy in Minutes", desc: "Pre-built templates and one-click integrations get you running fast." },
    { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant, end-to-end encryption, and granular access controls." },
    { icon: Users, title: "Team Collaboration", desc: "Multi-user workspaces with role-based permissions and audit logs." },
    { icon: Clock, title: "24/7 Operation", desc: "AI agents work around the clock without fatigue or downtime." },
  ];

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
            Built for{" "}
            <span className="text-primary">modern teams</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to run reliable, scalable automations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" hover padding="lg" className="h-full text-center">
                <CardContent className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksCTA() {
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-sm font-medium text-primary mb-6">
            <ArrowRight className="w-4 h-4" />
            Start Automating Today
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Your first automation is{" "}
            <span className="gradient-text">minutes away</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of businesses using AI to automate workflows, delight customers, and scale faster.
            Free 14-day trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="gradient" size="xl" className="group w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}