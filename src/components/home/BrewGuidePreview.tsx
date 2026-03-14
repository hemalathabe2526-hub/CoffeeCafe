"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const methods = [
  {
    title: "French Press",
    highlight: "4:00",
    description: "Coarse grind, steep, and press for a rich, full-bodied cup.",
  },
  {
    title: "Espresso",
    highlight: "25s",
    description: "Fine grind, high pressure, intense flavor in a quick pull.",
  },
  {
    title: "Pour Over",
    highlight: "3:30",
    description: "Medium grind, steady pour, and a clean, bright finish.",
  },
  {
    title: "Cold Brew",
    highlight: "12h",
    description: "Coarse steeping for a gentle, smooth cold brew concentrate.",
  },
];

export function BrewGuidePreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-display font-semibold text-coffee-roast">
            Brew Guide Preview
          </h2>
          <p className="mt-2 max-w-xl text-sm text-coffee-brown/80">
            From pour over to espresso, find the method that turns your ritual into a moment.
          </p>
        </div>
        <Link
          href="/brew-guide"
          className="inline-flex items-center justify-center rounded-full border border-coffee-brown/20 bg-white/50 px-5 py-2 text-sm font-semibold text-coffee-roast shadow-sm transition hover:bg-white"
        >
          See all guides
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {methods.map((method) => (
          <motion.div
            key={method.title}
            whileHover={{ y: -6 }}
            className="card-strong flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-coffee-roast">{method.title}</h3>
              <p className="mt-2 text-sm text-coffee-brown/80">{method.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-coffee-brown/60">Brew time</span>
              <span className="text-sm font-semibold text-coffee-roast">{method.highlight}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
