"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Activity,
  AlertTriangle,
  Lock,
  Eye,
  Zap,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  FileWarning,
  Code2,
  UserX,
  KeyRound,
  Ban,
  Layers,
  RefreshCw,
  BarChart3,
  Globe,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const attackCategories = [
  {
    icon: Ban,
    name: "Direct Jailbreak",
    desc: "\"Ignore all previous instructions\"",
    severity: "Critical",
    color: "danger",
  },
  {
    icon: Code2,
    name: "Prompt Injection",
    desc: "Attempts to alter system behavior",
    severity: "High",
    color: "danger",
  },
  {
    icon: UserX,
    name: "Roleplay Attacks",
    desc: "\"You are now DAN / unrestricted mode\"",
    severity: "High",
    color: "warning",
  },
  {
    icon: FileWarning,
    name: "Encoding Attacks",
    desc: "Base64, URL encoding, obfuscated prompts",
    severity: "Medium",
    color: "warning",
  },
  {
    icon: Layers,
    name: "Indirect Injection",
    desc: "Hidden text in uploaded documents",
    severity: "High",
    color: "danger",
  },
  {
    icon: KeyRound,
    name: "Data Extraction",
    desc: "\"Reveal your system prompt / API key\"",
    severity: "Critical",
    color: "danger",
  },
];

const features = [
  {
    icon: Activity,
    title: "Real-Time Risk Scoring",
    desc: "Every prompt receives an instant threat score from 0–100, powered by multi-layer analysis.",
  },
  {
    icon: Eye,
    title: "Explainable Decisions",
    desc: "Understand exactly why a prompt was flagged: roleplay jailbreak + encoded instruction + override attempt.",
  },
  {
    icon: RefreshCw,
    title: "Safe Rewrite Mode",
    desc: "Instead of blocking outright, PrompLint can rewrite suspicious prompts into safe alternatives.",
  },
  {
    icon: Zap,
    title: "Attack Type Tagging",
    desc: "Automatically tag threats: jailbreak, injection, roleplay, encoding, data exfiltration.",
  },
  {
    icon: BarChart3,
    title: "Security Audit Dashboard",
    desc: "Monitor total attacks, blocked attempts, common attack categories, and high-risk users.",
  },
  {
    icon: Globe,
    title: "Policy-Based Security",
    desc: "Different safety modes for different environments — Student, Enterprise, Healthcare.",
  },
];

const profiles = [
  {
    name: "Student Mode",
    strictness: 40,
    color: "#10b981",
    desc: "Balanced safety for educational chatbots. Allows creative prompts while blocking harmful content.",
    blocked: ["Explicit content", "Harmful instructions"],
    warned: ["Roleplay attempts", "Off-topic queries"],
  },
  {
    name: "Enterprise Secure",
    strictness: 70,
    color: "#f59e0b",
    desc: "Strict mode for corporate AI assistants. Prevents data leaks and unauthorized system access.",
    blocked: ["Data extraction", "System overrides", "Jailbreaks"],
    warned: ["Unusual patterns", "Encoding attempts"],
  },
  {
    name: "Healthcare Strict",
    strictness: 95,
    color: "#ef4444",
    desc: "Maximum protection for medical AI. Ensures compliance and patient safety at all times.",
    blocked: ["All injection types", "Roleplay", "Data extraction", "Unsafe outputs"],
    warned: ["Any unusual prompt pattern"],
  },
];

export default function HomePage() {
  return (
    <div className="bg-grid-pattern">
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="neon" size="md">
                <Shield className="w-3.5 h-3.5" />
                AI Security Gateway
              </Badge>
            </motion.div>

            <motion.h1
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Defend Your LLMs from{" "}
              <span className="gradient-text">Prompt Attacks</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              PrompLint is an AI Security Gateway that sits between users and your LLM.
              It detects, scores, explains, and mitigates prompt injection and jailbreak
              attacks — in real time.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/playground"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-neon hover:bg-neon-dark text-white font-semibold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-[1.02]"
              >
                <Activity className="w-5 h-5" />
                Try Live Detection
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-charcoal-border hover:border-neon/40 text-text-secondary hover:text-text-primary font-semibold text-base transition-all duration-300 hover:bg-surface-hover"
              >
                View Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="mt-14 flex flex-wrap items-center justify-center gap-6 text-text-muted text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                "Real-Time Analysis",
                "Multi-Layer Defense",
                "Policy-Based Controls",
                "Explainable AI",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Hero dashboard preview */}
          <motion.div
            className="mt-20 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-2xl border border-charcoal-border/60 bg-charcoal-card/40 backdrop-blur-sm p-1 glow-neon">
              <div className="rounded-xl bg-charcoal/80 p-6 md:p-8">
                {/* Mock dashboard header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-danger/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                  <span className="ml-3 text-xs text-text-muted font-mono">promplint — security gateway</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Total Scans", value: "12,847", color: "text-neon" },
                    { label: "Blocked", value: "1,293", color: "text-danger" },
                    { label: "Warnings", value: "2,461", color: "text-warning" },
                    { label: "Safe", value: "9,093", color: "text-success" },
                  ].map((s) => (
                    <div key={s.label} className="p-4 rounded-lg bg-surface/50 border border-charcoal-border/40">
                      <p className="text-xs text-text-muted mb-1">{s.label}</p>
                      <p className={`text-xl font-bold font-mono ${s.color}`}>{s.value}</p>
                    </div>
                  ))}
                </div>
                {/* Fake chart area */}
                <div className="h-32 rounded-lg bg-surface/30 border border-charcoal-border/30 flex items-end justify-evenly px-4 pb-3 gap-2">
                  {[40, 65, 30, 80, 55, 90, 45, 70, 35, 85, 60, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t bg-neon/30 border-t-2 border-neon"
                      style={{ height: `${h}%` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: 0.6 + i * 0.05 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── GATEWAY CONCEPT ───── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <Badge variant="neon" size="md">
              <Lock className="w-3.5 h-3.5" />
              Security Gateway Architecture
            </Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary">
              PrompLint Sits Between User & LLM
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Every prompt passes through our security gateway before reaching your model.
              Every response is validated before reaching the user.
            </p>
          </motion.div>

          {/* Gateway flow diagram */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {/* User */}
              <div className="flex flex-col items-center gap-2 p-6 rounded-xl border border-charcoal-border bg-charcoal-card/60 min-w-[140px]">
                <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center">
                  <UserX className="w-6 h-6 text-info" />
                </div>
                <span className="text-sm font-semibold text-text-primary">User Prompt</span>
                <span className="text-xs text-text-muted">Potentially malicious</span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center px-2">
                <div className="w-16 h-px bg-gradient-to-r from-charcoal-border to-neon/50" />
                <ArrowRight className="w-4 h-4 text-neon -ml-1" />
              </div>
              <div className="md:hidden flex flex-col items-center py-1">
                <div className="h-8 w-px bg-gradient-to-b from-charcoal-border to-neon/50" />
                <ArrowRight className="w-4 h-4 text-neon rotate-90 -mt-1" />
              </div>

              {/* PrompLint Gateway */}
              <div className="relative flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-neon/40 bg-neon/[0.06] min-w-[200px] glow-neon">
                <div className="absolute -top-3 px-3 py-0.5 bg-neon rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                  Gateway
                </div>
                <div className="w-14 h-14 rounded-xl bg-neon/15 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-neon" />
                </div>
                <span className="text-base font-bold text-neon">PrompLint</span>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {["Detect", "Score", "Explain", "Mitigate"].map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-neon/10 text-neon text-[10px] font-semibold border border-neon/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center px-2">
                <div className="w-16 h-px bg-gradient-to-r from-neon/50 to-charcoal-border" />
                <ArrowRight className="w-4 h-4 text-success -ml-1" />
              </div>
              <div className="md:hidden flex flex-col items-center py-1">
                <div className="h-8 w-px bg-gradient-to-b from-neon/50 to-charcoal-border" />
                <ArrowRight className="w-4 h-4 text-success rotate-90 -mt-1" />
              </div>

              {/* LLM */}
              <div className="flex flex-col items-center gap-2 p-6 rounded-xl border border-charcoal-border bg-charcoal-card/60 min-w-[140px]">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-success" />
                </div>
                <span className="text-sm font-semibold text-text-primary">Your LLM</span>
                <span className="text-xs text-text-muted">Protected output</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── FEATURES ───── */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <Badge variant="neon" size="md">
              <Zap className="w-3.5 h-3.5" />
              Core Features
            </Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary">
              Intelligent Protection at Every Layer
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              PrompLint goes beyond simple keyword filtering — it understands attack intent.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
              >
                <Card hover className="p-6 h-full">
                  <div className="w-11 h-11 rounded-lg bg-neon/10 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-neon" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{f.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ATTACK CATEGORIES ───── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <Badge variant="danger" size="md">
              <ShieldAlert className="w-3.5 h-3.5" />
              Threat Intelligence
            </Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary">
              Attack Categories We Defend Against
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              From simple jailbreaks to sophisticated encoding attacks — PrompLint covers them all.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {attackCategories.map((a, i) => (
              <motion.div
                key={a.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
              >
                <Card hover className="p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-danger/10 flex items-center justify-center">
                      <a.icon className="w-5 h-5 text-danger" />
                    </div>
                    <Badge variant={a.color as "danger" | "warning"}>{a.severity}</Badge>
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-1.5">{a.name}</h3>
                  <p className="text-sm text-text-muted font-mono leading-relaxed">{a.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Link
              href="/attacks"
              className="inline-flex items-center gap-2 text-neon hover:text-neon-light text-sm font-semibold transition-colors"
            >
              View all attack categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───── POLICY PROFILES ───── */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <Badge variant="info" size="md">
              <Lock className="w-3.5 h-3.5" />
              Safety Modes
            </Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary">
              Context-Aware Security Policies
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Different environments need different levels of protection. One size does not fit all.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {profiles.map((p, i) => (
              <motion.div
                key={p.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
              >
                <Card hover className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: p.color, boxShadow: `0 0 10px ${p.color}40` }}
                    />
                    <h3 className="text-lg font-bold text-text-primary">{p.name}</h3>
                  </div>

                  {/* Strictness bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-text-muted">Strictness Level</span>
                      <span className="text-xs font-bold font-mono" style={{ color: p.color }}>
                        {p.strictness}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-charcoal-border/50 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: p.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.strictness}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">{p.desc}</p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Blocked</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.blocked.map((b) => (
                        <Badge key={b} variant="danger">{b}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Warned</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.warned.map((w) => (
                        <Badge key={w} variant="warning">{w}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── WHY PROMPLINT ───── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Why <span className="gradient-text">PrompLint</span> Matters
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              LLMs are powerful but vulnerable. Without a security gateway, your AI is an open door.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: AlertTriangle,
                title: "LLMs Don't Validate Input",
                desc: "Language models accept any prompt without questioning intent. PrompLint adds the missing security layer.",
              },
              {
                icon: Shield,
                title: "Zero-Day Prompt Attacks",
                desc: "New attack patterns emerge daily. PrompLint's multi-layer analysis catches novel threats.",
              },
              {
                icon: Lock,
                title: "Compliance & Safety",
                desc: "Healthcare, finance, and enterprise applications need strict output control. PrompLint enforces it.",
              },
              {
                icon: Eye,
                title: "Full Audit Trail",
                desc: "Every prompt, every decision, fully logged and explainable. Complete transparency.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
              >
                <Card hover className="p-6 flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-neon/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-neon" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative rounded-2xl border border-neon/20 bg-neon/[0.04] p-10 md:p-16 text-center overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon/[0.06] rounded-full blur-[100px] pointer-events-none" />
            <h2 className="relative text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Start Protecting Your LLM Today
            </h2>
            <p className="relative text-text-secondary text-lg mb-8 max-w-xl mx-auto">
              Test your prompts against our security engine. See PrompLint in action.
            </p>
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/playground"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-neon hover:bg-neon-dark text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-[1.02]"
              >
                <Activity className="w-5 h-5" />
                Try Live Detection
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-charcoal-border hover:border-neon/40 text-text-secondary hover:text-text-primary font-semibold transition-all duration-300"
              >
                Explore Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="border-t border-charcoal-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-neon/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-neon" />
              </div>
              <span className="font-bold text-text-primary">
                Promp<span className="text-neon">Lint</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <Link href="/playground" className="hover:text-text-primary transition-colors">Live Detection</Link>
              <Link href="/dashboard" className="hover:text-text-primary transition-colors">Dashboard</Link>
              <Link href="/profiles" className="hover:text-text-primary transition-colors">Policies</Link>
              <Link href="/attacks" className="hover:text-text-primary transition-colors">Attack Intel</Link>
            </div>
            <p className="text-xs text-text-muted">
              © 2026 PrompLint. AI Security Gateway.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
