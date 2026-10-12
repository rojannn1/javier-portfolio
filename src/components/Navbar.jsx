import { useState } from 'react'
import { navLinks, profile } from '../data.js'

export default function Navbar() {
  // Interactive feature 1: open and close the menu on small screens
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-slate-200">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg text-teal-700">
          {profile.name}
        </a>

        {/* Menu button (phones only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          className="md:hidden border border-slate-300 rounded px-3 py-1 text-sm"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Links (tablets and computers) */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={'#' + link.id} className="text-slate-600 hover:text-teal-700">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Dropdown links (phones only) */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={'#' + link.id}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-700 hover:text-teal-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
