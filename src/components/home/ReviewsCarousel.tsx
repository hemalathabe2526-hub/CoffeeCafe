"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ava R.",
    snippet:
      "The aroma is incredible and the flavor stays bright even when iced. The packaging feels premium too.",
    rating: 5,
  },
  {
    name: "Marc D.",
    snippet:
      "I love the roast freshness tracker! My coffee tastes like it came straight from the roastery.",
    rating: 5,
  },
  {
    name: "Sofia L.",
    snippet:
      "The personalizer helped me find the perfect grind and roast for my espresso setup.",
    rating: 4,
  },
];

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const stars = useMemo(() => Array.from({ length: review.rating }, () => "★"), [review.rating]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-display font-semibold text-coffee-roast">
            Customer Reviews
          </h2>
          <p className="mt-2 max-w-xl text-sm text-coffee-brown/80">
            Real stories from people who make our coffee part of their ritual.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setIndex(idx)}
              className={`h-2 w-2 rounded-full transition ${
                idx === index ? "bg-coffee-brown" : "bg-coffee-brown/30"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        key={index}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.4 }}
        className="card mt-8"
      >
        <p className="text-base text-coffee-brown/80">“{review.snippet}”</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-semibold text-coffee-roast">{review.name}</div>
          <div className="text-sm text-coffee-caramel">{stars.join(" ")}</div>
        </div>
      </motion.div>
    </section>
  );
}
