"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCartCount } from "@/context/cart";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/personalizer", label: "Personalizer" },
  { href: "/brew-guide", label: "Brew Guide" },
  { href: "/subscription", label: "Subscription" },
  { href: "/locator", label: "Store Locator" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const cartCount = useCartCount();

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-coffee-latte/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-coffee-brown text-coffee-cream shadow-soft">
            <span className="font-display text-lg font-semibold">B</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-coffee-roast">
              Brew & Bean
            </span>
            <span className="text-xs text-coffee-brown/70">Premium Coffee House</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium text-coffee-roast md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3 py-2 transition-colors hover:bg-coffee-brown/10 hover:text-coffee-roast ${
                  active ? "text-coffee-roast" : "text-coffee-brown/80"
                }`}
              >
                {link.label}
                {active ? (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-coffee-brown"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/shop"
            className="relative inline-flex items-center gap-2 rounded-full border border-coffee-brown/30 bg-white/70 px-4 py-2 text-sm font-semibold text-coffee-roast shadow-sm transition hover:bg-white"
          >
            <span className="h-2 w-2 rounded-full bg-coffee-brown" />
            Shop
            {cartCount > 0 ? (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-coffee-brown text-xs font-bold text-coffee-cream">
                {cartCount}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
    </header>
  );
}
