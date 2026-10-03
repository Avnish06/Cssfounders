"use client";

export default function CTABanner() {
  return (
    <section className="pt-[80px] pb-[40px] bg-white">
      <div className="container mx-auto px-5 max-w-[1200px]">
        
        {/* Main Banner */}
        <div className="relative bg-[#0b1c3d] rounded-3xl overflow-hidden p-[70px_80px] flex items-center justify-between shadow-[0_20px_50px_rgba(11,28,61,0.15)] max-lg:p-[50px] max-md:flex-col max-md:items-start max-md:gap-10 max-md:p-[40px_30px]">
          <div className="absolute top-0 right-0 bottom-0 w-[65%] bg-[url('/testi_maldives.jpg')] bg-right bg-cover bg-no-repeat z-0 max-md:w-full max-md:h-[70%] max-md:top-auto" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b1c3d_35%,rgba(11,28,61,0.8)_55%,rgba(11,28,61,0)_80%)] z-10 max-md:bg-[linear-gradient(to_bottom,#0b1c3d_40%,rgba(11,28,61,0.8)_60%,rgba(11,28,61,0)_90%)]" />

          {/* Left Side */}
          <div className="relative z-20 max-w-[600px]">
            <div className="inline-flex items-center gap-3 border-[1.5px] border-primary/80 rounded-full p-[6px_20px_6px_6px] bg-[#0b1c3d]/40 backdrop-blur-sm">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                </svg>
              </div>
              <span className="text-white font-heading text-[15px] font-bold tracking-[0.5px]">Book Your First Trip</span>
            </div>

            <h2 className="text-white font-heading text-[46px] font-extrabold leading-[1.35] mt-6 mb-0 tracking-[-1px] max-lg:text-[38px]">
              With Us Your Journey<br />
              Secured And <span className="text-secondary font-decorative text-[56px] font-normal tracking-[1px] ml-2 max-lg:text-[46px]">Seamless</span>
            </h2>
          </div>

          {/* Right Side */}
          <div className="relative z-20">
            <button className="group inline-flex items-center gap-4 bg-secondary text-white font-heading font-extrabold text-[18px] p-[12px_12px_12px_32px] rounded-full transition-all duration-300 shadow-[0_8px_25px_rgba(245,166,35,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(245,166,35,0.5)] hover:bg-[#f7b242]">
              Contact Us
              <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <svg viewBox="0 0 24 24" stroke="#F5A623" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Decorative Illustrations */}
        <div className="relative h-[80px] mt-2.5 pointer-events-none max-md:hidden">
          {/* Car Illustration */}
          <div className="absolute left-[3%] -bottom-2.5">
            <svg viewBox="0 0 200 100" width="160" height="80" xmlns="http://www.w3.org/2000/svg">
              {/* Wheels */}
              <circle cx="45" cy="85" r="14" fill="#1a202c" />
              <circle cx="45" cy="85" r="6" fill="#e2e8f0" />
              <circle cx="150" cy="85" r="14" fill="#1a202c" />
              <circle cx="150" cy="85" r="6" fill="#e2e8f0" />
              {/* Car Body */}
              <path d="M20 75 Q15 75 15 70 L20 45 Q25 35 40 35 L120 35 Q140 35 150 45 L180 65 Q185 70 185 75 Z" fill="#e2e8f0" />
              {/* Windows */}
              <path d="M45 38 L80 38 L80 50 L35 50 Z" fill="#94a3b8" />
              <path d="M85 38 L115 38 L130 50 L85 50 Z" fill="#94a3b8" />
              {/* Luggage on top */}
              <rect x="50" y="20" width="40" height="15" fill="#f87171" rx="2" />
              <rect x="95" y="15" width="25" height="20" fill="#fbbf24" rx="2" />
              <rect x="65" y="5" width="35" height="15" fill="#34d399" rx="2" />
            </svg>
          </div>

          {/* Island Illustration */}
          <div className="absolute right-[3%] bottom-0">
            <svg viewBox="0 0 200 100" width="160" height="80" xmlns="http://www.w3.org/2000/svg">
              {/* Sand Base */}
              <path d="M10 80 Q50 60 100 65 Q150 70 190 80 Q150 100 100 100 Q50 100 10 80 Z" fill="#fcd34d" />
              <path d="M20 82 Q50 65 100 70 Q140 75 180 82" fill="none" stroke="#fbbf24" strokeWidth="2" />
              {/* Palm Tree 1 */}
              <path d="M70 70 Q80 40 90 20" fill="none" stroke="#78350f" strokeWidth="4" />
              <path d="M90 20 Q70 10 60 25 Q70 20 90 20" fill="#22c55e" />
              <path d="M90 20 Q110 5 120 20 Q105 20 90 20" fill="#22c55e" />
              <path d="M90 20 Q100 35 110 40 Q100 30 90 20" fill="#16a34a" />
              <path d="M90 20 Q70 30 65 40 Q75 30 90 20" fill="#16a34a" />
              {/* Palm Tree 2 */}
              <path d="M130 75 Q125 50 115 30" fill="none" stroke="#78350f" strokeWidth="3" />
              <path d="M115 30 Q100 20 95 35 Q105 30 115 30" fill="#4ade80" />
              <path d="M115 30 Q130 15 140 30 Q125 30 115 30" fill="#4ade80" />
              <path d="M115 30 Q130 45 140 50 Q125 40 115 30" fill="#22c55e" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
