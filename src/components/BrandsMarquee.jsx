import './BrandsMarquee.css';
import { Link } from 'react-router-dom';
import { getAllBrandsForDisplay, getBrandLogo } from '../data/servicesData';

function BrandsMarquee() {
    const allBrands = getAllBrandsForDisplay();
    
    // Get brands with logos for the homepage display
    const brandsWithLogos = allBrands
        .map(name => ({ name, logo: getBrandLogo(name) }))
        .filter(brand => brand.logo !== null);
    
    // Split into two rows
    const midpoint = Math.ceil(brandsWithLogos.length / 2);
    const row1Brands = brandsWithLogos.slice(0, midpoint);
    const row2Brands = brandsWithLogos.slice(midpoint);

    // Triple for seamless loop
    const track1 = [...row1Brands, ...row1Brands, ...row1Brands];
    const track2 = [...row2Brands, ...row2Brands, ...row2Brands];

    return (
        <section className="brands-marquee-section">
            <div className="container">
                <div className="brands-marquee-header">
                    <h3 className="brands-marquee-label">BRANDS WE DISTRIBUTE</h3>
                    <Link to="/products" className="brands-view-all">View all &rarr;</Link>
                </div>
            </div>
            
            <div className="brands-marquee-wrapper">
                {/* Row 1 - scrolls left */}
                <div className="brands-marquee-track-container">
                    <div className="brands-marquee-track track-left">
                        {track1.map((brandInfo, index) => (
                            <div key={`r1-${brandInfo.name}-${index}`} className="brands-marquee-item">
                                <img 
                                    src={brandInfo.logo} 
                                    alt={brandInfo.name} 
                                    title={brandInfo.name}
                                    className="brands-marquee-logo"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - scrolls right */}
                <div className="brands-marquee-track-container">
                    <div className="brands-marquee-track track-right">
                        {track2.map((brandInfo, index) => (
                            <div key={`r2-${brandInfo.name}-${index}`} className="brands-marquee-item">
                                <img 
                                    src={brandInfo.logo} 
                                    alt={brandInfo.name} 
                                    title={brandInfo.name}
                                    className="brands-marquee-logo"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrandsMarquee;
