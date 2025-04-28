import React from "react";
import { Link } from "react-router-dom";
import ashpikachuimage from "../assets/ashpikachu.png"
import lucarioimage from "../assets/lucario.png"

function Header() {
    return (
      <header className="relative bg-red-500">
        {/* Top Navigation Bar */}
        <nav className="bg-red-600 py-3 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 text-white hover:text-white/90 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="font-medium">Home</span>
              </Link>
              <Link to="/pokemon" className="flex items-center gap-2 text-white hover:text-white/90 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027c.81-1.652 2.568-2.978 4.616-3.01A1.5 1.5 0 018 5.5V7h4V5.5a1.5 1.5 0 01-.948-.513c2.048.032 3.807 1.358 4.616 3.01.262.523.428 1.085.428 1.503 0 2.071-2.69 3.5-6 3.5C6.69 13 4 11.571 4 9.5c0-.418.166-.98.428-1.503zM8 9a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Pokémon</span>
              </Link>
            </div>
            <div className="flex gap-6">
              <Link to="/favorites" className="flex items-center gap-2 text-white hover:text-white/90 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">Favorites</span>
              </Link>
              <Link to="/about" className="flex items-center gap-2 text-white hover:text-white/90 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">About</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Header Content */}
        <div className="container mx-auto px-4 pt-8 pb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side - Ash & Pikachu */}
            <div className="w-48 md:w-72 relative group">
              <div className="relative transform transition-transform duration-300 group-hover:scale-105">
                <img
                  src={ashpikachuimage}
                  className="w-full h-auto object-contain"
                  alt="Ash and Pikachu"
                />
              </div>
            </div>

            {/* Center - Title */}
            <div className="text-center relative z-10 -mt-4 md:mt-0">
              <div className="relative">
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider">
                  Pokédex
                </h1>
                <div className="relative inline-block">
                  <h2 className="text-2xl md:text-3xl font-medium italic text-yellow-300 tracking-wide">
                    Gotta catch 'em all!
                  </h2>
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-300"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Lucario */}
            <div className="w-48 md:w-72 relative group">
              <div className="relative transform transition-transform duration-300 group-hover:scale-105">
                <img
                  src={lucarioimage}
                  className="w-full h-auto object-contain"
                  alt="Lucario"
                />
              </div>
            </div>
          </div>

          {/* Pokemon Type Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {[
              { type: 'Fire', color: 'bg-red-500' },
              { type: 'Water', color: 'bg-blue-500' },
              { type: 'Grass', color: 'bg-green-500' },
              { type: 'Electric', color: 'bg-yellow-400' },
              { type: 'Psychic', color: 'bg-purple-500' }
            ].map(({ type, color }) => (
              <button
                key={type}
                className={`px-6 py-2 ${color} rounded-full text-white text-sm font-medium
                          shadow-sm hover:shadow-md transition-all duration-200
                          hover:scale-105`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* White Divider with Pokeball */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
            <div className="relative w-16 h-16 bg-white rounded-full border-4 border-gray-800">
              <div className="absolute inset-0 border-t-[32px] border-t-red-500 rounded-t-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-2 border-gray-800"></div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;