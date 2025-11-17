import { useEffect, useState } from 'react'

const BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function CaseStudies(){
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(()=>{
    const url = `${BASE}/api/case-studies${filter==='all'?'':`?category=${filter}`}`
    fetch(url).then(r=>r.json()).then(setItems).catch(()=>{
      setItems([])
    })
  },[filter])

  const filters = ['all','domestic','commercial','education','mixed']

  return (
    <section className="bg-[#0B1226] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-6">
          {filters.map(f=> (
            <button key={f} onClick={()=>setFilter(f)} className={`px-4 py-2 rounded-md border ${filter===f? 'bg-blue-600 text-white border-blue-500':'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'}`}>
              {f[0].toUpperCase()+f.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((cs, i)=> (
            <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src={cs.image_url || 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=1000&auto=format&fit=crop'} alt={cs.title} className="w-full h-40 object-cover"/>
              <div className="p-4">
                <div className="text-sm text-blue-300 uppercase">{cs.category}</div>
                <h4 className="font-semibold">{cs.title}</h4>
                <p className="text-white/70 text-sm">{cs.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
