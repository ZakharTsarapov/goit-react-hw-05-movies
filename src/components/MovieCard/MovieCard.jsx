import { Link } from "react-router-dom";
import css from './MovieCard.module.css'

const MovieCard = ({ movie }) => {

    const {
    poster_path,
    genres,
    overview,
    title,
    vote_average,
  } = movie;
  
    const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://image.tmdb.org/t/p/w500/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg';
  const rating = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';
  const review = overview ? overview : 'Not overview';

  return (
    <>
      <div className={css.container}>
        <img src={posterUrl} alt={title} width="200" />
        <div className={css.info}>
          <h2 className={css.text}>{title}</h2>
          <p>User score: {rating}</p>
          <p>Overview :{review}</p>
          {genres && genres.length > 0 && (
            <p>
              Genres:
              {genres.map(genre => genre.name).join(', ')}
            </p>
          )}
        </div>
      </div>
      <div>
        <h5 className={css.additional}>Additional information</h5>
        <ul className={css.item}>
          <li>
            <Link className={css.link} to="cast">Cast</Link>
          </li>
          <li>
            <Link className={css.link} to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );  
}; 

export default MovieCard;