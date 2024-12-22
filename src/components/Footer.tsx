import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company Info</h3>
            <div className="space-y-3">
              <p className="text-sm">Modern Platform Inc.</p>
              <p className="text-sm">123 Tech Street</p>
              <p className="text-sm">San Francisco, CA 94105</p>
              <p className="text-sm">contact@example.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/documentation" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="/support" className="hover:text-white transition-colors">Support Center</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Modern Platform Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}