"use client";

import { coffees } from "@/data/coffees";
import { CoffeeCard } from "@/components/CoffeeCard";

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 pt-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-display font-semibold text-coffee-roast">
            Featured Coffees
          </h2>
          <p className="mt-2 max-w-xl text-sm text-coffee-brown/80">
            Hand-picked roasts that highlight bright acidity, creamy caramel, and bold depth.
          </p>
        </div>
        <a
          href="/shop"
          className="inline-flex items-center justify-center rounded-full border border-coffee-brown/20 bg-white/50 px-5 py-2 text-sm font-semibold text-coffee-roast shadow-sm transition hover:bg-white"
        >
          View all products
        </a>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {coffees.slice(0, 3).map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} highlight />
        ))}
      </div>
    </section>
  );
}
