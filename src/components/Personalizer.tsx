"use client";

import { useMemo, useState } from "react";
import { CoffeeCard } from "@/components/CoffeeCard";
import { coffees, type BrewingMethod, type GrindSize, type RoastLevel } from "@/data/coffees";

const beanTypes = ["Single Origin", "Blend", "Decaf"] as const;
const roastLevels: RoastLevel[] = ["Light", "Medium", "Dark"];
const grindSizes: GrindSize[] = ["Whole Bean", "Coarse", "Medium", "Fine"];
const brewingMethods: BrewingMethod[] = ["French Press", "Espresso", "Pour Over", "Cold Brew"];

export function Personalizer() {
  const [beanType, setBeanType] = useState<typeof beanTypes[number]>(beanTypes[0]);
  const [roastLevel, setRoastLevel] = useState<RoastLevel>("Medium");
  const [grindSize, setGrindSize] = useState<GrindSize>("Medium");
  const [method, setMethod] = useState<BrewingMethod>("Pour Over");

  const recommendation = useMemo(() => {
    const match = coffees.find((coffee) => coffee.roastLevel === roastLevel);
    return match ?? coffees[0];
  }, [roastLevel]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-display font-semibold text-coffee-roast">
            Coffee Personalizer
          </h1>
          <p className="mt-2 max-w-xl text-sm text-coffee-brown/80">
            Pick the beans, roast, grind, and brew method to see your perfect match and tasting notes.
          </p>
        </div>
        <div className="rounded-full border border-white/20 bg-white/50 px-5 py-3 text-sm font-semibold text-coffee-brown shadow-sm">
          Recommended for: <span className="text-coffee-roast">{method}</span>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-lg font-semibold text-coffee-roast">Customize your cup</h2>
          <div className="mt-6 space-y-5">
            <label className="block text-sm font-semibold text-coffee-roast">
              Bean type
              <select
                value={beanType}
                onChange={(e) => setBeanType(e.target.value as typeof beanTypes[number])}
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/60 px-4 py-3 text-sm text-coffee-roast shadow-sm outline-none transition focus:border-coffee-brown"
              >
                {beanTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="block text-sm font-semibold text-coffee-roast">
              Roast level
              <select
                value={roastLevel}
                onChange={(e) => setRoastLevel(e.target.value as RoastLevel)}
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/60 px-4 py-3 text-sm text-coffee-roast shadow-sm outline-none transition focus:border-coffee-brown"
              >
                {roastLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </label>

            <label className="block text-sm font-semibold text-coffee-roast">
              Grind size
              <select
                value={grindSize}
                onChange={(e) => setGrindSize(e.target.value as GrindSize)}
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/60 px-4 py-3 text-sm text-coffee-roast shadow-sm outline-none transition focus:border-coffee-brown"
              >
                {grindSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>

            <label className="block text-sm font-semibold text-coffee-roast">
              Brewing method
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value as BrewingMethod)}
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/60 px-4 py-3 text-sm text-coffee-roast shadow-sm outline-none transition focus:border-coffee-brown"
              >
                {brewingMethods.map((brew) => (
                  <option key={brew} value={brew}>
                    {brew}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-coffee-roast">Your recommendation</h2>
          <p className="mt-2 text-sm text-coffee-brown/80">
            Based on your selections, we suggest this coffee and a few tips for brewing.
          </p>
          <div className="mt-6">
            <CoffeeCard coffee={recommendation} showDetails={false} />
          </div>
          <div className="mt-6 rounded-2xl border border-white/20 bg-white/50 p-5 text-sm text-coffee-brown/80 shadow-sm">
            <h3 className="text-sm font-semibold text-coffee-roast">Brewing notes</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="font-semibold text-coffee-roast">Grind:</span> {grindSize}
              </li>
              <li>
                <span className="font-semibold text-coffee-roast">Method:</span> {method}
              </li>
              <li>
                <span className="font-semibold text-coffee-roast">Ratio:</span> 1:16 (coffee to water)
              </li>
              <li>
                <span className="font-semibold text-coffee-roast">Tip:</span> Adjust water temperature to the roast (lighter = hotter).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
