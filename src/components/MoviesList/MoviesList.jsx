import MoviesItem from 'components/MoviesItem/MoviesItem';
import css from './MoviesList.module.css'


const MoviesList = ({ movies }) => {
  return (
    <li className={css.item}>
      {movies.map(movie => {
        return <MoviesItem key={movie.id} movie={movie} />;
      })}
    </li>
  );
};
export default MoviesList;
