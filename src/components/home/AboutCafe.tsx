"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Sourcing",
    description: "We partner with sustainable farms to source 100% Arabica beans from high-altitude regions.",
    icon: "🌍",
  },
  {
    title: "Roasting",
    description: "Our beans are small-batch roasted to unlock specific flavor profiles — from bright citrus to smoky dark chocolate.",
    icon: "🔥",
  },
  {
    title: "Grinding",
    description: "Precision grinding ensures the perfect surface area for your specific brewing method.",
    icon: "⚡",
  },
  {
    title: "Brewing",
    description: "We use filtered water at exactly 195-205°F to ensure a clean, balanced extraction every time.",
    icon: "☕",
  },
];

const products = [
  { name: "Single-Origin Beans", category: "Core" },
  { name: "Organic Oat & Almond Milk", category: "Add-on" },
  { name: "Direct Trade Cane Sugar", category: "Sweetener" },
  { name: "Filtered Mineral Water", category: "Essential" },
];

export function AboutCafe() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 border-t border-coffee-brown/10">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Process Section */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="section-label">✨ The Craft</span>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-roast">
              How We Make Your Cup
            </h2>
            <p className="text-sm text-coffee-brown/70 leading-relaxed max-w-md">
              From the soil to the sip, every step of our process is designed for peak flavor and sustainability.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-5 space-y-3"
              >
                <span className="text-2xl">{step.icon}</span>
                <h3 className="font-semibold text-coffee-roast">{step.title}</h3>
                <p className="text-xs text-coffee-brown/70 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="space-y-8">
          <div className="card-dark h-full flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-semibold text-coffee-caramel">
                Our Premium Ingredients
              </h2>
              <p className="text-sm text-white/60 leading-relaxed">
                A great cup of coffee is only as good as what goes into it. We never compromise on quality.
              </p>
              <div className="space-y-4">
                {products.map((item) => (
                  <div key={item.name} className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-sm text-white/80">{item.name}</span>
                    <span className="text-[10px] uppercase tracking-widest text-coffee-caramel font-bold">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs text-white/40 italic">
                * We source exclusively from Direct Trade partners ensuring farmers receive 25% above Fair Trade prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
