import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import MoviesDetail from 'views/MoviesDetail';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Movies from 'views/Movies';

const Home = lazy(() => import('views/Home'));
// const MoviesDetail = lazy(() => import('views/MoviesDetail'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const Movies = lazy(() => import('views/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
