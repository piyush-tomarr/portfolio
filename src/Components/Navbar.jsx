import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Piyush_Resume.pdf';
    link.download = 'Piyush_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="bg-red-600 shadow-md fixed w-[100vw] top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">Portfolio</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-white text-red-600 px-5 py-2  font-semibold shadow-md hover:bg-red-50 hover:shadow-lg active:scale-95 transition-all duration-300 border-2 border-white hover:border-red-100"
            >
              <Download size={18} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-red-600 border-t border-red-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-white hover:text-gray-200 hover:bg-red-700 rounded-md transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { handleDownload(); setIsOpen(false); }}
              className="flex items-center gap-2 mx-3 mt-4 bg-white text-red-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-red-50 active:scale-95 transition-all duration-300 w-[calc(100%-24px)] justify-center"
            >
              <Download size={18} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}