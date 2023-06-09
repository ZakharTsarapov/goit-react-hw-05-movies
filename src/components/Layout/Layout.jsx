import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css'

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
      <main>
        <Outlet />
      </main>
    </div>
  );
};
