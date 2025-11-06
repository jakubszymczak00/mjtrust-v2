import React from "react";
import { motion } from "framer-motion";
import biuroImg from "../../zdjecia/1.jpg"; // przykładowe zdjęcie

export default function AboutCompanyVisual() {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-br from-white via-sky-50 to-indigo-50 overflow-hidden"
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Tekst */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">
            Kim jesteśmy
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            <strong>MJ Trust</strong> to firma, która zapewnia komfortowe noclegi pracownicze
            w najlepszych lokalizacjach. Dbamy o wygodę, bezpieczeństwo i elastyczne warunki współpracy.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Nasze obiekty są idealnym wyborem dla firm, które cenią jakość i niezawodność.
          </p>
        </motion.div>

        {/* Zdjęcie */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={biuroImg}
            alt="MJ Trust - noclegi pracownicze"
            className="rounded-3xl shadow-lg object-cover w-full h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
