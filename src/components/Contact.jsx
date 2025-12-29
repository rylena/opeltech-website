
import { useEffect, useRef } from 'react';
import './Contact.css';

function Contact() {
    const contactRef = useRef(null);

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

        const elements = contactRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="contact" id="contact" ref={contactRef}>
            <div className="container">
                <div className="contact-header animate-on-scroll">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        <span>Get In Touch</span>
                    </div>
                    <h2 className="contact-title">
                        Contact
                        <span className="gradient-text"> Us</span>
                    </h2>
                    <p className="contact-description">
                        Whether you have a question about our products, need assistance with an order, or simply want to provide feedback, we’re here to help. Please feel free to reach out to us.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info Card */}
                    <div className="contact-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
                        <div className="contact-icon-wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <h3>Contact Information</h3>

                        <div className="contact-info-item">
                            <div>
                                <span className="contact-label">Phone</span>
                                <div><a href="tel:+97143922782" className="contact-link">+971 43922782</a></div>
                                <div><a href="tel:+971502363107" className="contact-link">+971 502363107</a></div>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div>
                                <span className="contact-label">Email</span>
                                <a href="mailto:sales@opeltech.ae" className="contact-link">sales@opeltech.ae</a>
                            </div>
                        </div>
                    </div>

                    {/* Dubai Address Card */}
                    <div className="contact-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
                        <div className="contact-icon-wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <h3>Dubai Office</h3>
                        <p className="address-text">
                            Sheikha Mahra Al Qusais Building<br />
                            Al Qusais Second, Office No: 54<br />
                            Dubai, UAE
                        </p>
                    </div>

                    {/* India Address Card */}
                    <div className="contact-card animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
                        <div className="contact-icon-wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 21v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"></path>
                                <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"></path>
                            </svg>
                        </div>
                        <h3>India Office</h3>
                        <p className="address-text">
                            Office No – 73 Veerananjiapura<br />
                            NH 4 Main Road Nelamangala, Taluk<br />
                            near Nelamangala, Bengaluru<br />
                            Karnataka 562123, India
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
