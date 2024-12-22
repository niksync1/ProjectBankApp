import React from 'react';
import { Shield, Zap, Globe, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security infrastructure with advanced fraud prevention and regulatory compliance built-in.',
    link: '/features/security'
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Process millions of transactions instantly with our high-performance cloud infrastructure.',
    link: '/features/performance'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Operate seamlessly across borders with multi-currency support and local payment methods.',
    link: '/features/global'
  }
];

export default function KeyFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for Modern Banking
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to build exceptional financial experiences
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600 text-white mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 flex-grow mb-6">
                  {feature.description}
                </p>

                <a
                  href={feature.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                >
                  Learn more
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}