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
        <div className="products-page">
            <div className="container">
                <div className="products-page-header">
                    <div className="products-page-kicker">Products and partner brands</div>
                    <h1>Our <span className="gradient-text">Products</span></h1>
                    <p>
                        We partner with the world's leading technology brands to bring you enterprise-grade hardware, software, and accessories.
                    </p>
                    <div className="products-page-summary" aria-label="Products summary">
                        <span>{allBrands.length} partner brands</span>
                        <span>{categories.length - 1} product categories</span>
                    </div>
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

                <div className="brands-count">
                    <span>{activeCategory === 'All' ? 'All partners' : activeCategory}</span>
                    <strong>
                        {activeCategory === 'All' 
                            ? `${allBrands.length} brands`
                            : `${activeBrands.length} selected`
                        }
                    </strong>
                </div>

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
