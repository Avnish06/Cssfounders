"use client";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-104px)] min-h-[520px] max-h-[680px] md:h-[calc(100vh-104px)] md:max-h-[680px] max-md:h-auto max-md:min-h-[460px] max-md:max-h-none max-md:py-[50px] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[url('/hero_exact.jpg')] bg-center bg-cover bg-no-repeat z-0" />
      <div className="absolute inset-0 max-md:bg-[rgba(10,24,75,0.85)] md:bg-[linear-gradient(100deg,#0b1f5c_0%,#0d2468_20%,#0f2e7e_42%,rgba(11,28,80,0.88)_55%,rgba(8,20,60,0.50)_68%,rgba(6,15,45,0.10)_82%,transparent_100%)] z-10" />

      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex items-center h-full">
        <div className="flex flex-col w-full md:w-[58%] lg:w-[48%]">
          {/* Welcome tag - gold italic cursive */}
          <p className="font-decorative text-[22px] text-secondary mb-2.5 leading-[1.2] italic">Welcome To TourVista!</p>

          {/* Main heading */}
          <h1 className="font-heading text-[44px] md:text-[56px] lg:text-[70px] font-extrabold text-white leading-[1.08] mb-[18px] tracking-[-1px] md:tracking-[-2px]">
            Explore The
            <br />
            Whole <span className="font-decorative text-[#4b9fff] text-[48px] md:text-[62px] lg:text-[76px] italic tracking-[-1px]">World</span>
          </h1>

          {/* Description */}
          <p className="font-body text-[15px] text-white/85 leading-[1.65] mb-6">
            Discover breathtaking destinations, unforgettable
            <br />
            experiences, and the joy of travel with TourVista.
          </p>

          {/* Feature Badges with separators */}
          <div className="flex items-center max-md:flex-wrap gap-0 max-md:gap-3 mb-[30px]">
            <div className="flex items-center gap-2.5 pr-5 max-md:pr-0" id="badge-price">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_3px_12px_rgba(21,101,216,0.5)]">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
              </div>
              <span className="font-body text-[12px] text-white/90 leading-[1.45] whitespace-normal lg:whitespace-nowrap">Best Price<br />Guarantee</span>
            </div>

            <div className="w-[1px] h-9 bg-white/30 mr-5 shrink-0 max-md:hidden" />

            <div className="flex items-center gap-2.5 pr-5 max-md:pr-0" id="badge-booking">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_3px_12px_rgba(21,101,216,0.5)]">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <span className="font-body text-[12px] text-white/90 leading-[1.45] whitespace-normal lg:whitespace-nowrap">Fast & Easy<br />Booking</span>
            </div>

            <div className="w-[1px] h-9 bg-white/30 mr-5 shrink-0 max-md:hidden" />

            <div className="flex items-center gap-2.5 pr-5 max-md:pr-0" id="badge-support">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_3px_12px_rgba(21,101,216,0.5)]">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0118 0v6"/>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
                </svg>
              </div>
              <span className="font-body text-[12px] text-white/90 leading-[1.45] whitespace-normal lg:whitespace-nowrap">24/7 Customer<br />Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3.5 flex-wrap">
            <button id="discover-more-btn" className="inline-flex items-center gap-3 bg-secondary text-white font-heading font-bold text-[15px] py-[13px] px-[26px] rounded-full whitespace-nowrap transition-all duration-250 hover:bg-[#d9911a] hover:shadow-[0_8px_24px_rgba(245,166,35,0.5)] hover:-translate-y-[1px]">
              Discover More
              <span className="w-[30px] h-[30px] rounded-full bg-white/25 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="white" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </span>
            </button>

            <button id="view-packages-btn" className="inline-flex items-center gap-3 bg-transparent text-white font-heading font-bold text-[15px] py-3 px-[26px] rounded-full border-2 border-white/75 whitespace-nowrap transition-all duration-250 hover:bg-white/10 hover:border-white hover:-translate-y-[1px]">
              View Packages
              <span className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#1565D8" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="flex-1 hidden md:block" />
      </div>
    </section>
  );
}
