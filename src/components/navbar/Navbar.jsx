/*
  Navbar.jsx — kolejność: Start → O nas → Obiekty → Cennik
  - Scroll spy nadal działa
  - Zachowany glass morphism i poprawione wyśrodkowanie
*/

import React, { useEffect, useState } from "react";
import { BedDouble, Info, DollarSign, Home } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const base =
    "flex items-center gap-2 px-5 py-3 rounded-full text-[15px] font-medium transition-all duration-300 hover:bg-white hover:shadow-md hover:text-neutral-900";
  const active =
    "bg-white text-neutral-900 shadow-lg border border-neutral-300 ring-1 ring-neutral-300/70";
  const inactive = "text-neutral-700";

  // Scroll spy logic
  useEffect(() => {
    const sections = document.querySelectorAll("section[id], #start");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Navbar shadow when scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex justify-center items-center py-3 transition-all duration-300 ${
        scrolled ? "shadow-md backdrop-blur-lg" : ""
      }`}
    >
      <nav
        className={`flex gap-3 px-7 py-3 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-white/85 border-neutral-300 shadow-lg"
            : "bg-white/60 border-white/50 shadow-md"
        } backdrop-blur-2xl`}
      >
        {/* Start */}
        <a
          href="#start"
          className={`${base} ${
            activeSection === "start" ? active : inactive
          }`}
        >
          <Home size={18} className="text-neutral-900" /> Start
        </a>

        {/* O nas */}
        <a
          href="#o-nas"
          className={`${base} ${
            activeSection === "o-nas" ? active : inactive
          }`}
        >
          <Info size={18} className="text-neutral-900" /> O nas
        </a>

        {/* Obiekty */}
        <a
          href="#obiekty"
          className={`${base} ${
            activeSection === "obiekty" ? active : inactive
          }`}
        >
          <BedDouble size={18} className="text-neutral-900" /> Obiekty
        </a>

        {/* Cennik */}
        <a
          href="#cennik"
          className={`${base} ${
            activeSection === "cennik" ? active : inactive
          }`}
        >
          <DollarSign size={18} className="text-neutral-900" /> Cennik
        </a>
      </nav>
    </header>
  );
}
