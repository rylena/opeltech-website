import { useEffect, useRef } from 'react';
import { getServices } from '../data/servicesData';
import './ServicesPage.css';

// Service icons as SVG paths
const serviceIcons = [
    // Enterprise Networking
    <svg key="net" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    // Datacenter Solutions
    <svg key="dc" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>,
    // Unified Communications
    <svg key="uc" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
    // Access Control & Security
    <svg key="sec" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
    // Cloud & Virtualization
    <svg key="cloud" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>,
    // IT Strategy & Consulting
    <svg key="strat" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
];

function ServicesPage() {
    const services = getServices();
    const pageRef = useRef(null);

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

        const elements = pageRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="services-page" ref={pageRef}>
            {/* Gradient Hero Header */}
            <div className="services-hero">
                <div className="services-hero-bg"></div>
                <div className="container services-hero-content">
                    <div className="section-badge animate-on-scroll" style={{ margin: '0 auto 1.5rem', display: 'flex', width: 'fit-content' }}>
                        <span className="badge-dot"></span>
                        <span>Our Services</span>
                    </div>
                    <h1 className="services-hero-title animate-on-scroll">
                        Transforming Enterprise<br/>
                        <span className="services-hero-accent">IT Infrastructure</span>
                    </h1>
                    <p className="services-hero-description animate-on-scroll">
                        At Opel Tech, we deliver robust, scalable, and secure technology solutions 
                        engineered to drive your business forward in the digital era.
                    </p>

                    {/* Quick service pills */}
                    <div className="services-pills animate-on-scroll">
                        {services.map((service, index) => (
                            <a key={service.id} href={`#service-${service.id}`} className="service-pill">
                                <span className="pill-icon">{serviceIcons[index]}</span>
                                <span>{service.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Detail */}
            <div className="container">
                <div className="services-layout">
                    {services.map((service, index) => {
                        const isEven = index % 2 !== 0;
                        return (
                            <div 
                                key={service.id} 
                                id={`service-${service.id}`}
                                className={`service-row ${isEven ? 'row-reverse' : ''} animate-on-scroll`}
                            >
                                <div className="service-image-col">
                                    <div className="service-image-wrapper">
                                        <img src={`${import.meta.env.BASE_URL}${service.image.substring(1)}`} alt={service.title} className="service-img" />
                                        <div className="service-image-overlay"></div>
                                        <div className="service-image-number">0{index + 1}</div>
                                    </div>
                                </div>
                                <div className="service-text-col">
                                    <div className="service-icon-badge">
                                        {serviceIcons[index]}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p className="service-short-desc">{service.description}</p>
                                    <p className="service-long-desc">{service.longDescription}</p>
                                    <a href="/#contact" className="btn btn-primary" style={{marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
                                        Consult With Us
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA Banner */}
            <div className="services-cta-banner">
                <div className="container services-cta-content">
                    <h2>Ready to Transform Your IT?</h2>
                    <p>Let's discuss how Opel Tech can elevate your enterprise infrastructure.</p>
                    <a href="/#contact" className="btn btn-primary btn-large">
                        Get In Touch
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;
