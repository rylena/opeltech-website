import Hero from '../components/Hero';
import About from '../components/About';
import BrandsMarquee from '../components/BrandsMarquee';
import Contact from '../components/Contact';
import ProductsPreview from '../components/ProductsPreview';
import ServicesPreview from '../components/ServicesPreview';

function Home() {
    return (
        <div className="home-page">
            <Hero />
            <BrandsMarquee />
            <ProductsPreview />
            <ServicesPreview />
            <About />
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
}

export default Home;
