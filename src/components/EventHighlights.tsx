import { Trophy, Utensils, Sparkles, Music, Gift, PartyPopper } from 'lucide-react';

export default function EventHighlights() {
  const highlights = [
    {
      icon: Trophy,
      title: "GWR Longest Table",
      description: "Witness history as we attempt the Guinness World Record for the longest table at 3.5-4KM",
      image: "/gwr.jpg"
    },
    {
      icon: Sparkles,
      title: "National Oriki Praise Session",
      description: "Cultural instrumentalists and praise singers from various tribes perform as a tribute to food, tourism and culture",
      image: "/oriki.jpg"
    },
    {
      icon: Utensils,
      title: "Signature P-BAT Unity Menu",
      description: "Experience the finest dining from all over Nigeria, celebrating a combination of mouthwatering dishes",
      image: "/cuisine.jpg"
    },
    {
      icon: Sparkles,
      title: "Parade of Dynasties",
      description: "Food Meets Fashion - A cultural fashion show celebrating Nigeria's rich traditions with timeless traditional fabrics",
      image: "/fashion.jpg"
    },
    {
      icon: Music,
      title: "Cultural Entertainment",
      description: "Collaboration with National Council for Arts & Culture (NCAC) and National Troupe of Nigeria (NTN)",
      image: "/entertainment.jpg"
    },
    {
      icon: Gift,
      title: "National Unity Cake Cutting",
      description: "A National Cake baked by NIHOTOUR certified Chefs will be cut by the hosts & special guests",
      image: "/cake.jpg"
    },
    {
      icon: Gift,
      title: "Award Presentation",
      description: "An award presentation segment will hold to present awards to Presidency and top industry recipients",
      image: "/awards.jpg"
    },
    {
      icon: PartyPopper,
      title: "The Afterparty",
      description: "DJ & Hypeman, Live Music, Open Bar, Whole Cow Grills, Small & Chops, and Fireworks",
      image: "/party.jpg"
    }
  ];

  return (
    <section id="event" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
            Event Highlights
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience an unforgettable celebration of Nigerian culture, cuisine, and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#8B0000] to-[#D4AF37] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <highlight.icon className="relative z-10 text-white group-hover:scale-110 transition-transform" size={64} />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8B0000] mb-3 group-hover:text-[#A52A2A] transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>

              <div className="px-6 pb-6">
                <div className="w-full h-1 bg-gradient-to-r from-[#8B0000] via-[#D4AF37] to-[#008751] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#008751] via-[#D4AF37] to-[#8B0000] rounded-2xl p-1">
          <div className="bg-white rounded-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-[#8B0000] mb-6 text-center">Event Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#8B0000]">
                <h4 className="text-xl font-bold text-gray-800 mb-2">December 2-6, 2025</h4>
                <p className="text-gray-600">NIHOTOUR Week - Full event experience</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#D4AF37]">
                <h4 className="text-xl font-bold text-gray-800 mb-2">December 5, 2025</h4>
                <p className="text-gray-600">Initial GWR Assessment confirmation</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#008751]">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Daily Timing</h4>
                <p className="text-gray-600">11:00 AM - 10:00 PM</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#8B0000]">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Venue</h4>
                <p className="text-gray-600">Eagle Square, Abuja, FCT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
