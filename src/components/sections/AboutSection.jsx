import React from "react";
import { motion } from "framer-motion";
import { Info, Handshake, Settings } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-transparent">
      <div className="section-container text-center">
        <h2 className="section-title">O nas</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Działamy elastycznie, jasno komunikujemy warunki i stawiamy na przejrzystość informacji.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
              <Info className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">Jasne warunki</h3>
            <p className="mt-2 text-neutral-700">
              Ceny, zasady i wyposażenie opisujemy konkretnie — bez ukrytych gwiazdek.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
              <Handshake className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">Elastyczność</h3>
            <p className="mt-2 text-neutral-700">
              Dopasowujemy ofertę do liczby osób i długości pobytu — wszystko do uzgodnienia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
              <Settings className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">Komfort i wsparcie</h3>
            <p className="mt-2 text-neutral-700">
              Każdy obiekt jest w pełni wyposażony, a w razie potrzeby zapewniamy szybki kontakt i pomoc.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
