import CardBox from "./CardBox";
import FilterBox from "./FilterBox";
import { useState, useEffect, useCallback } from "react";

function MainBox() {
  const [offSet, setOffSet] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const fetchData = useCallback(async () => {
    const rawdata = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=12`
    );
    const data = await rawdata.json();
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return res.json();
    });
    const detaildata = await Promise.all(promises);
    setPokemonData((prevData) =>
      offSet === 0 ? detaildata : prevData.concat(detaildata)
    );
  }, [offSet]);

  useEffect(() => {
    fetchData().then(() => setIsInitialLoad(false));
  }, [offSet, fetchData]);

  const fetchFilteredData = async (filteredPokemon) => {
    const promises = filteredPokemon.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return res.json();
    });
    const detaildata = await Promise.all(promises);
    setPokemonData(detaildata);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Pokédex</h1>
          <p className="text-xl text-gray-600">Explore the world of Pokémon</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <FilterBox
              setPokemonData={setPokemonData}
              fetchInitialData={fetchData}
              fetchFilteredData={fetchFilteredData}
            />
          </div>
          <CardBox 
            pokemonData={pokemonData} 
            isInitialLoad={isInitialLoad} 
            setOffSet={setOffSet} 
          />
        </div>
      </div>
    </div>
  );
}

export default MainBox;
