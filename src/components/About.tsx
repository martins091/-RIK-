import {
  Award,
  Users,
  Globe,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

// Images
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
    { image: imgOne, title: "Slide One" },
    { image: imgTwo, title: "Slide Two" },
    { image: imgThird, title: "Slide Three" },
    { image: imgFourth, title: "Slide Four" },
    { image: imgFifth, title: "Slide Five" },
    { image: imgSix, title: "Slide Six" },
    { image: imgSeven, title: "Slide Seven" },
    { image: imgEight, title: "Slide Eight" },
    { image: imgNine, title: "Slide Nine" },
    { image: imgTen, title: "Slide Ten" },
    { image: imgEleven, title: "Slide Eleven" },
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
   <div className="relative order-1 lg:order-2 h-full w-full">
  <div className="relative w-full h-full min-h-[550px] md:min-h-[650px] lg:min-h-[750px] rounded-2xl overflow-hidden shadow-2xl group">
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
          className="w-full h-full object-contain bg-black"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <p className="text-white text-2xl font-bold">{slide.title}</p>
        </div>
      </div>
    ))}

    {/* Left Button */}
    <button
      onClick={prevSlide}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100 duration-300"
    >
      <ChevronLeft size={24} />
    </button>

    {/* Right Button */}
    <button
      onClick={nextSlide}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100 duration-300"
    >
      <ChevronRight size={24} />
    </button>

    {/* Dots */}
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

  );
}
