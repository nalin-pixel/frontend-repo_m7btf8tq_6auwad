import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatIs from '../components/WhatIs'
import Benefits from '../components/Benefits'
import Applications from '../components/Applications'
import Stats from '../components/Stats'
import CaseStudies from '../components/CaseStudies'
import CTA from '../components/CTA'

export default function Home(){
  return (
    <div className="bg-[#0B1226] min-h-screen">
      <Navbar/>
      <main className="pt-16">
        <Hero/>
        <WhatIs/>
        <Benefits/>
        <Applications/>
        <Stats/>
        <CaseStudies/>
        <CTA/>
      </main>
    </div>
  )
}
