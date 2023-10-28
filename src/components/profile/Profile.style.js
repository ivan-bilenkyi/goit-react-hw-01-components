import styled from 'styled-components';

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 40px;

  & img {
    border-radius: 50%;
    max-width: 150px;
  }
`;

const UserAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const UserStats = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(100% / 3);
    padding: 14px;
    background-color: #e1e1e1;
    border: 1px solid black;
    & p {
      font-size: 14px;
    }
  }
`;

export { UserAbout, UserProfile, UserStats };
