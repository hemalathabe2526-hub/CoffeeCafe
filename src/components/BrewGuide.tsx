"use client";

import { useEffect, useMemo, useReducer } from "react";

type MethodKey = "French Press" | "Espresso" | "Pour Over" | "Cold Brew";

type Method = {
  name: MethodKey;
  brewTime: number; // seconds
  steps: string[];
  ratio: string;
  temp: string;
};

const methods: Method[] = [
  {
    name: "French Press",
    brewTime: 240,
    ratio: "1:15",
    temp: "93°C",
    steps: [
      "Coarse grind and add to the press.",
      "Pour hot water, stir gently, and place the lid.",
      "Steep for 4 minutes, then press slowly.",
      "Pour immediately and enjoy.",
    ],
  },
  {
    name: "Espresso",
    brewTime: 25,
    ratio: "1:2",
    temp: "92°C",
    steps: [
      "Fine grind and dose into portafilter.",
      "Tamp evenly and lock in the portafilter.",
      "Pull a 25-second shot with even pressure.",
      "Serve immediately.",
    ],
  },
  {
    name: "Pour Over",
    brewTime: 210,
    ratio: "1:17",
    temp: "94°C",
    steps: [
      "Rinse filter and add medium grind coffee.",
      "Bloom with a small pour for 30 seconds.",
      "Pour steadily in concentric circles.",
      "Let it drain and enjoy fresh brew.",
    ],
  },
  {
    name: "Cold Brew",
    brewTime: 43200,
    ratio: "1:8",
    temp: "Room temp",
    steps: [
      "Coarse grind and add to a jar.",
      "Pour cold water, stir, and cover.",
      "Steep 12-18 hours in the fridge.",
      "Strain and serve over ice.",
    ],
  },
];

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (minutes === 0) return `${secs}s`;
  return `${minutes}m ${secs.toString().padStart(2, "0")}s`;
}

type BrewState = {
  active: MethodKey;
  timer: number;
  running: boolean;
};

type BrewAction =
  | { type: "select"; method: MethodKey }
  | { type: "toggle" }
  | { type: "tick" }
  | { type: "reset" };

function brewReducer(state: BrewState, action: BrewAction): BrewState {
  switch (action.type) {
    case "select": {
      const target = methods.find((method) => method.name === action.method) ?? methods[0];
      return { active: target.name, timer: target.brewTime, running: false };
    }
    case "toggle":
      return { ...state, running: !state.running };
    case "tick":
      if (state.timer <= 1) {
        return { ...state, timer: 0, running: false };
      }
      return { ...state, timer: state.timer - 1 };
    case "reset":
      return {
        ...state,
        timer: methods.find((m) => m.name === state.active)?.brewTime ?? state.timer,
        running: false,
      };
    default:
      return state;
  }
}

export function BrewGuide() {
  const [state, dispatch] = useReducer(brewReducer, {
    active: methods[0].name,
    timer: methods[0].brewTime,
    running: false,
  });

  const current = useMemo(
    () => methods.find((method) => method.name === state.active) ?? methods[0],
    [state.active]
  );

  useEffect(() => {
    if (!state.running) return;

    const interval = window.setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => window.clearInterval(interval);
  }, [state.running]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-display font-semibold text-coffee-roast">
            Brew Guide
          </h1>
          <p className="mt-2 max-w-xl text-sm text-coffee-brown/80">
            Step-by-step brewing guides to help you make the perfect cup, every time.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {methods.map((method) => (
            <button
              key={method.name}
              type="button"
              onClick={() => dispatch({ type: "select", method: method.name })}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                method.name === state.active
                  ? "bg-coffee-brown text-coffee-cream"
                  : "bg-white/50 text-coffee-roast hover:bg-white"
              }`}
            >
              {method.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="card">
          <h2 className="text-xl font-semibold text-coffee-roast">{current.name}</h2>
          <p className="mt-2 text-sm text-coffee-brown/80">{current.steps[0]}</p>
          <div className="mt-6 space-y-3">
            {current.steps.map((step, idx) => (
              <div key={step} className="flex gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-coffee-brown/15 text-xs font-semibold text-coffee-roast">
                  {idx + 1}
                </span>
                <p className="text-sm text-coffee-brown/80">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-coffee-roast">Timer</h3>
          <div className="mt-4 flex items-end justify-between gap-6">
            <div>
              <p className="text-4xl font-semibold text-coffee-roast">
                {formatDuration(state.timer)}
              </p>
              <p className="text-sm text-coffee-brown/80">{current.brewTime >= 3600 ? "Steep time" : "Brew time"}</p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => dispatch({ type: "toggle" })}
                className="rounded-full bg-coffee-brown px-5 py-3 text-sm font-semibold text-coffee-cream shadow-sm transition hover:bg-coffee-roast"
              >
                {state.running ? "Pause" : "Start"}
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: "reset" })}
                className="rounded-full border border-white/20 bg-white/60 px-5 py-3 text-sm font-semibold text-coffee-roast shadow-sm transition hover:bg-white"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-coffee-roast">Quick tips</h3>
          <ul className="mt-4 space-y-3 text-sm text-coffee-brown/80">
            <li>
              <span className="font-semibold text-coffee-roast">Ratio:</span> {current.ratio}
            </li>
            <li>
              <span className="font-semibold text-coffee-roast">Temperature:</span> {current.temp}
            </li>
            <li>
              <span className="font-semibold text-coffee-roast">Freshness:</span> Use beans roasted within 2 weeks for best flavor.
            </li>
            <li>
              <span className="font-semibold text-coffee-roast">Clean equipment:</span> Rinse your brewer and filter before brewing.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
