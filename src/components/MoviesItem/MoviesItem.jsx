import { Link, useLocation } from 'react-router-dom';

const MoviesItem = ({ movie: { title, poster_path, id } }) => {
  const location = useLocation();

  const pathName = location.pathname.includes('/movies') ? '' : 'movies/';

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://image.tmdb.org/t/p/w500/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg';
  return (
    <div>
      <Link to={`${pathName}${id}`} state={{ from: location }}>
        <img src={posterUrl} width="395" alt={title}></img>
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default MoviesItem;
