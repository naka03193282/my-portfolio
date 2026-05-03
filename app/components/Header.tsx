"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          <span className="flex items-end text-xl sm:text-2xl font-bold text-blue-600 gap-2">
            <svg className="icon-bicycle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="28" height="28"><text y="0.9em" fontSize="90">🚴</text></svg>
            Kotaro Nakajima
          </span>
          <div className="hidden sm:flex gap-8 text-base font-medium">
            <a href="#profile" className="text-blue-600 border-b-2 border-blue-600 pb-0.5 transition">
              Profile
            </a>
            <a href="#research" className="text-gray-600 hover:text-blue-600 transition">
              Research
            </a>
            <a href="#works" className="text-gray-600 hover:text-blue-600 transition">
              Works
            </a>
          </div>
          <button
            type="button"
            className="sm:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="sm:hidden mt-3 flex flex-col gap-3 text-base font-medium pb-2 border-t border-gray-100 pt-3">
            <a href="#profile" className="text-blue-600" onClick={() => setMenuOpen(false)}>Profile</a>
            <a href="#research" className="text-gray-600" onClick={() => setMenuOpen(false)}>Research</a>
            <a href="#works" className="text-gray-600" onClick={() => setMenuOpen(false)}>Works</a>
          </div>
        )}
      </nav>
    </header>
  );
}
