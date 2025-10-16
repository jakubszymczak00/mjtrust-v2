/*
  FadeInSection.jsx
  - Komponent, który animuje swoje dzieci przy pojawieniu się w widoku (scroll reveal).
  - Używa Framer Motion + Intersection Observer.
*/

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({ children, delay = 0, yOffset = 40 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,   // animacja tylko raz
    threshold: 0.2,      // 20% elementu musi być widoczne
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
