/*
  StartHero.jsx
  - Sekcja startowa z hasłem MJ Trust, CTA i subtelnym tłem.
*/

import React from "react";
import { motion } from "framer-motion";

export default function StartHero() {
  const scrollToLodgings = () => {
    const section = document.getElementById("obiekty");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="start"
      className="relative flex flex-col items-center justify-center text-center py-32 sm:py-40 bg-gradient-to-b from-sky-50 via-white to-indigo-50 overflow-hidden"
    >
      {/* Efekt tła */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight max-w-2xl"
      >
        Komfortowe noclegi dla pracowników i ekip budowlanych
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mt-5 text-lg text-neutral-600 max-w-xl"
      >
        MJ Trust zapewnia zakwaterowanie w wygodnych lokalizacjach w całej Polsce.
        Nasze obiekty są dostosowane do potrzeb firm i zespołów.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        onClick={scrollToLodgings}
        className="relative mt-8 px-8 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-500 transition-all"
      >
        Zobacz obiekty
      </motion.button>

      {/* Dekoracja */}
      <motion.div
        className="absolute -bottom-20 right-20 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
      />
    </section>
  );
}
