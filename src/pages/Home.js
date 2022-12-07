import React from 'react';
import {Link} from 'react-router-dom';
import{auth} from '../firebaseConfig';
import {signOut} from 'firebase/auth'

import {useLoginContext} from '../UserProvider';

const Home = () => {
  const cierreSesion = async ()  =>{
    await signOut(auth);
    setSaveLoginEmail('');
  } 
  const {saveLogin, setSaveLoginEmail} = useLoginContext()

  return <div>Home
    <Link to="/irAlogin">login</Link>
    <h4 >Usuario:{saveLogin}</h4>
   <button className='btn btn-warning' onClick={cierreSesion}>Cerrar sesion</button>
  </div>;
};

export default Home;
