import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Movies from 'views/Movies';
import { Layout } from './Layout/Layout';
// import { Layout } from '../components/Layout/Layout';
const Home = lazy(() => import('views/Home'))

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<div>Карточка</div>} />
        </Route>
      </Routes>
  );
};
