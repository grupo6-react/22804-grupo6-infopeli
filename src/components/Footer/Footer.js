import './Footer.css';
import logo from '../../assets/logo200.png'; 
import { Link } from 'react-router-dom'; 
import { Contacto } from '../contacto/contacto';
import { Terminos } from '../terminos/terminos';
import { AcercaDe } from '../acercade/acercade';
import { Faq } from '../faq/faq';
import { Privacidad } from '../privacidad/privacidad';

const Footer =()=>{
  return(
    <div className='footer-contenedor'>
      <img className='logo-emovies' src={logo} alt="logo-emovies" /> 
      <div className="footer-menu-contenedor"> 
        <section className="footer-col">
          <Link to="/" className='link-footer'>Home</Link>
          <Link to="/contacto" component={Contacto} className='link-footer'>Contáctanos</Link>
          <Link to="/terminos" component={Terminos} className='link-footer'>Terminos de uso</Link>
        </section>
        <section className="footer-col">
        <Link to="/acercade" component={AcercaDe} className='link-footer'>Acerca de</Link>
          <Link to="/faq" component={Faq} className='link-footer'>FAQ</Link>
          <Link to="/privacidad" component={Privacidad} className='link-footer'>Privacidad</Link>
        </section>
      </div>
    </div>
  );
}

export default Footer;