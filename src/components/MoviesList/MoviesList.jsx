import MoviesItem from 'components/MoviesItem/MoviesItem';

const MoviesList = ({ movies }) => {
  return (
    <li>
      {movies.map(movie => {
        return <MoviesItem key={movie.id} movie={movie} />;
      })}
    </li>
  );
};
export default MoviesList;
