import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";


//funcion que trae el poster y titulo de la pelicula dentro de la card
export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    
             <li className={styles.movieCard}>
              <Link to={"/movies/" + movie.id}>
               <img
               width={230}
               height={345}
               className={styles.movieImage}
               src={imageUrl}
               alt={movie.title} />
               <div className={styles.title}>{movie.title}</div>
             </Link>
             </li>
    );
}
