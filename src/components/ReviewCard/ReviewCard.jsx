import { createValidProfileAvatarPath } from 'services';

export const ReviewCard = ({
  review: {
    author,
    content,
    created_at: date,
    author_details: { avatar_path, rating },
  },
}) => {
  const avatar = createValidProfileAvatarPath(avatar_path);

  return (
    <div style={{ display: 'flex' }}>
      <img src={avatar} alt="Author avatar" width="100" height="100" />
      <div>
        <div style={{ display: 'flex' }} className="review-info-top">
          <h3>{author}</h3>
          <p>{date}</p>
          {rating ? (
            <p style={{ marginLeft: 'auto' }}>{rating}</p>
          ) : (
            <p style={{ marginLeft: 'auto' }}>Unrated</p>
          )}
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};
