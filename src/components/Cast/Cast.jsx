import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import css from './Cast.module.css'

const Cast = () => {
  const { movieId } = useParams();
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async movieId => {
      try {
        const { cast } = await fetchCast(movieId);
        setProfile(cast);
      } catch (error) {
        setError(error.message);
      }
    };
    getCast(movieId);
  }, [movieId]);
  return (
    <>
      {profile.length ? (
        <ul className={css.item}>
          {profile.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={`${name}`}
                  width="200"
                ></img>
              ) : (
                <img
                  src={
                    'https://image.tmdb.org/t/p/w500/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg'
                  }
                  alt="Not found"
                  width="200"
                ></img>
              )}
              <div>
                <h3>{name}</h3>
                {character ? (
                  <p className={css.text}>Character: {character}</p>
                ) : (
                  <p>Character: Unknown</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>sorry no information about this movie.</p>
      )}
      {error && <h2>Something went wrong man...</h2>}
    </>
  );
};

export default Cast;
