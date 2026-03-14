"use client";

import { useMemo, useState } from "react";
import { CoffeeCard } from "@/components/CoffeeCard";
import { coffees, type RoastLevel } from "@/data/coffees";

const roastOptions: RoastLevel[] = ["Light", "Medium", "Dark"];

export default function ShopPage() {
  const [roastFilter, setRoastFilter] = useState<RoastLevel | "All">("All");
  const [maxPrice, setMaxPrice] = useState(30);
  const [search, setSearch] = useState("");

  const filteredCoffees = useMemo(() => {
    return coffees.filter((coffee) => {
      const matchesRoast = roastFilter === "All" || coffee.roastLevel === roastFilter;
      const matchesPrice = coffee.price <= maxPrice;
      const matchesSearch =
        coffee.name.toLowerCase().includes(search.toLowerCase()) ||
        coffee.description.toLowerCase().includes(search.toLowerCase());
      return matchesRoast && matchesPrice && matchesSearch;
    });
  }, [maxPrice, roastFilter, search]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-display font-semibold text-coffee-roast">
            Coffee Shop
          </h1>
          <p className="mt-2 max-w-xl text-sm text-coffee-brown/80">
            Browse our freshly roasted coffees and filter by roast, price, and flavor.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search coffee..."
              className="h-10 w-64 rounded-full border border-white/20 bg-white/60 px-4 text-sm text-coffee-roast shadow-sm outline-none transition focus:border-coffee-brown"
            />
          </div>
          <div className="flex items-center gap-3">
            <select
              value={roastFilter}
              onChange={(event) => setRoastFilter(event.target.value as RoastLevel | "All")}
              className="h-10 rounded-full border border-white/20 bg-white/60 px-4 text-sm text-coffee-roast shadow-sm outline-none transition focus:border-coffee-brown"
            >
              <option value="All">All roasts</option>
              {roastOptions.map((roast) => (
                <option key={roast} value={roast}>
                  {roast}
                </option>
              ))}
            </select>
            <div className="flex items-center gap-2">
              <span className="text-sm text-coffee-brown/70">Up to</span>
              <input
                type="range"
                min={10}
                max={30}
                step={1}
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
                className="h-2 w-32 cursor-pointer accent-coffee-brown"
              />
              <span className="text-sm font-semibold text-coffee-roast">${maxPrice}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 text-sm text-coffee-brown/70">
          <span>
            Showing <strong className="text-coffee-roast">{filteredCoffees.length}</strong> of <strong className="text-coffee-roast">{coffees.length}</strong> coffees
          </span>
        </div>
      </div>

      {filteredCoffees.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-white/20 bg-white/60 p-10 text-center text-sm text-coffee-brown/80 shadow-soft">
          No coffees match your filters yet. Try broadening your search or adjusting the roast.
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCoffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      )}
    </section>
  );
}
