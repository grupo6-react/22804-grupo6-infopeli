import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout/Layout';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;