import { Award, Users, Globe, Heart } from 'lucide-react';

export default function About() {
  const objectives = [
    {
      icon: Award,
      title: "Set a Guinness World Record",
      description: "Achieve the longest table in the world at 3.5KM - 4KM in FCT Abuja",
      color: "from-[#8B0000] to-[#A52A2A]"
    },
    {
      icon: Globe,
      title: "Showcase African Excellence",
      description: "Celebrate Nigeria's culinary excellence through an immersive Royal Banquet Dining Experience",
      color: "from-[#D4AF37] to-[#FFD700]"
    },
    {
      icon: Users,
      title: "Promote Nigerian Culture",
      description: "Promote Nigerian cuisine and cultural excellence while showcasing the industry, brands and businesses",
      color: "from-[#008751] to-[#00A86B]"
    },
    {
      icon: Heart,
      title: "Celebrate National Unity",
      description: "Celebrate and showcase Nigeria's identity, unity and confidence through art, culture, bread experiences",
      color: "from-[#8B0000] to-[#D4AF37]"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
            About ÒRIKÌ 2025
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A groundbreaking, multi-sensory African dining and cultural event celebrating
            Nigeria's rich heritage through food, lifestyle, arts, fashion, tourism, and entertainment.
          </p>
        </div>

        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-[#8B0000]">
            <h3 className="text-3xl font-bold text-[#8B0000] mb-6">The Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To create a unique, multi-sensory African dining experience where every participant
              feels connected to diverse cultures in meaningful ways. ÒRIKÌ brings together
              Nigeria's finest traditions, cuisine, fashion, and entertainment in an unprecedented
              celebration of our heritage.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This event features a Guinness World Record attempt for The Longest Table in the World,
              the largest royal banquet experience in Africa, cultural performances, the Oriki praise
              session, signature cuisine showcases, fashion parades, and a vibrant display of Nigeria's
              creative industries.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center text-[#8B0000] mb-12">Event Objectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${objective.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${objective.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <objective.icon className="text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">{objective.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Powered By</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 border border-white/20">
              <p className="text-xl font-semibold">Federal Government of Nigeria</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 border border-white/20">
              <p className="text-xl font-semibold">NIHOTOUR</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 border border-white/20">
              <p className="text-xl font-semibold">NOVAROSTA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
