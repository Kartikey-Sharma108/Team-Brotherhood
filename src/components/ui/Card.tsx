import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className = "", hover = false, glow = false }: CardProps) {
  return (
    <div
      className={`
        rounded-xl border border-charcoal-border/60 bg-charcoal-card/60 backdrop-blur-sm
        ${hover ? "transition-all duration-300 hover:border-neon/30 hover:bg-surface-hover hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]" : ""}
        ${glow ? "glow-neon" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  change?: string;
  changeType?: "up" | "down" | "neutral";
}

export function StatCard({ label, value, icon, change, changeType = "neutral" }: StatCardProps) {
  const changeColor = changeType === "up" ? "text-success" : changeType === "down" ? "text-danger" : "text-text-muted";

  return (
    <Card hover className="p-5">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-text-muted font-medium">{label}</p>
          <p className="text-2xl font-bold text-text-primary tracking-tight">{value}</p>
          {change && (
            <p className={`text-xs font-medium ${changeColor}`}>
              {changeType === "up" ? "↑" : changeType === "down" ? "↓" : "→"} {change}
            </p>
          )}
        </div>
        <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center text-neon">
          {icon}
        </div>
      </div>
    </Card>
  );
}
