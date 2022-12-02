import React from 'react';
import {Link} from 'react-router-dom';
import{auth} from '../firebaseConfig';

const Home = () => {
  return <div>Home
    <Link to="/irAlogin"  >login</Link>
    {console.log('auth', auth)}
  </div>;
};

export default Home;
