import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friends/FriendList';
import data from './data/data';
import user from './data/user';
import friends from './data/friends';

export const App = () => {
  return (
    <div>
      <h1>Social Network</h1>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
    </div>
  );
};
