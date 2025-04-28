import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonName from "../PokemonName";
import { getTypeColor } from "../utils/pokemonTypeColors";

function PokemonDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState(null);
  const [speciesData, setSpeciesData] = useState(null);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const [pokemonRes, speciesRes] = await Promise.all([
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        ]);
        const pokemon = await pokemonRes.json();
        const species = await speciesRes.json();
        setPokemonData(pokemon);
        setSpeciesData(species);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData(id);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-pokemon-red border-t-transparent shadow-lg"></div>
      </div>
    );
  }
  
  if (!pokemonData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl text-gray-600 font-medium">No Pokemon Data Found</div>
      </div>
    );
  }

  const mainTypeColor = getTypeColor(pokemonData.types[0].type.name);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto">
          {/* Pokemon Header with Gradient */}
          <div className={`bg-gradient-to-br ${mainTypeColor} p-8 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 opacity-10">
              <svg className="w-64 h-64" viewBox="0 0 24 24" fill="white">
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm0-13a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3z"/>
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-white capitalize mb-2">{pokemonData.name}</h1>
              <p className="text-2xl text-white/90">#{pokemonData.id.toString().padStart(3, '0')}</p>
              <div className="flex gap-2 mt-4">
                {pokemonData.types.map((type) => (
                  <span
                    key={type.type.name}
                    className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium capitalize shadow-lg"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Pokemon Image */}
              <div className="flex flex-col items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-black/5 rounded-2xl filter blur-xl group-hover:blur-2xl transition-all duration-300 scale-95"></div>
                  <img
                    className="relative w-72 h-72 object-contain transform group-hover:scale-105 transition-transform duration-300"
                    src={pokemonData.sprites?.other["official-artwork"]?.front_default}
                    alt={pokemonData.name}
                  />
                </div>
              </div>

              {/* Physical Characteristics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h3 className="text-sm text-gray-500 mb-1">Height</h3>
                  <p className="text-2xl font-bold text-gray-800">{(pokemonData.height / 10).toFixed(1)}m</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h3 className="text-sm text-gray-500 mb-1">Weight</h3>
                  <p className="text-2xl font-bold text-gray-800">{(pokemonData.weight / 10).toFixed(1)}kg</p>
                </div>
              </div>

              {/* Base Experience */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Base Experience</h3>
                <div className="flex items-center gap-2">
                  <div className="flex-grow h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 bg-gradient-to-r ${mainTypeColor}`}
                      style={{ width: `${Math.min((pokemonData.base_experience / 300) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <span className="text-lg font-bold text-gray-700">{pokemonData.base_experience}</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Base Stats</h3>
                {pokemonData.stats.map(({ stat, base_stat }) => (
                  <div key={stat.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600 capitalize">
                        {stat.name.replace('-', ' ')}
                      </span>
                      <span className="text-sm font-bold text-gray-800">{base_stat}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 bg-gradient-to-r ${mainTypeColor}`}
                        style={{ width: `${Math.min((base_stat / 255) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Abilities */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Abilities</h3>
                <div className="flex flex-wrap gap-2">
                  {pokemonData.abilities.map((ability) => (
                    <span
                      key={ability.ability.name}
                      className={`px-4 py-2 rounded-lg text-sm font-medium capitalize
                        ${ability.is_hidden 
                          ? 'bg-gray-100 text-gray-600 border border-gray-200' 
                          : `bg-gradient-to-r ${mainTypeColor} text-white`}`}
                    >
                      {ability.ability.name.replace('-', ' ')}
                      {ability.is_hidden && ' (Hidden)'}
                    </span>
                  ))}
                </div>
              </div>

              {/* Moves */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Notable Moves</h3>
                <div className="grid grid-cols-2 gap-2">
                  {pokemonData.moves.slice(0, 6).map((move) => (
                    <div
                      key={move.move.name}
                      className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {move.move.name.replace('-', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Game Indices */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Game Data</h3>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Game Index</span>
                    <span className="text-sm font-bold text-gray-800">#{pokemonData.game_indices[0]?.game_index || 'N/A'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Base Experience</span>
                    <span className="text-sm font-bold text-gray-800">{pokemonData.base_experience} XP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
