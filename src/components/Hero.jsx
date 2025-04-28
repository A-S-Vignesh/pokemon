import React from "react";
import ashpikachuimage from "../assets/ashpikachu.png";
import lucarioimage from "../assets/lucario.png";

function Hero() {
  return (
    <section className="relative bg-red-500 overflow-hidden">
      <div className="container mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Ash & Pikachu */}
          <div className="w-48 md:w-72 relative group">
            <div className="relative transform transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-black/5 rounded-2xl filter blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src={ashpikachuimage}
                className="relative w-full h-auto object-contain"
                alt="Ash and Pikachu"
              />
            </div>
          </div>

          {/* Center - Title */}
          <div className="text-center relative z-10">
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

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a Pokémon..."
                  className="w-full px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border-2 border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Lucario */}
          <div className="w-48 md:w-72 relative group">
            <div className="relative transform transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-black/5 rounded-2xl filter blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src={lucarioimage}
                className="relative w-full h-auto object-contain"
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
                        hover:scale-105 border border-white/20`}
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
    </section>
  );
}

export default Hero; 