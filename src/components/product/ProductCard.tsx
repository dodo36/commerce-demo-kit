"use client";

import Link from 'next/link';
import { Product } from '@/config/siteConfig';
import { useCart } from '@/lib/cartStore';
import { track } from '@/lib/analytics';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export function ProductCard({ product }: { product: Product }) {
    const { addItem, toggleCart } = useCart();
    const [hovered, setHovered] = useState(false);

    const handleQuickAdd = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent nav
        e.stopPropagation();

        // Default to first variant or make one up
        const variantId = product.variants[0]?.id || `${product.id}_default`;

        addItem({
            handle: product.handle,
            variantId,
            title: product.title,
            price: product.price,
            qty: 1,
            image: product.images[0],
            item_category: product.analyticsCategory,
            options: []
        });

        track('add_to_cart', {
            currency: "USD",
            value: product.price,
            items: [{
                item_id: product.id,
                item_name: product.title,
                price: product.price,
                item_category: product.analyticsCategory
            }]
        });

        toggleCart();
    };

    return (
        <div
            className="group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link href={`/products/${product.handle}`} onClick={() => {
                track('select_item', {
                    items: [{ item_id: product.id, item_name: product.title }]
                });
            }}>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)', aspectRatio: '3/4', backgroundColor: 'var(--color-surface)' }}>
                    {product.badges.length > 0 && (
                        <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 2 }}>
                            <span className="badge">{product.badges[0]}</span>
                        </div>
                    )}

                    {/* Image */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        transition: 'transform 0.5s ease'
                    }}
                        className={hovered ? "scale-105" : ""}
                    >
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Quick Add Overlay */}
                    <button
                        onClick={handleQuickAdd}
                        style={{
                            position: 'absolute',
                            bottom: 10,
                            right: 10,
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'var(--shadow-md)',
                            opacity: hovered ? 1 : 0,
                            transform: hovered ? 'translateY(0)' : 'translateY(10px)',
                            transition: 'all 0.2s ease',
                            zIndex: 3
                        }}
                    >
                        <Plus size={20} />
                    </button>
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <h3 className="text-sm font-medium">{product.title}</h3>
                    <div className="flex gap-2 text-sm text-muted">
                        <span>${product.price}</span>
                        {product.compareAtPrice && <span style={{ textDecoration: 'line-through', opacity: 0.6 }}>${product.compareAtPrice}</span>}
                    </div>
                </div>
            </Link>
            <style jsx>{`
        .scale-105 { transform: scale(1.05); }
      `}</style>
        </div>
    );
}
