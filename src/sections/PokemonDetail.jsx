import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonName from "../PokemonName";

function PokemonDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
	  const fetchData = async (id) => {
      try {
        const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await rawData.json();
        setPokemonData(data);
      } catch (e) {
        console.log(e);
		  }
	  finally {
		  setLoading(false)
		}

    };

    fetchData(id);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!pokemonData) return <div>No Pokemon Data</div>;

  return (
    <div>
      <h1>Pokemon ID: {id}</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 pokemon-container">
            <img
              className="pokemon-image"
              src={
                pokemonData.sprites?.other["official-artwork"]?.front_default
              }
              alt={pokemonData.name}
            />
          </div>
          <div className="col-md-8">
            <div className="pokemon-details">
              <h1>
                <b>{pokemonData.name}</b>
              </h1>
              <h4>Index: {pokemonData.id}</h4>
              <h4>Height: {pokemonData.height}</h4>
              <h4>Weight: {pokemonData.weight}</h4>
              <h4>
                Abilities:{" "}
                {pokemonData.abilities.map((a) => a.ability.name).join(", ")}
              </h4>
              <h4>
                Type: {pokemonData.types.map((t) => t.type.name).join(", ")}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
