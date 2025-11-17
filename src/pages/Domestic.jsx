import Navbar from '../components/Navbar'
import CTA from '../components/CTA'

export default function Domestic(){
  return (
    <div className="bg-[#0B1226] text-white min-h-screen">
      <Navbar/>
      <main className="pt-24 max-w-7xl mx-auto px-6">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-full h-72 object-cover"/>
        </div>
        <h1 className="text-4xl font-bold mt-6">Comfort, performance, and beauty combined.</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-2">Case studies</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Cannes Villa → heating, cooling, pool, DHW.</li>
              <li>UK Private Estate → helipad, hangar, pool, spa.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-2">Benefits for homeowners</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Invisible, aesthetic, silent system.</li>
              <li>Year-round comfort (heating + cooling).</li>
              <li>Pool/spa integration.</li>
              <li>Adds value to property.</li>
            </ul>
          </div>
        </div>
        <a href="/case-studies" className="inline-block mt-6 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700">See More Case Studies</a>
      </main>
      <div className="mt-10"><CTA/></div>
    </div>
  )
}
