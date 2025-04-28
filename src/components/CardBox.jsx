import Card from "./Card";
import Shimer from "./Shimer";

function CardBox({ pokemonData, setOffSet, isInitialLoad }) {
  const resetOffSet = () => {
    setOffSet(0);
  };

  if (isInitialLoad) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Shimer />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonData.map((details) => (
          <Card
            key={details?.id}
            id={details?.id}
            name={details?.name}
            image={details?.sprites?.other["official-artwork"]?.front_default}
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button
          className="action-button action-button-primary"
          onClick={() => setOffSet((prevData) => prevData + 12)}
        >
          Load More Pokémon
        </button>
        <button 
          className="action-button action-button-secondary"
          onClick={resetOffSet}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CardBox;
