"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const methods = [
  {
    emoji: "☕",
    title: "French Press",
    highlight: "4:00",
    description: "Coarse grind, steep, and press for a rich, full-bodied cup.",
    color: "from-amber-900/10 to-amber-700/5",
    border: "border-amber-800/15",
  },
  {
    emoji: "⚡",
    title: "Espresso",
    highlight: "25s",
    description: "Fine grind, high pressure, intense flavor in a quick pull.",
    color: "from-coffee-brown/10 to-coffee-roast/5",
    border: "border-coffee-brown/15",
  },
  {
    emoji: "🌿",
    title: "Pour Over",
    highlight: "3:30",
    description: "Medium grind, steady pour, and a clean, bright finish.",
    color: "from-emerald-900/10 to-emerald-700/5",
    border: "border-emerald-800/15",
  },
  {
    emoji: "🧊",
    title: "Cold Brew",
    highlight: "12h",
    description: "Coarse steeping for a smooth, gentle cold brew concentrate.",
    color: "from-blue-900/10 to-blue-700/5",
    border: "border-blue-800/15",
  },
];

export function BrewGuidePreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
        <div className="space-y-3">
          <span className="section-label">📖 Brew Guides</span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-roast">
            Master Your Brew
          </h2>
          <p className="max-w-md text-sm text-coffee-brown/70 leading-relaxed">
            From pour over to espresso — find the method that turns your ritual into a moment.
          </p>
        </div>
        <Link
          href="/brew-guide"
          className="group inline-flex items-center gap-2 rounded-full border border-coffee-brown/25 bg-white/60 px-6 py-2.5 text-sm font-semibold text-coffee-roast shadow-sm backdrop-blur transition-all hover:bg-white hover:shadow-md self-start md:self-auto"
        >
          See all guides
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      {/* Method cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {methods.map((method, i) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className={`group card-strong flex flex-col justify-between bg-gradient-to-br ${method.color} border ${method.border} cursor-pointer`}
          >
            <div className="space-y-3">
              <span className="text-3xl">{method.emoji}</span>
              <h3 className="text-lg font-semibold text-coffee-roast">{method.title}</h3>
              <p className="text-sm text-coffee-brown/70 leading-relaxed">{method.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-coffee-brown/10 pt-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-coffee-brown/50">
                Brew time
              </span>
              <span className="rounded-full bg-coffee-brown/10 px-3 py-1 text-sm font-bold text-coffee-roast">
                {method.highlight}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 rounded-2xl border border-coffee-caramel/20 bg-gradient-to-r from-coffee-brown/5 to-coffee-caramel/10 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <p className="font-semibold text-coffee-roast">Want a guided brew experience?</p>
          <p className="text-sm text-coffee-brown/70 mt-0.5">
            Our step-by-step guides walk you through every pour.
          </p>
        </div>
        <Link
          href="/brew-guide"
          className="shrink-0 rounded-full bg-coffee-brown px-6 py-2.5 text-sm font-semibold text-coffee-cream transition hover:bg-coffee-roast"
        >
          Explore Guides
        </Link>
      </motion.div>
    </section>
  );
}
