import React from 'react';

export const IncomeExpenses = () => {
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>
          +<span>&#8358;</span>0.00
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>
          -<span>&#8358;</span>0.00
        </p>
      </div>
    </div>
  );
};
