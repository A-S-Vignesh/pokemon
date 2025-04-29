import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import featuredTypes from "../utils/pokemonTypes";


const Home = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  const stats = [
    { number: '898+', label: 'Pokémon' },
    { number: '18', label: 'Types' },
    { number: '8', label: 'Generations' },
    { number: '171M+', label: 'Games Sold' }
  ];


  return (
    <div className="min-h-screen">

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Types Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Discover Pokémon Types
          </h2>
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
              aria-label="Scroll left"
              type="button"
            >
              <span className="text-2xl">←</span>
            </button>
            {/* Scrollable Types */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 scrollbar-hide pokemon-type-scroller"
              style={{ scrollBehavior: "smooth" }}
            >
              {(featuredTypes || []).length === 0 ? (
                <div className="text-gray-500 text-center w-full">No types to display.</div>
              ) : (
                (featuredTypes).map((type, index) => (
                  <div
                    key={index}
                    className="min-w-[260px] bg-white rounded-xl shadow-md p-6 m-4 flex-shrink-0 transform hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className={`${type.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4`}>
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{type.name}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                ))
              )}
            </div>
            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
              aria-label="Scroll right"
              type="button"
            >
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Pokédex?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comprehensive Data</h3>
              <p className="text-gray-600">
                Access detailed information about every Pokémon, including stats, abilities, and evolution chains.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast & Responsive</h3>
              <p className="text-gray-600">
                Enjoy a smooth and responsive experience while browsing through your favorite Pokémon.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Save Favorites</h3>
              <p className="text-gray-600">
                Create your personal collection by saving your favorite Pokémon for quick access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-red-500 to-red-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Pokémon Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join millions of trainers worldwide in exploring the vast world of Pokémon
          </p>
          <Link
            to="/pokemon"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-red-500 font-bold text-lg hover:bg-red-50 transition-colors duration-300"
          >
            Get Started
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
