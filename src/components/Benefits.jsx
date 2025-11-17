import { Leaf, EyeOff, VolumeX } from 'lucide-react'

export default function Benefits(){
  const items = [
    {icon: VolumeX, title: 'Silent', desc: 'No noisy outdoor fans.'},
    {icon: EyeOff, title: 'Invisible', desc: 'Energy harvesting built into your driveway or terrace.'},
    {icon: Leaf, title: 'Sustainable', desc: 'Reduces carbon emissions and enables Net Zero targets.'},
  ]
  return (
    <section className="bg-[#0B1226] text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {items.map(({icon:Icon,title,desc})=> (
          <div key={title} className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center"><Icon className="text-blue-300"/></div>
            <div>
              <div className="font-semibold">{title}</div>
              <div className="text-white/70 text-sm">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
