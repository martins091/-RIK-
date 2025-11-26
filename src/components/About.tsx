import {
  Award,
  Users,
  Globe,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

import imgOne from "../../public/first.png";
import imgTwo from "../../public/second.png";
import imgThird from "../../public/thirdd.png";
import imgFourth from "../../public/fourth.png";
import imgFifth from "../../public/fifth.png";
import imgSix from "../../public/sixth.png";
import imgSeven from "../../public/seveth.png";
import imgEight from "../../public/eighth.png";
import imgNine from "../../public/nineth.png";
import imgTen from "../../public/tenth.png";
import imgEleven from "../../public/elenth.png";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: imgOne, title: "Heritage & Culture" },
    { image: imgTwo, title: "Unity Through Food" },
    { image: imgThird, title: "Royal Experience" },
    { image: imgFourth, title: "Cultural Celebration" },
    { image: imgFifth, title: "Nigerian Excellence" },
    { image: imgSix, title: "Artistic Expression" },
    { image: imgSeven, title: "Traditional Values" },
    { image: imgEight, title: "Modern Legacy" },
    { image: imgNine, title: "Community Spirit" },
    { image: imgTen, title: "National Pride" },
    { image: imgEleven, title: "Historic Moment" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const objectives = [
    {
      icon: Award,
      title: "Set a Guinness World Record",
      description:
        "Achieve the longest table in the world at 3.5KM - 4KM in FCT Abuja",
      color: "from-[#8B0000] to-[#A52A2A]",
    },
    {
      icon: Globe,
      title: "Showcase African Excellence",
      description:
        "Celebrate Nigeria's culinary excellence through an immersive Royal Banquet Dining Experience",
      color: "from-[#D4AF37] to-[#FFD700]",
    },
    {
      icon: Users,
      title: "Promote Nigerian Culture",
      description:
        "Promote Nigerian cuisine and cultural excellence while showcasing the industry, brands and businesses",
      color: "from-[#008751] to-[#00A86B]",
    },
    {
      icon: Heart,
      title: "Celebrate National Unity",
      description:
        "Celebrate and showcase Nigeria's identity, unity and confidence through art, culture, bread experiences",
      color: "from-[#8B0000] to-[#D4AF37]",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
            About ÒRIKÌ 2025
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A historic celebration bringing together Nigeria's rich cultural heritage through an
            unprecedented dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#D4AF37]/20">
              <h3 className="text-3xl font-bold text-[#8B0000] mb-4">
                The Vision
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                ÒRIKÌ 2025 is more than an event - it's a historic moment where Nigerian culture,
                cuisine, and unity converge to create an unforgettable experience.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Join us as we attempt to break the Guinness World Record for the longest dining
                table while celebrating the diverse flavors and traditions that make Nigeria unique.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#8B0000] to-[#A52A2A] rounded-xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-transform">
                <p className="text-4xl font-bold mb-2">3.5-4KM</p>
                <p className="text-sm">Longest Table</p>
              </div>
              <div className="bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-transform">
                <p className="text-4xl font-bold mb-2">5 Days</p>
                <p className="text-sm">Grand Celebration</p>
              </div>
              <div className="bg-gradient-to-br from-[#008751] to-[#00A86B] rounded-xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-transform">
                <p className="text-4xl font-bold mb-2">1000+</p>
                <p className="text-sm">Distinguished Guests</p>
              </div>
              <div className="bg-gradient-to-br from-[#8B0000] to-[#D4AF37] rounded-xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-transform">
                <p className="text-4xl font-bold mb-2">100+</p>
                <p className="text-sm">Cultural Performances</p>
              </div>
            </div>
          </div>

          <div className="relative h-full w-full">
            <div className="relative w-full h-full min-h-[550px] md:min-h-[650px] rounded-2xl overflow-hidden shadow-2xl group">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain bg-gradient-to-br from-black via-gray-900 to-black"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="text-white text-2xl font-bold">{slide.title}</p>
                  </div>
                </div>
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100 duration-300"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100 duration-300"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-[#D4AF37] w-8"
                        : "bg-white/50 hover:bg-white/70 w-3"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-[#8B0000] mb-12">
            Our Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, index) => {
              const Icon = obj.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#D4AF37]/20"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${obj.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-[#8B0000] mb-3">
                    {obj.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
