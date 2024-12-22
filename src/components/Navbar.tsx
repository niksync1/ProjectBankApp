import React, { useState } from 'react';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';
import { navigationData } from '../data/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-blue-600">Modern Platform</a>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navigationData.map((section) => (
              <NavDropdown
                key={section.title}
                title={section.title}
                items={section.items}
              />
            ))}
            <a
              href="/contact"
              className="ml-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact
            </a>
          </div>

          <MobileMenu
            isOpen={isMobileMenuOpen}
            setIsOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>
    </nav>
  );
}