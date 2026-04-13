import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Products', href: '/products' },
        { name: 'Contact Us', href: '/#contact' },
    ];

    const handleContactClick = () => {
        setMobileMenuOpen(false);
        scrollToSection('contact', { navigate });
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
                    <img src={`${import.meta.env.BASE_URL}navbar_logo.png`} alt="Opel Tech" className="logo-img" />
                </Link>

                {/* Desktop Navigation */}
                <ul className="navbar-menu">
                    {navItems.map((item, index) => (
                        <li key={item.name} className="navbar-item" style={{ animationDelay: `${index * 0.1}s` }}>
                            {item.href === '/#contact' ? (
                                <button type="button" className="navbar-link navbar-link-button" onClick={handleContactClick}>
                                    {item.name}
                                </button>
                            ) : (
                                <Link to={item.href} className="navbar-link">
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="navbar-cta">
                    <button type="button" className="btn btn-primary" onClick={handleContactClick}>Get Started</button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    item.href === '/#contact' ? (
                        <button
                            key={item.name}
                            className="mobile-menu-link"
                            type="button"
                            onClick={handleContactClick}
                        >
                            {item.name}
                        </button>
                    ) : (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="mobile-menu-link"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    )
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
