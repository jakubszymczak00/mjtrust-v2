import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 bg-neutral-100/90 border-t border-neutral-200/60">
      <div className="section-container">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-3">
          <p className="text-md text-neutral-600">
            © {new Date().getFullYear()} MJ Trust — noclegi pracownicze
          </p>
          <p className="text-md text-neutral-500">
            Kontakt: biuro@mjtrust.pl
          </p>
        </div>
      </div>
    </footer>
  );
}
