function Card({ id, name, image }) {
  return (
    <div className="col-lg-3 col-md-4">
      <div className="pokemon-container">
        <a href={"/pokemon/"+id}>
          <img className="pokemon-image" src={image} alt="Pokemon" />
          <div className="pokemon-details">
            <h4>{name}</h4>
          </div>
        </a>
      </div>
    </div>
  );
}


export default Card;
