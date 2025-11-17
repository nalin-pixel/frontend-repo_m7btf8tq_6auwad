import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative min-h-[90vh] bg-[#0B1226] text-white flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1226]/60 via-[#0B1226]/70 to-[#0B1226] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} className="py-24">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded bg-blue-500/80 border border-white/20" />
            <span className="text-xl font-semibold tracking-wide">Teratherm <span className="text-blue-300">Energy</span></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            YOUR SURFACE · YOUR ENERGY · YOUR FUTURE
          </h1>
          <p className="mt-5 text-white/80 max-w-xl">
            Heating · Cooling · Hot Water · Refrigeration · Pools & Spas
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#what" className="px-5 py-3 rounded-md bg-blue-500 hover:bg-blue-600 transition">Discover How It Works</a>
            <a href="/contact" className="px-5 py-3 rounded-md border border-white/20 hover:bg-white/10 transition">Contact Us</a>
          </div>
        </motion.div>
        <div className="hidden md:block" />
      </div>
    </section>
  )
}
