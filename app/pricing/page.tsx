import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | Sumic Capital - Choose Your Right Plan',
  description: 'Transparent pricing for founders, investors, advisors, and partners. Join Sumic Capital with our flexible plans designed for your success.',
}

export default function PricingPage() {
  const founderPlans = [
    {
      name: 'Monthly',
      price: '$11.99',
      period: 'per month',
      description: 'Paid every month until deal completion',
      features: [
        'Listing Review & Publishing',
        'Investor Outreach/Reminders', 
        'Platform Priority Support',
        'Access to Verified Investors',
        'Real-time Deal Tracking'
      ],
      popular: false,
      buttonText: 'Get Started',
      note: '*Due Diligence Fee not included'
    },
    {
      name: 'Quarterly',
      price: '$30.99',
      period: 'per quarter',
      description: 'Paid every quarter until deal completion',
      features: [
        'Listing Review & Publishing',
        'Investor Outreach/Reminders',
        'Platform Priority Support', 
        'Access to Verified Investors',
        'Real-time Deal Tracking',
        'Advanced Analytics Dashboard'
      ],
      popular: true,
      buttonText: 'Get Started',
      note: '*Due Diligence Fee not included'
    },
    {
      name: 'Yearly',
      price: '$122.30',
      period: 'per year',
      description: 'Paid yearly until deal completion',
      features: [
        'Listing Review & Publishing',
        'Investor Outreach/Reminders',
        'Platform Priority Support',
        'Access to Verified Investors', 
        'Real-time Deal Tracking',
        'Advanced Analytics Dashboard',
        'Dedicated Account Manager'
      ],
      popular: false,
      buttonText: 'Get Started',
      note: '*Due Diligence Fee not included'
    }
  ]

  const commissionRates = [
    {
      range: '0-50K',
      rate: '10%',
      description: 'For deals up to $50,000'
    },
    {
      range: '50.01K-500K', 
      rate: '6%',
      description: 'For deals between $50,001 - $500,000'
    },
    {
      range: '500.01K+',
      rate: '4.5%',
      description: 'For deals above $500,000'
    }
  ]

  const advisorCommission = {
    rate: '5%',
    description: 'on all invoices'
  }

  const freemiumFeatures = [
    {
      title: 'Marketplace',
      description: 'As an Advisor or Investor, you can engage with a wide range of listings (also known as startups).',
      icon: '🏪'
    },
    {
      title: 'Advisor Directory', 
      description: 'Hire the right help for whatever needs you have as a Startup Founder or an Investor.',
      icon: '👥'
    },
    {
      title: 'Instant Messaging',
      description: 'Send introductory conversations, strike deals or make inquiries with other users.',
      icon: '💬'
    },
    {
      title: 'Escrow',
      description: 'To ensure seamless transactions and protect both parties involved in a transaction.',
      icon: '🔒'
    },
    {
      title: 'Verified Parties',
      description: 'Safety and trust are our top priorities. We verify all parties using the Sumic Capital platform.',
      icon: '✅'
    },
    {
      title: '24/7 Support',
      description: 'We are on standby to help once you reach out to our support team for any questions or concerns.',
      icon: '🎧'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#023251] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Choose Your <span className="text-[#20EF0E]">Right Plan</span>!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Owning a Sumic Capital account is <span className="text-[#20EF0E] font-semibold">free</span> for all. 
            However, there are some associated costs to certain aspects of the Sumic Capital platform 
            which have been designed to match your goals, whether you're dipping your toes in or diving deep.
          </p>
        </div>
      </section>

      {/* Founder Listing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#023251] mb-6">For Founder Listings</h2>
            <p className="text-xl text-gray-600">Choose the plan that works best for your fundraising timeline</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {founderPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl p-8 ${plan.popular ? 'ring-4 ring-[#20EF0E] scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#20EF0E] text-black px-4 py-2 rounded-full font-bold text-sm">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#023251] mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-[#023251] mb-2">{plan.price}</div>
                  <div className="text-gray-600 mb-4">{plan.period}</div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-[#20EF0E] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-[#20EF0E] hover:bg-green-500 text-black' 
                    : 'bg-[#023251] hover:bg-blue-800 text-white'
                }`}>
                  {plan.buttonText}
                </button>

                <p className="text-xs text-gray-500 mt-4 text-center">{plan.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#023251] mb-6">Also</h2>
            <p className="text-xl text-gray-600">We receive commissions based on certain activities</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* From Founders */}
            <div>
              <h3 className="text-2xl font-bold text-[#023251] mb-8 text-center">From Founders</h3>
              <div className="grid gap-6">
                {commissionRates.map((rate, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-[#023251] mb-2">{rate.rate}</div>
                    <div className="text-lg font-semibold text-gray-700 mb-1">{rate.range} deals</div>
                    <div className="text-sm text-gray-600">{rate.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* From Advisors */}
            <div>
              <h3 className="text-2xl font-bold text-[#023251] mb-8 text-center">From Advisors</h3>
              <div className="bg-[#20EF0E] rounded-2xl p-12 text-center">
                <div className="text-5xl font-bold text-black mb-4">{advisorCommission.rate}</div>
                <div className="text-xl font-semibold text-black">{advisorCommission.description}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freemium Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#023251] mb-6">Freemium Benefits for All</h2>
            <p className="text-xl text-gray-600">
              Essential features available to everyone on Sumic Capital
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {freemiumFeatures.map((feature, index) => (
              <div key={index} className="bg-[#023251] text-white p-8 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#023251] mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#023251] mb-4">
                Do I need to pay upfront for founder listings?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, founder listing fees are paid in advance based on your chosen plan (monthly, quarterly, or yearly). 
                These fees continue until your deal is completed successfully.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#023251] mb-4">
                What's included in the Due Diligence Fee?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The Due Diligence Fee covers comprehensive verification of your business, financial analysis, 
                legal document review, and market assessment. This fee is separate from listing fees and 
                is discussed during the onboarding process.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#023251] mb-4">
                Are there any hidden fees?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No, we believe in complete transparency. All fees are clearly outlined upfront. 
                The only costs are your chosen listing plan, commission on successful deals, 
                and the due diligence fee when applicable.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#023251] mb-4">
                Can I cancel my plan anytime?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, you can cancel your plan at any time. However, payments are non-refundable 
                as they cover active services already provided during your listing period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#023251] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful founders and investors on Africa's premier investment platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#20EF0E] hover:bg-green-500 text-black px-8 py-4 rounded-lg font-semibold transition-all shadow-lg">
              Start Your Free Account
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#023251] px-8 py-4 rounded-lg font-semibold transition-all">
              Contact Sales Team
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300 text-sm">
              Free account setup • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}