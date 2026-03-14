"use client";

import { useEffect, useState } from "react";
import { coffees } from "@/data/coffees";
import { CoffeeCard } from "@/components/CoffeeCard";

const quotes = [
  "A great day starts with a great roast.",
  "Today’s brew is a warm invite to slow down.",
  "Sip, savor, and stay a while.",
  "Fresh beans, calmer mind, better day.",
];

export function BrewOfTheDay() {
  const [quote, setQuote] = useState<string>(quotes[0]);
  const [selection] = useState(() => {
    const index = Math.floor(Math.random() * coffees.length);
    return coffees[index];
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 8000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-display font-semibold text-coffee-roast">
            Brew of the Day
          </h2>
          <p className="mt-2 max-w-xl text-sm text-coffee-brown/80">{quote}</p>
        </div>
        <div className="rounded-full border border-white/20 bg-white/50 px-5 py-3 text-sm font-semibold text-coffee-brown shadow-sm">
          <span className="text-xs uppercase tracking-wide text-coffee-brown/60">
            Today’s pick
          </span>
          <div className="text-coffee-roast">{selection.name}</div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <CoffeeCard coffee={selection} />
        <div className="card">
          <h3 className="text-lg font-semibold text-coffee-roast">Why we love it</h3>
          <ul className="mt-4 space-y-3 text-sm text-coffee-brown/80">
            <li>• Balanced roast that works with multiple brew methods</li>
            <li>• Notes of {selection.flavorNotes.slice(0, 2).join(" and ")}</li>
            <li>• Roasted within the last week for peak freshness</li>
          </ul>
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-coffee-roast">Brewing tip</h4>
            <p className="mt-2 text-sm text-coffee-brown/80">
              Try a 16:1 ratio (grams of water to coffee), bloom for 30s, then pour steadily for a clean cup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
