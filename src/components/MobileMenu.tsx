import React from 'react';
import { Menu, X } from 'lucide-react';
import { navigationData } from '../data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b z-50">
          {navigationData.map((section) => (
            <div key={section.title} className="border-t">
              <div className="px-4 py-3 font-medium">{section.title}</div>
              <div className="bg-gray-50 px-4 py-2">
                {section.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block py-2 text-gray-600 hover:text-gray-900"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}