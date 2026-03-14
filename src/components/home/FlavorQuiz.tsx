"use client";

import { useMemo, useState } from "react";
import { coffees } from "@/data/coffees";
import type { RoastLevel } from "@/data/coffees";
import { CoffeeCard } from "@/components/CoffeeCard";

const preferences = [
  {
    id: "acidity",
    label: "Acidity",
    options: [
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "bright", label: "Bright" },
    ],
  },
  {
    id: "body",
    label: "Body",
    options: [
      { value: "light", label: "Light" },
      { value: "balanced", label: "Balanced" },
      { value: "full", label: "Full" },
    ],
  },
  {
    id: "sweetness",
    label: "Sweetness",
    options: [
      { value: "mild", label: "Mild" },
      { value: "medium", label: "Medium" },
      { value: "rich", label: "Rich" },
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
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-display font-semibold text-coffee-roast">
            Coffee Flavor Finder
          </h2>
          <p className="mt-2 max-w-xl text-sm text-coffee-brown/80">
            Answer a few quick questions and we’ll recommend your next favorite bag.
          </p>
        </div>
        <div className="rounded-full border border-white/20 bg-white/50 px-5 py-3 text-sm font-semibold text-coffee-brown shadow-sm">
          Recommended roast: <span className="font-semibold text-coffee-roast">{recommended.roastLevel}</span>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="card">
          {preferences.map((pref) => (
            <div key={pref.id} className="space-y-2">
              <h4 className="text-sm font-semibold text-coffee-roast">{pref.label}</h4>
              <div className="flex flex-wrap gap-2">
                {pref.options.map((option) => {
                  const active = answers[pref.id as keyof typeof answers] === option.value;
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
                      className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        active
                          ? "border-coffee-brown bg-coffee-brown/10 text-coffee-roast"
                          : "border-white/20 bg-white/50 text-coffee-brown hover:bg-white"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-coffee-roast">Your Match</h3>
          <p className="mt-2 text-sm text-coffee-brown/80">
            Based on your taste preferences, we recommend this roast.
          </p>
          <div className="mt-6">
            <CoffeeCard coffee={recommended} showDetails={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
