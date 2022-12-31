import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MovieIcon from '@mui/icons-material/Movie';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './featured.scss';
/* import Youtube from 'react-youtube'; */
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTmdbApiContext } from '../../contexts/TmdbApiContext';

const Featured = () => {
  const { moviesTrending } = useTmdbApiContext();
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  /*   const [show, setShow] = useState(false); */

  useEffect(() => {
    const fetchMovies = async () => {
      setItems(await moviesTrending);
    };
    fetchMovies();
  }, [moviesTrending]);

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
        key={item.id}
      >
        {' '}
        <div>
          <div className="featured">
            <img
              style={{
                background: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path}) no-repeat center center fixed`,
              }}
              alt=''
            />
            {/*  <div
              className="youtube"
              style={{ display: show ? 'block' : 'none' }}
            >
              <Youtube videoId={''} />
            </div> */}
            <div className="info">
              <h1 className="title">{item.title}</h1>
              <span className="desc">{item.overview}</span>
              <div className="buttons">
                <button className="play">
                  <Link to={`movies/${item.id}`}>
                    <PlayArrowIcon />
                    <span>Play</span>
                  </Link>
                </button>
                <button
                  className="more" /* onClick={() => setShow((s) => !s)} */
                >
                  <Link to={`movies/${item.id}`}>
                    <MovieIcon />

                    <span>Trailer</span>
                  </Link>
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
