
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./navbar.scss";
import logo from '../../assets/logoAALV.png';

const headerNav = [
  {
      display: 'Home',
      path: '/'
  },
  {
      display: 'Movies',
      path: '/movie'
  },
  {
    display: 'Login',
    path: '/irAlogin'
}
];
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { pathname } = useLocation();
    const active = headerNav.findIndex(e => e.path === pathname);
  
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
    return (
      <div className="header">
      <div className={isScrolled ? "navbar_ scrolled" : "navbar_"}>
        <div className="container">
          <div className="left">
          <Link to={'Home'}>
        
          <div className="logo">
          <img src={logo} alt="" />
            <span>tMovies</span>
            </div>
            </Link>
             </div>
          <div className="right">
          <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Navbar;

  