import React from 'react';
import { ArrowRight } from 'lucide-react';

const showcaseItems = [
  {
    title: 'Digital Banking Platform',
    description: 'Deliver exceptional digital banking experiences across web and mobile platforms.',
    image: '/images/digital-banking.webp',
    features: ['Mobile-first design', 'Personalized UX', 'Real-time updates'],
    link: '/products/digital-banking'
  },
  {
    title: 'Payment Processing',
    description: 'Process payments globally with support for multiple currencies and payment methods.',
    image: '/images/payments.webp',
    features: ['Instant settlements', 'Fraud protection', 'Multi-currency'],
    link: '/products/payments'
  },
  {
    title: 'Core Banking System',
    description: 'Modern, cloud-native core banking system built for scale and reliability.',
    image: '/images/core-banking.webp',
    features: ['Cloud-native', 'API-first', 'Scalable'],
    link: '/products/core-banking'
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Solutions that Drive Innovation
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore our comprehensive suite of banking solutions
          </p>
        </div>

        <div className="space-y-20">
          {showcaseItems.map((item, index) => (
            <div 
              key={item.title}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={item.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}