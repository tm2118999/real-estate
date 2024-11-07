import React, { useState } from 'react';

const EMCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [totalCashFlows, setTotalCashFlows] = useState('');
  const [equityMultiple, setEquityMultiple] = useState(null);

  const calculateEM = () => {
    const investment = parseFloat(initialInvestment);
    const cashFlows = parseFloat(totalCashFlows);

    if (investment && cashFlows) {
      const emResult = cashFlows / investment;
      setEquityMultiple(emResult.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Equity Multiple (EM) Calculator</h2>
      <div>
        <label>Initial Investment: </label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
        />
      </div>
      <div>
        <label>Total Cash Flows: </label>
        <input
          type="number"
          value={totalCashFlows}
          onChange={(e) => setTotalCashFlows(e.target.value)}
        />
      </div>
      <button onClick={calculateEM}>Calculate EM</button>
      {equityMultiple !== null && <p>Equity Multiple: {equityMultiple}x</p>}
    </div>
  );
};

export default EMCalculator;
