"use client";

import Link from "next/link";
import { Brain, MessageSquare, Link2, GitBranch, Mail, ArrowRight } from "lucide-react";

const footerLinks = {
  product: [
    { name: "AI Customer Support", href: "/solutions#customer-support" },
    { name: "Lead Management", href: "/solutions#lead-management" },
    { name: "Workflow Automation", href: "/solutions#workflow-automation" },
    { name: "Data Processing", href: "/solutions#data-processing" },
    { name: "Business Assistants", href: "/solutions#business-assistants" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "Status", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Security", href: "#" },
  ],
};

const socialLinks = [
  { name: "X", href: "#", icon: MessageSquare },
  { name: "LinkedIn", href: "#", icon: Link2 },
  { name: "GitHub", href: "#", icon: GitBranch },
  { name: "Email", href: "#", icon: Mail },
];

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6" aria-label="NexaFlow AI Home">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">NexaFlow<span className="text-primary">AI</span></span>
            </Link>
            <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-xs">
              AI-powered business automation platform helping SMBs automate repetitive tasks,
              manage customer interactions, and improve productivity using LLMs and AI agents.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} NexaFlow AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for the future of work. <span className="text-primary font-medium">Not a real product demo.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}