import { ReviewCard } from 'components/ReviewCard';

export const ReviewsList = ({ reviews }) => {
  console.log(reviews);
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <ReviewCard review={review} />
        </li>
      ))}
    </ul>
  );
};
