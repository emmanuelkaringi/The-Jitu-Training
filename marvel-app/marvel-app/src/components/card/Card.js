import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ character }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="cards">
        <SkeletonTheme color="#202020" highlightColor="#444">
          <Skeleton height={300} duration={2} />
        </SkeletonTheme>
      </div>
    );
  }

  return (
    <Link key={character.id} style={{ textDecoration: 'none', color: 'white' }} to={`/character/${character.id}`}>
      <div className="cards">
        <img className="cards__img" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        <div className="cards__overlay">
          <div className="card__title">{character.name}</div>
          <div className="card__description">{character.description ? character.description.slice(0, 118) + '...' : ''}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
