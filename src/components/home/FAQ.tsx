"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const faqs = [
  {
    question: "What is NexaFlow AI?",
    answer: "NexaFlow AI is an AI-powered business automation platform designed for small and medium-sized businesses. It uses large language models (LLMs) and AI agents to automate repetitive tasks, manage customer interactions, organize leads, and improve overall productivity.",
  },
  {
    question: "Do I need technical skills to use NexaFlow AI?",
    answer: "No. NexaFlow AI is built with a no-code/low-code approach. You can set up integrations, configure AI agents, and design workflows using our visual interface without writing code. Technical users can also access APIs and webhooks for advanced customization.",
  },
  {
    question: "Which tools does NexaFlow AI integrate with?",
    answer: "NexaFlow AI integrates with 50+ popular business tools including Salesforce, HubSpot, Slack, Microsoft Teams, Gmail, Outlook, Google Calendar, Notion, Airtable, Zapier, and many more. Custom integrations are also supported via webhooks and APIs.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We take security seriously. NexaFlow AI is SOC 2 compliant, uses end-to-end encryption for data in transit and at rest, and provides granular access controls. Your data is never used to train our models. We also offer on-premise deployment options for enterprise customers.",
  },
  {
    question: "How does the AI agent configuration work?",
    answer: "You can configure AI agents through our visual prompt engineering interface. Define the agent's role, capabilities, tone, escalation rules, and tool permissions. You can also set up approval workflows for sensitive actions, ensuring human oversight where needed.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer tiered support: Community support for free tier, email support for pro plans, and dedicated Slack channels with 24/7 response times for enterprise customers. All plans include access to our documentation, video tutorials, and community forum.",
  },
  {
    question: "Can I try NexaFlow AI before committing?",
    answer: "Absolutely. We offer a 14-day free trial with full access to all features. No credit card is required to start. You can explore the platform, set up automations, and see real results before deciding to subscribe.",
  },
  {
    question: "How does pricing work?",
    answer: "Our pricing is based on the number of active AI agents and workflow executions. We offer a free tier for individuals, pro plans for growing teams, and custom enterprise pricing. Contact our sales team for a personalized quote based on your needs.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-background relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Everything you need to{" "}
            <span className="text-primary">know</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Can&apos;t find your answer? <a href="/contact" className="text-primary hover:underline font-medium">Contact our team</a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card variant="glass" className="overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-medium text-foreground pr-4">{faq.question}</span>
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="px-6 pb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}