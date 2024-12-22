import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  title: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  title: string;
  items: DropdownItem[];
}

export default function NavDropdown({ title, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {title}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 w-64 mt-2 bg-white border rounded-lg shadow-lg py-2 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-50"
            >
              <div className="font-medium">{item.title}</div>
              {item.description && (
                <div className="text-sm text-gray-500">{item.description}</div>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}