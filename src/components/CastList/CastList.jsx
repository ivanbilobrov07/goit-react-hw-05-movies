import { ActorCard } from 'components/ActorCard';
import { Item } from './CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(actor => (
        <Item key={actor.id}>
          <ActorCard actor={actor} />
        </Item>
      ))}
    </ul>
  );
};
