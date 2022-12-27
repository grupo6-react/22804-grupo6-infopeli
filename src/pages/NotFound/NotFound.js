import notfound from '../../assets/notfound.jpg';
import './notFound.css';

const NotFound = () => {
  return (
    <>
      <img src={notfound} alt="not found" className="notFoundContainer" />
    </>
  );
};

export default NotFound;
