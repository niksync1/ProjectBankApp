import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Banking for the</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
              Digital Age
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-blue-100 sm:text-2xl max-w-2xl">
            Transform your financial institution with our modern core banking platform. Built for the future of finance.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/demo"
              className="group inline-flex items-center px-8 py-3 text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/documentation"
              className="inline-flex items-center px-8 py-3 text-base font-medium rounded-lg text-white border-2 border-white hover:bg-white/10 transition-all duration-200"
            >
              Documentation
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16">
            <p className="text-blue-100 text-sm font-medium mb-4">Trusted by leading financial institutions</p>
            <div className="flex space-x-8">
              <div className="h-8 w-32 bg-white/10 rounded-lg"></div>
              <div className="h-8 w-32 bg-white/10 rounded-lg"></div>
              <div className="h-8 w-32 bg-white/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 lg:h-20 fill-current text-gray-50 block"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </div>
  );
}