import React, { useState } from 'react';

const OERCalculator = () => {
  const [operatingExpenses, setOperatingExpenses] = useState('');
  const [grossOperatingIncome, setGrossOperatingIncome] = useState('');
  const [oer, setOer] = useState(null);

  const calculateOER = () => {
    const expenses = parseFloat(operatingExpenses);
    const income = parseFloat(grossOperatingIncome);

    if (expenses && income) {
      const oerResult = (expenses / income) * 100;
      setOer(oerResult.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Operating Expense Ratio (OER) Calculator</h2>
      <div>
        <label>Operating Expenses: </label>
        <input
          type="number"
          value={operatingExpenses}
          onChange={(e) => setOperatingExpenses(e.target.value)}
        />
      </div>
      <div>
        <label>Gross Operating Income: </label>
        <input
          type="number"
          value={grossOperatingIncome}
          onChange={(e) => setGrossOperatingIncome(e.target.value)}
        />
      </div>
      <button onClick={calculateOER}>Calculate OER</button>
      {oer !== null && <p>Operating Expense Ratio: {oer}%</p>}
    </div>
  );
};

export default OERCalculator;
