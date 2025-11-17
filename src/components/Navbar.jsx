import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const linkClass = ({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B1B3B]/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-500/80 border border-white/20" />
            <span className="text-white font-semibold tracking-wide">Teratherm <span className="text-blue-300">Energy</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/how-it-works" className={linkClass}>How It Works</NavLink>
            <NavLink to="/domestic" className={linkClass}>Domestic</NavLink>
            <NavLink to="/commercial" className={linkClass}>Commercial</NavLink>
            <NavLink to="/case-studies" className={linkClass}>Case Studies</NavLink>
            <NavLink to="/technology" className={linkClass}>Technology</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>
          <button aria-label="Open menu" className="md:hidden text-white" onClick={()=>setOpen(true)}>
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#0B1B3B] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-semibold">Menu</span>
              <button className="text-white" onClick={()=>setOpen(false)}><X/></button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                {to:'/how-it-works',label:'How It Works'},
                {to:'/domestic',label:'Domestic'},
                {to:'/commercial',label:'Commercial'},
                {to:'/case-studies',label:'Case Studies'},
                {to:'/technology',label:'Technology'},
                {to:'/services',label:'Services'},
                {to:'/about',label:'About'},
                {to:'/contact',label:'Contact'}
              ].map(i=> (
                <Link key={i.to} to={i.to} onClick={()=>setOpen(false)} className="text-white/90 hover:text-white px-3 py-2 rounded bg-white/5">
                  {i.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
