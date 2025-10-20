/*
  StartHero.jsx – powrót do wersji z automatyczną galerią
  + dodane przyciski "Lokalizacja" i "Kontakt" pojawiające się po prawej stronie
*/

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "../FadeInSection";
import budynek1 from "../../zdjecia/1.jpg";
import budynek2 from "../../zdjecia/MJ (3).jpg";
import budynek3 from "../../zdjecia/MJ (4).jpg";
import budynek4 from "../../zdjecia/MJ (5).jpg";


export default function StartHero() {


  const [showButtons, setShowButtons] = useState(false);
  const galleryRef = useRef(null);

  // Pokazujemy przyciski "Lokalizacja" i "Kontakt", gdy galeria jest widoczna
  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return;
      const rect = galleryRef.current.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
      setShowButtons(inView);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="start"
      className="relative min-h-screen flex flex-col justify-center items-center text-center 
                 bg-gradient-to-br from-sky-50 via-white to-indigo-100 overflow-hidden"
    >
      {/* Tło */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-20"></div>

      {/* Główna treść */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 glass p-10 sm:p-14 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
          Wygodne noclegi dla zespołów
        </h1>
        <p className="text-neutral-700 text-lg leading-relaxed">
          Jesteśmy MJ Trust – oferujemy komfortowe noclegi pracownicze w dogodnych lokalizacjach.
          Nasze obiekty są nowoczesne, czyste i w pełni wyposażone.  
          Dla firm, ekip budowlanych i zespołów w delegacjach.
        </p>
      </motion.div>

      <FadeInSection delay={0.3}>
        <div className="relative z-10 mt-24 glass backdrop-blur-xl shadow-2xl border border-white/40 rounded-3xl p-16 max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold text-neutral-900 mb-6"
          >
            🏗️ Nowy budynek w realizacji!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-700 text-xl leading-relaxed"
          >
            Trwają prace nad nowoczesnym obiektem w <strong>Sochaczewie</strong> — otwarcie planowane
            na <strong>wiosnę 2026</strong>. Obiekt będzie posiadał pokoje 2–3 osobowe, 
            przestronną strefę relaksu, własny parking oraz pełne zaplecze kuchenne i sanitarne.
          </motion.p>
        </div>
      </FadeInSection>

      {/* 🔹 Sekcja galerii */}
      <FadeInSection delay={0.5}>
        <section
          ref={galleryRef}
          id="galeria"
          className="relative mt-28 w-full overflow-hidden py-20"
        >
          {/* Blur tła */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-sky-50/50 to-indigo-100/40 backdrop-blur-[8px] z-0"></div>

          {/* Galeria */}
          <motion.div
            className="relative z-10 flex gap-10 w-[250%] px-10"
            animate={{ x: ["0%", "-30%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                <img
                  src={budynek1}
                  alt="Budynek 1"
                  className="w-[35%] rounded-3xl shadow-2xl object-cover"
                />
                <img
                  src={budynek2}
                  alt="Budynek 2"
                  className="w-[35%] rounded-3xl shadow-2xl object-cover"
                />
                <img
                  src={budynek3}
                  alt="Budynek 3"
                  className="w-[35%] rounded-3xl shadow-2xl object-cover"
                />
                <img
                  src={budynek4}
                  alt="Budynek 4"
                  className="w-[35%] rounded-3xl shadow-2xl object-cover"
                />
              </React.Fragment>
            ))}
          </motion.div>
        </section>
      </FadeInSection>

      {/* 📍 Przyciski po prawej stronie (Lokalizacja i Kontakt) */}
      <AnimatePresence>
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
            className="fixed right-6 bottom-1/3 flex flex-col gap-2 items-end z-40"
          >
            {/* Lokalizacja */}
            <a
              href="https://www.google.com/maps/dir//Ko%C5%BCuszki-Parcel+74,+96-500+Sochaczew/@52.2341451,20.2129014,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47195754f28f9e21:0x2c77b46dbd477eba!2m2!1d20.2952624!2d52.2341261?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-full shadow-md hover:bg-neutral-800 transition animate-bounce"
            >
              📍 <span className="text-sm font-medium">Lokalizacja nowej realizacji</span>
            </a>

            {/* Kontakt */}
            <a
              href="mailto:kontakt@mjtrust.pl"
              className="flex items-center gap-2 bg-white/80 text-neutral-800 px-4 py-2 rounded-full shadow-md border border-neutral-300 hover:bg-white transition animate-bounce delay-200"
            >
              ✉️ <span className="text-sm font-medium">Kontakt</span>
            </a>
          </motion.div> 
        )}
      </AnimatePresence>
      {/* 🔹 Sekcja: Dlaczego MJ Trust */}
      <FadeInSection delay={0.5}>
        <section className="relative z-10 mt-32 mb-10 px-6 sm:px-8 lg:px-10">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Dlaczego MJ Trust?</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Oferujemy zakwaterowanie pracownicze, które łączy wygodę, porządek i elastyczność.
              Zobacz, dlaczego setki klientów wybierają nas każdego roku.
            </p>
          </div>

          {/* 🔸 4 kafelki z zaletami */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Kafelek 1 */}
            <div className="glass p-8 rounded-3xl shadow-lg border border-white/50 backdrop-blur-xl flex flex-col items-center text-center hover:shadow-xl transition">
              <div className="h-12 w-12 flex items-center justify-center bg-sky-100 text-sky-600 rounded-xl mb-4 text-2xl">
                🛏️
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Komfortowe pokoje</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Pokoje 2–3 osobowe, świeża pościel, dostęp do Wi-Fi i wyposażone kuchnie.
              </p>
            </div>

            {/* Kafelek 2 */}
            <div className="glass p-8 rounded-3xl shadow-lg border border-white/50 backdrop-blur-xl flex flex-col items-center text-center hover:shadow-xl transition">
              <div className="h-12 w-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-xl mb-4 text-2xl">
                ⏱️
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Elastyczne terminy</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Krótkie i długie pobyty – dostosowujemy warunki do potrzeb Twojej ekipy.
              </p>
            </div>

            {/* Kafelek 3 */}
            <div className="glass p-8 rounded-3xl shadow-lg border border-white/50 backdrop-blur-xl flex flex-col items-center text-center hover:shadow-xl transition">
              <div className="h-12 w-12 flex items-center justify-center bg-green-100 text-green-600 rounded-xl mb-4 text-2xl">
                📍
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Dobre lokalizacje</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Nasze obiekty znajdują się blisko miejsc pracy, z łatwym dojazdem i parkingiem.
              </p>
            </div>

            {/* Kafelek 4 */}
            <div className="glass p-8 rounded-3xl shadow-lg border border-white/50 backdrop-blur-xl flex flex-col items-center text-center hover:shadow-xl transition">
              <div className="h-12 w-12 flex items-center justify-center bg-amber-100 text-amber-600 rounded-xl mb-4 text-2xl">
                🧹
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Czystość i porządek</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Dbamy o regularne sprzątanie, świeżość i komfort w każdym pomieszczeniu.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>
    </section>
    
  );
}
