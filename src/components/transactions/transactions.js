import styled from 'styled-components';
import 'modern-normalize';

const TransactionIstory = styled.table`
  flex-grow: 1;
  text-align: center;

  & th {
    padding: 10px;
    background: #6060cc;
    color: #fff;
  }
  & tr {
    // line-height: 14px;
  }
  & td {
    padding: 7px;
    
  }
  & tbody tr:nth-child(even) {
  background: #dbdbf6;
  & tbody tr:nth-child(odd) {
  background: #fff;
`;

export const Transactions = ({ transactions }) => {
  return (
    <TransactionIstory>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </TransactionIstory>
  );
};
