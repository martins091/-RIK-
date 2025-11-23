export default function EventHighlights() {
  const highlights = [
    {
      title: "GWR Longest Table",
      description:
        "Witness history as we attempt the Guinness World Record for the longest table at 3.5–4KM.",
      image:
        "https://images.pexels.com/photos/32184374/pexels-photo-32184374.jpeg", // Nigerian banquet setup / crowd
    },
    {
      title: "National Oriki Praise Session",
      description:
        "Traditional praise singers and drummers performing Oríkì across Nigerian cultures.",
      image:
        "https://images.pexels.com/photos/32184007/pexels-photo-32184007.jpeg", // Traditional Nigerian cultural portrait
    },
    {
      title: "Signature P‑BAT Unity Menu",
      description:
        "Experience exquisite Nigerian dishes representing unity across all regions.",
      image:
        "https://images.pexels.com/photos/2990740/pexels-photo-2990740.jpeg", // Nigerian cuisine spread
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
            Event Highlights
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience an unforgettable celebration of Nigerian culture,
            cuisine, and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className="relative h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${highlight.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
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

        <div className="mt-16 bg-gradient-to-r from-[#008751] via-[#D4AF37] to-[#8B0000] rounded-2xl p-1">
          <div className="bg-white rounded-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-[#8B0000] mb-6 text-center">
              Event Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#8B0000]">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  December 2–6, 2025
                </h4>
                <p className="text-gray-600">
                  NIHOTOUR Week – Full event experience
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#D4AF37]">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  December 5, 2025
                </h4>
                <p className="text-gray-600">
                  Initial GWR Assessment confirmation
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#008751]">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Daily Timing
                </h4>
                <p className="text-gray-600">11:00 AM – 10:00 PM</p>
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
