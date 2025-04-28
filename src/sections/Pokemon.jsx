import React from 'react';
import FilterBox from '../components/FilterBox';
import CardBox from '../components/CardBox';
import { useState, useEffect, useCallback } from "react";

function Pokemon() {
  const [offSet, setOffSet] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  const fetchData = useCallback(async () => {
    if (isFiltered) return; // Don't fetch more if we're showing filtered results
    
    setIsLoading(true);
    try {
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
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setIsLoading(false);
      setIsInitialLoad(false);
    }
  }, [offSet, isFiltered]);

  useEffect(() => {
    fetchData();
  }, [offSet, fetchData]);

  const fetchFilteredData = async (filteredPokemon) => {
    setIsLoading(true);
    setIsFiltered(true);
    try {
      const promises = filteredPokemon.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return res.json();
      });
      const detaildata = await Promise.all(promises);
      setPokemonData(detaildata);
    } catch (error) {
      console.error("Error fetching filtered Pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInitialData = () => {
    setIsFiltered(false);
    setOffSet(0);
    setPokemonData([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Pokédex</h1>
          <p className="text-xl text-gray-600">Explore and filter through all Pokémon</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <FilterBox
              setOffSet={setOffSet}
              setPokemonData={setPokemonData}
              fetchInitialData={handleInitialData}
              fetchFilteredData={fetchFilteredData}
              offSet={offSet}
            />
          </div>
          <div>
            {isLoading && isInitialLoad && (
              <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent"></div>
              </div>
            )}
            {(!isLoading || !isInitialLoad) && (
              <CardBox 
                pokemonData={pokemonData} 
                isInitialLoad={isInitialLoad} 
                setOffSet={setOffSet} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon; 