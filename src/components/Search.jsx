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
    <div className="search-box">
      <input
        className="search-text"
        type="text"
        name="search"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
