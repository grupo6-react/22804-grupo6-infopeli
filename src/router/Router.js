import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import LoginPage from '../pages/LoginPage';
import Layout from '../components/Layout/Layout';
import { Contacto } from '../components/contacto/contacto';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/irAlogin' element={<LoginPage />}></Route>
            <Route path='/contacto' element={<Contacto />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
