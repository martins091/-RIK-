import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../public/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Text */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Tastes of Culture"
              className="h-20 w-auto object-contain"
            />
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-[#8B0000]' : 'text-white'
              }`}>ÒRIKÌ 2025</h1>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>A Royal Dining Experience</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`transition-colors font-medium ${
                isScrolled ? 'text-gray-700 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`transition-colors font-medium ${
                isScrolled ? 'text-gray-700 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              About
            </a>
            <a
              href="#event"
              className={`transition-colors font-medium ${
                isScrolled ? 'text-gray-700 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Event
            </a>
            <a
              href="#register"
              className={`transition-colors font-medium ${
                isScrolled ? 'text-gray-700 hover:text-[#8B0000]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Register
            </a>
            <button className="bg-[#8B0000] text-white px-6 py-2 rounded-full hover:bg-[#A52A2A] transition-colors font-semibold">
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#home"
              className="block text-gray-700 hover:text-[#8B0000] font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-[#8B0000] font-medium"
            >
              About
            </a>
            <a
              href="#event"
              className="block text-gray-700 hover:text-[#8B0000] font-medium"
            >
              Event
            </a>
            <a
              href="#register"
              className="block text-gray-700 hover:text-[#8B0000] font-medium"
            >
              Register
            </a>
            <button className="w-full bg-[#8B0000] text-white px-6 py-2 rounded-full hover:bg-[#A52A2A] transition-colors font-semibold">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
