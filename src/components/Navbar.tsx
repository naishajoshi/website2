import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Motorcycles', href: '#models' },
    { label: 'Racing', href: '#motogp' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'Dealers', href: '#dealers' },
    { label: 'Experience', href: '#test-ride' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl lg:text-3xl font-bold ducati-red">
              DUCATI
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-900 hover:text-[var(--ducati-red)] transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* MyDucati Button */}
          <div className="hidden lg:block">
            <Button 
              className="bg-ducati-red hover:bg-red-700 text-white px-6 py-2 rounded-none"
            >
              MyDucati
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-[var(--ducati-red)] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-gray-900 hover:text-[var(--ducati-red)] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <Button 
                className="w-full bg-ducati-red hover:bg-red-700 text-white py-3 rounded-none"
              >
                MyDucati
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}