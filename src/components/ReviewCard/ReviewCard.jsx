import { IMAGE_PATH } from 'constants';
import anonymousAvatar from '../../images/anonymous-avatar.jpg';

// In this API there are 2 types of avatar path: "/blEC280vq31MVaDcsWBXuGOsYnB.jpg" and "/https://secure.gravatar.com/avatar/bf3b87ecb40599290d764e6d73c86319.jpg",
// so this functions is used to create from them all a valid one path
const createValidAvatarPath = path => {
  if (!path) {
    return anonymousAvatar;
  } else if (path.includes('http')) {
    const index = path.indexOf('http');
    return path.slice(index);
  } else {
    return `${IMAGE_PATH}/${path}`;
  }
};

export const ReviewCard = ({
  review: {
    author,
    content,
    created_at: date,
    author_details: { avatar_path, rating },
  },
}) => {
  const avatar = createValidAvatarPath(avatar_path);

  return (
    <div style={{ display: 'flex' }}>
      <img src={avatar} alt="Author avatar" width="100" height="100" />
      <div>
        <div style={{ display: 'flex' }} className="review-info-top">
          <h3>{author}</h3>
          <p>{date}</p>
          {rating ? (
            <p style={{ 'margin-left': 'auto' }}>{rating}</p>
          ) : (
            <p style={{ 'margin-left': 'auto' }}>Unrated</p>
          )}
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};
