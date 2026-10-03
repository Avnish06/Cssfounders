"use client";

export default function BookingSteps() {
  return (
    <section className="py-[80px] bg-[linear-gradient(135deg,#fff7ed_0%,#f4f9ff_100%)] overflow-hidden">
      <div className="container mx-auto px-5 max-w-[1200px] flex items-center gap-10 max-lg:flex-col">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col">
          <h2 className="font-heading text-[38px] font-extrabold text-[#0b1c3d] leading-[1.25] mb-10">
            <span className="text-secondary">3 Easy Steps</span> for Book<br/>
            Your Next Trip
          </h2>

          <div className="flex items-start gap-[30px] max-sm:flex-col max-sm:items-center">
            {/* Special Offer Card */}
            <div className="w-[180px] max-sm:w-[240px] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(245,166,35,0.2)] flex flex-col">
              <div className="h-[200px]">
                <img src="/booking_step_offer.jpg" alt="Mountain View" className="w-full h-full object-cover" />
              </div>
              <div className="bg-secondary text-white p-5 text-center">
                <p className="font-body text-[13px] font-semibold mb-2">Get Special Offer</p>
                <div className="flex items-start justify-center leading-none">
                  <span className="font-heading text-[56px] font-extrabold tracking-[-2px]">48</span>
                  <div className="flex flex-col items-start ml-1 mt-1.5">
                    <span className="font-heading text-[24px] font-extrabold">%</span>
                    <span className="font-heading text-[14px] font-extrabold -mt-1">OFF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps List */}
            <div className="flex flex-col gap-5 flex-1">
              
              {/* Step 1 */}
              <div className="bg-white rounded-full p-[8px_16px_8px_8px] flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <div className="w-[50px] h-[50px] rounded-full bg-primary text-white font-heading text-[20px] font-extrabold flex items-center justify-center shrink-0">01</div>
                <div className="flex-1 flex flex-col">
                  <h3 className="font-heading text-[16px] font-extrabold text-[#0b1c3d] m-0 mb-1">Choose Destination</h3>
                  <p className="font-body text-[11px] text-gray-500 m-0 leading-[1.4]">First, select your preferred<br/>destination and proceed further</p>
                </div>
                <div className="w-[44px] h-[44px] rounded-full border-2 border-secondary flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M3 22h18" strokeDasharray="2 4" />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-full p-[8px_16px_8px_8px] flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <div className="w-[50px] h-[50px] rounded-full bg-primary text-white font-heading text-[20px] font-extrabold flex items-center justify-center shrink-0">02</div>
                <div className="flex-1 flex flex-col">
                  <h3 className="font-heading text-[16px] font-extrabold text-[#0b1c3d] m-0 mb-1">Make Payment</h3>
                  <p className="font-body text-[11px] text-gray-500 m-0 leading-[1.4]">We pay attention to every quality in<br/>the service we provide to you</p>
                </div>
                <div className="w-[44px] h-[44px] rounded-full border-2 border-secondary flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                    <path d="M16 15h.01" strokeWidth="3" />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-full p-[8px_16px_8px_8px] flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <div className="w-[50px] h-[50px] rounded-full bg-primary text-white font-heading text-[20px] font-extrabold flex items-center justify-center shrink-0">03</div>
                <div className="flex-1 flex flex-col">
                  <h3 className="font-heading text-[16px] font-extrabold text-[#0b1c3d] m-0 mb-1">Ready For Travelling</h3>
                  <p className="font-body text-[11px] text-gray-500 m-0 leading-[1.4]">We pay attention to every quality in<br/>the service we provide to you</p>
                </div>
                <div className="w-[44px] h-[44px] rounded-full border-2 border-secondary flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M7 6V4a2 2 0 012-2h6a2 2 0 012 2v2" />
                    <rect x="3" y="6" width="18" height="15" rx="2" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 relative flex justify-center items-center">
          <div className="relative w-full max-w-[500px]">
            <img src="/booking_woman.jpg" alt="Traveler Woman" className="w-full h-auto mix-blend-darken" />
          </div>
          
          {/* Rotated Text */}
          <div className="absolute right-[-40px] max-lg:right-[-20px] max-sm:hidden top-1/2 -translate-y-1/2 -rotate-90 flex items-baseline gap-3 pointer-events-none">
            <span className="font-decorative text-[24px] text-secondary font-semibold">For</span>
            <span className="font-decorative text-[80px] text-primary font-bold leading-[0.8]">Summer!</span>
          </div>
        </div>

      </div>
    </section>
  );
}
