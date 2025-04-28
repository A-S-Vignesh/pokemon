function Card({ id, name, image }) {
  return (
    <div className="pokemon-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <a href={`/pokemon/${id}`} className="block">
        <div className="relative group">
          <div className="bg-gradient-to-b from-gray-50 to-gray-100 p-4">
            <img 
              className="pokemon-image w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300" 
              src={image} 
              alt={name} 
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="pokemon-details p-4 bg-gradient-to-r from-pokemon-red/5 to-pokemon-red-light/5">
          <h4 className="pokemon-name text-lg font-semibold text-gray-800 capitalize mb-1">{name}</h4>
          <p className="pokemon-id text-sm text-gray-500">#{id.toString().padStart(3, '0')}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
