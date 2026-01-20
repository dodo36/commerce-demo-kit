"use client";

import { useState, useEffect } from 'react';
import { Product } from '@/config/siteConfig';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/lib/cartStore';
import { track } from '@/lib/analytics';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function ProductDetails({ product }: { product: Product }) {
    const { addItem, toggleCart } = useCart();
    const [selectedVariantId, setSelectedVariantId] = useState<string>('');
    const [qty, setQty] = useState(1);
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

    useEffect(() => {
        if (product.variants.length > 0) {
            setSelectedVariantId(product.variants[0].id);
        } else {
            setSelectedVariantId(`${product.id}_default`);
        }

        track('view_item', {
            currency: "USD",
            value: product.price,
            items: [{
                item_id: product.id,
                item_name: product.title,
                price: product.price,
                item_category: product.analyticsCategory
            }]
        });
    }, [product]);

    const handleAddToCart = () => {
        addItem({
            handle: product.handle,
            variantId: selectedVariantId,
            title: product.title,
            price: product.price,
            qty,
            image: product.images[0],
            item_category: product.analyticsCategory,
            options: [] // Simple demo doesn't capture selected options in state yet, just variantId
            // In a real app we'd map selected options to variant
        });

        track('add_to_cart', {
            currency: "USD",
            value: product.price * qty,
            items: [{
                item_id: product.id,
                item_name: product.title,
                price: product.price,
                quantity: qty
            }]
        });

        toggleCart();
    };

    const AccordionItem = ({ title, content, id }: { title: string, content: string, id: string }) => (
        <div style={{ borderBottom: '1px solid var(--color-border)' }}>
            <button
                onClick={() => setActiveAccordion(activeAccordion === id ? null : id)}
                className="flex justify-between items-center w-full py-4 font-medium text-left"
            >
                {title}
                {activeAccordion === id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {activeAccordion === id && (
                <div className="pb-4 text-sm text-muted animate-fade-in">
                    {content}
                </div>
            )}
        </div>
    );

    return (
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            {/* Gallery */}
            <div className="flex flex-col gap-4">
                {product.images.map((img, i) => (
                    <div key={i} style={{ backgroundColor: '#f0f0f0', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                        <img src={img} alt={product.title} style={{ width: '100%' }} />
                    </div>
                ))}
            </div>

            {/* Info */}
            <div style={{ position: 'sticky', top: 'var(--header-height)' }}>
                <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                    <div className="flex items-center gap-4 text-xl">
                        <span className="font-medium">${product.price}</span>
                        {product.compareAtPrice && <span className="text-muted line-through">${product.compareAtPrice}</span>}
                    </div>
                </div>

                <div className="mb-8 text-muted" style={{ lineHeight: 1.6 }}>
                    {product.description}
                </div>

                {/* Options Mock */}
                {product.options.map(opt => (
                    <div key={opt.name} className="mb-6">
                        <label className="block text-sm font-bold mb-2">{opt.name}</label>
                        <div className="flex gap-2 flex-wrap">
                            {opt.values.map(val => (
                                <button
                                    key={val}
                                    style={{
                                        padding: '8px 16px',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: 'var(--radius-sm)',
                                        backgroundColor: 'transparent',
                                    }}
                                >
                                    {val}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="flex gap-4 mb-8">
                    <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                        <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 hover:bg-gray-50">-</button>
                        <span className="px-3 py-2 w-10 text-center">{qty}</span>
                        <button onClick={() => setQty(Math.min(99, qty + 1))} className="px-3 py-2 hover:bg-gray-50">+</button>
                    </div>
                    <Button onClick={handleAddToCart} className="flex-1">
                        Add to Cart - ${(product.price * qty).toFixed(2)}
                    </Button>
                </div>

                {/* Details */}
                <div className="mt-8">
                    <AccordionItem id="shipping" title="Shipping & Returns" content={product.shippingCopy} />
                    <AccordionItem id="materials" title="Materials" content={product.materials} />
                    <AccordionItem id="care" title="Care Instructions" content={product.care} />
                </div>
            </div>
        </div>
    );
}
