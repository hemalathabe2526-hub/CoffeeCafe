import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart";
import { PageTransition } from "@/components/PageTransition";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brew & Bean — Premium Coffee Experience",
  description:
    "Freshly roasted coffee, curated blends, and guided brew recipes for a cozy coffee ritual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${playfair.variable} ${poppins.variable} min-h-full bg-coffee-latte text-coffee-roast antialiased`}
      >
        <CartProvider>
          <SiteHeader />
          <PageTransition>{children}</PageTransition>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
