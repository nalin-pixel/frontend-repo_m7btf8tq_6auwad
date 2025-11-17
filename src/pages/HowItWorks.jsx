import Navbar from '../components/Navbar'
import CTA from '../components/CTA'

export default function HowItWorks(){
  return (
    <div className="bg-[#0B1226] text-white min-h-screen">
      <Navbar/>
      <main className="pt-24 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-white/80 mb-8">Air + solar + ground → collector → heat pump → heating/cooling/hot water</p>
        <div className="grid lg:grid-cols-3 gap-6">
          {[{
            title:'Output',value:'~47 W/m²'
          },{
            title:'Temperature range',value:'–5°C to +40°C'
          },{
            title:'Load',value:'40 t/m²'
          },{
            title:'Surface lifespan',value:'25+ years'
          }].map(card=> (
            <div key={card.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-blue-300 text-sm uppercase mb-2">{card.title}</div>
              <div className="text-2xl font-semibold">{card.value}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold mb-2">Benefits vs air source heat pumps</h2>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            <li>No defrost cycles</li>
            <li>More stable winter CoP</li>
            <li>Invisible & silent</li>
          </ul>
        </div>
      </main>
      <div className="mt-10"><CTA/></div>
    </div>
  )
}
