import { useEffect, useRef, useCallback } from 'react';
import Card from "./Card";
import Shimer from "./Shimer";

function CardBox({ pokemonData, setOffSet, isInitialLoad }) {
  const observerTarget = useRef(null);

  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    if (target.isIntersecting) {
      setOffSet(prev => prev + 12);
    }
  }, [setOffSet]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    });

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [handleObserver]);

  if (isInitialLoad) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(12)].map((_, index) => (
          <Shimer key={index} />
        ))}
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
      
      {/* Infinite Scroll Observer */}
      {pokemonData.length > 0 && (
        <div 
          ref={observerTarget}
          className="flex justify-center p-4"
        >
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-red-500 border-t-transparent"></div>
        </div>
      )}
    </div>
  );
}

export default CardBox;
