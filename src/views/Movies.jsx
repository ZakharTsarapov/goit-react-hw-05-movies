import SearchBar from "components/SearchBar/SearchBar";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchQuery } from 'services/api';
import MoviesList from "components/MoviesList/MoviesList";
import { Loader } from "components/Loader/Loader";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const Movies = () => {
  const [queryMovies, setQueryMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    const getQueryMovies = async query => {
      try {
        setLoading(true);
        const { results } = await fetchQuery(query);
        if (results.length === 0) {
          Notify.error(
            `Dude there no movie : "${searchQuery}" u looking for. Go find something else.`
          );
          setQueryMovies([]);
          setSearchParams({});
        }
        setQueryMovies([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (searchQuery) getQueryMovies(searchQuery);
  }, [searchQuery, setSearchParams]);

  const handleSearchMovie = query => {
    setSearchParams({ query: query });
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchMovie} />
      <MoviesList movies={queryMovies} />
      {loading && <Loader />}
      {error && <h1>Something went wrong man...</h1>}
    </>
  );
};
export default Movies;