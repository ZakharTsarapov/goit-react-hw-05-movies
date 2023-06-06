import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css'

export const Layout = () => {
  return (
    <div>
      <header>
        <ul className={css.list}>
          <li>
            <NavLink className={css.nav} to="/">
              That's ur home buddy
            </NavLink>
          </li>
          <li>
            <NavLink className={css.nav} to="/movies">
              Go find movie for evening dude
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
