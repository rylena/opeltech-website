import { useEffect, useRef } from 'react';
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
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge animate-on-scroll">
                        <span className="badge-dot"></span>
                        <span>Your Trusted IT Distributor</span>
                    </div>

                    <h1 className="hero-title animate-on-scroll">
                        Premium Hardware &
                        <span className="gradient-text"> Software Solutions</span>
                    </h1>

                    <p className="hero-description animate-on-scroll">
                        Supplying businesses with high-performance computers, servers, networking equipment, and software licenses from the world's leading technology brands.
                    </p>

                    <div className="hero-stats animate-on-scroll">
                        <div className="stat">
                            <div className="stat-number">10k+</div>
                            <div className="stat-label">Products Sold</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Enterprise Clients</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-on-scroll">
                    <div className="visual-card">
                        <div className="card-glow"></div>
                        <div className="card-content">
                            <img src="/opellogo.svg" alt="Opel Tech Innovation" className="visual-logo" />
                            <div className="pulse-rings">
                                <div className="pulse-ring"></div>
                                <div className="pulse-ring"></div>
                                <div className="pulse-ring"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll to explore</p>
            </div>
        </section>
    );
}

export default Hero;
