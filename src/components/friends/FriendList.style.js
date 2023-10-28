import styled from 'styled-components';

const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 20px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  & span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props =>
      props['data-status'] === true ? 'green' : 'red'};
  }
`;

export { FriendsList, FriendItem };
