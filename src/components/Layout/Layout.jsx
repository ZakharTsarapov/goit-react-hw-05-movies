import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css'
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <div>
      <header>
        <ul className={css.list}>
          <li>
            <Link className={css.nav} to="/">
              That's ur Home buddy
            </Link>
          </li>
          <li>
            <Link className={css.nav} to="/movies">
              Go find movie for evening dude
            </Link>
          </li>
        </ul>
      </header>
      <Suspense fallback={<Loader/>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};
