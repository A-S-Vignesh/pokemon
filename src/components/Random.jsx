function Random({ pokemonName, fetchFilteredData }) {
  const AmazeMe = () => {
    let amazedPokemon = [];
    for (let i = 0; i < 12; i++) {
      let randomNo = Math.floor(Math.random() * 1025);
      amazedPokemon.push(pokemonName[randomNo]);
    }
    fetchFilteredData(amazedPokemon);
  };

  return <button className="btn btn-warning" onClick={AmazeMe}>Amaze me</button>;
}

export default Random;
