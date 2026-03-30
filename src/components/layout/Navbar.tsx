"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Activity,
  LayoutDashboard,
  Users,
  Zap,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Shield },
  { href: "/playground", label: "Live Detection", icon: Activity },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/profiles", label: "Policy Profiles", icon: Users },
  { href: "/attacks", label: "Attack Intel", icon: Zap },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-charcoal-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
              <Shield className="w-5 h-5 text-neon" />
              <div className="absolute inset-0 rounded-lg bg-neon/5 blur-md group-hover:bg-neon/10 transition-all" />
            </div>
            <span className="text-lg font-bold tracking-tight text-text-primary">
              Promp<span className="text-neon">Lint</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-neon"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-lg bg-neon/[0.08] border border-neon/20"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/playground"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neon hover:bg-neon-dark text-white text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <Activity className="w-4 h-4" />
              Try Detection
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-charcoal-border/50"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "text-neon bg-neon/[0.08]"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                );
              })}
              <Link
                href="/playground"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 mt-2 px-4 py-2.5 rounded-lg bg-neon hover:bg-neon-dark text-white text-sm font-semibold transition-all"
              >
                <Activity className="w-4 h-4" />
                Try Live Detection
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
