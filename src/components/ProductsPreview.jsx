import { Link } from 'react-router-dom';
import { getProductCategories, getAllBrandsForDisplay, getBrandLogo } from '../data/servicesData';
import './ProductsPreview.css';

function ProductsPreview() {
    const categories = getProductCategories().slice(0, 8);
    const allBrands = getAllBrandsForDisplay();
    const brandsCount = allBrands.length;
    const featuredBrands = allBrands.slice(0, 10);

    return (
        <section className="products-preview" aria-labelledby="products-preview-title">
            <div className="container">
                <div className="products-preview-header">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        <span>Products</span>
                    </div>
                    <h2 id="products-preview-title" className="products-preview-title">
                        Explore our{' '}
                        <span className="gradient-text">Products</span>
                    </h2>
                    <p className="products-preview-subtitle">
                        Enterprise-grade accessories, networking components, and modern workspace essentials from trusted global brands.
                    </p>
                </div>

                <div className="products-preview-grid">
                    <div className="products-preview-card products-preview-card--primary">
                        <div className="products-preview-primary-top">
                            <div className="products-preview-metric">
                                <span className="products-preview-metric-number">{brandsCount}+</span>
                                <span className="products-preview-metric-label">Partner brands</span>
                            </div>
                            <p className="products-preview-card-text">
                                Browse by category and see the brands we work with.
                            </p>
                        </div>

                        <div className="products-preview-brands" aria-label="Featured partner brands">
                            {featuredBrands.map((brand) => {
                                const logo = getBrandLogo(brand);
                                return (
                                    <div key={brand} className="products-preview-brand">
                                        {logo ? (
                                            <img className="products-preview-brand-logo" src={logo} alt={brand} loading="lazy" />
                                        ) : (
                                            <span className="products-preview-brand-fallback">{brand}</span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="products-preview-actions">
                            <Link to="/products" className="btn btn-primary btn-large">
                                View Products
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                                </svg>
                            </Link>
                            <Link to="/products" className="btn btn-secondary btn-large">Browse Brands</Link>
                        </div>
                    </div>

                    <div className="products-preview-card products-preview-card--list">
                        <h3 className="products-preview-list-title">Popular categories</h3>
                        <ul className="products-preview-chips" aria-label="Product categories">
                            {categories.map((cat) => (
                                <li key={cat} className="products-preview-chip">
                                    {cat}
                                </li>
                            ))}
                        </ul>
                        <div className="products-preview-list-footer">
                            <span className="products-preview-footnote">
                                Need something specific? We can source and supply on request.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductsPreview;

