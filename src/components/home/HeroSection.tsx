"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "12", label: "Origins Sourced" },
  { value: "4.9★", label: "Average Rating" },
  { value: "48h", label: "Roast to Door" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex flex-col justify-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A1B16] via-[#4B2E2B] to-[#7a4a2a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(200,162,124,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[url('/hero/coffee-wave.svg')] bg-cover bg-center opacity-10" />

      {/* Floating orbs */}
      <div className="absolute top-20 right-[12%] w-72 h-72 rounded-full bg-coffee-caramel/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-24 left-[8%] w-56 h-56 rounded-full bg-coffee-brown/15 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1.8s" }} />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left column ── */}
          <div className="space-y-8">
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur">
                <span className="pulse-dot" />
                Freshly roasted this week · Free shipping over $45
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl font-display font-semibold leading-[1.08] tracking-tight text-white">
                Premium Coffee,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-coffee-caramel">Freshly Roasted</span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-coffee-caramel/40" />
                </span>{" "}
                & Delivered
              </h1>
              <p className="text-lg text-white/70 max-w-md leading-relaxed">
                Single-origin beans, curated blends, and effortless brew guides — crafted for
                people who take their mornings seriously.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-coffee-caramel px-8 py-3.5 text-sm font-semibold text-coffee-roast shadow-lg shadow-coffee-caramel/30 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Shop All Coffees
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/personalizer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:-translate-y-0.5"
              >
                Find Your Flavor
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {["Free Returns", "100% Arabica", "Ethically Sourced"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs text-white/60"
                >
                  <span className="text-coffee-caramel">✓</span>
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right column — Stats card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Why Coffee Lovers Choose Us
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="space-y-1"
                  >
                    <div className="text-3xl font-display font-bold text-coffee-caramel">
                      {s.value}
                    </div>
                    <div className="text-xs text-white/60">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-white/70 leading-relaxed">
                  "The freshness is unreal — I can smell the roastery from the bag."
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-coffee-caramel/20 text-coffee-caramel text-sm font-bold">
                    A
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Ava R.</div>
                    <div className="text-xs text-white/50">Verified customer · ★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom stat row (mobile-friendly) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:hidden"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center"
            >
              <div className="text-xl font-display font-bold text-coffee-caramel">{s.value}</div>
              <div className="mt-1 text-xs text-white/60">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-coffee-latte to-transparent pointer-events-none" />
    </section>
  );
}
