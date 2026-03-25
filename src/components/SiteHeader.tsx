"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCartCount } from "@/context/cart";
import { useState } from "react";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-coffee-latte/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-coffee-brown to-coffee-roast text-coffee-cream shadow-md transition group-hover:shadow-lg">
            <span className="font-display text-lg font-bold">B</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-coffee-roast">
              Brew &amp; Bean
            </span>
            <span className="text-[10px] text-coffee-brown/60 uppercase tracking-widest">
              Premium Coffee
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm font-medium text-coffee-roast md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 transition-colors hover:bg-coffee-brown/10 hover:text-coffee-roast ${
                  active ? "text-coffee-roast bg-coffee-brown/8" : "text-coffee-brown/75"
                }`}
              >
                {link.label}
                {active ? (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-x-2 -bottom-2.5 h-0.5 rounded-full bg-coffee-brown"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Cart button */}
          <Link
            href="/shop"
            className="relative inline-flex items-center gap-2 rounded-full border border-coffee-brown/25 bg-white/70 px-4 py-2 text-sm font-semibold text-coffee-roast shadow-sm transition hover:bg-white hover:shadow-md"
          >
            <span className="text-base">🛒</span>
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-coffee-brown text-[10px] font-bold text-coffee-cream"
              >
                {cartCount}
              </motion.span>
            ) : null}
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="flex md:hidden items-center justify-center h-9 w-9 rounded-full border border-coffee-brown/20 bg-white/60 text-coffee-roast transition hover:bg-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="text-base">{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden border-t border-white/15 bg-coffee-latte/95 backdrop-blur-md px-4 py-4 space-y-1"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-coffee-brown/10 text-coffee-roast font-semibold"
                    : "text-coffee-brown/80 hover:bg-coffee-brown/8 hover:text-coffee-roast"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </motion.div>
      )}
    </header>
  );
}
