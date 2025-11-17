import Navbar from '../components/Navbar'
import CTA from '../components/CTA'

export default function Technology(){
  return (
    <div className="bg-[#0B1226] text-white min-h-screen">
      <Navbar/>
      <main className="pt-24 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Technology</h1>
        <p className="text-white/80 mb-6">Deep dive into system design, fluid temperatures, ΔT, and flow rates.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">Plant room photos and diagrams.</div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-3">Downloads</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li><a className="text-blue-300 hover:underline" href="#">Technical datasheet (PDF)</a></li>
              <li><a className="text-blue-300 hover:underline" href="#">Brochure (PDF)</a></li>
              <li><a className="text-blue-300 hover:underline" href="#">Installer manuals (PDF)</a></li>
            </ul>
          </div>
        </div>
      </main>
      <div className="mt-10"><CTA/></div>
    </div>
  )
}
