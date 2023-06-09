
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchAllMovies } from 'services/api';
import css from './Home.module.css'

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        setLoading(true);
        const { results } = await fetchAllMovies();
        setAllMovies([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAllMovies();
  }, [allMovies]);

  return (
    <>
      <h1 className={css.name}>Pretty good damn movies</h1>
      <ul className={css.list}>
        <MoviesList movies={allMovies} />
      </ul>
      {loading && <Loader />}
      {error && <h1>Something went wrong damn nigga...</h1>}
    </>
  );
};
export default Home;
