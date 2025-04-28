import { useState } from "react";

function Search({
  pokemonName,
  setPokemonData,
  fetchInitialData,
  fetchFilteredData,
}) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search !== "") {
      const pokename = pokemonName.filter((namedata) =>
        namedata.name.includes(search.toLowerCase())
      );
      fetchFilteredData(pokename);
    } else {
      setPokemonData([]);
      fetchInitialData();
    }
  };

  return (
    <div className="space-y-4 bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Search Pokémon</h3>
      <div className="relative">
        <input
          className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
          type="text"
          name="search"
          placeholder="Enter Pokémon name..."
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button 
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors duration-200"
          onClick={handleSearch}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <button 
        className="w-full px-4 py-3 text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
