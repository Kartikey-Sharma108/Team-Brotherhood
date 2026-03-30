"use client";

import { motion } from "framer-motion";
import {
  Shield,
  GraduationCap,
  Building2,
  HeartPulse,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lock,
  Eye,
  Zap,
  Info,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

interface PolicyProfile {
  name: string;
  icon: React.ElementType;
  strictness: number;
  color: string;
  gradient: string;
  description: string;
  environments: string[];
  blockedCategories: string[];
  warnedCategories: string[];
  allowedCategories: string[];
  outputControl: string;
  sensitivity: string;
  recommended: string;
  features: { label: string; enabled: boolean }[];
}

const profiles: PolicyProfile[] = [
  {
    name: "Student Mode",
    icon: GraduationCap,
    strictness: 40,
    color: "#10b981",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    description: "A balanced safety profile designed for educational chatbots and learning assistants. Allows creative and exploratory prompts while protecting against harmful content and explicit material. Ideal for classroom environments and tutoring platforms.",
    environments: ["Educational platforms", "Tutoring chatbots", "Learning assistants", "Student Q&A tools"],
    blockedCategories: ["Explicit/harmful content", "Direct jailbreak attempts", "Sensitive data extraction"],
    warnedCategories: ["Roleplay attempts", "Off-topic queries", "Mild prompt injections"],
    allowedCategories: ["Creative writing", "Hypothetical scenarios", "General knowledge queries"],
    outputControl: "Moderate filtering — blocks harmful outputs, allows educational edge cases",
    sensitivity: "Medium — balances safety with learning freedom",
    recommended: "Schools, universities, online courses, and edu-tech platforms",
    features: [
      { label: "Jailbreak Detection", enabled: true },
      { label: "Encoding Attack Detection", enabled: false },
      { label: "Safe Rewrite Mode", enabled: true },
      { label: "Data Extraction Prevention", enabled: true },
      { label: "Roleplay Blocking", enabled: false },
      { label: "Strict Output Validation", enabled: false },
      { label: "Real-time Risk Scoring", enabled: true },
      { label: "Audit Logging", enabled: true },
    ],
  },
  {
    name: "Enterprise Secure",
    icon: Building2,
    strictness: 70,
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-amber-500/5",
    description: "A high-security profile for corporate AI assistants and internal tools. Prevents data leaks, unauthorized system access, and social engineering attacks. Maintains strict boundaries around proprietary information and business logic.",
    environments: ["Corporate chatbots", "Internal AI assistants", "Customer support AI", "Business intelligence tools"],
    blockedCategories: ["Data extraction attempts", "System override attacks", "Jailbreak attempts", "Social engineering"],
    warnedCategories: ["Unusual query patterns", "Encoding attempts", "Repeated probe attacks", "Edge-case roleplay"],
    allowedCategories: ["Business queries", "Data analysis requests", "Standard operational prompts"],
    outputControl: "Strict filtering — prevents data leaks, blocks unauthorized information flow",
    sensitivity: "High — aggressive detection for corporate threat landscape",
    recommended: "Enterprises, SaaS products, fintech, and internal business tools",
    features: [
      { label: "Jailbreak Detection", enabled: true },
      { label: "Encoding Attack Detection", enabled: true },
      { label: "Safe Rewrite Mode", enabled: true },
      { label: "Data Extraction Prevention", enabled: true },
      { label: "Roleplay Blocking", enabled: true },
      { label: "Strict Output Validation", enabled: true },
      { label: "Real-time Risk Scoring", enabled: true },
      { label: "Audit Logging", enabled: true },
    ],
  },
  {
    name: "Healthcare Strict",
    icon: HeartPulse,
    strictness: 95,
    color: "#ef4444",
    gradient: "from-red-500/20 to-red-500/5",
    description: "Maximum protection for healthcare and medical AI applications. Enforces strict HIPAA-like compliance, blocks any attempt to extract patient data, and ensures all outputs meet medical safety standards. Zero tolerance for policy violations.",
    environments: ["Medical chatbots", "Patient support AI", "Clinical decision support", "Telemedicine platforms"],
    blockedCategories: ["All injection types", "All roleplay/persona attacks", "All data extraction", "Unsafe output generation", "All encoding attacks"],
    warnedCategories: ["Any unusual prompt pattern", "Off-protocol queries"],
    allowedCategories: ["Standard medical queries", "Verified protocol-compliant prompts"],
    outputControl: "Maximum filtering — all outputs screened for compliance and safety",
    sensitivity: "Maximum — zero tolerance for potential threats",
    recommended: "Hospitals, clinics, healthtech, telemedicine, and pharma platforms",
    features: [
      { label: "Jailbreak Detection", enabled: true },
      { label: "Encoding Attack Detection", enabled: true },
      { label: "Safe Rewrite Mode", enabled: true },
      { label: "Data Extraction Prevention", enabled: true },
      { label: "Roleplay Blocking", enabled: true },
      { label: "Strict Output Validation", enabled: true },
      { label: "Real-time Risk Scoring", enabled: true },
      { label: "Audit Logging", enabled: true },
    ],
  },
];

export default function ProfilesPage() {
  return (
    <div className="bg-grid-pattern min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <motion.div className="mb-12" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="neon" size="md">
              <Lock className="w-3.5 h-3.5" />
              Safety Modes
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
            Policy <span className="gradient-text">Profiles</span>
          </h1>
          <p className="mt-2 text-text-secondary max-w-2xl">
            Different environments demand different levels of protection. PrompLint&apos;s policy profiles let you configure security based on your specific use case.
          </p>
        </motion.div>

        {/* Comparison overview */}
        <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <Card className="p-6">
            <h3 className="text-sm font-semibold text-text-primary mb-5 flex items-center gap-2">
              <Info className="w-4 h-4 text-neon" />
              Quick Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-charcoal-border/50">
                    <th className="pb-3 text-[11px] font-semibold text-text-muted uppercase tracking-wider">Profile</th>
                    <th className="pb-3 text-[11px] font-semibold text-text-muted uppercase tracking-wider text-center">Strictness</th>
                    <th className="pb-3 text-[11px] font-semibold text-text-muted uppercase tracking-wider text-center">Sensitivity</th>
                    <th className="pb-3 text-[11px] font-semibold text-text-muted uppercase tracking-wider text-center">Output Control</th>
                    <th className="pb-3 text-[11px] font-semibold text-text-muted uppercase tracking-wider text-center">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {profiles.map((p) => (
                    <tr key={p.name} className="border-b border-charcoal-border/20">
                      <td className="py-3 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                        <span className="text-sm font-medium text-text-primary">{p.name}</span>
                      </td>
                      <td className="py-3 text-center">
                        <span className="text-sm font-bold font-mono" style={{ color: p.color }}>{p.strictness}%</span>
                      </td>
                      <td className="py-3 text-center">
                        <span className="text-xs text-text-secondary">{p.sensitivity.split("—")[0].trim()}</span>
                      </td>
                      <td className="py-3 text-center">
                        <span className="text-xs text-text-secondary">{p.outputControl.split("—")[0].trim()}</span>
                      </td>
                      <td className="py-3 text-center">
                        <span className="text-xs text-text-muted">{p.environments[0]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Profile detailed cards */}
        <div className="space-y-8">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={idx}
              >
                <Card className={`overflow-hidden`}>
                  {/* Header stripe */}
                  <div className={`h-1`} style={{ background: `linear-gradient(90deg, ${profile.color}, transparent)` }} />

                  <div className="p-6 md:p-8">
                    {/* Top row */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${profile.color}15` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: profile.color }} />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-text-primary">{profile.name}</h2>
                          <p className="text-sm text-text-muted mt-0.5">{profile.recommended}</p>
                        </div>
                      </div>

                      {/* Strictness meter */}
                      <div className="flex items-center gap-4 md:min-w-[200px]">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-text-muted">Strictness</span>
                            <span className="text-sm font-bold font-mono" style={{ color: profile.color }}>{profile.strictness}%</span>
                          </div>
                          <div className="h-2.5 rounded-full bg-charcoal-border/50 overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: profile.color }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${profile.strictness}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: 0.3 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed mb-6">{profile.description}</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Blocked */}
                      <div>
                        <p className="text-xs font-semibold text-danger uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <XCircle className="w-3.5 h-3.5" /> Blocked
                        </p>
                        <div className="space-y-2">
                          {profile.blockedCategories.map((c) => (
                            <div key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                              <XCircle className="w-3.5 h-3.5 text-danger shrink-0 mt-0.5" />
                              {c}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Warned */}
                      <div>
                        <p className="text-xs font-semibold text-warning uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" /> Warned
                        </p>
                        <div className="space-y-2">
                          {profile.warnedCategories.map((c) => (
                            <div key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                              <AlertTriangle className="w-3.5 h-3.5 text-warning shrink-0 mt-0.5" />
                              {c}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Allowed */}
                      <div>
                        <p className="text-xs font-semibold text-success uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Allowed
                        </p>
                        <div className="space-y-2">
                          {profile.allowedCategories.map((c) => (
                            <div key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                              <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                              {c}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Feature grid */}
                    <div className="mt-6 pt-6 border-t border-charcoal-border/30">
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-neon" /> Security Features
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {profile.features.map((f) => (
                          <div key={f.label} className="flex items-center gap-2 p-2 rounded-lg bg-surface/30">
                            {f.enabled ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
                            ) : (
                              <XCircle className="w-3.5 h-3.5 text-text-muted/40 shrink-0" />
                            )}
                            <span className={`text-xs ${f.enabled ? "text-text-secondary" : "text-text-muted/50"}`}>
                              {f.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Environments */}
                    <div className="mt-5 pt-5 border-t border-charcoal-border/30">
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" /> Suitable Environments
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {profile.environments.map((e) => (
                          <Badge key={e} variant="neon">{e}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Info row */}
                    <div className="mt-5 grid sm:grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-surface/30 border border-charcoal-border/30">
                        <p className="text-[11px] text-text-muted uppercase tracking-wider mb-1">Sensitivity</p>
                        <p className="text-xs text-text-secondary">{profile.sensitivity}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-surface/30 border border-charcoal-border/30">
                        <p className="text-[11px] text-text-muted uppercase tracking-wider mb-1">Output Control</p>
                        <p className="text-xs text-text-secondary">{profile.outputControl}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
