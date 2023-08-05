import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovieReviewsById } from 'services';
import { STATUS } from 'constants';

import { Container } from 'components/Container.styled';
import { ReviewsList } from 'components/ReviewsList';
import { Loader } from 'components/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setStatus(STATUS.PENDING);
      const data = await fetchMovieReviewsById(movieId);
      setReviews(data);
      setStatus(STATUS.FULLFIELD);
    };

    fetchData();
  }, [movieId]);

  if (status === STATUS.FULLFIELD) {
    return (
      <section>
        <Container>
          {reviews.length ? (
            <ReviewsList reviews={reviews} />
          ) : (
            <div>No reviews</div>
          )}
        </Container>
      </section>
    );
  } else if (status === STATUS.PENDING) {
    return (
      <div style={{ position: 'relative' }}>
        <Loader />
      </div>
    );
  }
};

export default Reviews;
