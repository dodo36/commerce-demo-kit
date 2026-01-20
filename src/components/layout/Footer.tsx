"use client";

import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

export function Footer() {
    return (
        <footer style={{ borderTop: '1px solid var(--color-border)', paddingTop: '4rem', paddingBottom: '2rem', background: 'var(--color-surface)' }}>
            <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                <div>
                    <h3 className="text-lg font-bold mb-4">{siteConfig.brand.name}</h3>
                    <p className="text-sm text-muted" style={{ maxWidth: '300px' }}>
                        Elevated essentials for the modern lifestyle.
                        <br /><br />
                        {siteConfig.brand.legal.address}
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Shop</h4>
                    <div className="flex flex-col gap-2 text-sm text-muted">
                        <Link href="/products">All Products</Link>
                        <Link href="/products">New Arrivals</Link>
                        <Link href="/products">Best Sellers</Link>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Support</h4>
                    <div className="flex flex-col gap-2 text-sm text-muted">
                        <Link href="#">Shipping & Returns</Link>
                        <Link href="#">FAQ</Link>
                        <Link href="#">Contact Us</Link>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Newsletter</h4>
                    <p className="text-sm text-muted mb-4">Subscribe for updates and exclusive offers.</p>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Email" className="input" style={{ backgroundColor: 'white' }} />
                        <button
                            className="btn btn-primary"
                            onClick={() => alert("Thanks for subscribing! (Demo Only)")}
                        >
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                <div className="flex justify-between text-sm text-muted" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                    <p>© {new Date().getFullYear()} {siteConfig.brand.legal.companyName} All rights reserved.</p>
                    <div className="flex gap-4">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
