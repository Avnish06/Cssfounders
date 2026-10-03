"use client";

const destinations = [
  {
    id: 1,
    name: "Phuket Paradise",
    country: "Thailand",
    flag: "🇹🇭",
    desc: "Stunning beaches, crystal clear waters and vibrant culture.",
    image: "/testi_maldives.jpg",
  },
  {
    id: 2,
    name: "Swiss Majesty",
    country: "Switzerland",
    flag: "🇨🇭",
    desc: "Breathtaking mountains, serene lakes and charming villages.",
    image: "/testi_mountain.jpg",
  },
  {
    id: 3,
    name: "Cappadocia Wonders",
    country: "Turkey",
    flag: "🇹🇷",
    desc: "Unique landscapes, ancient history and magical hot air balloon rides.",
    image: "/pkg_cappadocia.jpg",
  },
  {
    id: 4,
    name: "New York Vibes",
    country: "USA",
    flag: "🇺🇸",
    desc: "The city that never sleeps with iconic sights and endless energy.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative py-[80px] pb-[60px] bg-white overflow-hidden">
      {/* Decorative airplane top-right */}
      <div className="absolute top-0 right-0 w-[220px] h-[220px] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 160 Q80 40 180 20" stroke="#1565D8" strokeWidth="1.5" strokeDasharray="6 5" fill="none" opacity="0.25"/>
          <path d="M170 15 L195 25 L180 35 L178 60 L170 55 L172 35 L162 40 L155 30Z" fill="#1565D8" opacity="0.18"/>
        </svg>
      </div>

      <div className="container mx-auto px-5 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center gap-2.5">
          {/* Tag pill */}
          <div className="inline-flex items-center gap-[7px] border-2 border-secondary rounded-full py-1.5 px-4 bg-white">
            <span className="flex items-center">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </span>
            <span className="font-decorative text-[16px] font-semibold text-secondary">Destination</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[32px] sm:text-[44px] font-extrabold text-[#0a1e4e] leading-[1.15] tracking-[-0.5px] m-0">Most Popular Destinations</h2>

          {/* Orange plane under heading */}
          <div className="flex items-center justify-center -mt-1 before:block before:w-10 before:h-[1px] before:bg-black/10 before:mx-2.5 after:block after:w-10 after:h-[1px] after:bg-black/10 after:mx-2.5">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#F5A623">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>

          {/* Subtitle */}
          <p className="font-body text-[15px] text-gray-500 leading-[1.65] m-0">
            Handpicked places that promise unforgettable experiences.<br />
            Start your journey to explore the world's best destinations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px] mb-12">
          {destinations.map((dest) => (
            <div key={dest.id} className="group bg-white rounded-[14px] border border-[#e8edf5] shadow-[0_4px_20px_rgba(21,52,130,0.07)] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_12px_35px_rgba(21,52,130,0.14)]" id={`dest-card-${dest.id}`}>
              {/* Card Image */}
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  loading="lazy"
                />
                {/* Orange pin circle top-left */}
                <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-secondary border-4 border-white flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.15)] z-10">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col items-start text-left gap-3">
                {/* Country flag badge — overlapping image */}
                <div className="inline-flex items-center gap-1.5 bg-primary text-white rounded-full py-1.5 px-4 z-20 whitespace-nowrap shadow-[0_4px_12px_rgba(21,101,216,0.3)] -mt-10 mb-1 relative">
                  <span className="text-[14px] leading-none">{dest.flag}</span>
                  <span className="font-heading text-[12px] font-bold tracking-[0.5px]">{dest.country.toUpperCase()}</span>
                </div>
                <h3 className="font-heading text-[20px] font-extrabold text-[#0b1c3d] m-0 leading-[1.2]">{dest.name}</h3>
                <div className="w-10 h-[2.5px] bg-secondary rounded-sm my-1" />
                <p className="font-body text-[14px] text-gray-500 leading-[1.6] m-0 mb-2">{dest.desc}</p>
                <a href="#" className="group/link inline-flex items-center justify-start gap-1.5 font-heading text-[14px] font-bold text-primary transition-all duration-200 hover:gap-2.5" id={`explore-${dest.id}`}>
                  Explore Now
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Destination Button */}
        <div className="flex justify-center">
          <button id="more-destination-btn" className="inline-flex items-center gap-3 bg-primary text-white font-heading font-bold text-[14px] tracking-[1px] py-[15px] px-[36px] rounded-full transition-all duration-250 hover:bg-[#0d47a1] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(21,101,216,0.35)]">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            MORE DESTINATION
          </button>
        </div>
      </div>
    </section>
  );
}
