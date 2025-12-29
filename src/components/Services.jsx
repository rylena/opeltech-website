import { useState, useEffect, useRef } from 'react';
import { getCategories, getBrandsByCategory, getAllBrandsForDisplay, getBrandLogo, getBrandWebsite } from '../data/servicesData';
import TiltedCard from './TiltedCard';
import './Services.css';


function Services() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeBrands, setActiveBrands] = useState([]);
    const servicesRef = useRef(null);
    const categories = getCategories();
    const allBrands = getAllBrandsForDisplay();

    useEffect(() => {
        // Set initial active brands (all brands when "All" is selected)
        setActiveBrands(getAllBrandsForDisplay());
    }, []);

    useEffect(() => {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = servicesRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        const brandsInCategory = getBrandsByCategory(category);
        setActiveBrands(brandsInCategory);
    };

    const isBrandActive = (brand) => {
        return activeBrands.includes(brand);
    };

    return (
        <section className="services" id="services" ref={servicesRef}>
            <div className="container">
                {/* Section Header */}
                <div className="services-header animate-on-scroll">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        <span>Our Services</span>
                    </div>
                    <h2 className="services-title">
                        Products &
                        <span className="gradient-text"> Services</span>
                    </h2>
                    <p className="services-description">
                        Explore our extensive partner network. Select a category to highlight relevant brands.
                    </p>
                </div>

                {/* Category Filter Tabs */}
                <div className="category-filter animate-on-scroll">
                    <div className="category-tabs">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Brand Grid - All brands displayed with logos, inactive ones grayed out */}
                <div className="brands-grid-container animate-on-scroll">
                    <div className="brands-grid">
                        {allBrands.map((brand, index) => {
                            const logoPath = getBrandLogo(brand);
                            const websiteUrl = getBrandWebsite(brand);

                            const BrandCard = (
                                <div
                                    className={`brand-card-wrapper ${isBrandActive(brand) ? 'active' : 'inactive'}`}
                                    style={{ animationDelay: `${(index % 24) * 0.02}s` }}
                                >
                                    {logoPath ? (
                                        <TiltedCard
                                            imageSrc={logoPath}
                                            altText={`${brand} logo`}
                                            captionText={brand}
                                            containerHeight="180px"
                                            containerWidth="100%"
                                            imageHeight="100%"
                                            imageWidth="100%"
                                            rotateAmplitude={12}
                                            scaleOnHover={1.1}
                                            showMobileWarning={false}
                                            showTooltip={true}
                                            displayOverlayContent={true}
                                            overlayContent={
                                                <div className="tilted-card-demo-text">
                                                    {brand}
                                                </div>
                                            }
                                            containerClass="brand-card-tilted-inner"
                                        />
                                    ) : (
                                        <div className="brand-card-text-fallback">
                                            <span className="brand-name">{brand}</span>
                                        </div>
                                    )}
                                </div>
                            );

                            return websiteUrl ? (
                                <a
                                    key={brand}
                                    href={websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="brand-link"
                                >
                                    {BrandCard}
                                </a>
                            ) : (
                                <div key={brand}>
                                    {BrandCard}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Active Brand Count */}
                <div className="brands-count animate-on-scroll">
                    <p>
                        {activeCategory === 'All'
                            ? `Showing all ${activeBrands.length} partner brands`
                            : `${activeBrands.length} brands in ${activeCategory}`
                        }
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Services;
