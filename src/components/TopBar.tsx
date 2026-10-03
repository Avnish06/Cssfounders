"use client";

export default function TopBar() {
  return (
    <div className="bg-[#0b1f5c] py-2.5 text-[13px] font-body text-white/80 hidden sm:block">
      <div className="container mx-auto px-5 max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-2.5 md:gap-4 py-1 md:py-0">
        <div className="flex items-center gap-6">
          <a href="mailto:info@tourvista.com" className="flex items-center gap-1.5 text-white/80 text-[13px] transition-colors hover:text-secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            info@tourvista.com
          </a>
          <a href="tel:+21236547898" className="flex items-center gap-1.5 text-white/80 text-[13px] transition-colors hover:text-secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            +2 123 654 7898
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-white/65 font-heading font-medium mr-1">Follow Us:</span>
          {[
            { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
          ].map((s) => (
            <a key={s.label} href="#" aria-label={s.label} className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-white/80 text-[12px] font-bold transition-all hover:bg-primary hover:text-white hover:-translate-y-0.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d={s.path}/></svg>
            </a>
          ))}
          <a href="#" aria-label="X" className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-white/80 text-[12px] font-bold transition-all hover:bg-primary hover:text-white hover:-translate-y-0.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-white/80 text-[12px] font-bold transition-all hover:bg-primary hover:text-white hover:-translate-y-0.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-white/80 text-[12px] font-bold transition-all hover:bg-primary hover:text-white hover:-translate-y-0.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
