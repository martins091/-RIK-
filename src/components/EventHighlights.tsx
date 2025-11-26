import { useRef, useState } from "react";

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
        "https://images.pexels.com/photos/32184374/pexels-photo-32184374.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "National Oriki Praise Session",
      description:
        "Traditional praise singers and drummers performing Oríkì across Nigerian cultures.",
      image:
        "https://images.pexels.com/photos/32184007/pexels-photo-32184007.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Signature P-BAT Unity Menu",
      description:
        "Experience exquisite Nigerian dishes representing unity across all regions.",
      image:
        "https://images.pexels.com/photos/2990740/pexels-photo-2990740.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Parade of Dynasties",
      description:
        "Food Meets Fashion — A cultural fashion parade showcasing Nigerian royal heritage.",
      image:
        "https://images.pexels.com/photos/32184014/pexels-photo-32184014.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Cultural Entertainment",
      description:
        "Full cultural performance by NCAC, Nigerian dancers, drummers and national troupe.",
      image:
        "https://images.pexels.com/photos/33716120/pexels-photo-33716120.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "National Unity Cake Cutting",
      description:
        "A grand unity cake baked by NIHOTOUR chefs for national celebration.",
      image:
        "https://images.pexels.com/photos/33927926/pexels-photo-33927926.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Award Presentation",
      description:
        "Prestigious award presentations to Presidency officials and top industry icons.",
      image:
        "https://images.pexels.com/photos/32267810/pexels-photo-32267810.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "The Afterparty",
      description:
        "Enjoy DJ, live band, Nigerian grills, small chops, open bar & fireworks.",
      image:
        "https://images.pexels.com/photos/32184674/pexels-photo-32184674.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section
      id="event"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Event Highlights
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Experience an unforgettable celebration of Nigerian culture, cuisine, and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 hover:-translate-y-3 bg-black/40 backdrop-blur-sm border border-white/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B0000] via-[#D4AF37] to-[#008751] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#008751] via-[#D4AF37] to-[#8B0000] rounded-3xl blur-xl opacity-30 animate-pulse"></div>

          <div className="relative bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-bold text-center text-white mb-6">
              Watch the Event Preview
            </h3>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                src={eventVideo}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover"
              ></video>

              <button
                onClick={toggleMute}
                className="absolute bottom-6 right-6 bg-[#D4AF37] hover:bg-[#FFD700] text-black px-6 py-3 rounded-full text-sm font-bold backdrop-blur-sm transition-all transform hover:scale-105 shadow-lg"
              >
                {isMuted ? "Unmute Sound" : "Mute Sound"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
