import Navbar from '../components/Navbar'
import CTA from '../components/CTA'

export default function About(){
  return (
    <div className="bg-[#0B1226] text-white min-h-screen">
      <Navbar/>
      <main className="pt-24 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-white/80 mb-4">Teratherm Energy Ltd — delivering invisible renewable energy through patented surface energy collectors.</p>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div>Company Reg: 00000000</div>
        </div>
      </main>
      <div className="mt-10"><CTA/></div>
    </div>
  )
}
