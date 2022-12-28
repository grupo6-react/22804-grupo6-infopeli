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
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const resTrending = await tmdbApi.getTrending();
    setMoviesTrending(resTrending.results);
    const resUpComing = await tmdbApi.getUpcoming();
    setMoviesUpComing(resUpComing.results);
    const resMoviesTopRated = await tmdbApi.getTopRated('movie');
    setMoviesTopRated(resMoviesTopRated.results);
    const resSeriesTopRated = await tmdbApi.getTopRated('tv');
    setSeriesTopRated(resSeriesTopRated.results);
    const resMoviesLatest = await tmdbApi.getLatest('movie');
    setMoviesLatest(resMoviesLatest.results);
    const resSeriesLatest = await tmdbApi.getLatest('tv');
    setSeriesLatest(resSeriesLatest.results);
    const resBestMoviesFrom2022 = await tmdbApi.getBestFrom2022('movie');
    setBestMoviesFrom2022(resBestMoviesFrom2022.results);
    const resBestSeriesFrom2022 = await tmdbApi.getBestFrom2022('tv');
    setBestSeriesFrom2022(resBestSeriesFrom2022.results);
    const resPopularKidsMovies = await tmdbApi.getMostPopularKids('movie');
    setPopularKidsMovies(resPopularKidsMovies.results);
    const resPopularKidsSeries = await tmdbApi.getMostPopularKids('tv');
    setPopularKidsSeries(resPopularKidsSeries.results);
    const resHorrorMovies = await tmdbApi.getHorrorMovies();
    setHorrorMovies(resHorrorMovies.results);
    const resComedyMovies = await tmdbApi.getComedyMovies();
    setComedyMovies(resComedyMovies.results);
    const resActionMovies = await tmdbApi.getActionMovies();
    setActionMovies(resActionMovies.results);
    const resNetflixOriginals = await tmdbApi.getNetflixOriginals();
    setNetflixOriginals(resNetflixOriginals.results);
  };

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
