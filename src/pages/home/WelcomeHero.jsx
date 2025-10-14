
/*
  WelcomeHero.jsx
  - Ekran powitalny z krótkim opisem i przyciskiem "Przejdź dalej".
  - Po kliknięciu przechodzimy do /landing.
  - Animacje: fade-in i lekkie przesunięcia (Framer Motion).
*/
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function WelcomeHero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-neutral-900"
        >
          Witamy w MJ Trust — noclegi pracownicze
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="max-w-xl mx-auto text-neutral-700"
        >
          Komfortowe miejsca dla zespołów, elastyczne cenniki i przejrzyste informacje — bez systemu rezerwacji (na razie).
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/landing")}
          className="btn-primary"
        >
          Przejdź dalej <ChevronRight className="inline-block" size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
}
