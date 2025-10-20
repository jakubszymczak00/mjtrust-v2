import React from "react";
import { BedDouble, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-neutral-300 bg-neutral-200/80 backdrop-blur-md shadow-[0_-2px_10px_rgba(0,0,0,0.08)] text-neutral-800">

      <div className="section-container py-6 flex flex-col items-center gap-6 sm:gap-4">
        
        {/* Górna sekcja — logo i kontakt */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-white shadow-sm text-neutral-800 border border-neutral-200/60">
              <BedDouble className="h-5 w-5 text-neutral-700" />
            </div>
            <div>
              <h3 className="text-[17px] font-semibold tracking-tight text-neutral-900">
                MJ TRUST
              </h3>
              <p className="text-[12px] text-neutral-600 uppercase tracking-wider">
                NOCLEGI
              </p>
            </div>
          </div>

          {/* Linia separatora (desktop only) */}
          <div className="hidden sm:block w-1/4 border-t border-neutral-300/50 mx-auto" />

          {/* Kontakt */}
          <div className="flex flex-col items-center sm:items-end gap-1.5 mt-4 sm:mt-0">
            <a
              href="tel:502061300"
              className="flex items-center gap-1.5 text-neutral-700 hover:text-neutral-900 transition text-[15px]"
            >
              <Phone className="h-3.5 w-3.5 opacity-70" /> Tel. 502-061-300
            </a>
            <a
              href="tel:501628687"
              className="flex items-center gap-1.5 text-neutral-700 hover:text-neutral-900 transition text-[15px]"
            >
              <Phone className="h-3.5 w-3.5 opacity-70" /> Tel. 501-628-687
            </a>
            <a
              href="mailto:kontakt@mjtrust.pl"
              className="flex items-center gap-1.5 text-neutral-700 hover:text-neutral-900 transition text-[15px]"
            >
              <Mail className="h-3.5 w-3.5 opacity-70" /> kontakt@mjtrust.pl
            </a>
          </div>
        </div>

        {/* Dolna linia */}
        <div className="w-full border-t border-white/40"></div>

        {/* Stopka dolna */}
        <div className="text-center text-[13px] text-neutral-500">
          © {new Date().getFullYear()} MJ Trust — noclegi pracownicze
        </div>
      </div>
    </footer>
  );
}
