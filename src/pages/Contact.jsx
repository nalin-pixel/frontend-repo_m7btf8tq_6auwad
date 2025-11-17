import { useState } from 'react'
import Navbar from '../components/Navbar'
import CTA from '../components/CTA'

const BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try{
      const res = await fetch(`${BASE}/api/contact`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)})
      if(!res.ok) throw new Error('Request failed')
      setStatus('Thank you — we will get back to you shortly.')
      setForm({name:'', email:'', message:''})
    }catch(err){
      setStatus('Something went wrong. Please email info@teratherm-energy.com')
    }
  }

  return (
    <div className="bg-[#0B1226] text-white min-h-screen">
      <Navbar/>
      <main className="pt-24 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={submit} className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
            <input className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 placeholder-white/50" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
            <input className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 placeholder-white/50" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
            <textarea className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 placeholder-white/50 h-32" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
            <button type="submit" className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700">Send Message</button>
            {status && <div className="text-white/80">{status}</div>}
          </form>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2">📩 info@teratherm-energy.com</div>
            <div className="mb-2">☎ 0203 905 5506</div>
            <div>Office location: London, UK</div>
            <div className="mt-4">
              <iframe title="map" className="w-full h-64 rounded" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1%2C51.5%2C-0.0%2C51.55&amp;layer=mapnik" />
            </div>
          </div>
        </div>
      </main>
      <div className="mt-10"><CTA/></div>
    </div>
  )
}
