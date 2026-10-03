"use client";

const packages = [
  {
    id: 1,
    title: "MALDIVES\nBEACH ESCAPE",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
    iconPath: "M5 22h14M12 2v20M8 7l4-4 4 4M7 11h10M6 16h12", // generic palm tree representation
    desc: "Relax on pristine beaches, stay in overwater villas, and enjoy the beauty of the crystal-clear ocean.",
    duration: "7D / 6N",
    people: "2 Adults",
    location: "Maldives",
    reviews: "(25 reviews)",
    rating: 4.5,
    price: "$750"
  },
  {
    id: 2,
    title: "SWISS ALPINE\nADVENTURE",
    image: "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=600&q=80",
    iconPath: "M2 20L12 4l10 16z M12 4l-4 8h8z", // mountain
    desc: "Experience the breathtaking Alps, charming villages, and scenic landscapes that Switzerland is famous for.",
    duration: "5D / 4N",
    people: "2 Adults",
    location: "Switzerland",
    reviews: "(25 reviews)",
    rating: 5,
    price: "$620"
  },
  {
    id: 3,
    title: "CAPPADOCIA\nWONDERS",
    image: "/pkg_cappadocia.jpg",
    iconPath: "M12 2a6 6 0 00-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 00-6-6zM12 22h.01", // balloon/pin
    desc: "Unique landscapes, ancient history and magical hot air balloon rides.",
    duration: "6D / 5N",
    people: "2 Adults",
    location: "Turkey",
    reviews: "(22 reviews)",
    rating: 4.5,
    price: "$580"
  },
  {
    id: 4,
    title: "GREECE ISLAND\nHOPPING",
    image: "/pkg_greece.jpg",
    iconPath: "M4 22h16M12 2v20M4 12h16M12 2L2 12h20L12 2z", // building
    desc: "Discover the beauty of Santorini and Mykonos with stunning views, delicious food, and rich culture.",
    duration: "6D / 5N",
    people: "2 Adults",
    location: "Greece",
    reviews: "(32 reviews)",
    rating: 5,
    price: "$680"
  }
];

export default function TourPackages() {
  return (
    <section className="py-[80px] bg-[#fcfdfe]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="text-center mb-[50px] flex flex-col items-center gap-3">
          {/* Tag pill */}
          <div className="inline-flex items-center gap-1.5 border border-secondary rounded-full py-1.5 px-4 bg-transparent">
            <span className="flex items-center">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
              </svg>
            </span>
            <span className="font-decorative text-[16px] font-semibold text-secondary italic">Tour Packages</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[42px] font-extrabold text-[#0b1c3d] m-0 tracking-[-0.5px]">Explore Our Best Tour Packages</h2>

          {/* Subtitle */}
          <p className="font-body text-[14px] text-gray-500 m-0">
            Handpicked packages for an unforgettable journey. Choose your perfect getaway!
          </p>

          {/* Airplane with lines */}
          <div className="flex items-center justify-center mt-1 before:block before:w-[30px] before:h-[1px] before:bg-secondary/50 before:mx-2.5 after:block after:w-[30px] after:h-[1px] after:bg-secondary/50 after:mx-2.5">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#F5A623">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group flex flex-col sm:flex-row bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden transition-shadow duration-300 min-h-[250px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              
              {/* Image */}
              <div className="sm:flex-none sm:w-[220px] h-[200px] sm:h-auto overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              {/* Center Content */}
              <div className="flex-1 py-6 px-5 flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full border border-secondary/40 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={pkg.iconPath} />
                    </svg>
                  </div>
                  <h3 className="font-heading text-[15px] font-extrabold text-[#0b1c3d] leading-[1.3] m-0">
                    {pkg.title.split('\n').map((line, i) => (
                      <span key={i}>{line}<br/></span>
                    ))}
                  </h3>
                </div>

                <p className="font-body text-[13px] text-gray-500 leading-[1.5] m-0 mb-auto">{pkg.desc}</p>

                <div className="flex flex-wrap gap-4 mt-4 border-t border-[#f0f4f8] pt-4">
                  <div className="flex items-center gap-1.5 font-body text-[12px] text-[#0b1c3d] font-semibold">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#1565D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1.5 font-body text-[12px] text-[#0b1c3d] font-semibold">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#1565D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                      <path d="M16 3.13a4 4 0 010 7.75"/>
                    </svg>
                    {pkg.people}
                  </div>
                  <div className="flex items-center gap-1.5 font-body text-[12px] text-gray-500 w-full -mt-1.5">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#1565D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {pkg.location}
                  </div>
                </div>
              </div>

              {/* Right Box (Price & CTA) */}
              <div className="sm:flex-none sm:w-[140px] bg-[#3273ed] p-6 max-sm:px-5 max-sm:py-[30px] flex flex-col items-center justify-center text-center max-sm:rounded-b-xl">
                <div className="font-body text-[12px] text-white/90 mb-1">{pkg.reviews}</div>
                <div className="flex gap-[2px] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill={i < Math.floor(pkg.rating) ? "#F5A623" : "none"} stroke="#F5A623" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                
                <div className="mb-4">
                  <div className="font-heading text-[32px] font-extrabold text-white leading-none mb-1">{pkg.price}</div>
                  <div className="font-body text-[11px] text-white/80">/ per person</div>
                </div>

                <button className="inline-flex items-center justify-center gap-1.5 w-full bg-white text-[#3273ed] font-heading font-extrabold text-[11px] py-2.5 rounded-full transition-all duration-200 hover:bg-[#f0f4ff] hover:-translate-y-[1px]">
                  BOOK NOW 
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2.5 bg-white text-primary font-heading font-bold text-[14px] py-3 px-[30px] rounded-full border border-primary transition-all duration-200 hover:bg-[#f0f6ff]">
            VIEW ALL PACKAGES
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
