import React, { Component } from "react";

//Importar libreria Slick.js 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import logo from './img1.jpg';
import '../../pages/Movie/movie.css';

//Para personalizar las flechas del carrousel
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

//Exportar el componente
export default class Galeria extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }




  render() {
    //Configuracion de las propiedades del carrousel
    const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      centerMode: true,
      height: 40,
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
    <div className="container">
        <h2>Trailers</h2>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          {...settings}
        >
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <img src={logo} alt="logo1" />
          </div>
          <div>
            <img src={logo} alt="logo1" />
          </div>
          <div>
            <img src={logo} alt="logo1" />
          </div>
          <div>
            <img src={logo} alt="logo1" />
          </div>
          <div>
            <img src={logo} alt="logo1" />
          </div>
        </Slider>
        <h4>Más trailers</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          >
          <div>
          <img src={logo} alt="logo1"/>
          </div>
          <div>
            <img src={logo} alt="logo1"/>
          </div>
          <div>
            <img src={logo} alt="logo1"/>
          </div>
          <div>
            <img src={logo} alt="logo1"/>
          </div>
          <div>
            <img src={logo} alt="logo1"/>
          </div>
          <div>
            <img src={logo} alt="logo1"/>
          </div>
        </Slider>
    </div>
    );
  }
}