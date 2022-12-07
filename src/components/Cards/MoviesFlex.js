import { useEffect, useState } from "react";
import { get } from "../utils/Cliente";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesFlex.module.css";


export function MoviesFlex() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <ul className={styles.moviesFlex}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}