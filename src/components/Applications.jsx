export default function Applications(){
  return (
    <section className="bg-[#0B1226] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
        {[{
          title:'Domestic',
          photo:'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1200&auto=format&fit=crop',
          list:['Driveways, terraces, patios','Whole-home heating & cooling','Pools, spas, and hot water'],
          cta:'Explore Domestic Applications',
          link:'/domestic'
        },{
          title:'Commercial',
          photo:'https://images.unsplash.com/photo-1577041247063-4e73e0496bb1?q=80&w=1200&auto=format&fit=crop',
          list:['Schools & academies','Stadiums, workshops, hangars','Public realm projects'],
          cta:'Explore Commercial Applications',
          link:'/commercial'
        }].map(card => (
          <div key={card.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <img src={card.photo} alt={card.title} className="w-full h-72 object-cover opacity-70 group-hover:opacity-90 transition"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <ul className="text-white/80 space-y-1 mb-4">
                {card.list.map(i=> <li key={i}>• {i}</li>)}
              </ul>
              <a href={card.link} className="inline-block px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition">{card.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
