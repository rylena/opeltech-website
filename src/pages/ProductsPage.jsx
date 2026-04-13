import { useState } from 'react';
import { getProductCategories, getBrandsByCategory, getBrandLogo, getAllBrandsForDisplay } from '../data/servicesData';
import './ProductsPage.css';

function ProductsPage() {
    const categories = ['All', ...getProductCategories()];
    const [activeCategory, setActiveCategory] = useState('All');

    const allBrands = getAllBrandsForDisplay();
    const activeBrands = activeCategory === 'All' 
        ? allBrands 
        : getBrandsByCategory(activeCategory);

    return (
        <div className="products-page" style={{ paddingTop: '100px' }}>
            <div className="container">
                <div className="page-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary)' }}>Our{' '}<span className="gradient-text">Products</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        We partner with the world's leading technology brands to bring you enterprise-grade hardware, software, and accessories.
                    </p>
                </div>

                <div className="products-filter-container">
                    {categories.map(cat => (
                        <button 
                            key={cat} 
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <p className="brands-count">
                    {activeCategory === 'All' 
                        ? `Showing all ${allBrands.length} partner brands`
                        : `Highlighting ${activeBrands.length} brands in ${activeCategory}`
                    }
                </p>

                <div className="brands-grid">
                    {allBrands.map((brand) => {
                        const logo = getBrandLogo(brand);
                        const isHighlighted = activeBrands.includes(brand);
                        return (
                            <div key={brand} className={`brand-card ${isHighlighted ? 'highlighted' : 'dimmed'}`}>
                                <div className="brand-logo-container">
                                    {logo ? (
                                        <img src={logo} alt={`${brand} logo`} className="brand-logo" />
                                    ) : (
                                        <span className="brand-placeholder-text">{brand}</span>
                                    )}
                                </div>
                                <div className="brand-name">{brand}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;
