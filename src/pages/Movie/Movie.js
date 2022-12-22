import React, { useState, useEffect } from 'react';
import tmdbApi from '../../api/services/tmdbApi';
import { useParams } from 'react-router-dom';
import './movie.css';

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [error, setError] = useState();

  const { movie_id } = useParams();

  useEffect(() => {
    getMovie();
    getMovieCredits();
  }, []);

  const getMovie = async () => {
    try {
      setMovie(await tmdbApi.getMovie(movie_id));
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieCredits = async () => {
    try {
      setMovieCredits(await tmdbApi.getMovieCredits(movie_id));
    } catch (err) {
      console.log(err);
    }
  };
  console.log(movie);

  return (
    <div>
      <div
        style={{
          background: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) no-repeat center center fixed`,
        }}
        className="movieContainer"
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=""
          className="movieImage"
        />
        <div className="movieDetails">
          <h2 className="movieTitle">{movie.title}</h2>
          <ul className="movieGenre">
            {movie.genres &&
              movie.genres.map((genre) => (
                <li key={genre.id} className="movieGenreItem">
                  {genre.name}
                </li>
              ))}
          </ul>
          <p className="movieOverview">{movie.overview}</p>
          <div className="movieCasts">
            <h3>Cast</h3>
            <ul className="movieCastsList">
              {movieCredits.cast &&
                movieCredits.cast
                  .map((cast) => (
                    <li key={cast.id} className="movieCastsListItem">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                        alt={cast.name}
                        className="movieCastsListItemImage"
                      />
                      <p className="movieCastsListItemTitle">{cast.name}</p>
                    </li>
                  ))
                  .slice(0, 5)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
