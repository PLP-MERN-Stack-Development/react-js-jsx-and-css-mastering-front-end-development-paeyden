import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / App Name */}
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Task Manager
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Home
          </a>
          <a
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Tasks
          </a>
          <a
            href="/api"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            API
          </a>

          {/* Theme Toggle */}
          <Button
            onClick={toggleTheme}
            variant="secondary"
            size="sm"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">✖️</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#tasks"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Tasks
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            {/* Theme Toggle in Mobile */}
            <Button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              variant="secondary"
              size="sm"
            >
              {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
