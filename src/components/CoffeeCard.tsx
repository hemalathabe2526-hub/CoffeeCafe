"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";
import type { CoffeeProduct } from "@/data/coffees";
import { useCart } from "@/context/cart";
import { formatCurrency, daysSince, formatDaysAgo } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function CoffeeCard({
  coffee,
  highlight = false,
  showDetails = true,
}: {
  coffee: CoffeeProduct;
  highlight?: boolean;
  showDetails?: boolean;
}) {
  const { dispatch } = useCart();
  const router = useRouter();
  const freshDays = useMemo(() => daysSince(coffee.roastDate), [coffee.roastDate]);

  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden flex flex-col h-full rounded-2xl border border-white/20 bg-white/60 p-5 shadow-soft backdrop-blur transition-all hover:border-coffee-brown/40 ${
        highlight ? "ring-2 ring-coffee-caramel/60" : ""
      }`}
    >
      <div className="relative mb-4 flex justify-end gap-2 z-10">
        <span className="rounded-full bg-coffee-brown/10 px-3 py-1 text-xs font-semibold text-coffee-brown">
          {coffee.roastLevel}
        </span>
        <span className="rounded-full bg-coffee-caramel/15 px-3 py-1 text-xs font-semibold text-coffee-roast">
          {formatDaysAgo(freshDays)}
        </span>
      </div>
      <div className="relative mb-4 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-coffee-brown/10 via-coffee-latte/60 to-transparent">
        <Image
          src={coffee.image}
          alt={coffee.name}
          width={160}
          height={160}
          className="h-36 w-36 object-cover rounded-lg mix-blend-multiply"
          priority={highlight}
        />
        <span className="steam" aria-hidden="true" />
        <span className="steam" style={{ left: "38%", animationDelay: "0.4s" }} aria-hidden="true" />
        <span className="steam" style={{ left: "62%", animationDelay: "0.8s" }} aria-hidden="true" />
      </div>
      <div className="space-y-3 flex flex-col flex-1">
        <h3 className="text-lg font-semibold tracking-tight text-coffee-roast">
          <Link href={`/shop/${coffee.id}`}>{coffee.name}</Link>
        </h3>
        <p className="text-sm text-coffee-brown/80">{coffee.description}</p>

        {showDetails ? (
          <div className="flex flex-wrap items-center gap-2 text-xs text-coffee-brown/70">
            {coffee.flavorNotes.map((note) => (
              <span
                key={note}
                className="rounded-full bg-coffee-latte/70 px-2 py-1"
              >
                {note}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-coffee-roast">
              {formatCurrency(coffee.price)}
            </div>
            <div className="text-xs text-coffee-brown/60">{coffee.origin}</div>
          </div>
          <button
            type="button"
            onClick={() => {
              dispatch({
                type: "add",
                item: {
                  id: coffee.id,
                  name: coffee.name,
                  price: coffee.price,
                  image: coffee.image,
                },
              });
              router.push("/cart");
            }}
            className="inline-flex items-center gap-2 rounded-full bg-coffee-brown px-4 py-2 text-sm font-semibold text-coffee-cream shadow-sm transition hover:bg-coffee-roast"
          >
            Add to cart
          </button>
        </div>
      </div>
    </motion.article>
  );
}
