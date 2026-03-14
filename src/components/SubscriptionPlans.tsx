"use client";

import { useMemo, useState } from "react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 14,
    description: "A weekly pick-me-up with our most popular roast.",
    perks: ["2 bags per month", "Free shipping", "Easy swap"],
  },
  {
    id: "lover",
    name: "Coffee Lover",
    price: 22,
    description: "A curated selection for those who savor every cup.",
    perks: ["4 bags per month", "Exclusive blends", "Priority roasting"],
  },
  {
    id: "premium",
    name: "Premium Roaster Choice",
    price: 35,
    description: "Our top picks, roasted fresh and delivered with care.",
    perks: ["5 bags per month", "Roaster's choice", "Gift extras"],
  },
];

const grindOptions = ["Whole Bean", "Coarse", "Medium", "Fine"];
const frequencyOptions = ["Weekly", "Bi-weekly", "Monthly"];
const roastOptions = ["Light", "Medium", "Dark"];

export function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0].id);
  const [grind, setGrind] = useState(grindOptions[0]);
  const [frequency, setFrequency] = useState(frequencyOptions[2]);
  const [roast, setRoast] = useState(roastOptions[1]);

  const plan = useMemo(() => plans.find((p) => p.id === selectedPlan) || plans[0], [selectedPlan]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-display font-semibold text-coffee-roast">
            Subscription Plans
          </h1>
          <p className="mt-2 max-w-xl text-sm text-coffee-brown/80">
            Choose a plan that fits your ritual and we’ll deliver freshly roasted beans on your schedule.
          </p>
        </div>
        <div className="rounded-full border border-white/20 bg-white/50 px-5 py-3 text-sm font-semibold text-coffee-brown shadow-sm">
          Next delivery: <span className="text-coffee-roast">{frequency}</span>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((planOption) => (
          <button
            key={planOption.id}
            type="button"
            onClick={() => setSelectedPlan(planOption.id)}
            className={`rounded-2xl border p-6 text-left transition ${
              planOption.id === selectedPlan
                ? "border-coffee-brown bg-white/60 shadow-soft"
                : "border-white/20 bg-white/50 hover:bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-coffee-roast">{planOption.name}</h2>
              <span className="text-xl font-bold text-coffee-brown">${planOption.price}</span>
            </div>
            <p className="mt-2 text-sm text-coffee-brown/80">{planOption.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-coffee-brown/70">
              {planOption.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2">
                  <span className="mt-1 text-coffee-brown">•</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold text-coffee-roast">Grind Preference</h2>
          <p className="mt-2 text-sm text-coffee-brown/80">
            Select the grind that works best with your brewing setup.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {grindOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setGrind(option)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  option === grind
                    ? "border-coffee-brown bg-coffee-brown/10 text-coffee-roast"
                    : "border-white/20 bg-white/50 text-coffee-brown hover:bg-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-coffee-roast">Delivery Frequency</h2>
          <p className="mt-2 text-sm text-coffee-brown/80">Choose how often you want beans delivered.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {frequencyOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFrequency(option)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  option === frequency
                    ? "border-coffee-brown bg-coffee-brown/10 text-coffee-roast"
                    : "border-white/20 bg-white/50 text-coffee-brown hover:bg-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-coffee-roast">Roast Preference</h2>
          <p className="mt-2 text-sm text-coffee-brown/80">We’ll prioritize beans that match your roast profile.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {roastOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setRoast(option)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  option === roast
                    ? "border-coffee-brown bg-coffee-brown/10 text-coffee-roast"
                    : "border-white/20 bg-white/50 text-coffee-brown hover:bg-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/20 bg-white/60 p-8 shadow-soft">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-coffee-roast">Review your plan</h3>
            <p className="mt-2 text-sm text-coffee-brown/80">
              You&apos;re about to subscribe to the {plan.name} plan with {grind.toLowerCase()} grind.
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-coffee-roast">${plan.price}</div>
            <div className="text-sm text-coffee-brown/70">per shipment</div>
          </div>
        </div>
        <button
          type="button"
          className="mt-8 w-full rounded-full bg-coffee-brown px-6 py-3 text-sm font-semibold text-coffee-cream shadow-sm transition hover:bg-coffee-roast"
        >
          Start subscription
        </button>
      </div>
    </section>
  );
}
