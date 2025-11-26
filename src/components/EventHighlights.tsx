import { useRef, useState } from "react";

// ❗ Replace with your actual video file
const eventVideo = "/oriki.mp4";

export default function EventHighlights() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const highlights = [
    {
      title: "GWR Longest Table",
      description:
        "Witness history as we attempt the Guinness World Record for the longest table at 3.5–4KM.",
      image:
        "https://images.pexels.com/photos/32184374/pexels-photo-32184374.jpeg",
    },
    {
      title: "National Oriki Praise Session",
      description:
        "Traditional praise singers and drummers performing Oríkì across Nigerian cultures.",
      image:
        "https://images.pexels.com/photos/32184007/pexels-photo-32184007.jpeg",
    },
    {
      title: "Signature P-BAT Unity Menu",
      description:
        "Experience exquisite Nigerian dishes representing unity across all regions.",
      image:
        "https://images.pexels.com/photos/2990740/pexels-photo-2990740.jpeg",
    },
    {
      title: "Parade of Dynasties",
      description:
        "Food Meets Fashion — A cultural fashion parade showcasing Nigerian royal heritage.",
      image:
        "https://images.pexels.com/photos/32184014/pexels-photo-32184014.jpeg",
    },
    {
      title: "Cultural Entertainment",
      description:
        "Full cultural performance by NCAC, Nigerian dancers, drummers and national troupe.",
      image:
        "https://images.pexels.com/photos/33716120/pexels-photo-33716120.jpeg",
    },
    {
      title: "National Unity Cake Cutting",
      description:
        "A grand unity cake baked by NIHOTOUR chefs for national celebration.",
      image:
        "https://images.pexels.com/photos/33927926/pexels-photo-33927926.jpeg",
    },
    {
      title: "Award Presentation",
      description:
        "Prestigious award presentations to Presidency officials and top industry icons.",
      image:
        "https://images.pexels.com/photos/32267810/pexels-photo-32267810.jpeg",
    },
    {
      title: "The Afterparty",
      description:
        "Enjoy DJ, live band, Nigerian grills, small chops, open bar & fireworks.",
      image:
        "https://images.pexels.com/photos/32184674/pexels-photo-32184674.jpeg",
    },
  ];

  return (
    <section id="event" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Header ---- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
            Event Highlights
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience an unforgettable celebration of Nigerian culture, cuisine, and creativity.
          </p>
        </div>

        {/* ---- Highlights Grid ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className="relative h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${highlight.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8B0000] mb-3 group-hover:text-[#A52A2A] transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              <div className="px-6 pb-6">
                <div className="w-full h-1 bg-gradient-to-r from-[#8B0000] via-[#D4AF37] to-[#008751] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* ---- Video Section ---- */}
        <div className="mt-16 bg-gradient-to-r from-[#008751] via-[#D4AF37] to-[#8B0000] rounded-2xl p-1">
          <div className="bg-white rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-center text-[#8B0000] mb-6">
              Watch the Event Preview
            </h3>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
              <video
                ref={videoRef}
                src={eventVideo}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover rounded-xl"
              ></video>

              {/* Sound Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm hover:bg-black/80 transition"
              >
                {isMuted ? "Unmute 🔊" : "Mute 🔇"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
