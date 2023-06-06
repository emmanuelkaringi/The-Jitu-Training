import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './character.css';

const CharacterD = () => {
  const [currentCharacterDetail, setCharacter] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = async () => {
    try {
      const url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=07542e84508d9f2eeea44426fe5b0c4b&hash=00e35d57777612dd1daf3495ceb6c82e`;
      const response = await axios.get(url);
      const results = response.data.data.results;
      setCharacter(results[0]);
    } catch (error) {
      console.log('Error fetching Marvel data:', error);
    }
  };

  if (!currentCharacterDetail) {
    return <div>Loading...</div>;
  }

  const { thumbnail, name, description, series, comics, stories, events } = currentCharacterDetail;

  return (
    <div>
      <div className="character">
        <div className="character__intro">
          {thumbnail && <img className="character__backdrop" src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />}
        </div>
        <div className="character__detail">
          <div className="character__detailLeft">
            <div className="character__posterBox">
              {thumbnail && <img className="character__poster" src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />}
            </div>
          </div>
          <div className="character__detailRight">
            <div className="character__detailRightTop">
              <div className="character__name">{name}</div>

              <div className="character__detailRightBottom">
                <div className="text">About</div>
                <div className="character__synopsis">{description}</div>
                <br />
                <div className="character__series">
                  <div className="text">Related Series</div>
                  {series.items.map((item) => (
                    <div key={item.resourceURI}>{item.name}</div>
                  ))}
                </div>
                <div className="character__comics">
                  <div className="text">Related Comics</div>
                  {comics.items.map((item) => (
                    <div key={item.resourceURI}>
                      <div>{item.name}</div>
                    </div>
                  ))}
                </div>
                <div className="character__stories">
                  <div className="text"> Related Stories</div>
                  {stories.items.map((item) => (
                    <div key={item.resourceURI}>
                      <div>{item.name}</div>
                    </div>
                  ))}
                </div>
                <div className="character__events">
                  <div className="text">Related Events</div>
                  {events.items.map((item) => (
                    <div key={item.resourceURI}>
                      <div>{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterD;
