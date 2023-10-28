import { UserProfile, UserAbout, UserStats } from './Profile.style';

export const Profile = ({
  user: {
    avatar,
    location,
    tag,
    username,
    stats: { followers, likes, views },
  },
}) => {
  return (
    <UserProfile>
      <div>
        <img src={avatar} alt={username} />
        <UserAbout>
          <h2>{username}</h2>
          <p>@{tag}</p>
          <p>{location}</p>
        </UserAbout>
      </div>
      <UserStats>
        <li>
          <p>Followers</p>
          <b>{followers}</b>
        </li>
        <li>
          <p>Views</p>
          <b>{views}</b>
        </li>
        <li>
          <p>Likes</p>
          <b>{likes}</b>
        </li>
      </UserStats>
    </UserProfile>
  );
};
