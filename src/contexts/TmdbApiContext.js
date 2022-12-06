import React, { createContext, useContext, useState, useEffect } from 'react';
import tmdbApi from '../api/services/tmdbApi';

export const TmdbApiContext = createContext();

export function TmdbApiContextProvider(props) {
  const [moviesBySearch, setMoviesBySearch] = useState([]);
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [moviesUpComing, setMoviesUpComing] = useState([]);
  const [moviesTopRated, setMoviesTopRated] = useState([]);
  const [seriesTopRated, setSeriesTopRated] = useState([]);
  const [moviesLatest, setMoviesLatest] = useState([]);
  const [seriesLatest, setSeriesLatest] = useState([]);
  const [bestMoviesFrom2022, setBestMoviesFrom2022] = useState([]);
  const [bestSeriesFrom2022, setBestSeriesFrom2022] = useState([]);
  const [popularKidsMovies, setPopularKidsMovies] = useState([]);
  const [popularKidsSeries, setPopularKidsSeries] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [netflixOriginals, setNetflixOriginals] = useState([]);

  useEffect(() => {
    setMoviesTrending(tmdbApi.getTrending());
    setMoviesUpComing(tmdbApi.getUpcoming());
    setMoviesTopRated(tmdbApi.getTopRated('movie'));
    setSeriesTopRated(tmdbApi.getTopRated('tv'));
    setMoviesLatest(tmdbApi.getLatest('movie'));
    setSeriesLatest(tmdbApi.getLatest('tv'));
    setBestMoviesFrom2022(tmdbApi.getBestFrom2022('movie'));
    setBestSeriesFrom2022(tmdbApi.getBestFrom2022('tv'));
    setPopularKidsMovies(tmdbApi.getMostPopularKids('movie'));
    setPopularKidsSeries(tmdbApi.getMostPopularKids('tv'));
    setHorrorMovies(tmdbApi.getHorrorMovies());
    setComedyMovies(tmdbApi.getComedyMovies());
    setActionMovies(tmdbApi.getActionMovies());
    setNetflixOriginals(tmdbApi.getNetflixOriginals());
  }, []);

  const value = {
    moviesBySearch,
    setMoviesBySearch,
    moviesTrending,
    moviesUpComing,
    moviesTopRated,
    seriesTopRated,
    moviesLatest,
    seriesLatest,
    bestMoviesFrom2022,
    bestSeriesFrom2022,
    popularKidsMovies,
    popularKidsSeries,
    horrorMovies,
    comedyMovies,
    actionMovies,
    netflixOriginals,
  };

  return (
    <TmdbApiContext.Provider value={value}>
      {props.children}
    </TmdbApiContext.Provider>
  );
}

export function useTmdbApiContext() {
  const context = useContext(TmdbApiContext);
  return context;
}
