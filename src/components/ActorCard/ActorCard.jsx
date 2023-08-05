import { createValidActorAvatarPath } from 'services';

export const ActorCard = ({ actor: { profile_path, name, character } }) => {
  const avatar = createValidActorAvatarPath(profile_path);

  return (
    <div>
      <img width="100" height="150" src={avatar} alt={name} />
      <h3>Name: {name}</h3>
      <p>Character: {character}</p>
    </div>
  );
};
