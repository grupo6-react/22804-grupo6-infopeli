import React, { Component } from "react";

//Importando libreria Slick.js 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//Importando movie.css
import '../../pages/Movie/movie.css';


//Funciones para personalizar las flechas del carrousel
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

//Exportar el componente "Galeria"
export default class Galeria extends Component { 

  render() {
    //Configuracion de las propiedades del carrousel
    const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
        },
        {
          breakpoint: 600,
        },
        {
          breakpoint: 480,
        }
      ]
    }
    return (
    //Estructura HTML del carrusel
    <div className="container">
        <h2>Trailers</h2>
        {/*Slider donde se muestra los trailers */}
        <Slider {...settings} >
          {/*Divs con los contenidos a monstrar*/}
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BPjbiZQmBI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BPjbiZQmBI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Slider>
    </div>
    );
  }
}