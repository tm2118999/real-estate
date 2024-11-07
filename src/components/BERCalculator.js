import React, { useState } from 'react';

const BERCalculator = () => {
  const [operatingExpenses, setOperatingExpenses] = useState('');
  const [debtService, setDebtService] = useState('');
  const [grossOperatingIncome, setGrossOperatingIncome] = useState('');
  const [ber, setBer] = useState(null);

  const calculateBER = () => {
    const expenses = parseFloat(operatingExpenses);
    const debt = parseFloat(debtService);
    const income = parseFloat(grossOperatingIncome);

    if (expenses && debt && income) {
      const berResult = ((expenses + debt) / income) * 100;
      setBer(berResult.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Break-Even Ratio (BER) Calculator</h2>
      <div>
        <label>Operating Expenses: </label>
        <input
          type="number"
          value={operatingExpenses}
          onChange={(e) => setOperatingExpenses(e.target.value)}
        />
      </div>
      <div>
        <label>Debt Service: </label>
        <input
          type="number"
          value={debtService}
          onChange={(e) => setDebtService(e.target.value)}
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
      <button onClick={calculateBER}>Calculate BER</button>
      {ber !== null && <p>Break-Even Ratio: {ber}%</p>}
    </div>
  );
};

export default BERCalculator;
