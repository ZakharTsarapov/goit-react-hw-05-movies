import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async movieId => {
      try {
        const { results } = await fetchReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      }
    };

    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
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

export default Reviews;
