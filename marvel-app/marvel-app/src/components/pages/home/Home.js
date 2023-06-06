import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CharacterList from '../../lists/CharacterList';
import './home.css'

const Home = () => {
    const [url, setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=07542e84508d9f2eeea44426fe5b0c4b&hash=00e35d57777612dd1daf3495ceb6c82e");
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const results = response.data.data.results;
                const filteredCharacters = results.filter(item => (
                    item.thumbnail && item.thumbnail.path && item.thumbnail.extension &&
                    item.name && item.description
                ));
                setCharacters(filteredCharacters);
            } catch (error) {
                console.log('Error fetching Marvel data:', error);
            }
        };

        fetchData();
    }, [url]);

    return (
        <div>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={5}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {characters.map(character => (
                        <Link key={character.id} style={{ textDecoration: "none", color: "white" }} to={`/character/${character.id}`}>
                            <div className="posterImage">
                                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{character.name}</div>
                                <div className="posterImage__description">{character.description}</div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
                <CharacterList />
            </div>
        </div>
    );
};

export default Home;
