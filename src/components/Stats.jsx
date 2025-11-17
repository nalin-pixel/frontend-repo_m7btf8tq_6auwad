export default function Stats(){
  const stats = [
    {label:'Thermal output', value:'Up to 47 W/m²'},
    {label:'Energy bills reduction (with PV)', value:'Up to 70%'},
    {label:'Payback period', value:'4–6 years (Rawmarsh Sandhill)'},
    {label:'Annual generation', value:'200,000+ kWh (Great Missenden estate)'},
  ]
  return (
    <section className="bg-[#0B1226] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(s=> (
          <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-blue-300 text-sm uppercase tracking-wide mb-2">{s.label}</div>
            <div className="text-2xl font-semibold">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
