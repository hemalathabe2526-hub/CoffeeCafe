export function StoreLocator() {
  const locations = [
    {
      name: "BrewBean – Fifth Avenue",
      address: "1024 5th Ave, New York, NY 10028",
      hours: "Daily 6am–10pm",
      phone: "(212) 555-0199",
    },
    {
      name: "BrewBean – Times Square",
      address: "1501 Broadway, New York, NY 10036",
      hours: "Daily 5am–12am",
      phone: "(212) 555-0123",
    },
    {
      name: "BrewBean – Grand Central",
      address: "89 E 42nd St, New York, NY 10017",
      hours: "Daily 5:30am–11pm",
      phone: "(212) 555-0145",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <span className="section-label">📍 Find Us</span>
          <h1 className="text-3xl font-display font-semibold text-coffee-roast">
            BrewBean Store Locator
          </h1>
          <p className="mt-2 max-w-xl text-sm text-coffee-brown/80">
            Find the closest BrewBean coffee house and get your favorite brew.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="col-span-2 rounded-2xl border border-white/25 bg-white/70 p-6 shadow-soft backdrop-blur">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-coffee-latte">
            <iframe
              title="BrewBean Map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48348.06734190806!2d-74.00898564035645!3d40.751659972304914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scoffee!5e0!3m2!1sen!2sus!4v1711354000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="border-0 grayscale contrast-[1.1] invert-[0.05]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="space-y-4">
          {locations.map((location) => (
            <div
              key={location.name}
              className="card-strong p-6"
            >
              <h2 className="text-lg font-semibold text-coffee-roast">
                {location.name}
              </h2>
              <div className="mt-3 space-y-1.5 border-l-2 border-coffee-caramel/30 pl-3">
                <p className="text-sm text-coffee-brown/80">{location.address}</p>
                <p className="text-[11px] font-semibold text-coffee-brown/50 uppercase tracking-widest">{location.hours}</p>
              </div>
              <a
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-coffee-brown px-5 py-2.5 text-sm font-semibold text-coffee-cream shadow-sm transition hover:bg-coffee-roast"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  location.address
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
