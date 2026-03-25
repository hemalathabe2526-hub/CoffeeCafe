"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Ava R.",
    role: "Home Barista",
    avatar: "A",
    snippet:
      "The aroma is incredible and the flavor stays bright even when iced. The packaging feels premium too.",
    rating: 5,
    product: "Sunrise Blend",
  },
  {
    name: "Marc D.",
    role: "Coffee Enthusiast",
    avatar: "M",
    snippet:
      "I love the roast freshness tracker! My coffee tastes like it came straight from the roastery.",
    rating: 5,
    product: "Midnight Roast",
  },
  {
    name: "Sofia L.",
    role: "Espresso Lover",
    avatar: "S",
    snippet:
      "The personalizer helped me find the perfect grind and roast for my espresso setup. Game changer.",
    rating: 5,
    product: "Midday Mocha",
  },
  {
    name: "James T.",
    role: "Cold Brew Fan",
    avatar: "J",
    snippet:
      "Smoothest cold brew I've ever made at home. The coarse grind recommendation was spot on.",
    rating: 5,
    product: "Caramel Crush",
  },
];

const avatarColors = [
  "bg-amber-500/20 text-amber-700",
  "bg-blue-500/20 text-blue-700",
  "bg-emerald-500/20 text-emerald-700",
  "bg-rose-500/20 text-rose-700",
];

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const stars = useMemo(
    () => Array.from({ length: review.rating }),
    [review.rating]
  );

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
        <div className="space-y-3">
          <span className="section-label">💬 Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-roast">
            What Our Customers Say
          </h2>
          <p className="max-w-md text-sm text-coffee-brown/70 leading-relaxed">
            Real stories from people who make our coffee part of their daily ritual.
          </p>
        </div>
        {/* Dot navigation */}
        <div className="flex items-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === index
                  ? "w-7 h-2.5 bg-coffee-brown"
                  : "w-2.5 h-2.5 bg-coffee-brown/25 hover:bg-coffee-brown/50"
              }`}
              aria-label={`Review ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Review cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Active large card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="md:col-span-2 card-dark relative overflow-hidden"
          >
            {/* Decorative quote mark */}
            <span className="absolute top-4 right-6 font-display text-7xl text-white/5 leading-none select-none">
              "
            </span>
            <div className="flex items-center gap-1 mb-5">
              {stars.map((_, i) => (
                <span key={i} className="text-coffee-caramel text-base">★</span>
              ))}
            </div>
            <p className="text-lg text-white/85 leading-relaxed font-light">
              "{review.snippet}"
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${avatarColors[index % avatarColors.length]} border border-white/10`}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{review.name}</div>
                  <div className="text-xs text-white/50">{review.role}</div>
                </div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">
                {review.product}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Side mini cards */}
        <div className="flex flex-col gap-4">
          {/* Overall rating */}
          <div className="card-strong flex-1 flex flex-col justify-center items-center text-center space-y-2">
            <div className="text-5xl font-display font-bold gradient-text">4.9</div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-coffee-caramel text-lg">★</span>
              ))}
            </div>
            <p className="text-xs text-coffee-brown/60">Based on 2,400+ reviews</p>
          </div>

          {/* Next reviewer preview */}
          <div className="card flex-1">
            <p className="text-xs text-coffee-brown/50 mb-3 uppercase tracking-wide font-semibold">Up next</p>
            <p className="text-sm text-coffee-brown/80 line-clamp-3 italic">
              "{reviews[(index + 1) % reviews.length].snippet}"
            </p>
            <div className="mt-3 flex items-center gap-2">
              <div className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold ${avatarColors[(index + 1) % avatarColors.length]}`}>
                {reviews[(index + 1) % reviews.length].avatar}
              </div>
              <span className="text-xs font-semibold text-coffee-roast">
                {reviews[(index + 1) % reviews.length].name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
