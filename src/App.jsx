import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Domestic from './pages/Domestic'
import Commercial from './pages/Commercial'
import CaseStudiesIndex from './pages/CaseStudiesIndex'
import Technology from './pages/Technology'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/how-it-works" element={<HowItWorks/>} />
      <Route path="/domestic" element={<Domestic/>} />
      <Route path="/commercial" element={<Commercial/>} />
      <Route path="/case-studies" element={<CaseStudiesIndex/>} />
      <Route path="/technology" element={<Technology/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default App
