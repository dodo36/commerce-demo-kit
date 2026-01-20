"use client";

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

export type CartItem = {
    handle: string;
    variantId: string;
    title: string;
    price: number;
    qty: number;
    image: string;
    options?: { name: string; value: string }[];
    item_category?: string;
    variantTitle?: string;
};

type CartState = {
    items: CartItem[];
    isOpen: boolean;
};

type CartAction =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: { variantId: string } }
    | { type: 'UPDATE_QTY'; payload: { variantId: string; qty: number } }
    | { type: 'TOGGLE_CART' }
    | { type: 'HYDRATE'; payload: CartState };

const initialState: CartState = {
    items: [],
    isOpen: false,
};

const STORAGE_KEY = 'lumiere_cart_v1';

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existing = state.items.find(i => i.variantId === action.payload.variantId);
            if (existing) {
                return {
                    ...state,
                    items: state.items.map(i =>
                        i.variantId === action.payload.variantId
                            ? { ...i, qty: i.qty + action.payload.qty }
                            : i
                    ),
                    isOpen: true
                };
            }
            return {
                ...state,
                items: [...state.items, action.payload],
                isOpen: true
            };
        }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(i => i.variantId !== action.payload.variantId)
            };
        case 'UPDATE_QTY':
            if (action.payload.qty < 1) return state; // Prevent 0
            if (action.payload.qty > 99) return state;
            return {
                ...state,
                items: state.items.map(i =>
                    i.variantId === action.payload.variantId
                        ? { ...i, qty: action.payload.qty }
                        : i
                )
            };
        case 'TOGGLE_CART':
            return { ...state, isOpen: !state.isOpen };
        case 'HYDRATE':
            return action.payload;
        default:
            return state;
    }
}

const CartContext = createContext<{
    state: CartState;
    addItem: (item: CartItem) => void;
    removeItem: (variantId: string) => void;
    updateQty: (variantId: string, qty: number) => void;
    toggleCart: () => void;
    subtotal: number;
    count: number;
} | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Load from local storage on mount
    useEffect(() => {
        if (typeof window === 'undefined') return;
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                if (parsed && Array.isArray(parsed.items)) {
                    dispatch({ type: 'HYDRATE', payload: { ...initialState, items: parsed.items } });
                }
            }
        } catch (e) {
            console.warn("Cart hydration failed", e);
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        if (typeof window === 'undefined') return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
        } catch (e) {
            console.warn("Cart save failed", e);
        }
    }, [state.items]);

    const addItem = (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item });
    const removeItem = (variantId: string) => dispatch({ type: 'REMOVE_ITEM', payload: { variantId } });
    const updateQty = (variantId: string, qty: number) => dispatch({ type: 'UPDATE_QTY', payload: { variantId, qty } });
    const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });

    const subtotal = state.items.reduce((acc, i) => acc + (i.price * i.qty), 0);
    const count = state.items.reduce((acc, i) => acc + i.qty, 0);

    return (
        <CartContext.Provider value= {{ state, addItem, removeItem, updateQty, toggleCart, subtotal, count }
}>
    { children }
    </CartContext.Provider>
  );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};
