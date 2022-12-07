/* <---- The Movie Database API  --->

This service file is divided in sections with specific requests for "Movies" and requests that works for "Movies", "TV Shows" and "People". In each request it is clarified which one it corresponds to, together with a brief description.
   
  - API url: https://developers.themoviedb.org/3
  - Parameters: in the functions with the "classification" parameter, you must pass "tv", "movie" or "person" depending on what you want to obtain. Note that it will only be possible to search by "person" when it is made clear that it is possible, otherwise you can only pass by parameter "movie" or "tv".
  - Parameter "classification": pass "tv", "movie" or "person" depending on what you want to obtain.
  - Parameter "query": string with the query to be made.

*/

import axios from '../axios';

const tmdbApi = {
  /* --- MOVIES, TV SHOWS and PEOPLE --- */

  // Search Movies, TV Shows or People: search for Movies, TV Shows or People based on a query (takes into account all original, translated, alternative names and titles).
  // Documentation: https://developers.themoviedb.org/3/search/search-movies

  getBySearch: async (classification, query) => {
    const url = `/search/${classification}?query='${query}`;
    const response = await axios.get(url);
    return response.data;
  },

  // Trending: Get the daily or weekly trending items.
  // Documentation: https://developers.themoviedb.org/3/trending/get-trending

  getTrending: async () => {
    const url = 'trending/all/day';
    const response = await axios.get(url);
    return response.data;
  },

  /* --- MOVIES --- */

  // Get Now Playing: Get a list of movies in theatres.
  // Documentation: https://developers.themoviedb.org/3/movies/get-now-playing

  getNowPlaying: async () => {
    const url = '/movie/now_playing';
    const response = await axios.get(url);
    return response.data;
  },

  // Get Upcoming: Get a list of upcoming movies in theatres.
  // Documentation: https://developers.themoviedb.org/3/movies/get-upcoming

  getUpcoming: async () => {
    const url = '/movie/upcoming';
    const response = await axios.get(url);
    return response.data;
  },

  /* --- MOVIES or TV shows --- */

  // Get Top Rated: Get the top rated movies or TV shows on TMDB.
  // Documentation: https://developers.themoviedb.org/3/movies/get-top-rated-movies

  getTopRated: async (classification) => {
    const url = `/${classification}/top_rated`;
    const response = await axios.get(url);
    return response.data;
  },

  // Get Latest: Get the most newly created movie or TV show. This is a live response and will continuously change.
  // Documentation: https://developers.themoviedb.org/3/movies/get-latest-movie
  getLatest: async (classification) => {
    const url = `/${classification}/latest`;
    const response = await axios.get(url);
    return response.data;
  },

  /* --- DISCOVER (MOVIES or TV shows) */

  // DISCOVER search for movies and TV shows based on filters or definable values like ratings, certifications or release dates.
  // Documentation: https://developers.themoviedb.org/3/discover/movie-discover

  // Get Best From 2022: Get best movies or TV shows from 2022

  getBestFrom2022: async (classification) => {
    const url = `/discover/${classification}?primary_release_year=2022&sort_by=vote_average.desc`;
    const response = await axios.get(url);
    return response.data;
  },

  // Get Highest Rated: Get the highest rated movies or TV shows rated R certification

  getHighestRated: async (classification) => {
    const url = `/discover/${classification}?certification_country=US&certification=R&sort_by=vote_average.desc`;
    const response = await axios.get(url);
    return response.data;
  },

  // Get Most Popular Kids: Get the most popular kids movies or TV shows

  getMostPopularKids: async (classification) => {
    const url = `/discover/${classification}?certification_country=US&certification.lte=G&sort_by=popularity.desc`;
    const response = await axios.get(url);
    return response.data;
  },

  /* --- DISCOVER (only MOVIES) */

  // Get horror movies

  getHorrorMovies: async () => {
    const url = `/discover/movie?with_genres=27`;
    const response = await axios.get(url);
    return response.data;
  },

  // Get comedy movies

  getComedyMovies: async () => {
    const url = `/discover/movie?with_genres=35`;
    const response = await axios.get(url);
    return response.data;
  },

  // Get action movies

  getActionMovies: async () => {
    const url = `/discover/movie?with_genres=28`;
    const response = await axios.get(url);
    return response.data;
  },

  /* --- DISCOVER (only TV Shows) */

  // Get Netflix originals

  getNetflixOriginals: async () => {
    const url = `/discover/tv?with_networks=213`;
    const response = await axios.get(url);
    return response.data;
  },

  /* MORE */

  // Get a list of recommended movies for a movie.
  // https://developers.themoviedb.org/3/movies/get-movie-recommendations

  getRecommendations: async (movie_id) => {
    const url = `/movie/${movie_id}/recommendations`;
    const response = await axios.get(url);
    return response.data;
  },

  // Get the user reviews for a movie.
  // https://developers.themoviedb.org/3/movies/get-movie-reviews

  getReviews: async (movie_id) => {
    const url = `/movie/${movie_id}/reviews`;
    const response = await axios.get(url);
    return response.data;
  },

  // Get the videos that have been added to a movie.
  // https://developers.themoviedb.org/3/movies/get-movie-videos

  getVideos: async (movie_id) => {
    const url = `/movie/${movie_id}/videos`;
    const response = await axios.get(url);
    return response.data;
  },

  // Get a list of the availabilities per country by provider.
  // https://developers.themoviedb.org/3/movies/get-movie-watch-providers

  getWatchProviders: async (movie_id) => {
    const url = `/movie/${movie_id}/watch/providers`;
    const response = await axios.get(url);
    return response.data;
  },
};

export default tmdbApi;
