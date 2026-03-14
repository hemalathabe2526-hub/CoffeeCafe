export function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-display font-semibold text-coffee-roast">
            Our Story
          </h1>
          <p className="mt-2 max-w-xl text-sm text-coffee-brown/80">
            From farm to cup, we source beans from sustainable farms and roast them with care to capture every flavor note.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold text-coffee-roast">Coffee Origins</h2>
          <p className="mt-4 text-sm text-coffee-brown/80">
            Our beans are sourced from small farms in Colombia, Ethiopia, and Sumatra. Each lot is chosen for its unique flavor profile and ethical farming practices.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-coffee-brown/80">
            <li>
              <span className="font-semibold text-coffee-roast">Fair Trade:</span> We pay premium prices to ensure farmers are
              supported.
            </li>
            <li>
              <span className="font-semibold text-coffee-roast">Direct Relationships:</span> We work directly with growers to
              understand their craft.
            </li>
            <li>
              <span className="font-semibold text-coffee-roast">Traceability:</span> Every bag includes origin and roast date.
            </li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-coffee-roast">Roasting Practice</h2>
          <p className="mt-4 text-sm text-coffee-brown/80">
            Our roasters focus on clarity and balance. We roast in small batches to preserve the aromatic oils and
            highlight the best notes in each bean.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-coffee-brown/80">
            <li>
              <span className="font-semibold text-coffee-roast">Small Batch:</span> Each roast is crafted to order and shipped
              within 3 days.
            </li>
            <li>
              <span className="font-semibold text-coffee-roast">Quality First:</span> We cup every batch to ensure consistency.
            </li>
            <li>
              <span className="font-semibold text-coffee-roast">Freshness:</span> Use the roast freshness tracker on each bag to
              know when it was roasted.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/20 bg-white/60 p-10 shadow-soft">
        <h2 className="text-xl font-semibold text-coffee-roast">Sustainability & Impact</h2>
        <p className="mt-4 text-sm text-coffee-brown/80">
          We believe in giving back. A portion of every purchase supports reforestation projects and clean-water initiatives
          in coffee-growing regions.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-coffee-latte/80 p-5">
            <h3 className="font-semibold text-coffee-roast">Reforestation</h3>
            <p className="mt-2 text-sm text-coffee-brown/80">
              Planting trees with every harvest to preserve ecosystems and support farm resilience.
            </p>
          </div>
          <div className="rounded-2xl bg-coffee-latte/80 p-5">
            <h3 className="font-semibold text-coffee-roast">Reusable Packaging</h3>
            <p className="mt-2 text-sm text-coffee-brown/80">
              Our bags are made with recyclable materials and designed for reuse.
            </p>
          </div>
          <div className="rounded-2xl bg-coffee-latte/80 p-5">
            <h3 className="font-semibold text-coffee-roast">Community Support</h3>
            <p className="mt-2 text-sm text-coffee-brown/80">
              We partner with local groups to support education and health programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
