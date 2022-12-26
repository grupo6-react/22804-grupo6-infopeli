import React from 'react';

// import {Link} from 'react-router-dom';
// import{auth} from '../firebaseConfig';
// import {signOut} from 'firebase/auth'
import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/Featured';
import { MoviesFlex } from '../components/Cards/MoviesFlex';
import '../Login.css';

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
