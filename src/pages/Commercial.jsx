import Navbar from '../components/Navbar'
import CTA from '../components/CTA'

export default function Commercial(){
  return (
    <div className="bg-[#0B1226] text-white min-h-screen">
      <Navbar/>
      <main className="pt-24 max-w-7xl mx-auto px-6">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-full h-72 object-cover"/>
        </div>
        <h1 className="text-4xl font-bold mt-6">Carbon savings. Payback. Net Zero compliance.</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-2">Case studies</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Stadium project.</li>
              <li>Schools (Rawmarsh Sandhill, St Luke’s).</li>
              <li>Helipad Estate (large mixed-use).</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-2">Benefits for organisations</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>ROI 300%+ on schools within 6 years.</li>
              <li>Helps meet Net Zero carbon goals.</li>
              <li>Handles large surface areas (car parks, playgrounds, public spaces).</li>
              <li>Durable for heavy traffic.</li>
            </ul>
          </div>
        </div>
        <a href="/contact" className="inline-block mt-6 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700">Contact Us for Commercial Solutions</a>
      </main>
      <div className="mt-10"><CTA/></div>
    </div>
  )
}
