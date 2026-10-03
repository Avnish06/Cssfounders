"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about", active: false },
  { label: "Our Service", href: "#services", active: false },
  { label: "Tour Package", href: "#packages", active: false },
  { label: "Destinations", href: "#destinations", active: false, hasDropdown: true },
  { label: "Blog", href: "#blog", active: false },
  { label: "Contact", href: "#contact", active: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-[#0b1f5c] transition-all duration-300 ease-in-out ${scrolled ? "py-2 shadow-[0_4px_24px_rgba(0,0,0,0.3)]" : "py-3"}`}>
      <div className="container mx-auto px-5 max-w-[1200px]">
        <nav className="flex items-center justify-between bg-white rounded-full p-[6px] pr-3 shadow-[0_6px_28px_rgba(0,0,0,0.18),0_2px_6px_rgba(0,0,0,0.1)] border border-white/20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0 pr-4">
            <div className="shrink-0 flex items-center drop-shadow-[0_2px_6px_rgba(21,101,216,0.2)]">
              <svg viewBox="0 0 60 60" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1565D8"/>
                    <stop offset="100%" stopColor="#0a4ba8"/>
                  </linearGradient>
                </defs>
                <circle cx="30" cy="30" r="29" fill="url(#skyGrad)" stroke="#1565D8" strokeWidth="1"/>
                <path d="M1 42 Q15 38 30 42 Q45 46 59 42 L59 57 Q44 54 30 57 Q16 60 1 57Z" fill="#0891b2"/>
                <path d="M8 46 Q20 43 30 46 Q42 50 52 46 L52 54 Q40 52 30 54 Q18 56 8 54Z" fill="#f5a623"/>
                <line x1="18" y1="46" x2="18" y2="30" stroke="#4a2c0a" strokeWidth="2"/>
                <path d="M18 30 Q10 22 6 26 Q11 28 14 26 Q8 20 12 23 Q16 25 18 30Z" fill="#22c55e"/>
                <path d="M18 30 Q20 22 26 24 Q22 28 20 27 Q24 20 22 24 Q20 27 18 30Z" fill="#16a34a"/>
                <line x1="40" y1="46" x2="40" y2="32" stroke="#4a2c0a" strokeWidth="2"/>
                <path d="M40 32 Q32 24 28 28 Q33 30 36 28 Q30 22 34 25 Q38 27 40 32Z" fill="#22c55e"/>
                <path d="M40 32 Q42 24 48 26 Q44 30 42 29 Q46 22 44 26 Q42 29 40 32Z" fill="#16a34a"/>
                <circle cx="30" cy="20" r="7" fill="#f59e0b"/>
                <line x1="30" y1="10" x2="30" y2="7" stroke="#fbbf24" strokeWidth="1.5"/>
                <line x1="30" y1="33" x2="30" y2="30" stroke="#fbbf24" strokeWidth="1.5"/>
                <line x1="20" y1="20" x2="17" y2="20" stroke="#fbbf24" strokeWidth="1.5"/>
                <line x1="43" y1="20" x2="40" y2="20" stroke="#fbbf24" strokeWidth="1.5"/>
                <line x1="23" y1="13" x2="21" y2="11" stroke="#fbbf24" strokeWidth="1.5"/>
                <line x1="39" y1="27" x2="37" y2="25" stroke="#fbbf24" strokeWidth="1.5"/>
                <line x1="37" y1="13" x2="39" y2="11" stroke="#fbbf24" strokeWidth="1.5"/>
                <line x1="21" y1="27" x2="23" y2="25" stroke="#fbbf24" strokeWidth="1.5"/>
                <path d="M44 14 L52 18 L48 20 L46 28 L44 26 L46 20 L42 22 L40 20Z" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <div className="flex flex-col gap-[1px]">
              <div className="font-heading text-[22px] font-extrabold leading-none tracking-[-0.3px]">
                <span className="text-primary">Tour</span>
                <span className="text-secondary">Vista</span>
              </div>
              <div className="font-body text-[8px] font-semibold text-gray-400 tracking-[1.5px] uppercase">
                EXPLORE · DISCOVER · TRAVEL
              </div>
            </div>
          </a>

          {/* Nav Links */}
          <ul className={`fixed top-0 w-[280px] h-screen bg-white flex-col items-start justify-start p-5 pt-20 shadow-[-4px_0_30px_rgba(0,0,0,0.1)] transition-[right] duration-300 ease-in-out z-[9999] overflow-y-auto lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:flex-row lg:items-center lg:justify-center lg:flex-1 lg:gap-[2px] lg:p-0 lg:shadow-none lg:overflow-visible ${menuOpen ? "right-0 flex" : "-right-full hidden lg:flex"}`}>
            {navLinks.map((link) => {
              const isActive = activeLink === link.label;
              return (
                <li key={link.label} className="w-full lg:w-auto">
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.label);
                      setMenuOpen(false);
                    }}
                    className={`group inline-flex items-center gap-1 font-heading text-[14px] py-3 px-4 lg:py-[7px] lg:px-[10px] xl:py-2 xl:px-3.5 w-full lg:w-auto rounded-md lg:rounded-full whitespace-nowrap transition-all duration-200 border-b border-gray-100 lg:border-none ${isActive ? "text-primary font-semibold bg-primary/10" : "text-gray-700 font-medium hover:text-primary hover:bg-primary/5"}`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <svg className="inline-block transition-transform duration-200 group-hover:rotate-180 text-current" viewBox="0 0 10 6" width="10" height="6">
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                      </svg>
                    )}
                  </a>
                </li>
              );
            })}
            
            {/* Mobile CTA */}
            <li className="block lg:hidden w-full pt-4">
              <button id="enquiry-btn-mobile" className="inline-flex w-full items-center justify-center gap-3 bg-primary text-white font-heading font-bold text-[14px] py-2 pr-2.5 pl-6 rounded-full whitespace-nowrap shrink-0 transition-all duration-200 tracking-[0.2px] hover:bg-[#0d47a1] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(21,101,216,0.35)]">
                Enquiry Now
                <span className="inline-flex items-center justify-center w-7 h-7 bg-white/20 rounded-full text-[14px] shrink-0">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </span>
              </button>
            </li>
          </ul>

          {/* Desktop CTA */}
          <button id="enquiry-btn-desktop" className="hidden lg:inline-flex items-center justify-center gap-3 bg-primary text-white font-heading font-bold text-[14px] py-2 pr-2.5 pl-6 rounded-full whitespace-nowrap shrink-0 transition-all duration-200 tracking-[0.2px] hover:bg-[#0d47a1] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(21,101,216,0.35)]">
            Enquiry Now
            <span className="inline-flex items-center justify-center w-7 h-7 bg-white/20 rounded-full text-[14px] shrink-0">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </span>
          </button>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            className="flex lg:hidden flex-col gap-[5px] bg-transparent p-2 ml-2 cursor-pointer relative z-[10000]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-[2px] bg-gray-700 rounded-sm transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-gray-700 rounded-sm transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-gray-700 rounded-sm transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </nav>
      </div>
    </header>
  );
}
