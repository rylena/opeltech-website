
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
                        We're dedicated to being your ultimate destination for top-notch computer accessories.
                        Our commitment goes beyond just being a store; we aim to be your trusted partner in enhancing your computing experience.
                        Whether you're a tech enthusiast, a passionate gamer, or someone striving to optimize your workspace, we're here to meet all your needs.
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
                            Opel’s expertise extends beyond product supply to include infrastructure services such as structured cabling, voice cabling,
                            access control and IT recruiting services. Our skilled technicians design, install, and maintain structured cabling systems,
                            ensuring efficient data transmission and communication within organisations. We also provide access control solutions,
                            including key card systems and biometric authentication.
                        </p>
                        <p>
                            With over two decades of experience, we have solidified our reputation as a key player in the market,
                            serving a diverse clientele with excellence and integrity.
                        </p>
                    </div>
                    <div className="history-stat-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
                        <h3>1997</h3>
                        <p className="contact-label">Established in Dubai</p>
                        <p style={{ marginTop: '1rem', color: '#666' }}>
                            At Opel, our dedicated team of professionals brings together expertise and enthusiasm to cater to the evolving needs of our clients.
                            Whether you require cutting-edge technology solutions, reliable networking infrastructure, seamless cabling systems,
                            expert recruitment services, or high-end corporate gift hampers, we have the resources and capabilities to meet your requirements effectively.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="about-content-block animate-on-scroll">
                    <h3 className="about-subtitle" style={{ textAlign: 'center', display: 'block' }}>Core Values</h3>
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', color: '#666' }}>
                        At Opel Trading LLC, we uphold a steadfast commitment to nurturing enduring partnerships founded on trust, integrity, and collective success.
                    </p>
                    <div className="values-grid">
                        <div className="value-card">
                            <span className="value-number">01</span>
                            <h3>Client-Centric Excellence</h3>
                            <p>
                                Our priority lies in addressing our client’s needs and ensuring their utmost satisfaction.
                                Through a thorough understanding of each client's unique requirements, we tailor our solutions and services
                                to consistently surpass their expectations.
                            </p>
                        </div>
                        <div className="value-card">
                            <span className="value-number">02</span>
                            <h3>Uncompromising Quality</h3>
                            <p>
                                We are dedicated to the relentless pursuit of delivering products and services of the highest quality.
                                By staying ahead of technological advancements and industry trends, we guarantee that our clients receive
                                innovative solutions that enhance efficiency and productivity.
                            </p>
                        </div>
                        <div className="value-card">
                            <span className="value-number">03</span>
                            <h3>Empowering People</h3>
                            <p>
                                Our team of highly skilled professionals serves as the bedrock of our success.
                                We foster a culture of collaboration, continuous learning, and personal growth, empowering our employees
                                to unleash their full potential and achieve remarkable outcomes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vision */}
                <div className="vision-section animate-on-scroll">
                    <div className="vision-bg-shape"></div>
                    <div className="vision-content">
                        <h2>Our Vision</h2>
                        <p>
                            Our vision is to redefine the technological landscape by leveraging our expertise and resources to drive transformative change
                            and deliver lasting value to our esteemed clients and partners. We aim to establish ourselves as the leading provider of
                            cutting-edge computer accessories, innovative networking solutions, structured cabling, IT recruiting services and premium customizable merchandise.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            As we embark on this exciting journey, our commitment remains steadfast not only to meet but to exceed expectations,
                            ignite innovation, and foster a culture of success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
