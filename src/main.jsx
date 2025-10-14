
/*
  main.jsx
  - Rejestruje Router i główny layout aplikacji.
  - Trasa startowa to WelcomeHero, po kliknięciu przechodzimy do /landing.
*/
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import RootLayout from "./layouts/RootLayout";
import WelcomeHero from "./pages/home/WelcomeHero";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <WelcomeHero /> },     // ekran startowy
      { path: "landing", element: <LandingPage /> }, // strona z sekcjami
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
