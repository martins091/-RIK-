import { Calendar, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import herobg from "../../public/herosbg.jpg";
import hero2 from "../../public/hero2.jpg";
import hero3 from "../../public/hero3.jpg";

export default function Hero() {
  const images = [herobg, hero2, hero3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const eventDate = new Date("2025-12-02T11:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20  pb-10"
    >
      {/* 🔥 Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex
              ? "opacity-100 zoom-in z-10"
              : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 z-20"></div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8 inline-block">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full px-6 py-2 mt-4 mb-6">
            <p className="text-sm font-semibold tracking-wider">
              GUINNESS WORLD RECORD ATTEMPT
            </p>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          ÒRIKÌ 2025
        </h1>

        <p className="text-2xl md:text-4xl font-light mb-4 text-[#D4AF37]">
          A Royal Dining Experience
        </p>

        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Celebrating Nigeria's Rich Heritage Through Food, Culture &
          Entertainment
        </p>

        {/* Date, Venue, Time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Calendar className="mx-auto mb-3" size={32} />
            <p className="text-sm font-semibold">DATE</p>
            <p className="text-lg">Dec 2-6, 2025</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <MapPin className="mx-auto mb-3" size={32} />
            <p className="text-sm font-semibold">VENUE</p>
            <p className="text-lg">Eagle Square, Abuja</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Clock className="mx-auto mb-3" size={32} />
            <p className="text-sm font-semibold">TIME</p>
            <p className="text-lg">11am - 10pm</p>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Event Starts In:</h3>
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] border border-white/20"
              >
                <div className="text-4xl md:text-5xl font-bold">
                  {
                    [
                      timeLeft.days,
                      timeLeft.hours,
                      timeLeft.minutes,
                      timeLeft.seconds,
                    ][idx]
                  }
                </div>
                <div className="text-sm mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#D4AF37] text-[#8B0000] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFD700] transition-all transform hover:scale-105 shadow-xl">
            Register Now
          </button>
          <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all">
            Learn More
          </button>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block border border-white/20">
          <p className="text-sm mb-2">Longest Table Record Attempt</p>
          <p className="text-3xl font-bold text-[#D4AF37]">3,500m - 4,000m</p>
        </div>
      </div>

      {/* ZOOM ANIMATION */}
      <style>{`
        .zoom-in {
          animation: zoomInAnim 5s forwards;
        }
        @keyframes zoomInAnim {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
