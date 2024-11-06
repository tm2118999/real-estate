import React, { useState } from 'react';

const CashOnCashCalculator = () => {
  const [annualCashFlow, setAnnualCashFlow] = useState('');
  const [cashInvested, setCashInvested] = useState('');
  const [cashOnCashReturn, setCashOnCashReturn] = useState(null);

  const calculateCashOnCashReturn = () => {
    const cashFlow = parseFloat(annualCashFlow);
    const invested = parseFloat(cashInvested);

    if (cashFlow && invested) {
      const cashOnCashResult = (cashFlow / invested) * 100;
      setCashOnCashReturn(cashOnCashResult.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Cash-on-Cash Return Calculator</h2>
      <div>
        <label>Annual Cash Flow: </label>
        <input
          type="number"
          value={annualCashFlow}
          onChange={(e) => setAnnualCashFlow(e.target.value)}
        />
      </div>
      <div>
        <label>Cash Invested: </label>
        <input
          type="number"
          value={cashInvested}
          onChange={(e) => setCashInvested(e.target.value)}
        />
      </div>
      <button onClick={calculateCashOnCashReturn}>Calculate Cash-on-Cash Return</button>
      {cashOnCashReturn !== null && <p>Cash-on-Cash Return: {cashOnCashReturn}%</p>}
    </div>
  );
};

export default CashOnCashCalculator;
