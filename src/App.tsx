import './App.css'
import ContactoSection from './components/ContactoSection'
import Footer from './components/Footer'
import NuestraMetodologia from './components/NuestraMetodologia'
import PortfolioGrid from './components/PortfolioGrid'
import SobreNosotros from './components/SobreNosotros'

function App() {

  return (
    <>
      <PortfolioGrid />
      <SobreNosotros />
      <NuestraMetodologia />
      <ContactoSection />
      <Footer />
    </>
  )
}

export default App
