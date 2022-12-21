import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/Featured';
import { MoviesFlex } from '../components/Cards/MoviesFlex';

import { useLoginContext } from '../UserProvider';

const Home = () => {
  const cierreSesion = async () => {
    await signOut(auth);
    setSaveLoginEmail('');
  };
  const { saveLogin, setSaveLoginEmail } = useLoginContext();

  return (
    <div>
      <Navbar />
      <Featured />
      <Link to="/irAlogin">login</Link>
      <h4>Usuario:{saveLogin}</h4>
      <button className="btn btn-warning" onClick={cierreSesion}>
        Cerrar sesion
      </button>
      <MoviesFlex />
    </div>
  );
};

export default Home;
