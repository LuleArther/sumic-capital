import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <div className="text-2xl font-bold text-white mb-2">SUMIC CAPITAL</div>
              <div className="text-lg text-gray-300">Investment Platform</div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Africa's premier investment platform connecting verified startups with global investors.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-white text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-300 hover:text-[#20EF0E] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#20EF0E] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#20EF0E] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#20EF0E] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-white text-lg">Contact</h3>
            <div className="space-y-4">
              <p className="text-gray-300">Kampala, Uganda</p>
              <p className="text-gray-300">info@sumiccapital.com</p>
              <p className="text-gray-300">+256 787 269 229</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-white text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#20EF0E] transition-colors">
                <span className="text-black font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#20EF0E] transition-colors">
                <span className="text-black font-bold">𝕏</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#20EF0E] py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-black font-semibold italic">
            Copyright © Sumic IT Solutions Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer