import { ReviewCard } from 'components/ReviewCard';

import { Item } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  console.log(reviews);
  return (
    <ul>
      {reviews.map(review => (
        <Item key={review.id}>
          <ReviewCard review={review} />
        </Item>
      ))}
    </ul>
  );
};
