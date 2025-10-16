import React, { useEffect, useState, useCallback } from "react";
import { Home, Info, Building2, Tag } from "lucide-react";

const SECTIONS = [
  { id: "start", label: "Start", icon: Home },
  { id: "about", label: "O nas", icon: Info },
  { id: "lodgings", label: "Obiekty", icon: Building2 },
  { id: "pricing", label: "Cennik", icon: Tag },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("start");

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting && id) {
          setActiveSection(id);
        }
      });
    }, options);

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* tło półprzezroczyste za nawigacją */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-transparent backdrop-blur-xl" />

      {/* Logo MJ Trust przeniesione poza navbar */}
      <div className="absolute left-8 top-4 flex items-center gap-2 z-50">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-white shadow-md">
          MJ
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-[25px] font-semibold text-neutral-900 tracking-tight">
            MJ TRUST
          </span>
          <span className="text-[11px] text-neutral-500 uppercase">
            Noclegi
          </span>
        </div>
      </div>

      {/* Navbar – tylko przyciski, wyśrodkowane */}
      <nav className="relative flex justify-center mt-4">
        <div
          className="
            flex items-center justify-center
            rounded-2xl border border-white/50 bg-white/80 shadow-xl
            backdrop-blur-2xl
            px-3 sm:px-4 h-16 sm:h-18
          "
        >
          <ul className="relative z-[1] flex items-center gap-1 sm:gap-2">
            {SECTIONS.map(({ id, label, icon: Icon }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "group inline-flex items-center gap-2 rounded-xl px-3 sm:px-4 py-2 text-sm sm:text-[15px] font-medium transition",
                      "ring-1 ring-transparent",
                      isActive
                        ? "bg-indigo-100 text-indigo-800 ring-indigo-300 shadow-inner"
                        : "text-neutral-700 hover:bg-neutral-900/5 hover:ring-neutral-200",
                    ].join(" ")}
                  >
                    <Icon
                      className={[
                        "h-[18px] w-[18px] transition",
                        isActive
                          ? "opacity-100"
                          : "opacity-80 group-hover:opacity-100",
                      ].join(" ")}
                    />
                    <span>{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
