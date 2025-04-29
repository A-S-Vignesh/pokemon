import Search from "./Search";
import { useEffect, useState } from "react";
import { getTypeColor } from "../utils/pokemonTypeColors";
import usePokemonNames from "../hooks/usePokemonNames"; // adjust path if needed
import pokemonTypes from "../utils/pokemonTypes";

function FilterBox({
  setOffSet,
  setPokemonData,
  fetchInitialData,
  fetchFilteredData,
  offSet,
})
{
  const { pokemonNames, loading, error } = usePokemonNames();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showMaxMessage, setShowMaxMessage] = useState(false);
  

  const handleTypeClick = async (type) => {
    let newSelectedTypes;
    if (selectedTypes.includes(type)) {
      newSelectedTypes = selectedTypes.filter(t => t !== type);
      setShowMaxMessage(false);
    } else {
      if (selectedTypes.length >= 2) {
        setShowMaxMessage(true);
        setTimeout(() => setShowMaxMessage(false), 3000);
        return;
      }
      newSelectedTypes = [...selectedTypes, type];
    }
    setSelectedTypes(newSelectedTypes);

    if (newSelectedTypes.length === 0) {
      fetchInitialData();
      return;
    }

    // Fetch Pokémon by type
    try {
      const typePromises = newSelectedTypes.map(type =>
        fetch(`https://pokeapi.co/api/v2/type/${type}`)
          .then(res => res.json())
      );

      const typeResults = await Promise.all(typePromises);
      
      // Get Pokémon that have ALL selected types
      const pokemonUrls = typeResults.reduce((acc, typeData, index) => {
        const pokemonOfType = typeData.pokemon.map(p => p.pokemon);
        return index === 0 
          ? pokemonOfType 
          : acc.filter(p1 => pokemonOfType.some(p2 => p2.url === p1.url));
      }, []);

      fetchFilteredData(pokemonUrls);
    } catch (error) {
      console.error("Error fetching Pokémon by type:", error);
    }
  };

  return (
    <div className="space-y-6">
      <Search
        pokemonName={pokemonNames}
        offSet={offSet}
        setOffSet={setOffSet}
        setPokemonData={setPokemonData}
        fetchInitialData={fetchInitialData}
        fetchFilteredData={fetchFilteredData}
      />

      {/* Type Filter Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Filter by Type</h3>
          <span className="text-sm text-gray-500">
            {selectedTypes.length}/2 selected
          </span>
        </div>
        
        {/* Max Types Message */}
        {showMaxMessage && (
          <div className="mb-4 p-2 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
            Pokémon can only have up to 2 types
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          {pokemonTypes.map(({ name, icon }) => {
            const isSelected = selectedTypes.includes(name);
            const typeGradient = getTypeColor(name);
            return (
              <button
                key={name}
                onClick={() => handleTypeClick(name)}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium capitalize transition-all duration-200 w-full
                          ${isSelected 
                            ? `bg-gradient-to-r ${typeGradient} text-white shadow-md` 
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              >
                <span className="text-base">{icon}</span>
                <span>{name}</span>
              </button>
            );
          })}
        </div>
        {selectedTypes.length > 0 && (
          <button
            onClick={() => {
              setSelectedTypes([]);
              setShowMaxMessage(false);
              fetchInitialData();
            }}
            className="mt-4 text-sm text-red-500 hover:text-red-600 font-medium flex items-center justify-center w-full gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
}

export default FilterBox;
