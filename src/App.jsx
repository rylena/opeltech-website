import Navbar from './components/Navbar'
import StaggeredMenu from './components/StaggeredMenu'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import './App.css'

function App() {
    const menuItems = [
        { label: 'Home', link: '#home' },
        { label: 'Services', link: '#services' },
        { label: 'Solutions', link: '#solutions' },
        { label: 'About', link: '#about' },
        { label: 'Contact', link: '#contact' }
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' }
    ];

    return (
        <div className="app">
            <div className="desktop-nav">
                <Navbar />
            </div>
            <div className="mobile-nav">
                <StaggeredMenu
                    items={menuItems}
                    displaySocials={false}
                    accentColor="#2563eb"
                    logoUrl="/opeltech.svg"
                />
            </div>
            <Hero />
            <Services />
            <About />
            <Contact />
        </div>
    )
}

export default App
