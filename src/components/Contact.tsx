import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with us for inquiries, sponsorship opportunities, or more information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#8B0000] mb-4">Phone</h3>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold">Dr. OCHUKO IYOGWOYA</p>
              <p>+234 816 595 6554</p>
              <p>+234 802 316 5475</p>
              <p className="font-semibold mt-4">Mr. PRECIOUS EKWERE</p>
              <p>+234 810 257 8666</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#8B0000] mb-4">Email</h3>
            <div className="space-y-2 text-gray-600 break-all">
              <p>o.iyogwoya@javaplusinnovations.com</p>
              <p>coko2k2@yahoo.com</p>
              <p className="mt-4">p.ekwere@javaplusinnovations.com</p>
              <p>tompreciousekwere@gmail.com</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-gradient-to-r from-[#008751] to-[#00A86B] rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#8B0000] mb-4">Event Venue</h3>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold">Eagle Square</p>
              <p>Abuja, Federal Capital Territory</p>
              <p>Nigeria</p>
              <p className="mt-4 text-sm text-gray-500">December 2-6, 2025</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#8B0000] via-[#A52A2A] to-[#8B0000] rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">Follow Us on Social Media</h3>
          <p className="text-center mb-8 text-white/90">
            Stay updated with the latest news, announcements, and behind-the-scenes content
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="group bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 border border-white/20"
            >
              <Facebook size={32} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="group bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 border border-white/20"
            >
              <Twitter size={32} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="group bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 border border-white/20"
            >
              <Instagram size={32} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="group bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 border border-white/20"
            >
              <Linkedin size={32} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-white/80 mb-2">Hashtags to follow:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                #ÒRIKÌ2025
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                #TastesOfCulture
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                #LongestTable
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                #NigerianCulture
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-[#D4AF37]">
          <h3 className="text-3xl font-bold text-[#8B0000] mb-6 text-center">Sponsorship Opportunities</h3>
          <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Join us as a sponsor and showcase your brand to thousands of distinguished guests while
            supporting Nigerian culture and heritage. Multiple sponsorship tiers available.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-700 mb-2">Platinum</h4>
              <div className="w-12 h-1 bg-gray-400 mx-auto"></div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-[#D4AF37]/20 to-[#FFD700]/10 rounded-lg">
              <h4 className="font-bold text-[#D4AF37] mb-2">Gold</h4>
              <div className="w-12 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-gray-200 to-gray-100 rounded-lg">
              <h4 className="font-bold text-gray-600 mb-2">Silver</h4>
              <div className="w-12 h-1 bg-gray-400 mx-auto"></div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-[#8B0000]/10 to-[#A52A2A]/5 rounded-lg">
              <h4 className="font-bold text-[#8B0000] mb-2">Supporting</h4>
              <div className="w-12 h-1 bg-[#8B0000] mx-auto"></div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-[#8B0000] text-white px-8 py-3 rounded-full font-bold hover:bg-[#A52A2A] transition-all transform hover:scale-105 shadow-lg">
              Download Sponsorship Deck
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
