import { useState, useEffect } from "react";

const usePokemonNames = () => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNames = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1024`
      );
      const data = await response.json();
      setPokemonNames(data.results);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false); // very important!
    }
  };

  useEffect(() => {
    fetchNames();
  }, []);

  return { pokemonNames, loading, error };
};

export default usePokemonNames;
