
/*
  LandingPage.jsx
  - Strona główna składająca się z sekcji: Start, O nas, Obiekty, Cennik, Footer.
  - Każda sekcja to oddzielny komponent w /components/sections.
*/
import React from "react";
import IntroSection from "../components/sections/IntroSection";
import StartHero from "../components/sections/StartHero";
import AboutSection from "../components/sections/AboutSection";
import LodgingsSection from "../components/sections/LodgingsSection";
import PricingSection from "../components/sections/PricingSection";


import Footer from "../components/sections/Footer";

export default function LandingPage() {
  return (
    <main>
      <IntroSection />
      <StartHero />
      <AboutSection />
      <LodgingsSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
