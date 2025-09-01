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


function App() {

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
    </>
  )
}

export default App