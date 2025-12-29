import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <img src="/opeltech.svg" alt="Opel Tech" className="logo-img" />
                </div>

                {/* Desktop Navigation */}
                <ul className="navbar-menu">
                    {navItems.map((item, index) => (
                        <li key={item.name} className="navbar-item" style={{ animationDelay: `${index * 0.1}s` }}>
                            <a href={item.href} className="navbar-link">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="navbar-cta">
                    <button className="btn btn-primary">Get Started</button>
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
                    <a
                        key={item.name}
                        href={item.href}
                        className="mobile-menu-link"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                ))}
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    Get Started
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
