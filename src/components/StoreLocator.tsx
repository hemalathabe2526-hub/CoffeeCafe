export function StoreLocator() {
  const locations = [
    {
      name: "Brew & Bean – Downtown",
      address: "123 Bean Street, Coffee City",
      hours: "Mon–Fri 7am–7pm, Sat–Sun 8am–5pm",
      phone: "(555) 123-4567",
    },
    {
      name: "Brew & Bean – Market Square",
      address: "88 Roast Avenue, Coffee City",
      hours: "Mon–Sat 7am–8pm, Sun 8am–6pm",
      phone: "(555) 987-6543",
    },
    {
      name: "Brew & Bean – Harbor",
      address: "410 Port Lane, Coffee City",
      hours: "Daily 7am–9pm",
      phone: "(555) 321-7890",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-display font-semibold text-coffee-roast">
            Store Locator
          </h1>
          <p className="mt-2 max-w-xl text-sm text-coffee-brown/80">
            Find our closest location and get directions to your next coffee stop.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="col-span-2 rounded-2xl border border-white/20 bg-white/60 p-6 shadow-soft">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
            <iframe
              title="Store Locator Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3055786900405!2d-122.40641728468119!3d37.78502577975702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cf1d31d33%3A0x684decd7ea4c9dcd!2sSF%20Coffee%20Shop!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="space-y-6">
          {locations.map((location) => (
            <div
              key={location.name}
              className="rounded-2xl border border-white/20 bg-white/60 p-6 shadow-soft"
            >
              <h2 className="text-lg font-semibold text-coffee-roast">
                {location.name}
              </h2>
              <p className="mt-2 text-sm text-coffee-brown/80">{location.address}</p>
              <p className="mt-2 text-sm text-coffee-brown/80">Hours: {location.hours}</p>
              <p className="mt-1 text-sm text-coffee-brown/80">Phone: {location.phone}</p>
              <a
                className="mt-4 inline-flex items-center rounded-full bg-coffee-brown px-4 py-2 text-sm font-semibold text-coffee-cream shadow-sm transition hover:bg-coffee-roast"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  location.address
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
