import { useEffect, useState } from "react";
import { get } from "../utils/Cliente";
import { MovieCard } from "./MovieCard";
import styles from "./moviesFlex.module.css";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
// trayendo la lista de peliculas 
export function MoviesFlex() {
 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return ( 
    <div className={styles.moviesFlex}>
      <h3>Las mas recomendadas </h3>
        <div className="container">
          <div className="swiperContainer">
           <Swiper
               modules={[Pagination, Autoplay]}
               loop={true}
               autoplay={{
               delay: 2000,
               disableOnInteraction: false
               }}
               pagination={{
               el: ".pagination",
               clickable: true,
               }}
               slidesPerView={4}
                breakpoints={{
              "@0.00": {
               slidesPerView: 1,
               spaceBetween: 25,
               },
              "@0.50": {
               slidesPerView: 1.25,
               spaceBetween: 25,
               },
              "@1.00": {
               slidesPerView: 2,
               spaceBetween: 25,
               },
              "@1.25": {
               slidesPerView: 2.5,
               spaceBetween: 20,
              },
             "@1.50": {
               slidesPerView: 3,
               spaceBetween: 30,
              },
             "@1.75": {
              slidesPerView: 4.5,
              spaceBetween: 0,
             },
             }}
            > 
                <ul>
                   {movies.map(( movie) => (
                     <SwiperSlide>
                       <><MovieCard  key={movie.id} movie={movie} /></>
                     </SwiperSlide>
                   ))}
                 </ul>
            </Swiper>
          </div>
       <div className="pagination" />
     </div>
   </div>
  );
}