"use client";

import { useCart } from "@/context/cart";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [receiptID, setReceiptID] = useState("");
  const [orderItems, setOrderItems] = useState(state.items);
  const [orderSubtotal, setOrderSubtotal] = useState(0);
  const [orderDate, setOrderDate] = useState("");

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cgst = subtotal * 0.025;
  const sgst = subtotal * 0.025;
  const total = subtotal + cgst + sgst;

  const placeOrder = () => {
    setOrderItems([...state.items]);
    setOrderSubtotal(subtotal);
    setOrderDate(new Date().toLocaleString());
    setOrderPlaced(true);
    setReceiptID(`ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
    // Clear cart after placing order
    setTimeout(() => {
      dispatch({ type: "clear" });
    }, 100);
  };

  if (orderPlaced) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="rounded-3xl border border-white/20 bg-white/70 p-10 shadow-soft backdrop-blur"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-coffee-roast text-3xl text-coffee-cream">
            ✓
          </div>
          <h1 className="mt-6 text-3xl font-display font-semibold text-coffee-roast">
            Order Confirmed!
          </h1>
          <p className="mt-2 text-coffee-brown/80">
            Thank you for your purchase. Your beans are being freshly roasted.
          </p>
          
          <div className="mt-8 rounded-2xl bg-white/50 p-6 text-left">
            <h2 className="font-semibold text-coffee-roast text-xl">Brew & Bean</h2>
            <p className="text-sm text-coffee-brown/70">{orderDate}</p>
            <h3 className="mt-4 font-semibold text-coffee-roast">Receipt {receiptID}</h3>
            <div className="mt-4 space-y-3 divide-y divide-coffee-brown/10">
              {orderItems.map((item) => (
                <div key={item.id} className="pt-3 flex justify-between text-sm">
                  <span className="text-coffee-brown/80">{item.quantity}x {item.name}</span>
                  <span className="font-medium text-coffee-roast">{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
              <div className="pt-4 space-y-2 text-sm text-coffee-brown/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(orderSubtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>CGST (2.5%)</span>
                  <span>{formatCurrency(orderSubtotal * 0.025)}</span>
                </div>
                <div className="flex justify-between">
                  <span>SGST (2.5%)</span>
                  <span>{formatCurrency(orderSubtotal * 0.025)}</span>
                </div>
              </div>
              <div className="pt-4 flex justify-between font-bold text-coffee-roast text-lg">
                <span>Total</span>
                <span>{formatCurrency(orderSubtotal * 1.05)}</span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.print()}
              className="inline-block rounded-full border border-coffee-brown/20 bg-white/60 px-8 py-3 text-sm font-semibold text-coffee-roast transition hover:bg-white"
            >
              Download / Print Receipt
            </button>
            <Link
              href="/shop"
              className="inline-block rounded-full bg-coffee-brown px-8 py-3 text-sm font-semibold text-coffee-cream transition hover:bg-coffee-roast"
            >
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="text-3xl font-display font-semibold text-coffee-roast mb-10">Your Cart</h1>
      
      {state.items.length === 0 ? (
        <div className="rounded-2xl border border-white/20 bg-white/60 p-10 text-center shadow-soft">
          <p className="text-coffee-brown/80">Your cart is completely empty.</p>
          <Link
            href="/shop"
            className="mt-6 inline-block rounded-full bg-coffee-brown px-6 py-2.5 text-sm font-semibold text-coffee-cream transition hover:bg-coffee-roast"
          >
            Browse Coffees
          </Link>
        </div>
      ) : (
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/60 p-4 shadow-sm">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover mix-blend-multiply" />
                ) : (
                  <div className="h-20 w-20 rounded-xl bg-coffee-brown/10 flex items-center justify-center">☕</div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-coffee-roast mb-1">{item.name}</h3>
                  <div className="text-sm font-medium text-coffee-brown">{formatCurrency(item.price)}</div>
                </div>
                <div className="flex items-center gap-4 pr-2">
                  <span className="text-sm text-coffee-brown/80">Qty: {item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "remove", id: item.id })}
                    className="text-sm font-semibold text-red-800/60 hover:text-red-800 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/60 p-6 shadow-soft h-fit sticky top-24">
            <h2 className="text-lg font-semibold text-coffee-roast mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm text-coffee-brown/80 divide-y divide-coffee-brown/10">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>CGST (2.5%)</span>
                <span>{formatCurrency(cgst)}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>SGST (2.5%)</span>
                <span>{formatCurrency(sgst)}</span>
              </div>
              <div className="flex justify-between pt-3 font-semibold text-coffee-roast text-base">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
            
            <button
              onClick={placeOrder}
              className="mt-8 w-full rounded-full bg-coffee-roast px-6 py-3 text-sm font-semibold text-coffee-cream transition hover:bg-black/90 shadow-lg"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
