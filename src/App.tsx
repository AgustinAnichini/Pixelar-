import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Soluciones from './components/soluciones'
import Servicios from './components/servicios'
import ContactoSection from './components/ContactoSection'
import Footer from './components/Footer'
import NuestraMetodologia from './components/NuestraMetodologia'
import PortfolioGrid from './components/PortfolioGrid'
import SobreNosotros from './components/SobreNosotros'
import { useEffect, useState } from 'react'


function App() {
 const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <Header/>
      <Hero/>
      <Soluciones/>
      <Servicios/>
      <PortfolioGrid />
      <SobreNosotros />
      <NuestraMetodologia />
      <ContactoSection />
      <Footer />

      <a
        href="https://wa.me/5491138721497"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Contactar por WhatsApp"
      >
        <img src="./whatsapp-icon.svg" alt="boton de whatsapp" className='p-1'/>
      </a>

      {/* Botón de ir hacia arriba */}
      {showScrollToTop && (
        <button onClick={scrollToTop} className="scroll-to-top-button">
          &#8593;
        </button>
      )}
    </>
  )
}

export default App