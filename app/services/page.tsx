import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services | Sumic Capital - Investment Solutions for Africa',
  description: 'Comprehensive investment services for founders, investors, advisors, and partners. Connect, fund, and scale African businesses with Sumic Capital.',
}

export default function ServicesPage() {
  const services = [
    {
      id: 'founders',
      title: 'For Founders',
      subtitle: 'Get funded as a founder',
      description: 'Connect with our robust list of investors to access funds for your business.',
      icon: '🚀',
      bgColor: 'bg-[#023251]',
      textColor: 'text-white',
      features: [
        'Access to verified investors across Africa',
        'Complete funding deals within 14 days',
        'Professional dataroom assistance',
        'Expert advisory support',
        'Legal and compliance guidance',
        'Post-investment mentorship'
      ],
      benefits: [
        { title: 'Fast Funding', desc: 'Accelerated investment process' },
        { title: 'Verified Investors', desc: 'Pre-screened, serious investors only' },
        { title: 'Expert Support', desc: '24/7 guidance throughout the process' }
      ],
      cta: 'List Your Startup',
      link: '/for-founders'
    },
    {
      id: 'investors',
      title: 'For Investors',
      subtitle: 'Find your next viable investment',
      description: 'Invest in verified startups and businesses across diverse African markets.',
      icon: '💰',
      bgColor: 'bg-[#20EF0E]',
      textColor: 'text-black',
      features: [
        'Curated investment opportunities',
        'Complete due diligence reports',
        'Portfolio management tools',
        'Direct founder communication',
        'Risk assessment analytics',
        'Exit strategy planning'
      ],
      benefits: [
        { title: 'Vetted Deals', desc: 'Thoroughly screened opportunities' },
        { title: 'Market Intelligence', desc: 'Deep African market insights' },
        { title: 'Secure Transactions', desc: 'Protected investment processes' }
      ],
      cta: 'Start Investing',
      link: '/for-investors'
    },
    {
      id: 'advisors',
      title: 'For Advisors',
      subtitle: 'Join our advisory team',
      description: 'Accelerate and strengthen the growth of the African startup ecosystem.',
      icon: '👥',
      bgColor: 'bg-gray-800',
      textColor: 'text-white',
      features: [
        'Connect with high-potential startups',
        'Flexible engagement models',
        'Competitive advisory fees',
        'Professional networking opportunities',
        'Industry recognition and exposure',
        'Long-term partnership benefits'
      ],
      benefits: [
        { title: 'Quality Startups', desc: 'Work with vetted, promising companies' },
        { title: 'Fair Compensation', desc: 'Transparent fee structure' },
        { title: 'Network Growth', desc: 'Connect with ecosystem leaders' }
      ],
      cta: 'Become an Advisor',
      link: '/for-advisors'
    },
    {
      id: 'partners',
      title: 'For Partners',
      subtitle: 'Connect with leading African startups',
      description: 'Partner with us to support the next generation of African innovation.',
      icon: '🤝',
      bgColor: 'bg-blue-700',
      textColor: 'text-white',
      features: [
        'Access to startup ecosystem',
        'Co-marketing opportunities',
        'Revenue sharing models',
        'Strategic partnership benefits',
        'Brand exposure across Africa',
        'Innovation collaboration'
      ],
      benefits: [
        { title: 'Market Access', desc: 'Reach emerging African markets' },
        { title: 'Innovation Pipeline', desc: 'Early access to new technologies' },
        { title: 'Strategic Growth', desc: 'Expand your business network' }
      ],
      cta: 'Partner With Us',
      link: '/for-partners'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Registration',
      description: 'Sign up and select your role on our platform',
      icon: '📝'
    },
    {
      step: '02',
      title: 'Verification',
      description: 'Complete our thorough verification process',
      icon: '✅'
    },
    {
      step: '03',
      title: 'Connection',
      description: 'Get matched with relevant opportunities',
      icon: '🔗'
    },
    {
      step: '04',
      title: 'Success',
      description: 'Achieve your investment or funding goals',
      icon: '🎯'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#023251] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-[#20EF0E]">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive investment solutions designed to connect African startups 
              with global capital through secure, transparent processes.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#20EF0E] mb-2">1000+</div>
                <div className="text-gray-300">Verified Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#20EF0E] mb-2">$5M+</div>
                <div className="text-gray-300">Capital Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#20EF0E] mb-2">50+</div>
                <div className="text-gray-300">Successful Deals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#20EF0E] mb-2">6</div>
                <div className="text-gray-300">African Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#023251] mb-6">
              Choose Your Path to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're looking to raise capital, invest in startups, provide advisory services, 
              or build strategic partnerships, we have the right solution for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`${service.bgColor} ${service.textColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                    <p className={`text-sm ${service.textColor === 'text-black' ? 'opacity-70' : 'opacity-80'}`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className={`text-lg mb-8 ${service.textColor === 'text-black' ? 'opacity-80' : 'opacity-90'} leading-relaxed`}>
                  {service.description}
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className={`${service.textColor === 'text-black' ? 'bg-black/10' : 'bg-white/10'} rounded-xl p-4`}>
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className={`text-sm ${service.textColor === 'text-black' ? 'opacity-70' : 'opacity-80'}`}>
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${service.textColor === 'text-black' ? 'opacity-70' : 'opacity-80'}`}>
                      {service.features.length} key features
                    </span>
                  </div>
                  <Link href={service.link}>
                    <button className={`${
                      service.textColor === 'text-black' 
                        ? 'bg-[#023251] text-white hover:bg-blue-800' 
                        : 'bg-[#20EF0E] text-black hover:bg-green-500'
                    } px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl`}>
                      {service.cta} →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#023251] mb-6">
              What You Get with Each Service
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive features designed for your success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-[#023251]">{service.title}</h3>
                </div>

                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#20EF0E] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link href={service.link}>
                    <button className="bg-[#023251] hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all w-full">
                      Learn More About {service.title.split(' ')[1]}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#023251] mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to get started with Sumic Capital
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#023251] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="text-2xl font-bold text-[#20EF0E] mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-[#023251] mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Connector line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block w-full h-0.5 bg-[#20EF0E] mt-8 relative">
                    <div className="absolute right-0 top-0 w-3 h-3 bg-[#20EF0E] rounded-full transform translate-x-1.5 -translate-y-1"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sumic Capital */}
      <section className="py-20 bg-[#023251] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Why Choose <span className="text-[#20EF0E]">Sumic Capital</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#20EF0E] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">African Market Expertise</h4>
                    <p className="text-gray-300">Deep understanding of African business landscape and investment opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#20EF0E] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Rigorous Verification</h4>
                    <p className="text-gray-300">All users undergo thorough verification for maximum security and trust.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#20EF0E] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Technology-Driven</h4>
                    <p className="text-gray-300">Built by Sumic IT Solutions with cutting-edge technology and security.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#20EF0E] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
                    <p className="text-gray-300">Round-the-clock assistance to ensure your success on our platform.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 text-black">
              <h3 className="text-2xl font-bold text-[#023251] mb-6">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-8">
                Join thousands of successful users who trust Sumic Capital for their 
                investment and funding needs across Africa.
              </p>
              
              <div className="space-y-4">
                <Link href="/signup">
                  <button className="w-full bg-[#20EF0E] hover:bg-green-500 text-black px-6 py-4 rounded-lg font-semibold transition-all shadow-lg">
                    Create Your Account
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full border-2 border-[#023251] text-[#023251] hover:bg-[#023251] hover:text-white px-6 py-4 rounded-lg font-semibold transition-all">
                    Contact Our Team
                  </button>
                </Link>
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-600">
                <p>Free registration • Verified users only • 24/7 support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}