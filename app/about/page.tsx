import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Sumic Capital - Investment Platform by Sumic IT Solutions',
  description: 'Learn about Sumic Capital, Africa\'s premier investment platform built by Sumic IT Solutions. Connecting verified startups with global investors since 2025.',
}

export default function AboutPage() {
  const stats = [
    { number: "2019", label: "Founded" },
    { number: "20+", label: "Team Members" },
    { number: "50+", label: "African Countries" },
    { number: "1000+", label: "Satisfied Clients" }
  ]

  const values = [
    {
      title: "Innovation",
      description: "Driving technological advancement across African markets",
      icon: "💡"
    },
    {
      title: "Trust",
      description: "Building secure, verified relationships between investors and founders",
      icon: "🤝"
    },
    {
      title: "Growth",
      description: "Empowering startups and businesses to scale successfully",
      icon: "📈"
    },
    {
      title: "Excellence",
      description: "Delivering world-class investment platform solutions",
      icon: "⭐"
    }
  ]

  const milestones = [
    {
      year: "2019",
      title: "Sumic IT Solutions Founded",
      description: "Started as a technology solutions company in Kampala, Uganda"
    },
    {
      year: "2022",
      title: "Expansion Across Africa",
      description: "Extended operations to 6 African countries with 50+ team members"
    },
    {
      year: "2024",
      title: "Investment Platform Vision",
      description: "Identified the need for a trusted investment platform in Africa"
    },
    {
      year: "2025",
      title: "Sumic Capital Launch",
      description: "Launched Africa's premier verified investment platform"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#023251] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-[#20EF0E]">Sumic Capital</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Built by Sumic IT Solutions, we're Africa's premier investment platform 
                connecting verified startups with global investors through secure, 
                transparent technology.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#20EF0E]">6+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#20EF0E]">1000+</div>
                  <div className="text-sm text-gray-300">Successful Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#20EF0E]">50+</div>
                  <div className="text-sm text-gray-300">Expert Team</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#023251] mb-6">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To democratize access to investment opportunities across Africa by creating 
                  a trusted, verified platform that connects ambitious founders with 
                  serious investors.
                </p>
                <div className="bg-[#20EF0E] rounded-xl p-4">
                  <p className="text-black font-semibold">
                    "Empowering Africa's entrepreneurial ecosystem through technology"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-[#023251] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#023251] mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong>Sumic IT Solutions</strong> was founded in 2019 with a vision to bridge 
                  the digital divide across Africa. Starting in Kampala, Uganda, we quickly 
                  established ourselves as a trusted technology partner for businesses 
                  across the continent.
                </p>
                <p>
                  Over the years, we've worked with over 1000 clients, helping them leverage 
                  technology for growth and innovation. Our expertise spans software development, 
                  digital transformation, and now, investment technology.
                </p>
                <p>
                  In 2025, recognizing the challenges faced by African startups in accessing 
                  verified investors, we launched <strong>Sumic Capital</strong> - a platform 
                  that brings together our years of technology expertise with deep understanding 
                  of the African business landscape.
                </p>
              </div>
            </div>
            
            <div className="bg-[#023251] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why We Built Sumic Capital</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#20EF0E] mt-1">✓</span>
                  <span>African startups struggle to find verified investors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#20EF0E] mt-1">✓</span>
                  <span>Investors need trusted deal flow and due diligence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#20EF0E] mt-1">✓</span>
                  <span>Existing platforms lack African market focus</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#20EF0E] mt-1">✓</span>
                  <span>Need for secure, transparent investment processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#023251] mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Sumic Capital
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#023251] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#023251] mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">From tech solutions to investment platform</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#20EF0E]"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#20EF0E]">
                      <div className="text-2xl font-bold text-[#023251] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-[#023251] mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative">
                    <div className="w-6 h-6 bg-[#20EF0E] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#023251] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Africa's Investment Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're a founder seeking investment or an investor looking for opportunities, 
            Sumic Capital is your trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#20EF0E] hover:bg-green-500 text-black px-8 py-4 rounded-lg font-semibold transition-all shadow-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#023251] px-8 py-4 rounded-lg font-semibold transition-all">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}