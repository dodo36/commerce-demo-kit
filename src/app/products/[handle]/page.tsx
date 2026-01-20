import { siteConfig } from '@/config/siteConfig';
import { notFound } from 'next/navigation';
import { ProductDetails } from '@/components/product/ProductDetails';
import { ProductCard } from '@/components/product/ProductCard';

export async function generateStaticParams() {
    return siteConfig.products.map((product) => ({
        handle: product.handle,
    }));
}

export default function ProductPage({ params }: { params: { handle: string } }) {
    const product = siteConfig.products.find(p => p.handle === params.handle);

    if (!product) {
        notFound();
    }

    // Cross Sells
    const relatedHandles = siteConfig.crossSellMap[product.handle] || [];
    const relatedProducts = siteConfig.products.filter(p => relatedHandles.includes(p.handle));

    return (
        <div className="section">
            <div className="container">
                <ProductDetails product={product} />

                {relatedProducts.length > 0 && (
                    <div style={{ marginTop: '6rem' }}>
                        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
                        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                            {relatedProducts.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
