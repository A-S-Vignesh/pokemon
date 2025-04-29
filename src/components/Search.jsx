import { useState, useEffect } from "react";

function Search({ pokemonName, setPokemonData, fetchInitialData, fetchFilteredData }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.trim() !== "") {
        const pokename = pokemonName.filter((namedata) =>
          namedata.name.includes(search.toLowerCase())
        );
        fetchFilteredData(pokename);
      } else {
        setPokemonData([]);
        fetchInitialData();
      }
    }, 300); // delay for 300ms after typing

    return () => clearTimeout(delayDebounce);
  }, [search]);

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
        />
      </div>
    </div>
  );
}

export default Search;
