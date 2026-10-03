"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#1c1d21] overflow-hidden text-white">
      {/* Top Orange Line */}
      <div className="absolute top-0 left-0 right-0 h-[5px] bg-secondary z-10" />

      {/* Landscape Silhouette Background */}
      <div className="absolute -bottom-[5px] left-0 right-0 h-[300px] z-[1] pointer-events-none opacity-80">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" width="100%" height="100%">
          <path fill="#2a302b" fillOpacity="0.4" d="M0,320L48,293.3C96,267,192,213,288,213.3C384,213,480,267,576,261.3C672,256,768,192,864,181.3C960,171,1056,213,1152,229.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#222722" fillOpacity="0.6" d="M0,320L60,288C120,256,240,192,360,186.7C480,181,600,235,720,256C840,277,960,267,1080,245.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          {/* Simple Palm Trees */}
          <path fill="#2a302b" fillOpacity="0.6" d="M1200,280 Q1195,250 1180,220 Q1200,220 1210,230 Q1205,210 1180,220 Q1190,200 1170,210 Q1170,230 1180,220 Q1160,215 1170,230 Q1150,230 1170,240 Q1165,260 1200,280" />
          <path fill="#2a302b" fillOpacity="0.6" d="M250,290 Q245,260 230,230 Q250,230 260,240 Q255,220 230,230 Q240,210 220,220 Q220,240 230,230 Q210,225 220,240 Q200,240 220,250 Q215,270 250,290" />
        </svg>
      </div>

      <div className="container mx-auto px-5 max-w-[1200px] relative z-20 pt-[80px] pb-[30px]">
        <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr_1.8fr] max-xl:grid-cols-[2fr_1fr_1fr_1fr] max-lg:grid-cols-[1fr_1fr_1fr] max-sm:grid-cols-1 gap-10">
          
          {/* COLUMN 1: Brand & Socials */}
          <div className="flex flex-col gap-6 pr-5 max-lg:col-span-3 max-lg:pr-0 max-lg:mb-5 max-sm:col-span-1">
            <div className="flex items-center gap-3 no-underline">
              <div className="flex items-center">
                <svg viewBox="0 0 60 60" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="skyGradFooter" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1565D8"/>
                      <stop offset="100%" stopColor="#0a4ba8"/>
                    </linearGradient>
                  </defs>
                  <circle cx="30" cy="30" r="29" fill="url(#skyGradFooter)" stroke="#1565D8" strokeWidth="1"/>
                  <path d="M1 42 Q15 38 30 42 Q45 46 59 42 L59 57 Q44 54 30 57 Q16 60 1 57Z" fill="#0891b2"/>
                  <path d="M8 46 Q20 43 30 46 Q42 50 52 46 L52 54 Q40 52 30 54 Q18 56 8 54Z" fill="#f5a623"/>
                  <line x1="18" y1="46" x2="18" y2="30" stroke="#4a2c0a" strokeWidth="2"/>
                  <path d="M18 30 Q10 22 6 26 Q11 28 14 26 Q8 20 12 23 Q16 25 18 30Z" fill="#22c55e"/>
                  <path d="M18 30 Q20 22 26 24 Q22 28 20 27 Q24 20 22 24 Q20 27 18 30Z" fill="#16a34a"/>
                  <line x1="40" y1="46" x2="40" y2="32" stroke="#4a2c0a" strokeWidth="2"/>
                  <path d="M40 32 Q32 24 28 28 Q33 30 36 28 Q30 22 34 25 Q38 27 40 32Z" fill="#22c55e"/>
                  <path d="M40 32 Q42 24 48 26 Q44 30 42 29 Q46 22 44 26 Q42 29 40 32Z" fill="#16a34a"/>
                  <circle cx="30" cy="20" r="7" fill="#f59e0b"/>
                  <path d="M44 14 L52 18 L48 20 L46 28 L44 26 L46 20 L42 22 L40 20Z" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="font-heading font-extrabold text-[32px] leading-none tracking-[-1px]">
                  <span className="text-primary">Tour</span>
                  <span className="text-secondary">Vista</span>
                </div>
                <div className="font-body text-[8px] font-bold text-gray-400 tracking-[2.5px] mt-1">EXPLORE &bull; DISCOVER &bull; TRAVEL</div>
              </div>
            </div>

            <p className="font-body text-[14px] text-gray-300 leading-[1.7] m-0">
              Travlla is a multi-award-winning strategy and content creation agency that specializes in travel marketing.
              <br/><br/>
              Travlla is a multi-award-winning strategy and content creation agency that specializes in travel marketing.
            </p>

            <div className="flex gap-4 mt-2">
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-white text-secondary border-3 border-secondary flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:text-white hover:-translate-y-0.5" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="4" x2="20" y2="20"></line>
                  <line x1="20" y1="4" x2="4" y2="20"></line>
                </svg>
              </a>
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-white text-secondary border-3 border-secondary flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:text-white hover:-translate-y-0.5" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-white text-secondary border-3 border-secondary flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:text-white hover:-translate-y-0.5" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-white text-secondary border-3 border-secondary flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:text-white hover:-translate-y-0.5" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.6 9.3-.1-.8-.2-2.1 0-3l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.8 0 1.2.6 1.2 1.4 0 .8-.5 2.1-.8 3.2-.2 1 .5 1.8 1.4 1.8 1.7 0 3-1.8 3-4.4 0-2.3-1.7-3.9-4.1-3.9-2.8 0-4.4 2.1-4.4 4.2 0 .8.3 1.7.7 2.1.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.3-.1.2-.2.2-.4.1-1.5-.7-2.4-2.9-2.4-4.7 0-3.8 2.8-7.3 8-7.3 4.2 0 7.5 3 7.5 7 0 4.2-2.6 7.6-6.3 7.6-1.2 0-2.4-.6-2.8-1.4l-.8 2.9c-.3 1.1-1.1 2.4-1.6 3.2 1.3.4 2.7.6 4.1.6 5.5 0 10-4.5 10-10S17.5 2 12 2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: Explore */}
          <div className="flex flex-col">
            <h3 className="font-heading font-extrabold text-[20px] text-secondary m-0 mb-7">Explore</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">About us</Link></li>
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">FAQ's</Link></li>
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">Services</Link></li>
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">Team</Link></li>
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">News & Articles</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Destinations */}
          <div className="flex flex-col relative">
            <div className="absolute -top-2.5 -left-5 w-[140px] h-[140px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] rounded-full -z-10 pointer-events-none" />
            <h3 className="font-heading font-extrabold text-[20px] text-secondary m-0 mb-7">Destinations</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">Tokyo</Link></li>
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">France</Link></li>
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">Dubai</Link></li>
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">Kenya</Link></li>
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">Vietnam</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: Legal */}
          <div className="flex flex-col">
            <h3 className="font-heading font-extrabold text-[20px] text-secondary m-0 mb-7">Legal</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">Terms & Condition</Link></li>
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">Contact</Link></li>
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">Careers</Link></li>
              <li><Link href="#" className="text-gray-100 no-underline font-body text-[15px] font-semibold transition-colors duration-300 hover:text-secondary">Help</Link></li>
            </ul>
          </div>

          {/* COLUMN 5: Contact Info */}
          <div className="flex flex-col gap-6 max-xl:col-span-4 max-xl:flex-row max-xl:justify-between max-xl:mt-5 max-xl:border-t max-xl:border-white/5 max-xl:pt-[30px] max-lg:col-span-3 max-lg:flex-col max-lg:items-start max-sm:col-span-1 max-sm:pt-5">
            <div className="flex items-center gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(245,166,35,0.3)]">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <span className="font-decorative text-[28px] text-white leading-none">123 654 0214</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(245,166,35,0.3)]">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <span className="font-heading text-[16px] font-bold text-white">travllainfo@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(245,166,35,0.3)]">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span className="font-heading text-[16px] font-bold text-white">55/11 ronin tower New York</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="text-center pt-10 mt-[60px] font-heading text-[13px] font-bold text-white border-t border-white/5">
          &copy; 2026 <span className="text-secondary">TOUR VISTA</span> All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
