import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Tastes of Culture" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-[#8B0000]">ÒRIKÌ 2025</h1>
              <p className="text-xs text-gray-600">A Royal Dining Experience</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#8B0000] transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-[#8B0000] transition-colors font-medium">About</a>
            <a href="#event" className="text-gray-700 hover:text-[#8B0000] transition-colors font-medium">Event</a>
            <a href="#register" className="text-gray-700 hover:text-[#8B0000] transition-colors font-medium">Register</a>
            <a href="#contact" className="text-gray-700 hover:text-[#8B0000] transition-colors font-medium">Contact</a>
            <button className="bg-[#8B0000] text-white px-6 py-2 rounded-full hover:bg-[#A52A2A] transition-colors font-semibold">
              Book Now
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-[#8B0000] font-medium">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-[#8B0000] font-medium">About</a>
            <a href="#event" className="block text-gray-700 hover:text-[#8B0000] font-medium">Event</a>
            <a href="#register" className="block text-gray-700 hover:text-[#8B0000] font-medium">Register</a>
            <a href="#contact" className="block text-gray-700 hover:text-[#8B0000] font-medium">Contact</a>
            <button className="w-full bg-[#8B0000] text-white px-6 py-2 rounded-full hover:bg-[#A52A2A] transition-colors font-semibold">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
