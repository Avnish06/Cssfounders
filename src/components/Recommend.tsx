"use client";

export default function Recommend() {
  return (
    <section className="py-[100px] bg-[#fbfdff] overflow-hidden relative">
      <div className="container mx-auto px-5 max-w-[1200px] flex items-center gap-[60px] max-lg:flex-col">
        
        {/* Left Side: Images */}
        <div className="flex-1 relative min-h-[600px] max-lg:w-full max-lg:max-w-[600px] max-lg:mx-auto max-lg:mb-10">
          {/* Decorative flying plane */}
          <div className="absolute -top-10 right-0 w-[140px] z-40 -rotate-15">
             <img src="https://cdn-icons-png.flaticon.com/512/723/723955.png" alt="plane" className="w-full h-auto opacity-90" />
          </div>
          
          <div className="relative w-full h-[600px]">
            {/* Image 1: Tall left */}
            <img 
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500&q=80" 
              alt="Hiker" 
              className="absolute top-10 left-0 w-[240px] h-[440px] object-cover rounded-[20px] z-10"
            />
            {/* Image 2: Bottom right */}
            <img 
              src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&q=80" 
              alt="Boat" 
              className="absolute bottom-0 right-10 w-[260px] h-[260px] object-cover rounded-[20px] z-10"
            />
            {/* Image 3: Center circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] max-sm:w-[240px] max-sm:h-[240px] rounded-full bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.1)] z-30">
              <img 
                src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&q=80" 
                alt="Woman looking at view" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            {/* Decorative dots */}
            <div className="absolute bottom-5 left-5 w-[60px] h-[60px] bg-[radial-gradient(#d0d9e6_2px,transparent_2px)] bg-[length:12px_12px] z-0" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-[1.1] flex flex-col">
          
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[1px] w-10 bg-secondary opacity-40" />
            <div className="flex items-center justify-center w-7 h-7 rounded-full border border-secondary/40">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#F5A623">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            <span className="font-heading text-[13px] font-bold text-secondary tracking-[1px]">WHY TRAVEL WITH US</span>
            <div className="h-[1px] w-10 bg-secondary opacity-40" />
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[32px] sm:text-[42px] font-extrabold text-[#0b1c3d] leading-[1.25] mb-5">
            We <span className="text-secondary">Recommend</span> Beautiful<br/>
            Destinations Every Month
          </h2>

          {/* Description */}
          <p className="font-body text-[15px] text-gray-500 leading-[1.6] mb-[30px]">
            We bring you handpicked destinations, expert travel tips and<br/>
            unforgettable experiences to make your every journey special.<br/>
            Let's explore the world together!
          </p>

          {/* Features Area */}
          <div className="flex items-center gap-[30px] mb-9">
            
            <div className="flex flex-col gap-4 flex-1">
              {/* Feature 1 */}
              <div className="flex items-center gap-5 p-6 bg-white border border-[#f0f4f8] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-[#e5edf5]">
                <div className="w-16 h-16 rounded-full border border-dashed border-secondary/50 flex items-center justify-center shrink-0">
                  <img src="https://cdn-icons-png.flaticon.com/512/2065/2065064.png" alt="Guide" className="w-8 h-8 object-contain" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-heading text-[18px] font-bold text-[#0b1c3d] m-0">Trusted Travel Guide</h3>
                  <div className="w-6 h-[2px] bg-secondary my-2" />
                  <p className="font-body text-[13px] text-gray-500 leading-[1.5] m-0">We provide reliable information and expert advice to help you plan your trips confidently and safely.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-5 p-6 bg-white border border-[#f0f4f8] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-[#e5edf5]">
                <div className="w-16 h-16 rounded-full border border-dashed border-secondary/50 flex items-center justify-center shrink-0">
                  <img src="https://cdn-icons-png.flaticon.com/512/3303/3303310.png" alt="Mission" className="w-8 h-8 object-contain" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-heading text-[18px] font-bold text-[#0b1c3d] m-0">Our Mission & Vision</h3>
                  <div className="w-6 h-[2px] bg-secondary my-2" />
                  <p className="font-body text-[13px] text-gray-500 leading-[1.5] m-0">Our mission is to inspire and connect people through travel and create positive experiences that open minds and enrich lives.</p>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-[1px] h-[180px] border-l-2 border-dotted border-[#d0d9e6] max-lg:hidden" />

            {/* Years Experience Block */}
            <div className="flex items-center gap-3 pl-2.5 max-lg:hidden">
              <div className="[writing-mode:vertical-rl] rotate-180 font-heading text-[16px] font-bold text-[#0b1c3d] leading-[1.2] text-right">
                Years of<br/>
                <span>Experience</span>
              </div>
              <div className="font-heading text-[96px] font-extrabold text-secondary leading-[0.8] tracking-[-3px]">25</div>
            </div>

          </div>

          {/* Bottom Action Area */}
          <div className="flex items-center gap-8 max-sm:flex-col max-sm:items-start max-sm:gap-5">
            <button className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[15px] py-[14px] px-[28px] rounded-full transition-all duration-250 hover:bg-[#0e4ab0] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(21,101,216,0.3)]">
              Discover More 
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover -mr-3 last:mr-0" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover -mr-3 last:mr-0" />
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover -mr-3 last:mr-0" />
              </div>
              <div className="font-body text-[12px] text-gray-500 leading-[1.3]">
                <strong className="font-heading text-[18px] font-extrabold text-[#0b1c3d]">3.5k+</strong><br/>
                Happy Customers
              </div>
            </div>

            <div className="ml-auto w-10 max-lg:hidden">
              <img src="https://cdn-icons-png.flaticon.com/512/3138/3138356.png" alt="Hot Air Balloon" className="w-full h-auto" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
