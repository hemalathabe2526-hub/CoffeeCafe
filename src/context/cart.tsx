"use client";

import { createContext, useContext, useMemo, useReducer } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "add"; item: Omit<CartItem, "quantity"> }
  | { type: "remove"; id: string }
  | { type: "clear" };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "add": {
      const existing = state.items.find((item) => item.id === action.item.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...action.item, quantity: 1 }] };
    }
    case "remove":
      return { items: state.items.filter((item) => item.id !== action.id) };
    case "clear":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function useCartCount() {
  const { state } = useCart();
  return state.items.reduce((sum, item) => sum + item.quantity, 0);
}
