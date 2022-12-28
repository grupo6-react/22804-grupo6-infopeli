import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound/NotFound';
import LoginPage from '../pages/LoginPage';
import Layout from '../components/Layout/Layout';
import { Contacto } from '../components/contacto/contacto';
import Movie from '../pages/Movie/Movie';
import { AcercaDe } from '../components/acercade/acercade';
import { Privacidad } from '../components/privacidad/privacidad';
import { Faq } from '../components/faq/faq';
import { Terminos } from '../components/terminos/terminos';
import Movies from '../pages/Movies/Movies';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:movie_id" element={<Movie />}></Route>
            <Route path="/irAlogin" element={<LoginPage />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/acercade" element={<AcercaDe />}></Route>
            <Route path="/privacidad" element={<Privacidad />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/terminos" element={<Terminos />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
