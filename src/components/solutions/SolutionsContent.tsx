"use client";

import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Target, 
  Zap, 
  FileText, 
  Bot,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const solutions = [
  {
    id: "customer-support",
    icon: MessageSquare,
    title: "AI Customer Support Agents",
    description: "Deploy intelligent chat agents that resolve up to 80% of customer inquiries instantly, 24/7, without human operators on duty.",
    longDescription: "Our AI customer support agents use advanced LLMs to understand context, access knowledge bases, and provide accurate, personalized responses. They seamlessly escalate complex issues to human agents with full conversation context.",
    benefits: [
      "Instant 24/7 responses",
      "Multi-language support",
      "Automatic escalation to humans",
      "Continuous learning from interactions",
      "Integration with helpdesk tools",
      "Customizable tone & personality",
    ],
    useCases: [
      "E-commerce order support",
      "SaaS technical support",
      "Appointment scheduling",
      "FAQ automation",
    ],
  },
  {
    id: "lead-management",
    icon: Target,
    title: "Lead Management Automation",
    description: "Automatically capture, qualify, score, and route leads from multiple sources to the right sales reps in real-time.",
    longDescription: "Never let a lead fall through the cracks. Our AI agents monitor all inbound channels, enrich lead data, score based on fit and intent, and route to the optimal sales representative with personalized outreach suggestions.",
    benefits: [
      "Auto-qualification & scoring",
      "Smart routing rules",
      "CRM auto-sync",
      "Lead enrichment",
      "Real-time notifications",
      "Duplicate detection",
    ],
    useCases: [
      "Website form captures",
      "Inbound email parsing",
      "Event lead processing",
      "Social media inquiries",
    ],
  },
  {
    id: "workflow-automation",
    icon: Zap,
    title: "Business Workflow Automation",
    description: "Design complex multi-step workflows visually. Connect apps, set conditions, and let AI handle the execution logic.",
    longDescription: "Build sophisticated automations without code. Our visual workflow builder lets you connect 50+ apps, set conditional logic, handle errors gracefully, and execute parallel branches. AI agents can make decisions within workflows based on context.",
    benefits: [
      "Visual drag-and-drop builder",
      "Conditional branching",
      "Parallel execution",
      "Error handling & retries",
      "AI decision nodes",
      "Version control",
    ],
    useCases: [
      "Order processing",
      "Employee onboarding",
      "Invoice approval",
      "Content publishing",
    ],
  },
  {
    id: "data-processing",
    icon: FileText,
    title: "AI-Powered Data Processing",
    description: "Extract, classify, and transform unstructured data from documents, emails, and messages using LLMs.",
    longDescription: "Turn unstructured data into structured insights. Our AI agents can parse PDFs, emails, chat logs, and documents to extract key information, classify content, validate data, and populate your systems automatically.",
    benefits: [
      "Document parsing (PDF, DOCX)",
      "Email & attachment processing",
      "Data extraction & validation",
      "Classification & tagging",
      "Schema mapping",
      "Confidence scoring",
    ],
    useCases: [
      "Invoice processing",
      "Contract analysis",
      "Resume screening",
      "Survey analysis",
    ],
  },
  {
    id: "business-assistants",
    icon: Bot,
    title: "Intelligent Business Assistants",
    description: "Personal AI assistants that understand your business context, schedule meetings, draft emails, and prepare reports.",
    longDescription: "Give every team member an AI assistant that knows your business. These assistants can access your tools, understand context, draft communications, prepare meeting agendas, summarize conversations, and proactively suggest actions.",
    benefits: [
      "Business context awareness",
      "Calendar management",
      "Email & message drafting",
      "Meeting preparation",
      "Report generation",
      "Proactive suggestions",
    ],
    useCases: [
      "Executive assistance",
      "Sales meeting prep",
      "Project status updates",
      "Team coordination",
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function SolutionsHero() {
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
            <Bot className="w-4 h-4" />
            AI-Powered Solutions
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Solutions for{" "}
            <span className="gradient-text">every business need</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From customer support to data processing, our AI agents handle the work
            so your team can focus on growth. Each solution is customizable, secure,
            and ready to deploy in minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function SolutionsGrid() {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <motion.article
              key={solution.id}
              id={solution.id}
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <Card variant="glass-strong" hover padding="lg" className="h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Benefits</h4>
                    <ul className="space-y-2" role="list">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary/70 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Common Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <Link
                      href={`/contact?solution=${solution.id}`}
                      className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Button variant="ghost" size="sm" className="group">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
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

export function SolutionsCTA() {
  return (
    <section className="py-24 bg-card/30 border-y border-border relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Ready to automate your{" "}
            <span className="text-primary">business processes</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Choose a solution above or let us help you build a custom automation workflow
            tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="gradient" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                See How It Works
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}