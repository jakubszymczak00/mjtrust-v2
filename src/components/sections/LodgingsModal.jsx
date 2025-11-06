/*
  LodgingModal.jsx — z dodaną lokalizacją + przyciskiem Trasa (Google Maps)
*/

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Map, Wifi, Car, Utensils, Home } from "lucide-react";

export default function LodgingModal({ isOpen, onClose, lodging }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!lodging) return null;

  const images = lodging.gallery || [lodging.image];

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  // Link do trasy Google Maps
  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    lodging.location || ""
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="glass max-w-3xl w-[90%] md:w-[800px] p-6 relative overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Zamknij */}
            <button
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-neutral-100/70 transition"
              onClick={onClose}
            >
              <X size={20} className="text-neutral-700" />
            </button>

            {/* Galeria główna */}
            <div className="relative aspect-[4/3] mb-4 rounded-2xl overflow-hidden">
              <motion.img
                key={activeIndex}
                src={images[activeIndex]}
                alt={lodging.title}
                className="w-full h-full object-contain sm:object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Nawigacja lewo/prawo */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm hover:bg-white text-neutral-800 rounded-full p-2 shadow-md"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm hover:bg-white text-neutral-800 rounded-full p-2 shadow-md"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Miniaturki */}
            {images.length > 1 && (
              <div className="flex justify-center gap-3 mb-6">
                {images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`mini-${i}`}
                    className={`w-16 h-16 rounded-lg object-cover cursor-pointer transition-transform hover:scale-105 ${
                      i === activeIndex
                        ? "ring-2 ring-indigo-500 scale-105"
                        : "opacity-80 hover:opacity-100"
                    }`}
                    onClick={() => setActiveIndex(i)}
                    whileHover={{ scale: 1.08 }}
                  />
                ))}
              </div>
            )}

            {/* Treść */}
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-neutral-900">
                {lodging.title}
              </h3>

              {/* Lokalizacja + przycisk Trasa */}
              {lodging.location && (
                <div className="flex flex-wrap items-center gap-3 text-neutral-700">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-indigo-600" />
                    <span className="font-medium">{lodging.location}</span>
                  </div>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition"
                  >
                    <Map size={16} /> Trasa
                  </a>
                </div>
              )}

              <p className="text-neutral-700 leading-relaxed">{lodging.desc}</p>
              
              {/* Udogodnienia */}
              {lodging.amenities && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {lodging.amenities.includes("wifi") && (
                    <div className="flex items-center gap-1 text-neutral-700">
                      <Wifi size={18} className="text-indigo-600" /> Wi-Fi
                    </div>
                  )}
                  {lodging.amenities.includes("parking") && (
                    <div className="flex items-center gap-1 text-neutral-700">
                      <Car size={18} className="text-indigo-600" /> Parking
                    </div>
                  )}
                  {lodging.amenities.includes("kitchen") && (
                    <div className="flex items-center gap-1 text-neutral-700">
                      <Utensils size={18} className="text-indigo-600" /> Kuchnia
                    </div>
                  )}
                  {lodging.amenities.includes("house") && (
                    <div className="flex items-center gap-1 text-neutral-700">
                      <Home size={18} className="text-indigo-600" /> Cały dom
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
