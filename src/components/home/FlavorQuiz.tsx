"use client";

import { useMemo, useState } from "react";
import { coffees } from "@/data/coffees";
import type { RoastLevel } from "@/data/coffees";
import { CoffeeCard } from "@/components/CoffeeCard";
import { motion, AnimatePresence } from "framer-motion";

const preferences = [
  {
    id: "acidity",
    label: "Acidity",
    emoji: "⚡",
    options: [
      { value: "low", label: "Low", desc: "Smooth & mellow" },
      { value: "medium", label: "Medium", desc: "Balanced" },
      { value: "bright", label: "Bright", desc: "Lively & crisp" },
    ],
  },
  {
    id: "body",
    label: "Body",
    emoji: "💪",
    options: [
      { value: "light", label: "Light", desc: "Tea-like" },
      { value: "balanced", label: "Balanced", desc: "Silky" },
      { value: "full", label: "Full", desc: "Rich & bold" },
    ],
  },
  {
    id: "sweetness",
    label: "Sweetness",
    emoji: "🍯",
    options: [
      { value: "mild", label: "Mild", desc: "Subtle" },
      { value: "medium", label: "Medium", desc: "Pleasant" },
      { value: "rich", label: "Rich", desc: "Dessert-like" },
    ],
  },
];

function pickRoast(acidity: string): RoastLevel {
  if (acidity === "bright") return "Light";
  if (acidity === "medium") return "Medium";
  return "Dark";
}

export function FlavorQuiz() {
  const [answers, setAnswers] = useState({
    acidity: "medium",
    body: "balanced",
    sweetness: "medium",
  });

  const recommended = useMemo(() => {
    const roast = pickRoast(answers.acidity);
    const match = coffees.find((coffee) => coffee.roastLevel === roast);
    return match ?? coffees[0];
  }, [answers]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      {/* Header */}
      <div className="mb-10 space-y-3">
        <span className="section-label">🎯 Personalize</span>
        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-roast">
          Coffee Flavor Finder
        </h2>
        <p className="max-w-md text-sm text-coffee-brown/70 leading-relaxed">
          Answer a few quick questions and we'll recommend your next favorite bag.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Quiz panel */}
        <div className="lg:col-span-3 card-strong space-y-6">
          <div className="flex items-center gap-2 text-coffee-brown/60 text-xs font-semibold uppercase tracking-widest">
            <span>Step 1 of 1</span>
            <div className="flex-1 h-1 rounded-full bg-coffee-brown/10">
              <div className="h-1 rounded-full bg-coffee-brown w-full transition-all" />
            </div>
          </div>

          {preferences.map((pref) => (
            <div key={pref.id} className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-coffee-roast">
                <span>{pref.emoji}</span>
                {pref.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {pref.options.map((option) => {
                  const active =
                    answers[pref.id as keyof typeof answers] === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [pref.id]: option.value,
                        }))
                      }
                      className={`group flex flex-col rounded-2xl border px-4 py-3 text-left transition-all ${
                        active
                          ? "border-coffee-brown bg-coffee-brown/10 shadow-md"
                          : "border-coffee-brown/15 bg-white/60 hover:border-coffee-brown/30 hover:bg-white"
                      }`}
                    >
                      <span
                        className={`text-sm font-semibold ${
                          active ? "text-coffee-roast" : "text-coffee-brown"
                        }`}
                      >
                        {option.label}
                      </span>
                      <span className="text-xs text-coffee-brown/55 mt-0.5">
                        {option.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Result panel */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={recommended.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="card-dark space-y-4"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">
                  Your Match
                </p>
                <p className="mt-1 text-lg font-display font-semibold text-coffee-caramel">
                  {recommended.name}
                </p>
              </div>
              <p className="text-sm text-white/65 leading-relaxed">
                {recommended.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {recommended.flavorNotes.map((note) => (
                  <span
                    key={note}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                  >
                    {note}
                  </span>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs text-white/40">Roast level</p>
                <p className="text-sm font-semibold text-white mt-0.5">
                  {recommended.roastLevel} Roast
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="card-strong">
            <CoffeeCard coffee={recommended} showDetails={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
