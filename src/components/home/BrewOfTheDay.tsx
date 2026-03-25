"use client";

import { useEffect, useState } from "react";
import { coffees } from "@/data/coffees";
import { CoffeeCard } from "@/components/CoffeeCard";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "A great day starts with a great roast.",
  "Today's brew is a warm invite to slow down.",
  "Sip, savor, and stay a while.",
  "Fresh beans, calmer mind, better day.",
];

export function BrewOfTheDay() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [selection] = useState(() => {
    const index = Math.floor(Math.random() * coffees.length);
    return coffees[index];
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      {/* Dark banner background */}
      <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#2A1B16] via-[#3d2218] to-[#4B2E2B] p-8 sm:p-12">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-coffee-caramel/90">
              ☀️ Today&apos;s Pick
            </span>
            <h2 className="text-3xl font-display font-semibold text-white">
              Brew of the Day
            </h2>
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="max-w-sm text-sm text-white/60 italic"
              >
                "{quotes[quoteIndex]}"
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Today's pick badge */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-4 text-right">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Selected</p>
            <p className="text-lg font-display font-semibold text-coffee-caramel">{selection.name}</p>
            <div className="flex items-center justify-end gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-xs ${i < Math.round(selection.score) ? "text-coffee-caramel" : "text-white/20"}`}>★</span>
              ))}
              <span className="text-xs text-white/40 ml-1">{selection.score}</span>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Coffee card on dark bg */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-2">
            <CoffeeCard coffee={selection} />
          </div>

          {/* Why we love it */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span>❤️</span> Why we love it
              </h3>
              <ul className="space-y-3">
                {[
                  `Balanced roast for multiple brew methods`,
                  `Tasting notes of ${selection.flavorNotes.slice(0, 2).join(" and ")}`,
                  `Roasted within the last week for peak freshness`,
                  `Origin: ${selection.origin}`,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-0.5 text-coffee-caramel shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-3">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <span>💡</span> Brewing Tip
              </h4>
              <p className="text-sm text-white/65 leading-relaxed">
                Try a <span className="text-coffee-caramel font-semibold">16:1 ratio</span> (water to coffee).
                Bloom for 30 seconds, then pour steadily for a clean, balanced cup.
              </p>
              <div className="flex gap-2 flex-wrap pt-1">
                {["French Press", "Pour Over", "Chemex"].map((method) => (
                  <span
                    key={method}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
