export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#8B0000] via-[#A52A2A] to-[#8B0000] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">ÒRIKÌ 2025</h3>
            <p className="text-white/80 mb-4">
              A Royal Dining Experience celebrating Nigeria's rich heritage through food, culture, and entertainment.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#008751] rounded"></div>
              <div className="w-12 h-12 bg-white rounded"></div>
              <div className="w-12 h-12 bg-[#008751] rounded"></div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#event" className="text-white/80 hover:text-white transition-colors">
                  Event Highlights
                </a>
              </li>
              <li>
                <a href="#register" className="text-white/80 hover:text-white transition-colors">
                  Register
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-[#D4AF37]">Event Information</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <span className="font-semibold">Date:</span> December 2-6, 2025
              </li>
              <li>
                <span className="font-semibold">Time:</span> 11:00 AM - 10:00 PM
              </li>
              <li>
                <span className="font-semibold">Venue:</span> Eagle Square, Abuja
              </li>
              <li>
                <span className="font-semibold">Theme:</span> ÒRIKÌ - A Royal Dining Experience
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Tastes of Culture - ÒRIKÌ. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white/80 text-sm mb-2">Powered By</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                Federal Government of Nigeria
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                NIHOTOUR
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                NOVAROSTA
              </span>
            </div>
          </div>

          <div className="mt-6 text-center text-white/60 text-xs">
            <p>Developed by JavaPlus Innovations</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
