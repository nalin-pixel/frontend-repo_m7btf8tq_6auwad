import Navbar from '../components/Navbar'
import CaseStudies from '../components/CaseStudies'
import CTA from '../components/CTA'

export default function CaseStudiesIndex(){
  return (
    <div className="bg-[#0B1226] text-white min-h-screen">
      <Navbar/>
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-white/80 mb-6">Filter by sector and explore featured projects.</p>
        </div>
        <CaseStudies/>
      </main>
      <CTA/>
    </div>
  )
}
