import styled from 'styled-components';

const StatList = styled.ul`
  display: flex;
  margin-bottom: 24px;
  color: white;
  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(100% / 4);
    padding: 8px;
    & span {
      margin-top: 4px;
      font-size: 28px;
    }
  }
`;

export { StatList };
