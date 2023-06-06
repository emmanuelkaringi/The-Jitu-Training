import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './lists.css';
import Card from '../card/Card';

const CharacterList = () => {
  const [characterList, setCharacterList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  const getData = async () => {
    try {
      const url = `http://gateway.marvel.com/v1/public/characters?limit=100ts=1&apikey=07542e84508d9f2eeea44426fe5b0c4b&hash=00e35d57777612dd1daf3495ceb6c82e`;
      const response = await axios.get(url);
      const results = response.data.data.results;
      const filteredCharacters = results.filter(item => (
        item.thumbnail && item.thumbnail.path && item.thumbnail.extension &&
        item.name
    ));
    setCharacterList(filteredCharacters);
} catch (error) {
    console.log('Error fetching Marvel data:', error);
}
};
  return (
    <div>
      <div className="character__list">
      <h2 className="list__title">{type ? type.toUpperCase() : 'CHARACTERS'}</h2>
        <div className="list__cards">
          {characterList.map(character => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterList;