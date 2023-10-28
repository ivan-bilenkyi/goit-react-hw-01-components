import styled from 'styled-components';

import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friends/FriendList';
import { Transactions } from './transactions/transactions';
import data from './data/data';
import user from './data/user';
import friends from './data/friends';
import transactions from './data/transactions';
import { GlobalStyle } from './GlobalStyle';

const AppInner = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  gap: 36px;
`;

const SideBar = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const App = () => {
  return (
    <AppInner>
      <SideBar>
        <Profile user={user} />
        <Statistics data={data} title="UPLOAD STATS" />
        <FriendList friends={friends} />
      </SideBar>
      <Transactions transactions={transactions} />
      <GlobalStyle />
    </AppInner>
  );
};
