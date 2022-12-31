import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
//import for Favs
import { saveFav } from "../../firebaseConfig";
import { useLoginContext } from "../../UserProvider";
// import Fav from "../Fav";
import React, { useContext } from "react";
import { Favcontext } from "../../contexts/favContext";
import { useState } from "react";
import Swal from "sweetalert2";

//funcion que trae el poster y titulo de la pelicula dentro de la card
export function MovieCard({ movie, notTitle }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  //Constantes y funciones para Favs
  const { saveLogin } = useLoginContext();
  const contexData = useContext(Favcontext);
  const [stateFav, setStateFav] = useState(false);
  const [classNameState, setClassNameState] = useState(false);
  
  function changeFavStatus() {
    setClassNameState(!classNameState);
  }

  function addFav  ()  {
      //Cambio de estado que funciona ok
    setStateFav(!stateFav);  
  };
  
  function adFavsInLogin(){
    {contexData.map((peli) =>{
      if(movie.id == peli.movieId){
        console.log(movie.id, peli.movieId)
        changeFavStatus ()
      } else{
        console.log('no llego desde adfavsinlogin')
      }
      
    } )}
  }

  const handleClick = () => {
    if (!saveLogin) {
      Swal.fire("Debes hacer login para guardar el favorito");
    } else {
     
      adFavsInLogin();
      let data = JSON.stringify(contexData); // Extraigo la info de los favoritos por el contexData
      // console.log(contexData)
      let id = movie.id; // adquiero el id de la movie renderizada
      // console.log('el id de  la movie que guarde desde MovieCard, es el '+ id);
      // console.log('la data que guarde desde MovieCard, es el '+ data);
      // ademas hay que cambiar el estado de addfav a true.
      favExist = data.includes(id); // con esto se valida que el json incluya el id de la peli clickeada
      // addFav();
      if(favExist){
        changeFavStatus ()
        console.log('Ya existe, deberia borrar el registro' )
      } else {
        saveFav(saveLogin, movie.id); //Guarda el email y la movieId en la BD
        addFav()
        changeFavStatus()
        console.log('Guarde el registro' )
      }
      
    }
  };

  return (
    <li className={styles.movieCard}>
      
        {/* Favs */}
        
        <div className="favButtons">
            <button className ='button'onClick={handleClick}>
              {console.log(movie.id)}
              {/* {console.log(contexData)} */}
              {/* Intento Mapear */}
              {adFavsInLogin}
              <div className={classNameState? 'heartLike' :'heart'}></div>
            </button>
          </div>
        {/* Termina Favs */}
        <Link to={'/movies/' + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        {!notTitle && <div className={styles.title}>{movie.title}</div>}
      </Link>
    </li>
  );
}
