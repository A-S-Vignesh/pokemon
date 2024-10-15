import Card from "./Card";
import Shimer from "./Shimer";

function CardBox({ pokemonData, setOffSet, isInitialLoad }) {
  const resetOffSet = () => {
    setOffSet(0); // Reset offSet to 0
  };
    if (isInitialLoad) {
      return (
        <div>
          <Shimer />
        </div>
      );
    }
  return (
    <div className="card-box">
      <div className="container">
        <div className="row" id="pokemonData">
          {pokemonData.map((details) => (
            <Card
              key={details?.id}
              id={details?.id}
              name={details?.name}
              image={details?.sprites?.other["official-artwork"]?.front_default}
            />
          ))}
        </div>
      </div>
      <button
        className="load-more btn btn-dark"
        onClick={() => setOffSet((prevData) => prevData + 12)}
      >
        Load more
      </button>
      <button className="reset-offset btn btn-dark" onClick={resetOffSet}>
        Reset Offset
      </button>
    </div>
  );
}

export default CardBox;
