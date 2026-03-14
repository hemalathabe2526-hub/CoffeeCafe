"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-brown/80 via-coffee-roast/30 to-coffee-latte/40" />
      <div className="absolute inset-0 bg-[url('/hero/coffee-wave.svg')] bg-cover bg-center opacity-30" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-display font-semibold tracking-tight text-white sm:text-5xl">
            Freshly Roasted Coffee Delivered to You
          </h1>
          <p className="text-lg text-white/80">
            Discover premium single-origin beans, curated blends, and effortless brewing
            rituals. Cozy up with a cup that feels like a warm hug.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-white/90 px-8 py-3 text-sm font-semibold text-coffee-roast shadow-lg transition hover:bg-white"
            >
              Shop Coffee
            </Link>
            <Link
              href="/personalizer"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-transparent px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10"
            >
              Find Your Flavor
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="card-strong">
            <h2 className="text-lg font-semibold text-coffee-roast">Coffee Mood</h2>
            <p className="mt-2 text-sm text-coffee-brown/80">
              Pick a mood and we’ll suggest a cup that matches how you want to feel.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { emoji: "💼", label: "Work", hint: "Focus blend" },
                { emoji: "🛋️", label: "Relax", hint: "Chill roast" },
                { emoji: "📚", label: "Study", hint: "Bright pick" },
                { emoji: "🌙", label: "Night", hint: "Easy sipper" },
              ].map((mood) => (
                <button
                  key={mood.label}
                  type="button"
                  className="flex flex-col items-start gap-1 rounded-2xl border border-white/20 bg-white/50 px-4 py-4 text-left shadow-sm transition hover:bg-white"
                >
                  <span className="text-xl">{mood.emoji}</span>
                  <span className="font-semibold text-coffee-roast">{mood.label}</span>
                  <span className="text-xs text-coffee-brown/70">{mood.hint}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="card-strong">
            <h2 className="text-lg font-semibold text-coffee-roast">Quick Brew Timer</h2>
            <p className="mt-2 text-sm text-coffee-brown/80">
              Start a guided timer for your next brew. Perfect pours, every cup.
            </p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-coffee-brown/70">
                  French Press
                </p>
                <p className="text-2xl font-semibold text-coffee-roast">4:00</p>
              </div>
              <button
                type="button"
                className="rounded-full bg-coffee-brown px-5 py-3 text-sm font-semibold text-coffee-cream shadow-sm transition hover:bg-coffee-roast"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
