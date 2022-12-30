import notfound from '../../assets/notFound.png';
import './notFound.css';

const NotFound = () => {
  return (
    <div className='contenedor-notFount'>
       <img src={notfound} alt="not found" className="notFoundImage" /> 
       <p className='p-notFound'>Page Not Found</p>
    </div>
  );
};

export default NotFound;
