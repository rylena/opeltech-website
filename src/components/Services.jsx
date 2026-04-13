import { useEffect, useRef } from 'react';
import { getServices } from '../data/servicesData';
import { scrollToSection } from '../utils/scrollToSection';
import './Services.css';

const IconSwitch = ({ type }) => {
    switch (type) {
        case 'Network':
            return (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="16" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="16" y="16" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="9" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                    <path d="M5 16V12C5 10.8954 5.89543 10 7 10H17C18.1046 10 19 10.8954 19 12V16" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 8V10" stroke="currentColor" strokeWidth="2" />
                </svg>
            );
        case 'Phone':
            return (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6713 11.3287 14.429 13.5 15.5L15 13L20 15V19C20 20.1046 19.1046 21 18 21C8.61116 21 3 15.3888 3 6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M14 7C14 7 15.5 7 17 8.5C18.5 10 18.5 11.5 18.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M17 4C17 4 19 4 21 6C23 8 23 10 23 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            );
        case 'Lock':
            return (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
                    <path d="M12 17.5V19" stroke="currentColor" strokeWidth="2" />
                </svg>
            );
        case 'Wifi':
            return (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8.5 16.5C9.4665 15.5335 10.7065 15 12 15C13.2935 15 14.5335 15.5335 15.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M5 13C6.866 11.134 9.266 10 12 10C14.734 10 17.134 11.134 19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M2 9C4.66667 6.33333 8.16667 5 12 5C15.8333 5 19.3333 6.33333 22 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            );
        case 'Video':
            return (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 10L20 6.5V17.5L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                </svg>
            );
        case 'Gift':
            return (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M12 12V22" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 7C12 7 12 3 9.5 3C7 3 7 7 12 7Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 7C12 7 12 3 14.5 3C17 3 17 7 12 7Z" stroke="currentColor" strokeWidth="2" />
                </svg>
            );
        default:
            return null;
    }
};

function Services() {
    const servicesRef = useRef(null);
    const services = getServices();

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

        const elements = servicesRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="services" id="services" ref={servicesRef}>
            <div className="container">
                <div className="services-header animate-on-scroll">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        <span>Professional Services</span>
                    </div>
                    <h2 className="services-title">
                        Empowering Your{' '}
                        <span className="gradient-text">Infrastructure</span>
                    </h2>
                    <p className="services-description">
                        We provide tailored enterprise IT solutions and professional services to drive your business forward.
                    </p>
                </div>

                <div className="services-cards-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-feature-card animate-on-scroll"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-icon-box">
                                <IconSwitch type={service.icon} />
                            </div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-text">{service.description}</p>
                            <div className="service-card-footer">
                                <button type="button" className="service-card-link" onClick={() => scrollToSection('contact')}>
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
