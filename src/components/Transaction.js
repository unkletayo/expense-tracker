import React from 'react';

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}{' '}
        <span>
          {sign}
          <span>&#8358;</span>
          {Math.abs(transaction.amount)}
        </span>
        <button className='delete-btn'>x</button>
      </li>
    </div>
  );
};
