import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import { Layout } from '../components/Layout/Layout';
const Home = lazy(() => import('pages/Home'))

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <nav>
        <NavLink to="/">That's ur home buddy</NavLink>
        <NavLink to="/movies">Go find movie for evening dude</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<div>buddy</div>} />
        <Route path='/movies' element={<div>doggy style</div>} />
      </Routes>
      <Home   />
    </div>
  );
};
