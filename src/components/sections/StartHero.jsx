/*
  StartHero.jsx (wersja z ruchomą galerią)
  - Sekcja startowa z głównym opisem
  - Po przewinięciu pokazuje 3 duże zdjęcia przesuwające się automatycznie z prawej do lewej
*/

import React from "react";
import { motion } from "framer-motion";
import FadeInSection from "../FadeInSection";
import budynek1 from "../../zdjecia/1.jpg"
import budynek2 from "../../zdjecia/MJ (3).jpg"
import budynek3 from "../../zdjecia/MJ (4).jpg"
import budynek4 from "../../zdjecia/MJ (5).jpg"

export default function StartHero() {
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

      {/* 🔽 Sekcja animowana po scrollu */}
      <FadeInSection delay={0.3}>
        <div className="relative z-10 mt-24 glass backdrop-blur-xl shadow-2xl border border-white/40 rounded-3xl p-8 max-w-xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold text-neutral-900 mb-3"
          >
            🏗️ Nowy budynek w realizacji!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-700 leading-relaxed"
          >
            Trwają prace nad nowoczesnym obiektem w <strong>Sochaczewie</strong> — otwarcie planowane
            na <strong>wiosnę 2026</strong>. Budynek będzie posiadał pokoje 2–3 osobowe, strefę relaksu
            oraz własny parking.
          </motion.p>
        </div>
      </FadeInSection>

      {/* 🔽 Nowa sekcja: przesuwające się zdjęcia */}
      <FadeInSection delay={0.5}>
        <div className="relative mt-28 w-full overflow-hidden py-10">
          <motion.div
            className="flex gap-8 w-[200%]"
            animate={{ x: ["0%", "-25%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {/* Powielone 3 zdjęcia, żeby stworzyć płynną pętlę */}
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                <img
                  src={budynek1}
                  alt="1"
                  className="w-[33%] rounded-3xl shadow-xl object-cover"
                />
                <img
                  src={budynek2}
                  alt="Obiekt 2"
                  className="w-[33%] rounded-3xl shadow-xl object-cover"
                />
                <img
                  src={budynek3}
                  alt="Obiekt 3"
                  className="w-[33%] rounded-3xl shadow-xl object-cover"
                />
                <img
                  src={budynek4}
                  alt="Obiekt 3"
                  className="w-[33%] rounded-3xl shadow-xl object-cover"
                />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </FadeInSection>

      {/* Drobny efekt scroll hint */}
      <div
        onClick={() =>
          document.getElementById("o-nas")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 flex flex-col items-center text-neutral-500 animate-bounce cursor-pointer"
      >
        <span className="text-sm mb-1">Przewiń w dół</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
