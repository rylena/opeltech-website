import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function ScrollManager() {
    const location = useLocation();

    useEffect(() => {
        const pendingSection = window.sessionStorage.getItem('pendingSection');

        if (pendingSection) {
            window.sessionStorage.removeItem('pendingSection');
            window.requestAnimationFrame(() => {
                const target = document.getElementById(pendingSection);
                target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            return;
        }

        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <div className="app">
                <ScrollManager />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                </Routes>
                <Footer />
                <WhatsAppButton />
            </div>
        </Router>
    );
}

export default App;
