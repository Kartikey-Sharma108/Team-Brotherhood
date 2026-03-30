import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info" | "neon";
  size?: "sm" | "md";
}

const variantStyles: Record<string, string> = {
  default: "bg-charcoal-border/50 text-text-secondary border-charcoal-border",
  success: "bg-success/10 text-success border-success/20",
  warning: "bg-warning/10 text-warning border-warning/20",
  danger: "bg-danger/10 text-danger border-danger/20",
  info: "bg-info/10 text-info border-info/20",
  neon: "bg-neon/10 text-neon border-neon/20",
};

export function Badge({ children, variant = "default", size = "sm" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 border rounded-full font-medium ${
        size === "sm" ? "px-2.5 py-0.5 text-[11px]" : "px-3 py-1 text-xs"
      } ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}

interface DecisionBadgeProps {
  decision: "allow" | "warn" | "sanitize" | "block";
}

const decisionConfig = {
  allow: { label: "ALLOWED", style: "bg-success/15 text-success border-success/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]" },
  warn: { label: "WARNING", style: "bg-warning/15 text-warning border-warning/30 shadow-[0_0_12px_rgba(245,158,11,0.15)]" },
  sanitize: { label: "SANITIZED", style: "bg-info/15 text-info border-info/30 shadow-[0_0_12px_rgba(59,130,246,0.15)]" },
  block: { label: "BLOCKED", style: "bg-danger/15 text-danger border-danger/30 shadow-[0_0_12px_rgba(239,68,68,0.15)]" },
};

export function DecisionBadge({ decision }: DecisionBadgeProps) {
  const config = decisionConfig[decision];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${config.style}`}
    >
      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
      {config.label}
    </span>
  );
}
