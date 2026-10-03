"use client";

export default function VideoCTA() {
  return (
    <section className="py-[60px] bg-[#fbfdff]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] bg-[#0b1c3d] flex flex-col">
          
          {/* TOP HALF: Video Image */}
          <div className="relative h-[480px] max-sm:h-[350px] bg-[url('/video_cta_bg.jpg')] bg-center bg-cover bg-no-repeat flex">
            {/* Inner decorative border */}
            <div className="absolute inset-6 border-[1.5px] border-white/50 rounded-2xl pointer-events-none">
              
              {/* Play Button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] rounded-full border-2 border-white bg-black/30 backdrop-blur-sm flex items-center justify-center cursor-pointer pointer-events-auto transition-all duration-300 hover:-translate-x-1/2 hover:-translate-y-1/2 hover:scale-110 hover:bg-black/50" aria-label="Play Video">
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Right Brush Stroke Text */}
              <div className="absolute top-[10%] bottom-[10%] right-[5%] w-[380px] bg-[#0b1c3d] rounded-[50%_15%_45%_20%/15%_50%_20%_45%] flex items-center justify-center p-10 pointer-events-none shadow-[0_0_20px_rgba(11,28,61,0.5)] -rotate-3 max-lg:w-[280px] max-lg:right-[2%] max-lg:p-5 max-sm:hidden">
                <div className="absolute bg-[#0b1c3d] -z-10 w-[100px] h-[80px] -top-5 left-[30px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%]" />
                <div className="absolute bg-[#0b1c3d] -z-10 w-[120px] h-[90px] -bottom-[15px] right-[40px] rounded-[50%_30%_20%_60%/30%_60%_40%_50%]" />
                
                <div className="text-center rotate-3">
                  <div className="font-decorative text-[32px] text-white leading-[1.2] max-lg:text-[24px]">
                    Say <span className="text-[72px] text-secondary font-bold ml-2 max-lg:text-[50px]">Yes!</span>
                  </div>
                  <div className="font-decorative text-[28px] text-white -mt-2.5 max-lg:text-[20px]">To New Adventure</div>
                  <div className="w-[140px] h-1 bg-secondary mx-auto mt-2.5 rounded-full -rotate-2" />
                </div>
              </div>

            </div>
          </div>

          {/* BOTTOM HALF: Stats */}
          <div className="flex items-center justify-between p-[40px_60px] max-lg:flex-wrap max-lg:gap-[30px] max-lg:p-[30px_20px]">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center gap-3 flex-1 text-center max-lg:min-w-[40%] max-sm:min-w-full">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="#F5A623" width="36" height="36">
                  <path d="M12 15.22l-4.7 2.47 1.25-5.36L4.36 8.7l5.48-.46L12 3.19l2.16 5.05 5.48.46-4.19 3.63 1.25 5.36z" opacity="0"/>
                  <path d="M12 2a10 10 0 0 0-3.32 19.43l-2.09 3.62A1 1 0 0 0 7.45 26h9.1a1 1 0 0 0 .86-1.5l-2.09-3.62A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                  <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm3 7.82l-3-1.8-3 1.8.8-3.41-2.65-2.29 3.51-.3L12 4.5l1.34 3.32 3.51.3-2.65 2.29.8 3.41z"/>
                </svg>
              </div>
              <div className="font-body text-[14px] text-white mb-1">Awards Winning</div>
              <div className="font-heading text-[36px] font-extrabold text-white leading-none">3600+</div>
            </div>

            <div className="w-[1px] h-[70px] bg-white/15 max-lg:hidden" />

            {/* Stat 2 */}
            <div className="flex flex-col items-center gap-3 flex-1 text-center max-lg:min-w-[40%] max-sm:min-w-full">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="#F5A623" width="36" height="36">
                  <circle cx="12" cy="6" r="3"/>
                  <path d="M12 11c-3.87 0-7 3.13-7 7v2h14v-2c0-3.87-3.13-7-7-7z"/>
                </svg>
              </div>
              <div className="font-body text-[14px] text-white mb-1">Happy Traveler</div>
              <div className="font-heading text-[36px] font-extrabold text-white leading-none">3600+</div>
            </div>

            <div className="w-[1px] h-[70px] bg-white/15 max-lg:hidden" />

            {/* Stat 3 */}
            <div className="flex flex-col items-center gap-3 flex-1 text-center max-lg:min-w-[40%] max-sm:min-w-full">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="#F5A623" width="36" height="36">
                  <path d="M20 6h-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zM10 4h4v2h-4V4zm10 16H4v-9h16v9zm0-11H4V8h16v1z"/>
                </svg>
              </div>
              <div className="font-body text-[14px] text-white mb-1">Tours success</div>
              <div className="font-heading text-[36px] font-extrabold text-white leading-none">2.5K</div>
            </div>

            <div className="w-[1px] h-[70px] bg-white/15 max-lg:hidden" />

            {/* Stat 4 */}
            <div className="flex flex-col items-center gap-3 flex-1 text-center max-lg:min-w-[40%] max-sm:min-w-full">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="#F5A623" width="36" height="36">
                  <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/>
                </svg>
              </div>
              <div className="font-body text-[14px] text-white mb-1">Our Experience</div>
              <div className="font-heading text-[36px] font-extrabold text-white leading-none">25+</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
