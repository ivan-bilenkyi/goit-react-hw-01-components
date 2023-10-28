import { FriendItem, FriendsList } from './FriendList.style';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendItem className="friend-item" key={id} data-status={isOnline}>
          <span></span>
          <img src={avatar} alt={name} width="48" />
          <p>{name}</p>
        </FriendItem>
      ))}
    </FriendsList>
  );
};
