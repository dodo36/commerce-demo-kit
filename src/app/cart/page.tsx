"use client";

import { useCart } from '@/lib/cartStore';
import { Button } from '@/components/ui/Button';
import { CheckoutModal } from '@/components/ui/Modal';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { track } from '@/lib/analytics';

export default function CartPage() {
    const { state, removeItem, updateQty, subtotal } = useCart();
    const [showCheckout, setShowCheckout] = useState(false);

    useEffect(() => {
        track('view_cart', {
            currency: "USD",
            value: subtotal,
            items: state.items
        });
    }, [subtotal, state.items]);

    const handleCheckout = () => {
        track('begin_checkout', {
            currency: "USD",
            value: subtotal,
            items: state.items
        });
        setShowCheckout(true);
    };

    if (state.items.length === 0) {
        return (
            <div className="section container text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                <Link href="/products">
                    <Button>Continue Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="section" style={{ minHeight: '60vh' }}>
            <div className="container">
                <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

                <div className="grid" style={{ gridTemplateColumns: '1fr 340px', gap: '4rem' }}>
                    {/* Items */}
                    <div className="flex flex-col gap-6">
                        {state.items.map(item => (
                            <div key={item.variantId} className="flex gap-4 p-4 border border-gray-100 rounded-lg">
                                <div style={{ width: '100px', height: '100px', backgroundColor: '#f0f0f0', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>

                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold">{item.title}</h3>
                                        {item.variantTitle && <div className="text-sm text-muted">{item.variantTitle}</div>}
                                    </div>
                                    <div className="font-medium">${item.price}</div>
                                </div>

                                <div className="flex flex-col items-end justify-between">
                                    <button onClick={() => removeItem(item.variantId)} className="text-muted hover:text-red-500">
                                        <Trash2 size={18} />
                                    </button>
                                    <div className="flex items-center border rounded">
                                        <button onClick={() => updateQty(item.variantId, item.qty - 1)} className="px-2 py-1">-</button>
                                        <span className="px-2">{item.qty}</span>
                                        <button onClick={() => updateQty(item.variantId, item.qty + 1)} className="px-2 py-1">+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div style={{ height: 'fit-content', padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)' }}>
                        <h2 className="text-xl font-bold mb-4">Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-4 text-muted">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <div className="flex justify-between mb-6 font-bold text-lg border-t pt-4">
                            <span>Total</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <Button fullWidth onClick={handleCheckout}>Checkout</Button>
                    </div>
                </div>
            </div>

            {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}

            <style jsx>{`
        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}
