import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchMovieReviewsById } from 'services';

import { Container } from 'components/Container';
import { ReviewsList } from 'components/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovieReviewsById(movieId);
      setReviews(data);
    };

    fetchData();
  }, [movieId]);

  return (
    <section>
      <Container>
        {reviews ? <ReviewsList reviews={reviews} /> : <div>No reviews</div>}
      </Container>
    </section>
  );
};

export default Reviews;
