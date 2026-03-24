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

      </div>
    </section>
  );
}
