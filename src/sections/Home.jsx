import React from 'react';
import { Link } from 'react-router-dom';
import ashpikachuimage from "../assets/ashpikachu.png";
import lucarioimage from "../assets/lucario.png";

function Home() {
  const featuredTypes = [
    { name: 'Fire', color: 'bg-red-500', icon: '🔥', description: 'Powerful fire-type Pokémon with burning passion' },
    { name: 'Water', color: 'bg-blue-500', icon: '💧', description: 'Graceful water-type Pokémon of the seas' },
    { name: 'Grass', color: 'bg-green-500', icon: '🌿', description: 'Nature-loving grass-type Pokémon' },
    { name: 'Electric', color: 'bg-yellow-400', icon: '⚡', description: 'Energetic electric-type Pokémon' }
  ];

  const stats = [
    { number: '898+', label: 'Pokémon' },
    { number: '18', label: 'Types' },
    { number: '8', label: 'Generations' },
    { number: '171M+', label: 'Games Sold' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
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

            {/* Center - Welcome Text */}
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Welcome to the World of Pokémon
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore, discover, and learn about all your favorite Pokémon
              </p>
              <Link
                to="/pokemon"
                className="inline-flex items-center px-8 py-4 rounded-full bg-red-500 text-white font-bold text-lg hover:bg-red-600 transition-colors duration-300"
              >
                Explore Pokédex
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
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
        </div>
      </section>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`${type.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4`}>
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{type.name}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
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
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comprehensive Data</h3>
              <p className="text-gray-600">
                Access detailed information about every Pokémon, including stats, abilities, and evolution chains.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast & Responsive</h3>
              <p className="text-gray-600">
                Enjoy a smooth and responsive experience while browsing through your favorite Pokémon.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
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
}

export default Home;
