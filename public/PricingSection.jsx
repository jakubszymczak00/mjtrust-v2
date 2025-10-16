/*
  PricingSection.jsx
  - Sekcja cennika w stylu glass.
  - Otwiera modal z formularzem kontaktowym.
*/

import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";


const PRICES = [
  { id: 1, title: "1–3 dni", price: "70 zł", desc: "Elastyczne krótkie pobyty" },
  { id: 2, title: "4–7 dni", price: "60 zł", desc: "Korzystniejsza stawka tygodniowa" },
  { id: 3, title: "8–14 dni", price: "50 zł", desc: "Dłuższe zlecenia" },
  { id: 4, title: "15+ dni", price: "45 zł", desc: "Najlepsza cena dla brygad" },
];

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 bg-transparent"
    >
      <div className="section-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Cennik (od / os. / noc)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="section-subtitle max-w-2xl mx-auto"
        >
          Stawki orientacyjne — dokładna wycena zależy od liczby osób, długości pobytu i lokalizacji.
        </motion.p>

        {/* Karty cenowe */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICES.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-3 text-3xl font-bold text-neutral-900">
                {item.price}
              </p>
              <p className="text-sm text-neutral-600">+ 8% VAT</p>
              <p className="mt-3 text-neutral-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Główny przycisk CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() => setIsModalOpen(true)}
          className="mt-12 btn-primary bg-indigo-600 hover:bg-indigo-500 shadow-lg"
        >
          Zapytaj o ofertę
        </motion.button>

        {/* Modal z formularzem */}
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
}
