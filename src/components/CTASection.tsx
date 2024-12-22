import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-white/10 backdrop-blur-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-indigo-600/50" />
          
          <div className="relative px-6 py-16 sm:px-12 lg:px-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Transform Your Banking Experience?
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Schedule a personalized demo with our experts and discover how our platform can help you build the future of banking.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/schedule-demo"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors group"
                  >
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Call us directly</p>
                      <p className="text-lg">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-white">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email us</p>
                      <p className="text-lg">sales@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}