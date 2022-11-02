import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import HeroSection from '../components/HeroSection';
import Portfolio from '../components/Portfolio';
import SocialLinks from '../components/SocialLinks';



const Home = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
            <SocialLinks />
        </div>
    )
}

export default Home;