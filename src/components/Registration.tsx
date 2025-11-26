import { useState } from 'react';
import { User, Mail, Phone, Calendar, Users, Key } from 'lucide-react';

export default function Registration() {
  const [seatCategory, setSeatCategory] = useState('regular');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    numberOfSeats: 1,
    registrationCode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="register"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/85 to-gray-900/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Register Now
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Secure your seat at this historic event
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 border-t-4 border-gray-400 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-2">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Regular</h3>
              <div className="w-16 h-1 bg-gray-400 mx-auto mb-6"></div>
              <ul className="text-left space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>General seating access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Full event experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>P-BAT Unity Menu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Cultural entertainment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 border-t-4 border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-2 relative">
            <div className="absolute -top-4 right-4 bg-[#D4AF37] text-white px-4 py-1 rounded-full text-sm font-bold">
              PREMIUM
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">VIP</h3>
              <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <ul className="text-left space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Priority seating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Enhanced menu options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Exclusive access areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Special recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-sm italic">Requires registration code</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#8B0000] to-[#A52A2A] rounded-xl shadow-2xl p-8 text-white hover:shadow-[0_0_30px_rgba(139,0,0,0.5)] transition-all transform hover:-translate-y-2 relative">
            <div className="absolute -top-4 right-4 bg-[#D4AF37] text-[#8B0000] px-4 py-1 rounded-full text-sm font-bold">
              EXCLUSIVE
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">VVIP</h3>
              <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Royal seating experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Premium signature menu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Private lounge access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Meet & greet opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span className="text-sm italic">Invitation only - code required</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-[#8B0000]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Seat Category *
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setSeatCategory('regular')}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                      seatCategory === 'regular'
                        ? 'bg-gray-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Regular
                  </button>
                  <button
                    type="button"
                    onClick={() => setSeatCategory('vip')}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                      seatCategory === 'vip'
                        ? 'bg-[#D4AF37] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    VIP
                  </button>
                  <button
                    type="button"
                    onClick={() => setSeatCategory('vvip')}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                      seatCategory === 'vvip'
                        ? 'bg-[#8B0000] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    VVIP
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline mr-2" size={16} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="inline mr-2" size={16} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="inline mr-2" size={16} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Users className="inline mr-2" size={16} />
                    Number of Seats
                  </label>
                  <input
                    type="number"
                    name="numberOfSeats"
                    value={formData.numberOfSeats}
                    onChange={handleChange}
                    min="1"
                    max={seatCategory === 'regular' ? '10' : '1'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {(seatCategory === 'vip' || seatCategory === 'vvip') && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Key className="inline mr-2" size={16} />
                    Registration Code *
                  </label>
                  <input
                    type="text"
                    name="registrationCode"
                    value={formData.registrationCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your VIP/VVIP registration code"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {seatCategory === 'vip' ? 'VIP' : 'VVIP'} registration requires a valid code provided by the organizers
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-4 rounded-lg font-bold text-lg hover:from-[#A52A2A] hover:to-[#8B0000] transition-all transform hover:scale-105 shadow-lg"
              >
                Complete Registration
              </button>
            </form>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#D4AF37]/10 to-[#8B0000]/10 rounded-lg border border-[#D4AF37]/30">
              <h4 className="font-bold text-[#8B0000] mb-2">Registration Information</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• You will receive a QR code via email after successful registration</li>
                <li>• Your seat number will be automatically assigned</li>
                <li>• VIP/VVIP codes are provided by organizers only</li>
                <li>• Present your QR code at the event entrance</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] rounded-xl p-6 text-white text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Seats Allocated</h3>
            <p className="text-5xl font-bold text-[#D4AF37] mb-2">2,847</p>
            <p className="text-sm">Total seats booked across all categories</p>
          </div>
        </div>
      </div>
    </section>
  );
}
