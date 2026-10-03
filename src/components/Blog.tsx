"use client";
import Image from "next/image";

export default function Blog() {
  return (
    <section id="blog" className="py-[80px] bg-white">
      <div className="container mx-auto px-5 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="text-center mb-[50px] flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 border-2 border-secondary rounded-full p-[6px_16px] bg-white">
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
            <span className="font-decorative text-[16px] font-semibold text-secondary">Travel Blog</span>
          </div>
          <h2 className="font-heading text-[44px] font-extrabold text-[#0b1c3d] leading-[1.2] tracking-[-1px] m-0">Travel experience</h2>
        </div>

        {/* Blog Grid Layout */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6">
            
            {/* Small Card 1 */}
            <div className="group flex gap-4 items-stretch">
              <div className="w-[100px] h-[130px] shrink-0 relative rounded-xl overflow-hidden">
                <Image src="/testi_mountain.jpg" alt="Blog" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              </div>
              <div className="flex-1 bg-[#f3f5f8] rounded-xl p-[20px_24px_20px_20px] relative flex flex-col justify-center">
                <div className="absolute top-0 right-0 bg-primary text-white p-[8px_10px] rounded-tr-xl rounded-bl-xl text-center leading-[1.1] min-w-[44px]">
                  <div className="font-heading font-extrabold text-[16px]">14</div>
                  <div className="font-body text-[10px] font-semibold capitalize">June</div>
                </div>
                <div className="font-heading font-bold text-[13px] text-[#0b1c3d] mb-2">Aidan Butler</div>
                <h4 className="font-body font-semibold text-[14px] text-gray-600 leading-[1.5] m-0">Resources for your first trip to overseas vacation</h4>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="group flex gap-4 items-stretch">
              <div className="w-[100px] h-[130px] shrink-0 relative rounded-xl overflow-hidden">
                <Image src="/testi_maldives.jpg" alt="Blog" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              </div>
              <div className="flex-1 bg-[#f3f5f8] rounded-xl p-[20px_24px_20px_20px] relative flex flex-col justify-center">
                <div className="absolute top-0 right-0 bg-primary text-white p-[8px_10px] rounded-tr-xl rounded-bl-xl text-center leading-[1.1] min-w-[44px]">
                  <div className="font-heading font-extrabold text-[16px]">26</div>
                  <div className="font-body text-[10px] font-semibold capitalize">June</div>
                </div>
                <div className="font-heading font-bold text-[13px] text-[#0b1c3d] mb-2">Ricardo Bell</div>
                <h4 className="font-body font-semibold text-[14px] text-gray-600 leading-[1.5] m-0">How to get acquainted with natives in a strange land</h4>
              </div>
            </div>

            {/* Small Card 3 */}
            <div className="group flex gap-4 items-stretch">
              <div className="w-[100px] h-[130px] shrink-0 relative rounded-xl overflow-hidden">
                <Image src="/booking_woman.jpg" alt="Blog" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              </div>
              <div className="flex-1 bg-[#f3f5f8] rounded-xl p-[20px_24px_20px_20px] relative flex flex-col justify-center">
                <div className="absolute top-0 right-0 bg-primary text-white p-[8px_10px] rounded-tr-xl rounded-bl-xl text-center leading-[1.1] min-w-[44px]">
                  <div className="font-heading font-extrabold text-[16px]">20</div>
                  <div className="font-body text-[10px] font-semibold capitalize">June</div>
                </div>
                <div className="font-heading font-bold text-[13px] text-[#0b1c3d] mb-2">Martin Hicks</div>
                <h4 className="font-body font-semibold text-[14px] text-gray-600 leading-[1.5] m-0">Resources for your first trip to overseas vacation</h4>
              </div>
            </div>

          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6">
            
            {/* Small Card (Wider) */}
            <div className="group flex gap-4 items-stretch">
              <div className="w-[100px] h-[130px] shrink-0 relative rounded-xl overflow-hidden">
                <Image src="/pkg_cappadocia.jpg" alt="Blog" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              </div>
              <div className="flex-1 bg-[#f3f5f8] rounded-xl p-[20px_24px_20px_20px] relative flex flex-col justify-center">
                <div className="absolute top-0 right-0 bg-primary text-white p-[8px_10px] rounded-tr-xl rounded-bl-xl text-center leading-[1.1] min-w-[44px]">
                  <div className="font-heading font-extrabold text-[16px]">28</div>
                  <div className="font-body text-[10px] font-semibold capitalize">June</div>
                </div>
                <div className="font-heading font-bold text-[13px] text-[#0b1c3d] mb-2">Paul Ward</div>
                <h4 className="font-body font-semibold text-[14px] text-gray-600 leading-[1.5] m-0">Step by step guide to planning your ideal holiday</h4>
              </div>
            </div>

            {/* Medium Card (Image top, overlapping white card bottom) */}
            <div className="group relative flex flex-col">
              <div className="relative h-[240px] rounded-2xl overflow-hidden z-10">
                <Image src="/testi_japan.jpg" alt="Blog" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-primary text-white p-[10px_14px] rounded-lg text-center leading-[1.1] z-20 shadow-[0_4px_12px_rgba(21,101,216,0.3)]">
                  <div className="font-heading font-extrabold text-[16px]">28</div>
                  <div className="font-body text-[10px] font-semibold capitalize">June</div>
                </div>
              </div>
              <div className="relative bg-white rounded-xl p-6 -mt-10 mx-4 z-30 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                <div className="font-heading font-bold text-[13px] text-[#0b1c3d] mb-2">Paul Ward</div>
                <h4 className="font-body font-semibold text-[14px] text-gray-600 leading-[1.5] m-0">Step by step guide to planning your ideal holiday</h4>
              </div>
            </div>

          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6">
            
            {/* Large Card */}
            <div className="group relative h-full min-h-[480px] max-md:min-h-[400px] rounded-2xl overflow-hidden">
              <Image src="/pkg_greece.jpg" alt="Blog" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              
              <div className="absolute top-6 right-6 bg-primary text-white p-[14px_16px] rounded-lg text-center leading-[1.1] z-20 shadow-[0_6px_20px_rgba(21,101,216,0.4)] min-w-[64px]">
                <div className="font-heading font-extrabold text-[32px]">08</div>
                <div className="font-body text-[11px] font-bold uppercase mt-0.5">JUNE</div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-[80px_30px_40px_30px] bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0)_100%)] z-20">
                <div className="font-heading font-bold text-[14px] text-secondary mb-3">By Joey Peterson</div>
                <h3 className="font-heading font-extrabold text-[24px] text-white leading-[1.35] m-0 tracking-[-0.5px]">The Top Travel Destinations for Photography Enthusiasts</h3>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
