import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MovieIcon from '@mui/icons-material/Movie';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './featured.scss';
import Youtube from 'react-youtube';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Featured = () => {
  const items = [
    {
      src: `https://as01.epimg.net/meristation/imagenes/2022/10/23/reportajes/1666545428_850666_1666559251_noticia_normal.jpg`,
      logo: '',
      title: `Titulo Pelicula 1`,
      caption: `Descripcion Pelicula 1`,
    },
    {
      src: `https://elcomercio.pe/resizer/g66OjtPDGnSyQA5Q4og_vh-7QeE=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4D72MVHFM5HT3KXEOKZED6DOX4.webp`,
      logo: '',
      title: `Titulo Pelicula 2`,
      caption: `Descripcion Pelicula 2`,
    },
    {
      src: `https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B29A77ACD58DC7E0C23A24D5A6040EA7922B53499F2DD1915830DE99115827A/scale?width=1200&aspectRatio=1.78&format=jpeg`,
      logo: '',
      title: `Titulo Pelicula 3`,
      caption: `Descripcion Pelicula 3`,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [show, setShow] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {' '}
        <div>
          <div className="featured">
            <img src={item.src} />
            <div
              className="youtube"
              style={{ display: show ? 'block' : 'none' }}
            >
              <Youtube videoId={''} />
            </div>
            <div className="info">
              <h1 className="title">{item.title}</h1>
              <span className="desc">{item.caption}</span>
              <div className="buttons">
                <button className="play">
                  <Link to={''}>
                    <PlayArrowIcon />
                    <span>Play</span>
                  </Link>
                </button>
                <button className="more" onClick={() => setShow((s) => !s)}>
                  <MovieIcon />

                  <span>Trailer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </CarouselItem>
    );
  });
  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </div>
  );
};

export default Featured;
