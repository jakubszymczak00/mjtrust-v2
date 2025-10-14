
/*
  RootLayout.jsx
  - Główny układ strony: tło + Navbar + miejsce na podstrony (Outlet).
  - Tło: delikatny gradient (spójny na wszystkich podstronach).
*/
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <Navbar />
      <Outlet />
    </div>
  );
}
