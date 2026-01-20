"use client";

import { X } from 'lucide-react';

export function CheckoutModal({ onClose }: { onClose: () => void }) {
    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '1rem'
        }}>
            <div style={{
                backgroundColor: 'var(--color-bg)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '400px',
                width: '100%',
                position: 'relative',
                boxShadow: 'var(--shadow-lg)'
            }}>
                <button
                    onClick={onClose}
                    style={{ position: 'absolute', top: '1rem', right: '1rem' }}
                >
                    <X size={20} />
                </button>

                <h3 className="text-xl font-bold mb-2">Demo Checkout</h3>
                <p className="text-muted mb-6">
                    This is a demonstration environment. In a live store, this would connect to Shopify Checkout securely.
                </p>

                <div style={{ padding: '1rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                    <strong>Dev Note:</strong> Analytics event <code>begin_checkout</code> has been fired.
                </div>

                <button
                    onClick={onClose}
                    className="btn btn-primary full"
                    style={{ marginTop: '1.5rem' }}
                >
                    Got it
                </button>
            </div>
        </div>
    );
}
