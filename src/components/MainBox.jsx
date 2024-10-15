import CardBox from "./CardBox";
import FilterBox from "./FilterBox";
import { useState, useEffect, useCallback } from "react";

function MainBox() {
  const [offSet, setOffSet] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true); // Track initial load

  // Memoize fetchData to avoid creating a new function on every render
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
      <div className="main-box">
        <div className="container">
              <FilterBox
                setPokemonData={setPokemonData}
                fetchInitialData={fetchData}
                fetchFilteredData={fetchFilteredData}
              />
            <CardBox pokemonData={pokemonData} isInitialLoad={isInitialLoad} setOffSet={setOffSet} />
        </div>
      </div>
    );
}

export default MainBox;
