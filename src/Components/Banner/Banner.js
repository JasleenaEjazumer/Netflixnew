import React, { useState, useEffect } from 'react';
import "./Banner.css";
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../Constants/Constants';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchBannerMovie();
  }, []);

  const fetchBannerMovie = async () => {
    try {
      const response = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`);
      const movies = response.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}}
      className='Banner'
    >
      {movie && (
        <div className='content'>
          <h1 className='title'>{movie.title || movie.name}</h1>
          <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{movie.overview}</h1>
        </div>
      )}
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
