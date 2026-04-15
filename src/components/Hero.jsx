import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';
import './Hero.css';

function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
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

        const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-bg"></div>
            <div className="hero-grid-overlay"></div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge animate-on-scroll">
                        <span className="badge-dot"></span>
                        <span>Trusted Technology Partner Since 1997</span>
                    </div>

                    <h1 className="hero-title animate-on-scroll">
                        Advancing Your
                        <br />
                        <span className="hero-title-gradient">Infrastructure</span>
                    </h1>

                    <p className="hero-description animate-on-scroll">
                        Providing comprehensive technology solutions from world-class brands.
                        We specialize in networking, security, and enterprise hardware for your modern workspace.
                    </p>

                    <div className="hero-cta animate-on-scroll">
                        <button type="button" className="btn btn-hero-primary btn-large" onClick={() => scrollToSection('contact')}>
                            Get Started
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <Link to="/services" className="btn btn-hero-secondary btn-large">View Services</Link>
                    </div>

                    {/* Stats row instead of basic trust badges */}
                    <div className="hero-stats animate-on-scroll">
                        <div className="hero-stat">
                            <span className="hero-stat-number">27</span>
                            <span className="hero-stat-label">Years of Experience</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="hero-stat-number">43</span>
                            <span className="hero-stat-label">Partner Brands</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="hero-stat-number">UAE</span>
                            <span className="hero-stat-label">Based in Dubai</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-on-scroll">
                    <div className="hero-logo-field" aria-label="Opel Tech">
                        <img src={`${import.meta.env.BASE_URL}opellogo.svg`} alt="Opel Tech" className="hero-logo-mark" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
