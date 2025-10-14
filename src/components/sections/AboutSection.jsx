import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="o-nas"
      className="py-20 sm:py-28 bg-white/70 backdrop-blur-sm"
    >
      <div className="section-container">
        <h2 className="section-title">O nas</h2>
        <p className="section-subtitle max-w-2xl">
          Działamy elastycznie i jasno komunikujemy warunki. Stawiamy na przejrzystość informacji i prostotę kontaktu.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glass p-6"
          >
            <h3 className="text-xl font-semibold text-neutral-900">Jasne warunki</h3>
            <p className="mt-2 text-neutral-700">
              Ceny, zasady i wyposażenie opisujemy konkretnie, bez ukrytych gwiazdek.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="glass p-6"
          >
            <h3 className="text-xl font-semibold text-neutral-900">Elastyczność</h3>
            <p className="mt-2 text-neutral-700">
              Dopasowujemy ofertę do liczby osób i długości pobytu — wszystko do uzgodnienia.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
