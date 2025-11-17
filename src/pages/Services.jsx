import Navbar from '../components/Navbar'
import CTA from '../components/CTA'

export default function Services(){
  const items = [
    'Heat pumps (air & ground source)',
    'Solar PV',
    'Gas boilers (hybrid systems)',
    'Underfloor heating',
    'Resin bound surfacing'
  ]
  return (
    <div className="bg-[#0B1226] text-white min-h-screen">
      <Navbar/>
      <main className="pt-24 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(i=> (
            <li key={i} className="p-6 rounded-xl border border-white/10 bg-white/5">{i}</li>
          ))}
        </ul>
      </main>
      <div className="mt-10"><CTA/></div>
    </div>
  )
}
