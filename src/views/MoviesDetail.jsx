import { useEffect, useState, useRef, Suspense } from "react";
import { useLocation, useParams, Link, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "services/api";
import MovieCard from "components/MovieCard/MovieCard";
import { Loader } from "components/Loader/Loader";
import css from './MoviesDetail.module.css';

const MoviesDetail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movieDetails, setMovieDetails] = useState({})
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
        const getMovieDetails = async (movieId) => {
            try {
                setLoading(true);
                const results = await fetchMovieDetails(movieId);
                setMovieDetails(results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getMovieDetails(movieId);
    }, [movieId])


    return (
      <>
        {loading && <Loader />}
        {error && <h2>Something went wrong man...</h2>}
        <Link className={css.link} to={backLinkLocationRef.current}>Back</Link>
            <MovieCard movie={movieDetails} />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
      </>
    );

}

export default MoviesDetail;