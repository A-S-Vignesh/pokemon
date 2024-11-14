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
    <>
      <input
        className="search-text"
        type="text"
        name="search"
        placeholder="Name of the pokemon"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </>
  );
}

export default Search;
