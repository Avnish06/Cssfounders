"use client";

export default function WhyChooseUs() {
  return (
    <section className="py-[40px] pb-[100px]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="relative bg-[#0b625f] rounded-b-[40px] mt-[80px]">
          
          {/* Cloud SVG Top Border */}
          <div className="absolute bottom-full left-0 right-0 h-[80px] overflow-hidden leading-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" width="100%" height="100%" className="block w-full h-full">
              <path 
                d="M0,120 L0,60 C40,60 60,30 90,30 C120,30 140,50 170,50 C210,50 240,10 280,10 C320,10 340,40 370,40 C410,40 430,20 470,20 C510,20 540,50 580,50 C620,50 640,10 680,10 C720,10 750,40 790,40 C830,40 850,20 890,20 C930,20 960,60 1000,60 C1040,60 1060,30 1090,30 C1130,30 1160,70 1200,70 L1200,120 Z" 
                fill="#0b625f" 
              />
            </svg>
          </div>

          {/* City Skyline Background Silhouette */}
          <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-[url('/city_silhouette.jpg')] bg-bottom bg-cover bg-no-repeat opacity-20 mix-blend-screen rounded-b-[40px] pointer-events-none" />

          <div className="relative z-10 flex justify-between items-center max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-[50px] p-[50px_80px_70px_80px] max-[900px]:p-[40px] max-sm:p-[30px_20px]">
            
            {/* Left Content */}
            <div className="flex-1 max-w-[500px]">
              <h2 className="font-decorative text-[40px] text-white mb-[30px] tracking-[1px]">Why Choose Us!</h2>
              
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-y-6 gap-x-5 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-[22px] h-[22px] rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="font-body text-[13px] font-semibold text-white">Perfect Detailing</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-[22px] h-[22px] rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="font-body text-[13px] font-semibold text-white">Save Your Budget</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-[22px] h-[22px] rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="font-body text-[13px] font-semibold text-white">Free Consultations</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-[22px] h-[22px] rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="font-body text-[13px] font-semibold text-white">Completed Certification</span>
                </div>
              </div>

              <button className="bg-[#99d81b] text-[#0b1c3d] font-heading font-bold text-[15px] py-[14px] px-[32px] rounded-full transition-all duration-300 shadow-[0_6px_20px_rgba(153,216,27,0.3)] hover:bg-[#a8ec1e] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(153,216,27,0.4)]">
                Discover More
              </button>
            </div>

            {/* Right Content */}
            <div className="flex items-center gap-[30px] max-sm:flex-col max-sm:items-start max-sm:gap-5">
              <div className="relative flex flex-col items-center -mt-[30px] max-sm:mt-0 max-sm:items-start">
                <div className="flex flex-col items-center">
                  <span className="font-decorative text-[110px] text-transparent [-webkit-text-stroke:2px_#F5A623] leading-[0.8] tracking-[-4px]">24</span>
                  <div className="font-heading text-[15px] font-semibold text-secondary tracking-[4px] mt-1 -mb-2.5">HOURS</div>
                  <div className="bg-white text-[#0b625f] font-heading text-[13px] font-extrabold tracking-[3px] py-1 px-3 -rotate-4 shadow-[0_4px_10px_rgba(0,0,0,0.1)] relative z-10">SERVICE</div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="font-heading text-[44px] font-extrabold text-white leading-none tracking-[-1px]">CALL US</div>
                <div className="font-heading text-[32px] font-extrabold text-[#99d81b] leading-[1.2]">206-242-1112</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
