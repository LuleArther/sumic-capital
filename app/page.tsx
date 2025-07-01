'use client'

import { useState, useEffect } from 'react'

export default function ModernHomepage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      content: "Sumic Capital revolutionized how we raise funding. Connected with serious investors in just 2 weeks and closed our Series A successfully.",
      name: "Sarah Kibuka",
      title: "CEO, TechFlow Uganda",
      initials: "SK",
      rating: 5
    },
    {
      id: 2,
      content: "The verification process gave us confidence in every investor we met. Raised $1.2M for our fintech startup through the platform.",
      name: "David Kimani",
      title: "Founder, PaySafe Kenya",
      initials: "DK",
      rating: 5
    },
    {
      id: 3,
      content: "As an investor, I found the due diligence quality exceptional. Made three successful investments this year through Sumic Capital.",
      name: "Amina Hassan",
      title: "Angel Investor, Tanzania",
      initials: "AH",
      rating: 5
    },
    {
      id: 4,
      content: "The advisory network helped us refine our business model before fundraising. Connected with the right mentors at the right time.",
      name: "John Mukasa",
      title: "Co-founder, AgriTech Solutions",
      initials: "JM",
      rating: 5
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentTestimonial(index)
  }

  const nextSlide = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#023251] mb-6 leading-tight">
                Professional
                <span className="block text-[#20EF0E]">Investment Services</span>
                You Can Trust
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with verified investors, founders, and advisors across Africa. 
                Build, fund, and scale your business with confidence on our secure platform.
              </p>
              <div className="flex items-center space-x-4 mb-12">
                <button className="bg-[#023251] hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg">
                  Start Investing
                </button>
                <button className="flex items-center space-x-2 text-[#023251] font-semibold hover:text-blue-800 transition-colors">
                  <div className="w-12 h-12 bg-[#20EF0E] rounded-full flex items-center justify-center">
                    <span className="text-black">▶</span>
                  </div>
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#023251] to-blue-800 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-[#023251]">$2.5M</div>
                    <div className="text-[#20EF0E] text-sm font-semibold">+24%</div>
                  </div>
                  <div className="text-gray-600 text-sm">Total Investments</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-white">
                    <div className="text-lg font-bold">50+</div>
                    <div className="text-sm opacity-80">Active Deals</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-white">
                    <div className="text-lg font-bold">1000+</div>
                    <div className="text-sm opacity-80">Investors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#023251] mb-2">11</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#023251] mb-2">25</div>
              <div className="text-gray-600 font-medium">Expert Team</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#023251] mb-2">100+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#023251] mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="bg-[#023251] text-white p-8 rounded-2xl">
              <div className="w-12 h-12 bg-[#20EF0E] rounded-lg flex items-center justify-center mb-6">
                <span className="text-black font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Verification</h3>
              <p className="text-gray-300">All parties verified for authenticity and security</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-[#023251] font-bold">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-[#023251] mb-4">High Quality</h3>
              <p className="text-gray-600">Premium investment opportunities carefully curated</p>
            </div>
            
            <div className="bg-[#20EF0E] text-black p-8 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                <span className="text-[#20EF0E] font-bold">🛡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Best Product</h3>
              <p className="opacity-80">Leading investment platform in Africa</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-[#20EF0E] font-bold">📞</span>
              </div>
              <h3 className="text-xl font-bold text-[#023251] mb-4">Top Services</h3>
              <p className="text-gray-600">24/7 support and expert guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-[#023251] rounded-3xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">About Us</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Sumic Capital is Africa's premier investment platform, connecting verified startups 
                  with global investors. We provide secure, transparent, and efficient investment 
                  solutions that drive economic growth across the continent.
                </p>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Our platform ensures all parties are thoroughly verified, creating a trusted 
                  environment for successful business relationships and investments.
                </p>
                <button className="bg-[#20EF0E] hover:bg-green-500 text-black px-6 py-3 rounded-lg font-semibold transition-all">
                  Learn More
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#023251] mb-8">Why Choose Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#20EF0E] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#023251] mb-2">15 Years Experience</h4>
                    <p className="text-gray-600">Extensive experience in African investment markets</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#20EF0E] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#023251] mb-2">24/7 Support</h4>
                    <p className="text-gray-600">Round-the-clock assistance for all users</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#20EF0E] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#023251] mb-2">Industry Certified</h4>
                    <p className="text-gray-600">Fully licensed and regulated investment platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#023251] mb-6">We Provide The Best Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive investment solutions designed to connect African startups with global capital
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#023251] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-[#023251] mb-4">For Founders</h3>
              <p className="text-gray-600 mb-6">Access verified investors and raise capital quickly</p>
              <button className="bg-[#023251] hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all">
                Get Funding
              </button>
            </div>
            
            <div className="bg-[#20EF0E] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#20EF0E] text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">For Investors</h3>
              <p className="text-black opacity-80 mb-6">Find verified startups ready for investment</p>
              <button className="bg-[#023251] hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all">
                Start Investing
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#023251] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-[#023251] mb-4">For Advisors</h3>
              <p className="text-gray-600 mb-6">Connect with founders and grow your network</p>
              <button className="bg-[#023251] hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all">
                Join Advisory
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#023251] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-[#023251] mb-4">For Partners</h3>
              <p className="text-gray-600 mb-6">Join our ecosystem and grow your business</p>
              <button className="bg-[#023251] hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all">
                Become Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#023251] mb-6">Our Working Process</h2>
            <p className="text-xl text-gray-600">Simple steps to start your investment journey</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#023251]">01</span>
              </div>
              <h3 className="text-xl font-bold text-[#023251] mb-4">Registration</h3>
              <p className="text-gray-600">Create your account and complete verification process</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#023251] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-xl font-bold text-[#023251] mb-4">Verification</h3>
              <p className="text-gray-600">Complete identity verification and due diligence</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#20EF0E] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">03</span>
              </div>
              <h3 className="text-xl font-bold text-[#023251] mb-4">Start Trading</h3>
              <p className="text-gray-600">Begin investing in verified African startups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-[#023251] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Nothing Secures you Better Than Us</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Join thousands of successful investors and founders who trust Sumic Capital 
                for their investment needs across Africa.
              </p>
              
              {/* Navigation Arrows */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                >
                  <span className="text-white text-xl">←</span>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 bg-[#20EF0E] hover:bg-green-500 rounded-full flex items-center justify-center transition-all"
                >
                  <span className="text-black text-xl">→</span>
                </button>
              </div>
            </div>
            
            {/* Testimonial Slider */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 text-black shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="flex text-[#20EF0E] text-xl">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="ml-2 font-semibold">{testimonials[currentTestimonial].rating}.0</span>
                </div>
                
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed min-h-[80px]">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#023251] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonials[currentTestimonial].initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#023251]">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600 text-sm">{testimonials[currentTestimonial].title}</div>
                  </div>
                </div>
              </div>
              
              {/* Slider Dots */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'bg-[#20EF0E] scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#023251] mb-6">
            Investment Solutions for Your Future
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your investment journey today with Africa's most trusted platform
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-[#023251] hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg">
              Get Started
            </button>
            <button className="flex items-center space-x-2 text-[#023251] font-semibold hover:text-blue-800 transition-colors">
              <div className="w-12 h-12 bg-[#20EF0E] rounded-full flex items-center justify-center">
                <span className="text-black">▶</span>
              </div>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}