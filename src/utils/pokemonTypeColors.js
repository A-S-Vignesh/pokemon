export const getTypeColor = (type) => {
  const typeColors = {
    normal: 'from-gray-400 to-gray-500',
    fire: 'from-red-400 to-red-600',
    water: 'from-blue-400 to-blue-600',
    electric: 'from-yellow-300 to-yellow-500',
    grass: 'from-green-400 to-green-600',
    ice: 'from-blue-200 to-blue-400',
    fighting: 'from-red-600 to-red-800',
    poison: 'from-purple-400 to-purple-600',
    ground: 'from-yellow-600 to-yellow-800',
    flying: 'from-indigo-300 to-indigo-500',
    psychic: 'from-pink-400 to-pink-600',
    bug: 'from-lime-400 to-lime-600',
    rock: 'from-yellow-700 to-yellow-900',
    ghost: 'from-purple-600 to-purple-800',
    dragon: 'from-indigo-500 to-indigo-700',
    dark: 'from-gray-600 to-gray-800',
    steel: 'from-gray-400 to-gray-600',
    fairy: 'from-pink-300 to-pink-500',
  };
  return typeColors[type] || 'from-gray-400 to-gray-500';
};

export const getDualTypeColor = (type1, type2) => {
  const colorMap = {
    normal: 'gray',
    fire: 'red',
    water: 'blue',
    electric: 'yellow',
    grass: 'green',
    ice: 'blue',
    fighting: 'red',
    poison: 'purple',
    ground: 'yellow',
    flying: 'indigo',
    psychic: 'pink',
    bug: 'lime',
    rock: 'yellow',
    ghost: 'purple',
    dragon: 'indigo',
    dark: 'gray',
    steel: 'gray',
    fairy: 'pink',
  };

  const fallback = 'gray';
  const from = colorMap[type1] || fallback;
  const to = colorMap[type2] || fallback;

  // Use 400 -> 600 shades for consistency
  return `from-${from}-400 to-${to}-600`;
};
