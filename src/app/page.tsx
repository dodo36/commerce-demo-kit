import { siteConfig } from '@/config/siteConfig';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/product/ProductCard';
import Link from 'next/link';

export default function Home() {
    const { hero, trust, valueProps, testimonials, faq } = siteConfig.landing;
    const featuredProducts = siteConfig.products.slice(0, 4);

    return (
        <div>
            {/* Hero */}
            <section style={{
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                backgroundColor: 'var(--color-surface)',
                overflow: 'hidden'
            }}>
                <div className="container animate-fade-in">
                    <h1 style={{
                        fontSize: 'var(--font-4xl)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: 'var(--space-6)',
                        letterSpacing: '-1px'
                    }}>
                        {hero.headline}
                    </h1>
                    <p className="text-muted" style={{
                        fontSize: 'var(--font-xl)',
                        maxWidth: '600px',
                        margin: '0 auto var(--space-8)'
                    }}>
                        {hero.subheadline}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="#contact" scroll={true}>
                            <Button style={{ minWidth: '180px' }}>{hero.primaryCta}</Button>
                        </Link>
                        <Link href="/products">
                            <Button variant="secondary" style={{ minWidth: '180px' }}>{hero.secondaryCta}</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section style={{ borderBottom: '1px solid var(--color-border)' }}>
                <div className="container flex justify-between" style={{ padding: 'var(--space-8) 0', flexWrap: 'wrap', gap: '2rem' }}>
                    {trust.map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <item.icon size={24} strokeWidth={1.5} />
                            <div>
                                <div className="font-bold text-sm">{item.title}</div>
                                <div className="text-sm text-muted">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="section">
                <div className="container">
                    <div className="flex justify-between items-end mb-8">
                        <h2 style={{ fontSize: 'var(--font-2xl)' }}>Featured Collection</h2>
                        <Link href="/products" className="text-sm font-medium hover:underline">View All</Link>
                    </div>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                        {featuredProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="section" style={{ backgroundColor: 'var(--color-custom-bg, #f4f4f5)' }}>
                <div className="container">
                    <h2 className="text-center mb-12" style={{ fontSize: 'var(--font-2xl)' }}>Why {siteConfig.brand.shortName}?</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', rowGap: '4rem' }}>
                        {valueProps.map((vp, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '50%' }}>
                                    <vp.icon size={32} strokeWidth={1} />
                                </div>
                                <h3 className="font-bold mb-2">{vp.title}</h3>
                                <p className="text-muted text-sm" style={{ maxWidth: '250px' }}>{vp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {testimonials.map((t, i) => (
                            <div key={i} style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
                                <div style={{ color: '#f59e0b', marginBottom: '1rem' }}>★★★★★</div>
                                <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>&quot;{t.text}&quot;</p>
                                <div>
                                    <div className="font-bold">{t.author}</div>
                                    <div className="text-sm text-muted">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form (Lead Capture) */}
            <section id="contact" className="section" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <div className="text-center mb-8">
                        <h2 style={{ fontSize: 'var(--font-2xl)' }}>Get in Touch</h2>
                        <p className="text-muted">Interested in a custom order or have a question?</p>
                    </div>
                    <LeadForm />
                </div>
            </section>

            {/* FAQ */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="text-center mb-12">Frequently Asked Questions</h2>
                    <div className="flex flex-col gap-4">
                        {faq.map((item, i) => (
                            <div key={i} style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)' }}>
                                <h3 className="font-bold mb-2">{item.q}</h3>
                                <p className="text-muted">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

// Client Component for generating leads
import LeadForm from '@/components/LeadForm';
