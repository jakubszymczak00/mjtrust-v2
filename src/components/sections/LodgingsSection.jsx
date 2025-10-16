import React, { useState } from "react";
import { motion } from "framer-motion";
import LodgingModal from "./LodgingsModal";

const LODGINGS = [
  {
    id: 1,
    title: "Dom w spokojnej okolicy",
    desc: "Duży dom dla zespołów 6–10 osób, kuchnia, Wi-Fi, parking.",
    location: "Gliwice, woj. śląskie",
    amenities: ["wifi", "parking", "kitchen", "house"],
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    id: 2,
    title: "Nowoczesne mieszkanie",
    desc: "W pełni wyposażone 2-pokojowe mieszkanie z łazienką i balkonem.",
    location: "Katowice, woj. śląskie",
    amenities: ["wifi", "kitchen"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1600585154152-9c8f8e3d6a2c?auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    id: 3,
    title: "Segment pracowniczy",
    desc: "Pokoje 2–4 osobowe z dostępem do kuchni i pralni.",
    location: "Zabrze, woj. śląskie",
    amenities: ["wifi", "parking", "kitchen"],
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=60",
    ],
  },
];

export default function LodgingsSection() {
  const [selectedLodging, setSelectedLodging] = useState(null);

  return (
    <section
      id="lodgings"
      className="py-20 sm:py-28 bg-transparent"
    >
      <div className="section-container text-center">
        <h2 className="section-title">Nasze obiekty</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Każdy obiekt posiada podstawowe udogodnienia — kuchnię, łazienkę,
          dostęp do Wi-Fi oraz miejsca parkingowe.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LODGINGS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-neutral-700 flex-1">{item.desc}</p>
                <button
                  className="mt-4 btn-primary self-start"
                  onClick={() => setSelectedLodging(item)}
                >
                  Zobacz więcej
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <LodgingModal
        isOpen={!!selectedLodging}
        lodging={selectedLodging}
        onClose={() => setSelectedLodging(null)}
      />
    </section>
  );
}
