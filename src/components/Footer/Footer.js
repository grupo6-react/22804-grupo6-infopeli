import './Footer.css';
import logo from '../../assets/logo200.png'; 
import { Link } from 'react-router-dom'; 



/* funcion para traer footer */
const Footer =()=>{
  return(
    <div className='footer-contenedor'>
      
      <img className='logo-emovies' src={logo} alt="logo-emovies" /> 
      <div className="footer-menu-contenedor"> 
        <section className="footer-col">
          <Link to="/" className='link-footer'>Home</Link>
          <Link to="/" className='link-footer'>Contáctanos</Link>
          <Link to="/" className='link-footer'>Terminos de uso</Link>
        </section>
        <section className="footer-col">
        <Link to="/" className='link-footer'>Acerca de</Link>
          <Link to="/" className='link-footer'>FAQ</Link>
          <Link to="/" className='link-footer'>Privacidad</Link>
        </section>
      </div>
    </div>
  );
}

export default Footer;