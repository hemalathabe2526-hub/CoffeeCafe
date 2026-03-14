export function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-coffee-latte/80 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-coffee-roast">Brew & Bean</h3>
          <p className="max-w-sm text-sm text-coffee-brown/80">
            A cozy, premium coffee experience that meets you where you are. Freshly roasted beans,
            curated blends, and easy brew guides to help you discover the perfect cup.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-coffee-roast">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-coffee-brown/70">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-coffee-roast">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-coffee-brown/70">
              <li>Contact</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-coffee-roast">Follow</h4>
            <ul className="mt-3 space-y-2 text-sm text-coffee-brown/70">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-coffee-brown/60">
        © {new Date().getFullYear()} Brew & Bean. All rights reserved.
      </div>
    </footer>
  );
}
