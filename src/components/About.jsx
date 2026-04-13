import { useEffect, useRef } from 'react';
import './About.css';

function About() {
    const aboutRef = useRef(null);

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

        const elements = aboutRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about" id="about" ref={aboutRef}>
            <div className="container">
                {/* Header */}
                <div className="about-header animate-on-scroll">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        <span>About Us</span>
                    </div>
                    <h2 className="about-title">
                        Welcome to
                        <span className="gradient-text"> Opel Tech</span>
                    </h2>
                </div>

                {/* Intro */}
                <div className="about-intro animate-on-scroll">
                    <p>
                        We’re dedicated to being your ultimate destination for top-notch computer accessories.
                        Our commitment goes beyond just being a store; we aim to be your trusted partner in enhancing your computing experience.
                        Whether you’re a tech enthusiast, a passionate gamer, or someone striving to optimize your workspace, we’re here to meet all your needs.
                    </p>
                    <br />
                    <p>
                        Explore our extensive collection of premium products and accessories, carefully curated to satisfy your every requirement and desire.
                        Welcome to Opel Tech, where innovation meets excellence, and we turn your computing dreams into reality!
                    </p>
                </div>

                {/* Who Are We */}
                <div className="about-content-block history-grid">
                    <div className="history-text animate-on-scroll">
                        <h3 className="about-subtitle">Who Are We</h3>
                        <p>
                            Since 1997, Opel has been a cornerstone in the vibrant landscape of Dubai’s technology industry.
                            As a leading entity in the field, we specialise in supplying a comprehensive range of computer accessories and networking components.
                        </p>
                        <p>
                            Opel’s expertise extends beyond product supply to include infrastructure services such as structural cabling, voice cabling, access control, and IT recruiting services.
                            Our skilled technicians design, install, and maintain structured cabling systems, ensuring efficient data transmission and communication within organisations.
                            We also provide access control solutions, including key card systems and biometric authentication.
                        </p>
                        <p>
                            With over two decades of experience, we have solidified our reputation as a key player in the market,
                            serving a diverse clientele with excellence and integrity.
                        </p>
                    </div>
                    <div className="history-stat-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
                        <h3>1997</h3>
                        <p className="contact-label">Established in Dubai</p>
                        <p style={{ marginTop: '1rem', color: 'var(--color-text-secondary)' }}>
                            Whether you require cutting-edge technology solutions, reliable networking infrastructure, seamless cabling systems,
                            expert recruitment services, or high-end corporate gift hampers, we have the resources and capabilities to meet your requirements effectively.
                        </p>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="mission-vision-grid">
                    <div className="mission-card animate-on-scroll">
                        <h3 className="about-subtitle">Our Mission</h3>
                        <p>
                            Opel is committed to delivering comprehensive technology solutions that empower businesses to thrive in today’s digital landscape.
                            Our mission revolves around providing excellence in IT supplies, networking, structural cabling, and IT manpower outsourcing services.
                            We are dedicated to exceeding client expectations by offering innovative, reliable, and cost-effective solutions tailored to their unique requirements.
                        </p>
                    </div>
                    <div className="vision-card-alt animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
                        <h3 className="about-subtitle">Our Vision</h3>
                        <p>
                            Our vision is to redefine the technological landscape by leveraging our expertise and resources to drive transformative change and deliver lasting value.
                            We aim to establish ourselves as the leading provider of cutting-edge computer accessories, innovative networking solutions,
                            structured cabling, IT recruiting services, and premium customizable merchandise.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="about-content-block animate-on-scroll" style={{ marginTop: '4rem' }}>
                    <h3 className="about-subtitle" style={{ textAlign: 'center', display: 'block' }}>Core Values</h3>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon-box" style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3>Empowering People</h3>
                            <p>
                                Our team of highly skilled professionals serves as the bedrock of our success.
                                We foster a culture of collaboration, continuous learning, and personal growth,
                                empowering our employees to unleash their full potential.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon-box" style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                            </div>
                            <h3>Uncompromising Quality</h3>
                            <p>
                                We are dedicated to the relentless pursuit of delivering products and services of the highest quality.
                                By staying ahead of technological advancements and industry trends, we guarantee innovative solutions.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon-box" style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </div>
                            <h3>Customer Satisfaction</h3>
                            <p>
                                Prioritizing client needs is our primary objective. Through deep understanding,
                                we ensure that each client’s specific requirements are met with excellence and integrity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
