import Search from "./Search";
import { useEffect, useState } from "react";
import Random from "./Random";

function FilterBox({
  setOffSet,
  setPokemonData,
  fetchInitialData,
  fetchFilteredData,
  offSet,
})
{

  const [pokemonName, setPokemonName] = useState([]);
  
    const fetchName = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1024`
      );
      const data = await response.json();
      setPokemonName(data.results);
    };

    useEffect(() => {
      fetchName();
    }, []);
  
  return (
    <div className="filter-box">
      <Search
        pokemonName={pokemonName}
        offSet={offSet}
        setOffSet={setOffSet}
        setPokemonData={setPokemonData}
        fetchInitialData={fetchInitialData}
        fetchFilteredData={fetchFilteredData}
      />

      <Random
        pokemonName={pokemonName}
        fetchFilteredData={fetchFilteredData}
        
      />
    </div>
  );
}

export default FilterBox;
