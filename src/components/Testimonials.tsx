"use client";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-[80px] bg-white">
      <div className="container mx-auto px-5 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="text-center mb-[50px] flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 border-2 border-secondary rounded-full p-[6px_16px] bg-white">
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </div>
            <span className="font-decorative text-[16px] font-semibold text-secondary">Testimonials</span>
          </div>
          <h2 className="font-heading text-[38px] max-sm:text-[28px] font-extrabold text-[#0a1e4e] leading-[1.2] tracking-[-0.5px] m-0">
            Real feedback from our happy<br/>travelers worldwide
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 min-h-[480px]">
          
          {/* Column 1: Mountain Image */}
          <div className="rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] h-full">
            <div className="relative w-full h-full min-h-[480px]">
              <Image src="/testi_mountain.jpg" alt="Mountain camping" fill className="object-cover" />
            </div>
          </div>

          {/* Column 2: Maldives Image */}
          <div className="rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] h-full">
            <div className="relative w-full h-full min-h-[480px]">
              <Image src="/testi_maldives.jpg" alt="Maldives bungalows" fill className="object-cover" />
            </div>
          </div>

          {/* Column 3 & 4: Review Card */}
          <div className="col-span-2 max-sm:col-span-1">
            <div className="flex h-full min-h-[480px] bg-white rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] max-sm:flex-col">
              
              {/* Review Card Left Image */}
              <div className="relative w-1/2 h-full max-sm:w-full max-sm:h-[300px] max-sm:min-h-[300px]">
                <Image src="/testi_japan.jpg" alt="Japan Tour" fill className="object-cover" />
              </div>

              {/* Review Card Right Content */}
              <div className="w-1/2 p-[40px_35px] flex flex-col justify-center max-sm:w-full">
                
                {/* Quotation Icon */}
                <div className="mb-6">
                  <svg viewBox="0 0 24 24" fill="#087f8c" width="36" height="36">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>

                <h3 className="font-heading text-[22px] font-extrabold text-[#0b1c3d] m-0 mb-3 tracking-[-0.5px]">Japan Discovery Tour</h3>
                
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} viewBox="0 0 24 24" fill="#F5A623" width="16" height="16">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                <p className="font-body text-[14px] text-gray-500 leading-[1.7] m-0 mb-[30px]">
                  Our trip to Japan was beyond amazing! From the beautiful cherry blossoms to the rich culture and delicious food, every moment was magical. Highly recommended!
                </p>

                <div className="mt-auto">
                  <div className="flex items-center">
                    <div className="relative w-[42px] h-[42px] rounded-full border-[3px] border-white -ml-3 overflow-hidden bg-gray-200 first:ml-0">
                      <Image src="/avatar1.jpg" alt="Traveler" fill className="object-cover" />
                    </div>
                    <div className="relative w-[42px] h-[42px] rounded-full border-[3px] border-white -ml-3 overflow-hidden bg-gray-200 first:ml-0">
                      <Image src="/avatar2.jpg" alt="Traveler" fill className="object-cover" />
                    </div>
                    <div className="relative w-[42px] h-[42px] rounded-full border-[3px] border-white -ml-3 overflow-hidden bg-gray-200 first:ml-0">
                      <Image src="/avatar3.jpg" alt="Traveler" fill className="object-cover" />
                    </div>
                    <div className="w-[42px] h-[42px] rounded-full border-[3px] border-white -ml-3 bg-primary text-white flex items-center justify-center font-heading text-[14px] font-bold z-10">
                      3+
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
