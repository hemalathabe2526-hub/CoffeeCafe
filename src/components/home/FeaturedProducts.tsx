"use client";

import { coffees } from "@/data/coffees";
import { CoffeeCard } from "@/components/CoffeeCard";
import Link from "next/link";
import { motion } from "framer-motion";

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      {/* Header */}
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <span className="section-label">☕ Our Collection</span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-roast leading-tight">
            Featured Coffees
          </h2>
          <p className="max-w-md text-sm text-coffee-brown/70 leading-relaxed">
            Hand-picked roasts that highlight bright acidity, creamy caramel, and bold depth.
            Each bag tells a story.
          </p>
        </div>
        <Link
          href="/shop"
          className="group inline-flex items-center gap-2 rounded-full border border-coffee-brown/25 bg-white/60 px-6 py-2.5 text-sm font-semibold text-coffee-roast shadow-sm backdrop-blur transition-all hover:bg-white hover:shadow-md self-start md:self-auto"
        >
          View all products
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {coffees.slice(0, 3).map((coffee, i) => (
          <motion.div
            key={coffee.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
          >
            <CoffeeCard coffee={coffee} highlight />
          </motion.div>
        ))}
      </div>

      {/* Mini promo banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 rounded-2xl border border-coffee-caramel/25 bg-gradient-to-r from-coffee-brown/8 via-coffee-caramel/10 to-coffee-brown/5 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎁</span>
          <div>
            <p className="font-semibold text-coffee-roast text-sm">First order? Get 15% off</p>
            <p className="text-xs text-coffee-brown/70">Use code <span className="font-mono font-bold text-coffee-brown">FIRSTBREW</span> at checkout</p>
          </div>
        </div>
        <Link
          href="/shop"
          className="shrink-0 rounded-full bg-coffee-brown px-5 py-2 text-sm font-semibold text-coffee-cream transition hover:bg-coffee-roast"
        >
          Claim Offer
        </Link>
      </motion.div>
    </section>
  );
}
