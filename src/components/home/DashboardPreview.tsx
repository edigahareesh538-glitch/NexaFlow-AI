"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  Zap, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Activity,
  TrendingUp,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const demoAgents = [
  { id: 1, name: "Support Bot", type: "Customer Support", status: "active" as StatusKey, tasks: 147, avatar: "🤖" },
  { id: 2, name: "Lead Qualifier", type: "Lead Management", status: "active" as StatusKey, tasks: 89, avatar: "🎯" },
  { id: 3, name: "Workflow Runner", type: "Automation", status: "active" as StatusKey, tasks: 234, avatar: "⚡" },
  { id: 4, name: "Data Parser", type: "Data Processing", status: "idle" as StatusKey, tasks: 56, avatar: "📄" },
  { id: 5, name: "Meeting Assistant", type: "Business Assistant", status: "active" as StatusKey, tasks: 34, avatar: "📅" },
];

const demoWorkflows = [
  { id: 1, name: "New Lead → CRM → Slack", runs: 1247, success: 99.2, status: "running" as StatusKey },
  { id: 2, name: "Support Ticket → Auto-Reply", runs: 3421, success: 97.8, status: "running" as StatusKey },
  { id: 3, name: "Invoice Processing", runs: 567, success: 95.4, status: "paused" as StatusKey },
  { id: 4, name: "Meeting Prep → Calendar", runs: 892, success: 98.1, status: "running" as StatusKey },
];

const demoActivity = [
  { id: 1, agent: "Support Bot", action: "Resolved ticket #4421", time: "2 min ago", type: "success" },
  { id: 2, agent: "Lead Qualifier", action: "Qualified lead from website", time: "5 min ago", type: "success" },
  { id: 3, agent: "Workflow Runner", action: "Executed: New Lead → CRM", time: "8 min ago", type: "success" },
  { id: 4, agent: "Data Parser", action: "Processed 12 invoices", time: "12 min ago", type: "success" },
  { id: 5, agent: "Meeting Assistant", action: "Scheduled 3 meetings", time: "15 min ago", type: "success" },
  { id: 6, agent: "Support Bot", action: "Escalated to human agent", time: "22 min ago", type: "warning" },
];

type StatusKey = "active" | "idle" | "paused" | "running";

interface StatusConfig {
  label: string;
  color: string;
  bg: string;
  dot: string;
}

const statusConfig: Record<StatusKey, StatusConfig> = {
  active: { label: "Active", color: "text-green-400", bg: "bg-green-400/20", dot: "bg-green-400" },
  idle: { label: "Idle", color: "text-yellow-400", bg: "bg-yellow-400/20", dot: "bg-yellow-400" },
  paused: { label: "Paused", color: "text-gray-400", bg: "bg-gray-400/20", dot: "bg-gray-400" },
  running: { label: "Running", color: "text-green-400", bg: "bg-green-400/20", dot: "bg-green-400" },
};

export function DashboardPreview() {
  return (
    <section className="py-24 sm:py-32 bg-card/30 relative border-y border-border">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>Live Dashboard Preview (Demo Data)</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            See NexaFlow AI{" "}
            <span className="text-primary">in action</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This is a simulated dashboard showing how your automation workspace would look.
            All data shown is <strong className="text-foreground">demo data</strong> for demonstration purposes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card variant="glass-strong" padding="lg" className="h-full">
              <CardHeader className="flex flex-row items-center justify-between mb-6">
                <CardTitle className="text-lg">AI Agents</CardTitle>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </CardHeader>
              <CardContent className="space-y-4">
                {demoAgents.map((agent) => (
                  <motion.div
                    key={agent.id}
                    className="flex items-center gap-4 p-3 rounded-xl bg-background/50 hover:bg-background transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * demoAgents.indexOf(agent) }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xl">
                      {agent.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground truncate">{agent.name}</div>
                      <div className="text-sm text-muted-foreground">{agent.type}</div>
                    </div>
                    <div className="text-right">
                      <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium", statusConfig[agent.status].bg, statusConfig[agent.status].color)}>
                        <span className={cn("w-1.5 h-1.5 rounded-full", statusConfig[agent.status].dot)} />
                        {statusConfig[agent.status].label}
                      </span>
                      <div className="text-xs text-muted-foreground mt-1">{agent.tasks} tasks today</div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="glass-strong" padding="lg" className="h-full">
              <CardHeader className="flex flex-row items-center justify-between mb-6">
                <CardTitle className="text-lg">Active Workflows</CardTitle>
                <Zap className="w-5 h-5 text-primary" />
              </CardHeader>
              <CardContent className="space-y-4">
                {demoWorkflows.map((workflow) => (
                  <motion.div
                    key={workflow.id}
                    className="p-3 rounded-xl bg-background/50 hover:bg-background transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * demoWorkflows.indexOf(workflow) }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-foreground truncate pr-4">{workflow.name}</div>
                      <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium", statusConfig[workflow.status].bg, statusConfig[workflow.status].color)}>
                        <span className={cn("w-1.5 h-1.5 rounded-full", statusConfig[workflow.status].dot)} />
                        {statusConfig[workflow.status].label}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {workflow.success}%
                      </span>
                      <span className="flex items-center gap-1">
                        <Activity className="w-3 h-3" />
                        {workflow.runs.toLocaleString()} runs
                      </span>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card variant="glass-strong" padding="lg" className="h-full">
              <CardHeader className="flex flex-row items-center justify-between mb-6">
                <CardTitle className="text-lg">Tasks Completed</CardTitle>
                <CheckCircle className="w-5 h-5 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Today</span>
                    <span className="text-2xl font-bold gradient-text">2,456</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">This Week</span>
                    <span className="text-2xl font-bold gradient-text">14,832</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">This Month</span>
                    <span className="text-2xl font-bold gradient-text">58,291</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Bot className="w-4 h-4" />
                        1,234 by AI
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        1,222 hybrid
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card variant="glass-strong" padding="lg">
            <CardHeader className="flex flex-row items-center justify-between mb-6">
              <CardTitle className="text-lg">Recent Activity</CardTitle>
              <Clock className="w-5 h-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-0">
                {demoActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    className={cn("flex items-center gap-4 p-3 rounded-xl hover:bg-background/50 transition-colors", index === demoActivity.length - 1 ? "border-b-0" : "border-b border-border/50")}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", 
                      activity.type === "success" ? "bg-green-400/20 text-green-400" : "bg-yellow-400/20 text-yellow-400"
                    )}>
                      {activity.type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium text-foreground">{activity.agent}</span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-muted-foreground">{activity.action}</span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            <strong className="text-foreground">Demo Notice:</strong> All data above is simulated for demonstration purposes.
            Actual AI agents are not currently operating. Connect your tools to see real automation in action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}