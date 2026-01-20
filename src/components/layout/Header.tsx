"use client";

import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cartStore';
import { siteConfig } from '@/config/siteConfig';
import { useState } from 'react';

export function Header() {
    const { count } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header style={{
            height: 'var(--header-height)',
            borderBottom: '1px solid var(--color-border)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            zIndex: 50
        }}>
            <div className="container h-full flex items-center justify-between" style={{ height: '100%' }}>
                {/* Mobile Menu Toggle */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Logo */}
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
                    {siteConfig.brand.shortName}
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: 'none', gap: '2rem' }} className="md:flex">
                    <Link href="/products" className="text-sm font-medium hover:text-muted">Shop All</Link>
                    <Link href="/about" className="text-sm font-medium hover:text-muted">Stories</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link href="/cart" className="relative">
                        <ShoppingBag size={24} strokeWidth={1.5} />
                        {count > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                backgroundColor: 'var(--color-accent)',
                                color: 'white',
                                fontSize: '10px',
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {count}
                            </span>
                        )}
                    </Link>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {menuOpen && (
                <div style={{
                    position: 'absolute',
                    top: 'var(--header-height)',
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'var(--color-bg)',
                    padding: '2rem',
                    borderTop: '1px solid var(--color-border)'
                }}>
                    <nav className="flex flex-col gap-4">
                        <Link href="/products" onClick={() => setMenuOpen(false)} className="text-xl">Shop All</Link>
                        <Link href="/cart" onClick={() => setMenuOpen(false)} className="text-xl">Cart ({count})</Link>
                    </nav>
                </div>
            )}

            <style jsx>{`
        @media (min-width: 768px) {
          .md\\:flex { display: flex !important; }
          .md\\:hidden { display: none !important; }
        }
      `}</style>
        </header>
    );
}
