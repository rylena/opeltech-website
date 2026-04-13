import Hero from '../components/Hero';
import About from '../components/About';
import BrandsMarquee from '../components/BrandsMarquee';
import Contact from '../components/Contact';

function Home() {
    return (
        <div className="home-page">
            <Hero />
            <BrandsMarquee />
            <About />
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
}

export default Home;
