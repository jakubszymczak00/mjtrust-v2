/*
  LodgingsSection.jsx — delikatne szlify stylistyczne,
  spójne z resztą (glass, hover, timing animacji).
*/

import React, { useState } from "react";
import { motion } from "framer-motion";
import LodgingModal from "./LodgingsModal";
import budynek1 from "../../zdjecia/sochaczew/main.jpg";
const sochaczewImages = Object.values(
  import.meta.glob("../../zdjecia/sochaczew/*.{jpg,png,jpeg,webp}", { eager: true, import: "default" })
);
const błonieImages = Object.values(
  import.meta.glob("../../zdjecia/błonie/*.{jpg,png,jpeg,webp}", { eager: true, import: "default" })
);
const wpImages = Object.values(
  import.meta.glob("../../zdjecia/wp/*.{jpg,png,jpeg,webp}", { eager: true, import: "default" })
); 

const LODGINGS = [
  {
    id: 1,
    title: "Poniatowskiego 21E",
    desc: "Duży dom jednorodzinny dla zespołów do 25 osób, łazienka,  kuchnia, Wi-Fi, parking.",
    location: "Błonie, woj. mazowieckie",
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=60",
    ],
  },
  {
    id: 2,
    title: "Wojska Polskiego 53",
    desc: "Dom 2 piętrowy, do 25 osób, spokojna lokalizacja, kuchnia, łazienka, kuchnia, Wi-fi, parking",
    location: "Żyrardów, woj. mazowieckie",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1600585154152-9c8f8e3d6a2c?auto=format&fit=crop&w=1200&q=60",
    ],
  },
  {
    id: 3,
    title: "Kożuszki-Parcel 74",
    desc: "Duży dom do 32 osób, spokojna lokalizacja, kuchnia, łazienka, kuchnia, Wi-fi, parking ",
    location: "Sochaczew, woj. mazowieckie",
    image:
        sochaczewImages[0],
    gallery: sochaczewImages,
  },
];

export default function LodgingsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="lodgings" className="py-20 sm:py-28">
      <div className="section-container text-center">
        <h2 className="section-title">Nasze obiekty</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Poniżej przykładowe typy zakwaterowania. Pełna lista wysyłana
          przy zapytaniu — dopasujemy lokal do liczby osób i terminu.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LODGINGS.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <div className="text-sm text-neutral-600">{item.location}</div>
                <h3 className="mt-1 text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-neutral-700">{item.desc}</p>
                <button
                  onClick={() => setSelected(item)}
                  className="mt-4 btn-primary"
                >
                  Zobacz więcej
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <LodgingModal
        isOpen={!!selected}
        lodging={selected}
        onClose={() => setSelected(null)}
      />
    </section>
    
  );
}
