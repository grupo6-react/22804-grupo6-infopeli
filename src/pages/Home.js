import React from 'react';
import {Link} from 'react-router-dom';
import{auth} from '../firebaseConfig';
import {signOut} from 'firebase/auth'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured';
import '../Login.css';
import {useLoginContext} from '../UserProvider';

const Home = () => {
  const cierreSesion = async ()  =>{
    await signOut(auth);
    setSaveLoginEmail('');
  } 
  const {saveLogin, setSaveLoginEmail} = useLoginContext()

  return <div>
     
  <div className='login-container'>
   <div className='datosLogin'>
   {/*<Link to="/irAlogin">login</Link>*/}
    <h5 >Usuario:{saveLogin}</h5>
   <button className='btn-cierre-sesion btn btn-warning ' onClick={cierreSesion}>Cerrar sesion</button>  
    </div>
    </div>
    <Navbar />
    <Featured />
  </div>;
};

export default Home;
