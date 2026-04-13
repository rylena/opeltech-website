import { Link } from 'react-router-dom';
import { getServices } from '../data/servicesData';
import './ServicesPreview.css';

function ServicesPreview() {
    const services = getServices().slice(0, 3);

    return (
        <section className="services-preview" aria-labelledby="services-preview-title">
            <div className="container services-preview-container">
                <div className="services-preview-copy">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        <span>Services</span>
                    </div>
                    <h2 id="services-preview-title" className="services-preview-title">
                        Solutions that keep your{' '}
                        <span className="gradient-text">business running</span>
                    </h2>
                    <p className="services-preview-subtitle">
                        From structured cabling and access control to enterprise networking and IT consulting—Opel Tech builds reliable infrastructure you can scale.
                    </p>
                    <div className="services-preview-actions">
                        <Link to="/services" className="btn btn-primary btn-large">
                            Explore Services
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                            </svg>
                        </Link>
                        <a href="/#contact" className="btn btn-secondary btn-large">
                            Request a Quote
                        </a>
                    </div>
                </div>

                <div className="services-preview-cards" role="list">
                    {services.map((s) => (
                        <div key={s.id} className="services-preview-card" role="listitem">
                            <div className="services-preview-card-title">{s.title}</div>
                            <div className="services-preview-card-text">{s.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesPreview;

