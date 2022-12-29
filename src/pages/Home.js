import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/Featured';
import { MoviesFlex } from '../components/Cards/MoviesFlex';
//import '../Login.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Featured />
      <MoviesFlex />
    </div>
  );
};

export default Home;
