import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './lists.css';
import Card from '../card/Card';

const StoriesList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const url = `http://gateway.marvel.com/v1/public/stories?limit=100&ts=1&apikey=07542e84508d9f2eeea44426fe5b0c4b&hash=00e35d57777612dd1daf3495ceb6c82e`;
      const response = await axios.get(url);
      const results = response.data.data.results;
      const filteredStories = results.filter(item => (
        item.thumbnail && item.thumbnail.path && item.thumbnail.extension &&
        item.title
      ));
      setStories(filteredStories);
    } catch (error) {
      console.log('Error fetching Marvel data:', error);
    }
  };

  return (
    <div>
      <div className="stories__list">
        <h2 className="list__title">STORIES</h2>
        <div className="list__cards">
          {stories.map(story => (
            <Card key={story.id} item={story} type="story" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesList;
