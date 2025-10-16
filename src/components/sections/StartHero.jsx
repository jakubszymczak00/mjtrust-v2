import React from "react";
import { motion } from "framer-motion";

export default function StartHero() {
  return (
    <section
      id="start"
      className="relative overflow-hidden py-24 sm:py-32 bg-transparent"
    >
      <div className="section-container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-semibold text-neutral-900"
        >
          Witamy w MJ Trust
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl mx-auto text-neutral-700"
        >
          Zapewniamy komfortowy nocleg i sprawną współpracę z ekipami budowlanymi.
        </motion.p>
      </div>
    </section>
  );
}
