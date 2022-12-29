import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/Featured';
import { MoviesFlex } from '../components/Cards/MoviesFlex';
import { useTmdbApiContext } from '../contexts/TmdbApiContext';

const Home = () => {
  const {
    moviesTrending,
    moviesUpComing,
    moviesTopRated,
    seriesTopRated,
    bestMoviesFrom2022,
    bestSeriesFrom2022,
    popularKidsMovies,
    popularKidsSeries,
    horrorMovies,
    comedyMovies,
    actionMovies,
    netflixOriginals,
  } = useTmdbApiContext();

  return (
    <div>
      <Navbar />
      <Featured />
      <MoviesFlex title="Tendencias" movieList={moviesTrending} />
      <MoviesFlex
        title="Próximas películas en cines"
        movieList={moviesUpComing}
      />
      <MoviesFlex
        title="Películas mejor puntuadas"
        movieList={moviesTopRated}
      />
      <MoviesFlex title="Series mejor puntuadas" movieList={seriesTopRated} />
      <MoviesFlex
        title="Películas populares para niños"
        movieList={popularKidsMovies}
      />
      <MoviesFlex
        title="Series populares para niños"
        movieList={popularKidsSeries}
      />
      <MoviesFlex title="Películas de horror" movieList={horrorMovies} />
      <MoviesFlex title="Películas de comedia" movieList={comedyMovies} />
      <MoviesFlex title="Películas de acción" movieList={actionMovies} />
      <MoviesFlex title="Originales de Netflix" movieList={netflixOriginals} />
    </div>
  );
};

export default Home;
