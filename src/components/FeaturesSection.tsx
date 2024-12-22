import React from 'react';
import { Shield, Zap, Smartphone, Globe, Clock, Lock } from 'lucide-react';

const features = [
  {
    title: 'Core Banking',
    description: 'Modern, cloud-native core banking platform built for the future of finance',
    icon: Shield,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Payment Solutions',
    description: 'Comprehensive payment processing and management system for global transactions',
    icon: Zap,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Digital Banking',
    description: 'Full-featured digital banking suite for modern financial institutions',
    icon: Smartphone,
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Global Coverage',
    description: 'Operate seamlessly across borders with multi-currency support',
    icon: Globe,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    title: 'Real-time Processing',
    description: 'Process transactions instantly with our high-performance infrastructure',
    icon: Clock,
    color: 'bg-pink-100 text-pink-600'
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade security with advanced fraud prevention and compliance',
    icon: Lock,
    color: 'bg-indigo-100 text-indigo-600'
  }
];

export default function FeaturesSection() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to build the future of banking
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Our comprehensive platform provides all the tools and features you need to create
            exceptional financial experiences.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flow-root">
                <div className="-mt-6">
                  <div>
                    <span className={`inline-flex p-3 rounded-lg ${feature.color} ring-4 ring-white`}>
                      <feature.icon className="h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}