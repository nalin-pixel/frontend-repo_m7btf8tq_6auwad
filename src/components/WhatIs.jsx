import { motion } from 'framer-motion'

export default function WhatIs(){
  return (
    <section id="what" className="relative bg-[#0B1226] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">The invisible energy source beneath your feet</h2>
            <ul className="space-y-3 text-white/80">
              <li>Teratherm is a patented surface energy collector.</li>
              <li>Hidden beneath resin-bound or paved finishes, it captures solar gain, ambient air energy, and ground energy.</li>
              <li>This energy is delivered to heat pumps for:</li>
              <li className="ml-4">• Home heating and cooling</li>
              <li className="ml-4">• Domestic hot water</li>
              <li className="ml-4">• Refrigeration and chilled water</li>
              <li className="ml-4">• Pools, spas, and hot tubs</li>
              <li>Durable: load-bearing up to 40t/m² — suitable for driveways, car parks, and even helipads.</li>
              <li>Aesthetic: available in multiple resin-bound surface finishes, blending seamlessly into any property.</li>
            </ul>
            <div className="mt-6">
              <a href="/technology" className="px-5 py-3 rounded-md bg-blue-500 hover:bg-blue-600 transition">Learn More About The Technology</a>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1751486289950-5c4898a4c773?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQaXBld29yayUyMGluc3RhbGx8ZW58MHwwfHx8MTc2MzM3OTgwN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Pipework install" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1650986421673-ee5374955162?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW5pc2hlZCUyMHJlc2luJTIwZHJpdmV3YXl8ZW58MHwwfHx8MTc2MzM3OTgwN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Finished resin driveway" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
