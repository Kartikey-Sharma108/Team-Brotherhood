"use client";

import { motion } from "framer-motion";

interface RiskScoreProps {
  score: number;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export function RiskScore({ score, size = "md", animated = true }: RiskScoreProps) {
  const sizes = {
    sm: { outer: 80, stroke: 6, text: "text-lg", label: "text-[10px]" },
    md: { outer: 120, stroke: 8, text: "text-3xl", label: "text-xs" },
    lg: { outer: 180, stroke: 10, text: "text-5xl", label: "text-sm" },
  };

  const { outer, stroke, text, label } = sizes[size];
  const radius = (outer - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getColor = () => {
    if (score <= 30) return { ring: "#10b981", glow: "rgba(16,185,129,0.3)" };
    if (score <= 60) return { ring: "#f59e0b", glow: "rgba(245,158,11,0.3)" };
    return { ring: "#ef4444", glow: "rgba(239,68,68,0.3)" };
  };

  const getLevel = () => {
    if (score <= 30) return "LOW RISK";
    if (score <= 60) return "MEDIUM";
    return "HIGH RISK";
  };

  const color = getColor();

  return (
    <div className="relative flex items-center justify-center" style={{ width: outer, height: outer }}>
      <svg width={outer} height={outer} className="-rotate-90">
        <circle
          cx={outer / 2}
          cy={outer / 2}
          r={radius}
          stroke="rgba(139,92,246,0.1)"
          strokeWidth={stroke}
          fill="none"
        />
        <motion.circle
          cx={outer / 2}
          cy={outer / 2}
          r={radius}
          stroke={color.ring}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={animated ? { strokeDashoffset: circumference } : { strokeDashoffset: offset }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ filter: `drop-shadow(0 0 6px ${color.glow})` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className={`${text} font-bold font-mono`}
          style={{ color: color.ring }}
          initial={animated ? { opacity: 0, scale: 0.5 } : {}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {score}
        </motion.span>
        <span className={`${label} font-semibold tracking-widest text-text-muted uppercase mt-0.5`}>
          {getLevel()}
        </span>
      </div>
    </div>
  );
}
