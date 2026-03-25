"use client";

import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Support: [
    { label: "Contact", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns", href: "#" },
  ],
  Explore: [
    { label: "Brew Guide", href: "/brew-guide" },
    { label: "Subscription", href: "/subscription" },
    { label: "Store Locator", href: "/locator" },
  ],
};

const socials = [
  { label: "Instagram", icon: "📸", href: "#" },
  { label: "Facebook", icon: "📘", href: "#" },
  { label: "Twitter / X", icon: "🐦", href: "#" },
  { label: "YouTube", icon: "▶️", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/15 bg-gradient-to-br from-[#2A1B16] via-[#3d2218] to-[#4B2E2B] text-white">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-coffee-caramel/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-coffee-brown/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-10">
        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-coffee-caramel to-coffee-brown">
                <span className="font-display text-xl font-bold text-white">B</span>
              </div>
              <div>
                <p className="font-semibold text-white tracking-wide">Brew &amp; Bean</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Premium Coffee House</p>
              </div>
            </div>
            <p className="text-sm text-white/55 leading-relaxed">
              A cozy, premium coffee experience that meets you where you are. Freshly roasted beans,
              curated blends, and easy brew guides.
            </p>
            {/* Newsletter */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">
                Stay in the loop
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 rounded-full bg-white/8 border border-white/10 px-4 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-coffee-caramel/50 transition"
                />
                <button
                  type="submit"
                  className="rounded-full bg-coffee-caramel px-4 py-2 text-sm font-semibold text-coffee-roast transition hover:bg-white shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Links grid */}
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                  {section}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition hover:text-white link-underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Follow Us
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-3 py-2.5 text-xs text-white/60 transition hover:bg-white/10 hover:text-white"
                >
                  <span>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/8" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Brew &amp; Bean. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/60 transition">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
