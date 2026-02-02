import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Philosophy from './components/Philosophy';
import Packages from './components/Packages';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Hero scrolled={scrolled} />
      <Statistics />
      <About />
      <Services />
      <Products />
      <Philosophy />
      <Packages />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
